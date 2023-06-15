import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="bg-white w-full h-[100vh] flex flex-col items-center">
      <Link to="/">
        <div className="mt-6 mb-4">
          <img
            className=" w-32 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="logo"
          />
        </div>
      </Link>

      <div className=" border-gray-300 border-2 max-w-sm mx-auto flex flex-col p-4 space-y-3 rounded">
        <h1 className=" font-semibold text-3xl">Sign in</h1>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <h5>E-mail</h5>
            <input
              className="border-2 border-gray-300 p-1 rounded outline-none"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <h5>Password</h5>
            <input
              className="border-2 border-gray-300 p-1 rounded outline-none"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button onClick={login} type="submit" className="button">
            Sign In
          </button>
        </form>

        <p className=" text-sm">
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button
          onClick={register}
          className="border-2 border-gray-300 p-1 rounded bg-gray-300"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
