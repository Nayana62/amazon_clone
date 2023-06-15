import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase/firebase";

function Header() {

    const [{user, basket}] = useStateValue();

    const login = () => { 
        if(user) {
            auth.signOut();
        }
    }

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Link to="/">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              className=" w-20 m-2 object-contain"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </div>
        </Link>

        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-2">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            name=""
            id=""
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to={!user && "/login"}>
            <div onClick={login} className=" link ">
              <p>Hello {user?.email} </p>
              <p className="font-extrabold md:text-sm ">{user ? "Sign Out" : "Sign In"}</p>
            </div>
          </Link>

          <Link to="/">
            <div className=" link ">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm ">& Orders</p>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="relative link flex items-center">
              <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {basket.length}
              </span>

              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
                Basket
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
