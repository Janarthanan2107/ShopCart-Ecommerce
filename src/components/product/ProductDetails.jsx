import React, { useState, useEffect } from "react";
import data from "../../constants/products.json";
import { useParams } from "react-router-dom";
import StarRating from "../resuable/StarRating";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import Skeleton from "../resuable/Skeleton";
import AlertCard from "../resuable/alertCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notify = () => toast("Product added successfully !");
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    notify();
  };

  // Function to simulate loading
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  };

  useEffect(() => {
    simulateLoading();

    const selectedProduct = data.find((item) => item.id === id);
    setProduct(selectedProduct);

    // Filter similar products based on the category of the selected product
    const similar = data.filter(
      (item) => item.category === selectedProduct.category && item.id !== id
    );
    setSimilarProducts(similar);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const commonDescription = `Elevate your style with this sleek and modern addition to your collection. Crafted with precision and attention to detail, this product offers unparalleled quality and functionality. Designed to meet the demands of today's lifestyle, it seamlessly combines fashion and practicality. Whether you're heading to the office or exploring the city, this versatile piece is sure to make a statement. Upgrade your everyday essentials and experience luxury like never before.`;

  return (
    <>
      <ToastContainer stacked/>
      <div className="py-6 px-6 mx-auto">
        {loading && <Skeleton />}
        {!loading && (
          <div className="w-full rounded flex flex-col lg:flex-row justify-center items-center gap-2">
            <img
              className="lg:w-2/6 rounded-lg w-96"
              src={product.img}
              alt={product.name}
            />
            <div className="rounded-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="inline-block mb-5 bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {product.category}
                </p>
                <p className="text-gray-700 text-base font-semibold">
                  {product.description || commonDescription}
                </p>
                <div className="text-gray-700 text-base flex justify-between mt-2">
                  <div className="text-gray-400 font-semibold">
                    Seller:{" "}
                    <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                      {product.seller}
                    </span>{" "}
                  </div>
                  <div className="text-gray-400 font-semibold">
                    In Stock:{" "}
                    <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                      {product.stock}
                    </span>
                  </div>
                </div>
                <div className="text-gray-400 text-base font-semibold mt-2 flex flex-col gap-2">
                  Ratings: <StarRating rating={product.ratings} /> (
                  {product.ratingsCount} reviews)
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="px-6 py-2 font-semibold text-gray-400">
                    Price:{" "}
                    <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
                      ${product.price}
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block animate-bounce bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      Shipping cost: ${product.shipping}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-white bg-violet-500 cursor-pointer hover:bg-violet-600 hover:-translate-y-1 transition-transform font-semibold rounded-lg p-2 flex items-center gap-2">
                    <FaHeart />
                  </div>
                  <div
                    className="text-white bg-violet-500 cursor-pointer hover:bg-violet-600 hover:-translate-y-1 transition-transform font-semibold rounded-lg p-2 flex items-center gap-2"
                    onClick={handleAddToCart}
                  >
                    <FaCartShopping />
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Similar Products Section */}
        <div className="my-8 border-t-2 pt-5">
          <h2 className="text-2xl font-bold">
            Similar Products in{" "}
            <p className="inline-block mb-5 bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {product.category}
            </p>
          </h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            rewind={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {similarProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* alert */}
      <AlertCard />
    </>
  );
};

export default ProductDetails;
