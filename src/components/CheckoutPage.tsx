import { useNavigate } from "react-router-dom";
import OrderCart from "./OrderCart";


export default function CheckoutPage({ ordersState, addOrder, decrementOrder, nameState, incrementMod, decrementMod }) {
  const navigate = useNavigate();
  return (
    <div className="flex align-center justify-center items-center h-full">
      <div className="card bg-base-200  w-full h-fit md:m-24 mt-24 md:shadow-xl">
        <div className="card-body items-center space-y-3">
          <OrderCart incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState} ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} checkout={true} />
          <button
            className="btn btn-primary btn-block mt-10"
            onClick={() => navigate("success?m=Thank you for choosing Slicr.")}
          >Pay All.</button>
          <button
            className="btn btn-primary btn-block"
            onClick={() => navigate("split")}
          >Split the bill</button>
          <button
            className="btn btn-primary btn-block"
            onClick={() => navigate("sortition")}
          >Roulette</button>
        </div>
      </div>
    </div>
  );
}