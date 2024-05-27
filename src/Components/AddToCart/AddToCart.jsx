import { useLoaderData } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import { useState } from "react";

const AddToCart = () => {
  const loadedCartItems = useLoaderData();
  const [cartItems, setCartItems] = useState(loadedCartItems);
  //   console.log(cartItems);
  return (
    <div className="m-10">
      <h3 className="text-3xl text-center font-bold">
        You Cart Items : {cartItems.length}
      </h3>

      <div className="grid md:grid-cols-2 gap-5">
        {cartItems.map((cartItem) => (
          <CartProduct key={cartItem._id} cartItems={cartItems} setCartItems={setCartItems} cartItem={cartItem}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
