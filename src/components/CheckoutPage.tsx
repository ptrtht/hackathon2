import { useNavigate } from "react-router-dom";
import OrderCart from "./OrderCart";


export default function CheckoutPage({ ordersState, addOrder, decrementOrder }) {
  const navigate = useNavigate();
  return (
    <div className="flex align-center justify-center items-center h-full">
      <div className="card bg-base-200  w-full h-fit md:m-24 mt-24 md:shadow-xl">
        <div className="card-body items-center space-y-3">
          <OrderCart ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} checkout={true} />
          <button
            className="btn btn-primary btn-block mt-10"
            onClick={() => navigate("success")}
          >Pay</button>
          <button
            className="btn btn-primary btn-block"
          >Split the bill</button>
          <button
            className="btn btn-primary btn-block"
          >Roulette</button>
        </div>
      </div>
    </div>
  );
}