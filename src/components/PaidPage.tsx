import { useNavigate, useSearchParams } from "react-router-dom";
import OrderCart from "./OrderCart";


export default function CheckoutPage() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex align-center justify-center items-center h-full">
      <div className="card bg-base-200  w-full h-fit md:m-24 mt-24 md:shadow-xl">
        <div className="card-body items-center space-y-3">
          
          <h1 className="card-title w-full justify-center">{searchParams.get('m')}</h1>
          <p className="card-body justify-left">Your order has been placed, it will soon be arriving at the specified location.</p>
          <figure>
            <img
              src="https://media.discordapp.net/attachments/1304748717076774912/1304917866386292846/rect2.png?ex=673122f7&is=672fd177&hm=64bcd64cc20652201a32d64bd601e62709613b7fa4ab90497c91cde1ecede59f&=&format=webp&quality=lossless&width=556&height=437"
            />
          </figure>
          <p className="card-body justify-left">You can check your order progress in "my orders".</p>
        </div>
      </div>
    </div>
  );
}