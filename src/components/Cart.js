import { useDispatch, useSelector } from "react-redux";
import ItemListMenu from "./ItemListMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handlClearCart = () => {
    dispatch(clearCart());
  };
  console.log("cartItems:", cartItems);
  return (
    <div className="m-4 p-4 text-center ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        onClick={handlClearCart}
        className="p-2 m-2 bg-black text-white rounded-lg"
      >
        Clear Cart
      </button>
      {cartItems.length===0 && <h1 className="text-lg font-bold">add item in the cart</h1>}
      <ItemListMenu items={cartItems} />
    </div>
  );
};

export default Cart;
