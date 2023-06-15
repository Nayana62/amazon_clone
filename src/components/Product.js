import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { NumericFormat } from 'react-number-format';
import { useStateValue } from "../context/StateProvider";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {


  const[rating, setRating] = useState(0);

  const [hasPrime, setIsPrimeEnabled] = useState(0);
 
  useEffect(() => {
     setRating(
         Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
         MIN_RATING
     );
     setIsPrimeEnabled(Math.random() < 0.5);
 }, []);

  const [{basket}, dispatch] = useStateValue();

  if(basket.length === 0){
    console.log("")
  }

  const addToBasket = () => {
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
        id: id, 
        title: title, 
        price: price, 
        description: description, 
        category: category, 
        image: image,
        rating: rating,
        hasPrime: hasPrime,
       }
     })
  }

 

  return (
    <div className="flex h-full">
      <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">

      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>

      <img className="h-[200px] object-contain mx-auto" src={image} alt="product" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating).fill().map((_, i) => (
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
              <img className="w-12 " src="https://www.logotypes101.com/logos/875/A41B7A0C2125D3C1F6DDDE56C1203C77/amazon_prime_icon.png" alt="logo" />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
             </div>
          )}

          <button onClick={addToBasket} className="mt-auto button">Add to Basket</button>

      </div>
     
    </div>
  );
}

export default Product;
