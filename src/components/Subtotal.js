import React from "react";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from "react-number-format";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();

  return (
    <div className="flex flex-col space-y-2">
      <NumericFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
          </>
        )}
      />

      <button
        disabled={!user}
        onClick={e => navigate('/payment')}
        className={`button mt-2 ${
          !user &&
          "from-gray-300 to-gray-500 border-gray-200 text-gray-300 p-2 text-xs md:text-sm rounded cursor-not-allowed"
        }`}
      >
        {!user ? "Sign in to checkout" : "Proceed to checkout"}
      </button>
    </div>
  );
}

export default Subtotal;
