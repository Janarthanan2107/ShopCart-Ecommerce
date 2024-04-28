import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  
  const handleApplyCoupon = () => {
    // Apply coupon logic here
    // You can dispatch an action to apply the coupon or update the state accordingly
    setAppliedCoupon(couponCode);
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id, change) => {
    dispatch(updateQuantity({ id, change }));
  };

  // Calculate subtotal of the cart
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Apply 50% discount if coupon code is applied
  const discount = 0.5; // 50% discount
  const couponApplied = appliedCoupon !== ""; // Check if coupon is applied
  const subtotalAfterDiscount = couponApplied ? subtotal * discount : subtotal;

  // Calculate grand total
  const grandTotal = subtotalAfterDiscount;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center py-4">
                <div className="flex-shrink-0 w-24 h-24 mr-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-gray-500">Price: ${item.price}</div>
                  <div className="flex items-center mt-2">
                    <button
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-xl">{item.quantity}</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700 mt-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="flex justify-between mb-4">
              <div className="text-lg font-semibold">Subtotal:</div>
              <div className="text-lg">${subtotal.toFixed(2)}</div>
            </div>
            {couponApplied && (
              <div className="flex justify-between mb-4">
                <div className="text-lg font-semibold">Discount (50%):</div>
                <div className="text-lg">
                  -${(subtotal - subtotalAfterDiscount).toFixed(2)}
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="text-xl font-bold">Grand Total:</div>
              <div className="text-xl">${grandTotal.toFixed(2)}</div>
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-gray-500"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Apply Coupon
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
