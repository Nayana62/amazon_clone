import React from "react";
import Header from "./Header";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className=" bg-gray-100 h-full min-h-screen">
      <Header />

      <main>
        {/* Left */}
        <div>
          <div className="flex-grow m-5 shadow-sm">
            <img
              className="w-[1020px] h-[250px] object-contain"
              src="https://links.papareact.com/ikj"
              alt=""
            />
          </div>

          <div className="flex flex-col p-5 m-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {basket?.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {basket.map((item) => (
              <CheckoutProduct
              key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {basket.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md m-5 ">
            <div>
              <Subtotal />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
