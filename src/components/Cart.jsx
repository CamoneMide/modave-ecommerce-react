import React, { useState } from "react";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

const cartItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "Contrasting sheepskin",
    size: "XL/Blue",
    quantity: 1,
    price: 60.0,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Suede leggings",
    size: "XL/Blue",
    quantity: 1,
    price: 60.0,
  },
];

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 right-0 z-50 w-full h-full max-w-md p-4 mt-8 bg-white rounded-lg shadow-md cart-container"
      variants={cartVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <h2 className="mb-4 text-2xl font-semibold">Shopping Cart</h2>
      <div className="h-8 mb-4 bg-green-100 rounded-full free-shipping">
        <div className="flex items-center justify-center w-2/5 h-8 bg-green-500 rounded-full">
          <span className="font-bold text-white">
            Congratulations! You have got free shipping!
          </span>
        </div>
      </div>
      <div className="p-4 cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 cart-summary">
        <div className="flex justify-around mb-4 text-gray-600">
          <span>Note</span>
          <span>Shipping</span>
          <span>Gift</span>
          <span>Coupon</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">$120.00</span>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-500">
            I agree with{" "}
            <a href="#" className="text-blue-500">
              Terms & Conditions
            </a>
          </label>
        </div>
        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 text-sm bg-white border border-gray-500 rounded">
            View Cart
          </button>
          <button className="px-4 py-2 text-sm text-white bg-black rounded">
            Check Out
          </button>
        </div>
        <div className="text-sm text-center text-gray-500">
          <a href="#">Or Continue Shopping</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
