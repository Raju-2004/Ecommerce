import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const {getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItems my-[100px] mx-[170px]">
      <div className="cartItems-format-main grid grid-cols-[1fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 px-0 text-$454545 text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-slate-100"/>
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format grid grid-cols-[1fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 px-0 text-$454545 text-sm font-semibold">
                <img src={e.image} alt="" className="h-16" />
                <p>{e.name}</p>
                <p className="ml-2">${e.new_price}</p>
                <button className="w-10 ml-4 h-10 border border-solid border-gray-300 bg-white">{cartItems[e.id]}</button>
                <p className="ml-2">${e.new_price * cartItems[e.id]}</p>
                <img
                className="w-6 mx-6 cursor-pointer"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="flex my-20">
        <div className="flex-1 flex flex-col gap-10 mr-48">
            <h1>cart Totals</h1>
            <div>
                <div className="flex justify-between py-4">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className="w-[262px] h-[58px] outline-none border-none bg-primary/85 text-white text-lg cursor-pointer font-semibold">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
