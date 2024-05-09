import React, { useState } from "react";
import data from "../../constants/products.json";
import model from "../../assets/images/banner/fashion-forward-model.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  GiBilledCap,
  GiBoots,
  GiQueenCrown,
  GiSchoolBag,
} from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaBottleWater } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AlertCard from "../../components/resuable/AlertCard";

const Home = () => {
  const [products, setProducts] = useState(data);

  let navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate("/shop");
  };

  const handleNavigateToCateLog = () => {
    navigate("/categories");
  };

  const members = [
    { name: "John Doe", role: "Product Dealer" },
    { name: "Jane Smith", role: "Product Reviewer" },
    { name: "Michael Johnson", role: "Marketing Manager" },
    { name: "Emily Brown", role: "Web Marketing" },
    { name: "Alex Lee", role: "Creative Director" },
    { name: "Sarah Davis", role: "Art Director" },
  ];

  const category = [
    {
      name: "Men's Sneaker",
      icon: <GiRunningShoe />,
    },
    {
      name: "Men's Pants",
      icon: <PiPantsFill />,
    },
    {
      name: "Men's Boot",
      icon: <GiBoots />,
    },
    {
      name: "Bag",
      icon: <GiSchoolBag />,
    },
    {
      name: "Cap",
      icon: <GiBilledCap />,
    },
    {
      name: "Earphones",
      icon: <SlEarphonesAlt />,
    },
    {
      name: "Bottle",
      icon: <FaBottleWater />,
    },
  ];

  // Function to filter out duplicate categories
  function filterCategories(products) {
    const categories = {};
    return products.filter((product) => {
      if (!categories[product.category]) {
        categories[product.category] = true;
        return true;
      }
      return false;
    });
  }

  // Display one product from each category
  const uniqueCategories = filterCategories(products);

  return (
    <div>
      {/* banner */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Discover the Latest Trends in Fashion
              <span className="dark:text-violet-600"> with Us</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Explore our collection of high-quality clothing and accessories.
              <br className="hidden md:inline lg:hidden" />
              Find the perfect style for any occasion.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <p
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 cursor-pointer"
                onClick={handleNavigateToShop}
              >
                Shop Now
              </p>
              <p
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 cursor-pointer"
                onClick={handleNavigateToCateLog}
              >
                View Catalog
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={model}
              alt="Fashion Forward Model"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* alert */}
      <AlertCard />

      {/* swiper */}
      <section className="py dark:bg-white dark:text-gray-900">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center lg:text-start md:p-10 lg:flex-col">
          <div className="flex flex-col justify-center lg:mx-24 lg:text-left">
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">
              Our products
            </p>
            <h1 className="py-2 text-3xl font-medium leading-tight title-font">
              <span className="flex items-center gap-3 pb-2">
                Best selling products{" "}
                <GiQueenCrown className="text-violet-500" />
              </span>
            </h1>
          </div>
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
            {uniqueCategories.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full">
                    <img src={item.img} alt={item.name} />
                    <h1 className="text-sm lg:text-xl">{item.name}</h1>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* category */}
      <section>
        <div className="py dark:bg-white dark:text-gray-900">
          <div className="container mx-auto flex flex-col justify-around p-4 text-center lg:text-start md:p-10 lg:flex-col">
            <div className="flex flex-col justify-center lg:mx-24 lg:text-left">
              <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600 flex gap-2 items-center">
                Available categories <BiSolidCategory />
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-row flex-wrap justify-around pb-8 w-[90%]">
          {category.map((item, index) => {
            return (
              <div
                className="flex shadow-md gap-6 my-2 rounded-lg overflow-hidden divide-x w-[150px] dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300 cursor-pointer border-b-4 hover:border-violet-600 hover:font-semibold"
                key={index}
              >
                <div className="flex items-center gap-2 font-semibold p-4">
                  <span className="text-[13px]">{item.name}</span>
                  <span className="text-[18px] text-violet-600">
                    {item.icon}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr />

      {/* product review */}
      <section className="py-6 dark:bg-white dark:text-gray-900">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center lg:text-start md:p-10 lg:flex-col">
          <div className="flex flex-col justify-center lg:mx-24 lg:text-left">
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">
              Some of our
            </p>
            <h1 className="py-2 text-2xl font-medium leading-tight title-font">
              <span>Reviews by customer</span>
            </h1>
          </div>
          {/* some products */}
          <div className="mx-auto lg:mx-24 mt-4 flex flex-wrap justify-center mb-[2rem]">
            {uniqueCategories.map((item) => {
              return (
                <div
                  className="flex flex-col m-3 max-w-72 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
                  key={item.id}
                >
                  <div className="flex space-x-4">
                    <img
                      alt=""
                      src="https://source.unsplash.com/100x100/?portrait"
                      className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold">Michael Johnson</p>
                      <span className="text-xs dark:text-gray-600">
                        4 hours ago
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="object-cover w-full mb-4 h-60 sm:h-48 rounded-md dark:bg-gray-500"
                    />
                    <h2 className="mb-1 text-[15px] font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-sm dark:text-gray-600">
                      The best product i bought in online platform called
                      shopCart mens fashion...
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                      <button
                        aria-label="Share this post"
                        type="button"
                        className="p-2 text-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current dark:text-violet-600"
                        >
                          <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                        </svg>
                      </button>
                      <button
                        aria-label="Bookmark this post"
                        type="button"
                        className="p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current dark:text-violet-600"
                        >
                          <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-600">
                      <button
                        type="button"
                        className="flex items-center p-1 space-x-1.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-label="Number of comments"
                          className="w-4 h-4 fill-current dark:text-violet-600"
                        >
                          <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                          <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                        </svg>
                        <span>30</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center p-1 space-x-1.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-label="Number of likes"
                          className="w-4 h-4 fill-current dark:text-violet-600"
                        >
                          <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                          <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                        </svg>
                        <span>283</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
            <p
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 cursor-pointer"
              onClick={handleNavigateToShop}
            >
              Shop Now
            </p>
          </div>
        </div>
      </section>

      {/* dealers */}
      <section className="py-6 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-2xl font-bold leading-none text-center sm:text-2xl">
            Our designing & Dealers team
          </h1>
          <p className="max-w-2xl text-center text-gray-600">
            Our designing team brings together the finest talent to craft
            visually stunning experiences for your ecommerce journey.
          </p>

          <div className="flex flex-row flex-wrap-reverse justify-center">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col justify-center m-8 text-center"
              >
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src={`https://source.unsplash.com/100x100/?portrait?${index}`}
                />
                <p className="text-[15px] font-semibold leading-tight">
                  {member.name}
                </p>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section className="py-6 dark:bg-white dark:text-gray-900">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">
              Discover the Ultimate
            </p>
            <h1 className="py-2 text-2xl font-medium leading-tight title-font">
              Experience Cleanse Reinvented - Shop Now
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7 dark:text-gray-50"
              >
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold title-font">Google Play</span>
              </span>
            </button>
            <button className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="fill-current w-7 h-7 dark:text-gray-50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
