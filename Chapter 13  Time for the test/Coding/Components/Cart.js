import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())

  }

  return (
    <div className="text-center m-4 p-4 text-2xl font-extrabold">
      <h1>Cart</h1>
      <div className="w-6/12 m-auto p-4">
        <button className="p-2 m-2 bg-black text-white rounded-xl text-sm"
          onClick={handleClearCart}
        >Clear Cart</button>
        {cartItems.length == 0 && <h1>Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
