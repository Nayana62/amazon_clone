import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { NumericFormat } from 'react-number-format';
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
    const [{ basket }, dispatch] = useStateValue();

    if(basket.length === 0){
      console.log("")
    }

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
              id: id,
        });
    }
    

  return (
    <div className="grid grid-cols-5 p-2">
      <img className="h-[200px] w-[200px] object-contain" src={image} alt="" />

      <div className=" col-span-3 mx-5 ">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>


        <div className="mb-5">
      <NumericFormat 
      value={price} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'$'} />
      </div>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5 ">
            <img
              loading="lazy"
              className="w-12 "
              src="https://www.logotypes101.com/logos/875/A41B7A0C2125D3C1F6DDDE56C1203C77/amazon_prime_icon.png"
              alt="logo"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}

      </div>

      <div className="flex my-auto justify-self-end">
        <button onClick={removeFromBasket} className="mt-auto button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
