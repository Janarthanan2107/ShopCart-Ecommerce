import React from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slice/cartSlice";

const ProductCard = ({ item, notify }) => {
  let navigate = useNavigate();

  const handleProductDetailsClick = (id) => {
    navigate(`/shop/${id}`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    notify();
  };

  return (
    <div
      key={item.id}
      className="max-w-xs p-6 m-2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 transition duration-300 transform hover:scale-105 cursor-pointer"
      onMouseEnter={(e) =>
        (e.currentTarget.querySelector(
          ".add-to-cart",
          ".add-to-wishlist"
        ).style.display = "block")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.querySelector(".add-to-cart").style.display = "none")
      }
    >
      <img
        src={item.img}
        alt={item.name}
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        onClick={() => handleProductDetailsClick(item.id)}
      />
      <div className="mt-6">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          {item.category}
        </span>
        <h2 className="text-sm font-semibold tracking-wide mt-2 line-clamp-1">
          {item.name}
        </h2>
        <div className="flex justify-between mt-2 items-center">
          <p className="bg-green-600 text-white p-1 rounded-full font-semibold text-sm">
            $ {item.price}
          </p>
          <div className="flex items-center text-white bg-orange-400 p-1 rounded-full font-semibold text-sm">
            <MdOutlineProductionQuantityLimits />
            <span>{item.stock} remains</span>
          </div>
        </div>
        <div className="mt-2">
          <p
            className="add-to-cart lg:hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-violet-500 text-white font-semibold rounded-full p-2 absolute top-8 left-8"
            onClick={handleAddToCart}
          >
            <span className="flex justify-center items-center gap-2">
              <FaCartArrowDown />
            </span>
          </p>
        </div>

        <div className="mt-2">
          <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white bg-slate-400 text-white font-semibold rounded-full p-2 absolute right-8 top-8">
            <span className="flex justify-center items-center gap-2">
              <FaHeart />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
