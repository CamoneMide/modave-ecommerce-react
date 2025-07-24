import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 cart-item">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-20 h-20 rounded cart-item-image"
        />
        <div className="ml-4 cart-item-details">
          <h3 className="text-lg font-medium cart-item-title">{item.title}</h3>
          <p className="text-sm text-gray-500 cart-item-size">{item.size}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 cart-item-quantity">
          <span className="text-gray-600">{item.quantity} x</span>
        </div>
        <div className="mr-4 cart-item-price">
          <span className="font-semibold">${item.price}</span>
        </div>
        <button className="text-sm text-red-500 hover:text-red-700 cart-item-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
