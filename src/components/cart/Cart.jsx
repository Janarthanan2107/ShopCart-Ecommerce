import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../slice/cartSlice";
import { IoClose } from "react-icons/io5";
import { RiCoupon2Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import CopyToClipboard from "../resuable/CopytoClipboard";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const [stripe, setStripe] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const handleApplyCoupon = () => {
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

  // Calculate shipping cost
  let shippingCost = 0;

  if (subtotal > 1000) {
    shippingCost = 10;
  } else {
    shippingCost = 15;
  }

  // Calculate grand total including shipping cost
  const grandTotal = subtotalAfterDiscount + shippingCost;

  let navigate = useNavigate();

  const handleToShopClick = () => {
    navigate(`/shop`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("/api/paymentIntent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: grandTotal }), // Send amount to create Payment Intent
        });
        const data = await response.json();
        setClientSecret(data.client_secret); // Store client secret
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, [grandTotal]); // Ensure useEffect runs when grandTotal changes

  const handlePayment = async () => {
    if (!clientSecret) {
      toast.error("Oops..! Server error. Try again later!");
      return;
    }

    const cardElement = stripe.elements().getElement("card"); // Initialize Stripe Elements and get card element
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement, // Use Stripe Elements to get card details
      },
    });

    if (error) {
      console.error("Payment failed:", error);
      // Handle payment failure
    } else {
      console.log("Payment succeeded!");
      // Handle payment success
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      <div className="grid grid-cols-4 gap-4 items-center w-full border-b-2 border-gray-200 pb-2 mb-2">
        <p className="text-md font-semibold text-gray-500 text-center">
          Product
        </p>
        <p className="text-md font-semibold text-gray-500 text-center">Price</p>
        <p className="text-md font-semibold text-gray-500 text-center">
          Quantity
        </p>
        <p className="text-md font-semibold text-gray-500 text-center">
          Remove
        </p>
      </div>

      <div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-2 border-b-2 py-3">
            <p className="text-gray-500 font-semibold text-center text-lg">
              Your cart is empty
            </p>
            <button
              className="bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600 flex items-center gap-2"
              onClick={handleToShopClick}
            >
              Shop now
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="grid grid-cols-4 gap-4 items-center w-full border-b-2 py-2">
                <div className="mr-4 flex gap-3 items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover  w-24 h-24 rounded-md"
                  />
                  <h3 className="font-semibold text-lg hidden lg:block">
                    {item.name}
                  </h3>
                </div>
                <div className="text-gray-500 text-center">
                  Price: ${item.price}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <button
                      className={`text-white bg-red-400 h-[2rem] w-[2rem] rounded-full font-semibold text-sm hover:-translate-y-1 transition-transform ${
                        item.quantity === 1
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>

                    <span className="mx-4 font-medium">{item.quantity}</span>
                    <button
                      className="text-white bg-orange-400 h-[2rem] w-[2rem] rounded-full font-semibold text-sm hover:-translate-y-1 transition-transform"
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <IoClose
                    className="text-red-500 text-xl cursor-pointer h-[1.55rem] w-[1.55rem] rounded-full hover:bg-red-400 hover:text-white hover:-translate-y-1 transition-transform transition-all"
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row">
        <div className="mt-4 mb-4 flex flex-col lg:flex-row items-center gap-2 lg:mr-4 lg:w-auto">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 w-full text-gray-500"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600 flex items-center gap-2 w-full"
          >
            <RiCoupon2Fill />
            Apply Coupon
          </button>
        </div>
        <CopyToClipboard text={"shoppify2103"} />
      </div>

      <hr className="mt" />

      <div className="flex lg:justify-end justify-center">
        <div className="mt-5 border p-3 rounded-lg flex flex-col gap-2 w-full lg:w-96">
          <h2 className="text-2xl text-black font-bold">Cart Totals</h2>
          <div className="flex justify-between items-center mt-2">
            <div className="text-lg font-medium text-gray-500">Subtotal:</div>
            <div className="text-md text-gray-500">${subtotal.toFixed(2)}</div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-lg font-medium text-gray-500 flex flex-col">
              Discount (50%):{" "}
              {!couponApplied ? (
                <span className="text-red-400 text-xs">
                  (No coupon available)
                </span>
              ) : (
                <span className="text-green-400 text-xs">(Coupon applied)</span>
              )}
            </div>
            <div className="text-md text-gray-500">
              -${(subtotal - subtotalAfterDiscount).toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-lg font-medium text-gray-500">
              Shipping Cost:
            </div>
            <div className="text-md text-gray-500">
              ${shippingCost.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-lg font-medium text-gray-500">
              Grand Total:
            </div>
            <div className="text-md text-gray-800 font-semibold border-t-2">
              ${grandTotal.toFixed(2)}
            </div>
          </div>
          <button
            className="transition ease-in-out delay-150 bg-violet-500 hover:bg-orange-400 duration-300 px-6 py-3 rounded-md text-white font-semibold flex gap-2 justify-center items-center mt-2 lg:mb-0 w-full"
            onClick={handlePayment}
          >
            <FaCheckCircle />
            <span>Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
