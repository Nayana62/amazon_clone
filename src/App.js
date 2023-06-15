import "./App.css";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import Payment from "./components/Payment";

function App() {
  const [{basket}, dispatch] = useStateValue();

  if(basket.length === 0){
    console.log("");
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, 
  // eslint-disable-next-line
  []); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
