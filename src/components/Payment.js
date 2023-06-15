import Header from "./Header";
import { getBasketTotal } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

function Payment() {
  const navigate = useNavigate();

  const [{ basket, user }] = useStateValue();

  return (
    <div className="bg-gray-100 pb-10">
      <Header />
      <div>
        <h1 className=" text-center p-5 text-3xl font-semibold bg-gray-100 border-1 border-gray-200">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div>
          <div className="max-w-3xl bg-white m-auto">
            <div className="flex border-b-2 p-2">
              <div className=" basis-52 font-bold p-3  ">
                <h3>Delivary Address</h3>
              </div>
              <div className=" basis-3/4 text-sm p-3">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
              </div>
            </div>

            <div className="flex border-b-2 p-2">
              <div className="basis-40 font-bold p-3">
                <h3>Review items and Delivary</h3>
              </div>
              <div className="basis-3/4 text-sm p-3">
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
          </div>

          <div className="flex bg-white max-h-52 max-w-3xl m-auto">
            <div className=" basis-1/4 font-bold p-3">
              <h3>Order Summery</h3>
            </div>
            <div className=" basis-3/4 text-sm p-3">
              <div className="flex flex-col p-5 border-2 border-gray-400 rounded space-y-2">
                <div className="flex justify-between">
                  <p>Items:</p>
                  <NumericFormat
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
                <div className="flex justify-between">
                  <p>Delivary:</p>
                  <p>$0.00</p>
                </div>

                <NumericFormat
                 decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => (
                    <div className="flex justify-between border-t-2">
                      <p>Order Total:</p>
                      <strong>{`${value}`}</strong>
                    </div>
                  )}
                />

                {basket.length === 0 ? (
                  <button className="button" onClick={(e) => navigate("/")}>
                    Add items to proceed
                  </button>
                ) : (
                  <button className="button">Proceed to payments</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
