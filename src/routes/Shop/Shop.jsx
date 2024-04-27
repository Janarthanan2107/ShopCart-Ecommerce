import React, { useState } from "react";
import { GiBilledCap, GiBoots, GiSchoolBag } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaBottleWater } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import data from "../../constants/products.json";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Shop = () => {
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

  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to simulate loading
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  };

  // Call simulateLoading when search term or selected category changes
  React.useEffect(() => {
    simulateLoading();
  }, [searchTerm, selectedCategory]);

  // Function to handle category click
  const handleCategoryClick = (categoryName) => {
    // If the clicked category is already selected, clear the selected category
    if (selectedCategory === categoryName) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryName);
    }
    setSearchTerm(""); // Clear search term when selecting or unselecting a category
  };

  // Function to filter products based on category, name, and price range
  const filteredProducts = products.filter((product) => {
    const isInSelectedCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const isInSearchTerm =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isInPriceRange =
      (minPrice === "" || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (maxPrice === "" || parseFloat(product.price) <= parseFloat(maxPrice));
    return isInSelectedCategory && isInSearchTerm && isInPriceRange;
  });

  return (
    <div>
      {/* banner */}
      <div className="px-8 py-2 dark:bg-violet-200 dark:text-gray-800">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            <span>
              Get up to 50% off your first order + free shipping,&nbsp;
            </span>
            <a href="#" rel="noopener noreferrer" className="text-violet-500">
              sign up{" "}
            </a>
            today!
          </div>
          <a
            href="#"
            rel="noopener noreferrer"
            className="items-center gap-2 hidden md:flex"
          >
            <svg
              role="img"
              viewBox="0 0 22 22"
              className="fill-current h-4 w-4"
            >
              <path
                clipRule="evenodd"
                d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hover:underline focus-visible:underline">
              Gift Cards
            </span>
          </a>
        </div>
      </div>

      {/* category */}
      <section>
        <div className="py dark:bg-white dark:text-gray-900">
          <div className="container mx-auto flex flex-col justify-around p-4 text-center lg:text-start md:p-10 lg:flex-col">
            <div className="flex flex-col justify-center lg:mx-24 lg:text-left">
              <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600 flex gap-2 items-center">
                Categories <BiSolidCategory />
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col flex-wrap justify-around pb-8 w-[90%] lg:flex-row">
          {category.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-[150px] text-xl font-medium dark:bg-gray-50 dark:divide-gray-300 cursor-pointer border-b-4 ${
                  selectedCategory === item.name
                    ? "border-violet-600 font-semibold dark:bg-gray-400 text-white"
                    : "hover:border-violet-600 dark:text-slate-900"
                }`}
                onClick={() => handleCategoryClick(item.name)}
              >
                <div className="flex items-center gap-2 p-4">
                  <span className="text-[13px]">{item.name}</span>
                  <span
                    className={`text-[18px] ${
                      selectedCategory === item.name
                        ? "text-white"
                        : " text-violet-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/*filter && products */}
      <section className="dark:bg-white dark:text-gray-900">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center lg:text-start md:p-10 lg:flex-col">
          <div className="flex justify-between items-center mb-3 flex-col lg:flex-row">
            <div className="flex flex-col justify-center lg:mx-24 lg:text-left">
              <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">
                Filter your
              </p>
              <h1 className="py-2 text-3xl font-medium leading-tight title-font">
                <span>Products</span>
              </h1>
            </div>

            {/* Price range filter */}
            <div className="flex flex-col">
              <label
                htmlFor="minPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Price Range
                <span className="text-gray-500 font-semibold">(min - max)</span>
              </label>
              <div className="flex justify-between items-center gap-3">
                <div className="mt-1">
                  <input
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* search bar */}
            <fieldset className="space-y-1 dark:text-gray-800">
              <label htmlFor="search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="Search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <IoMdSearch className="text-[20px] text-center" />
                  </button>
                </span>
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  autoFocus
                  className="w-32 mt-2 py-3 pl-10 text-sm rounded-md sm:w-96 focus:outline-none dark:bg-gray-200 dark:text-gray-800 focus:dark:bg-gray-100 focus:border-violet-600"
                />
              </div>
            </fieldset>
          </div>

          <p className="mx-auto lg:mx-24 text-gray-500 font-thin">
            {filteredProducts.length} products were listed
          </p>

          {/* Loading Animation */}
          {loading && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            </div>
          )}

          {/* Display filtered products */}
          {!loading && (
            <div className="mx-auto lg:mx-24 mt-4">
              {filteredProducts.length === 0 ? (
                <div className="flex items-center justify-center mx-auto mt-8">
                  <p className="text-lg font-semibold dark:text-gray-400">
                    No products found.
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap justify-around mb-[2rem]">
                  {filteredProducts.map((item) => (
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
                        (e.currentTarget.querySelector(
                          ".add-to-cart"
                        ).style.display = "none")
                      }
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
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
                          <p className="add-to-cart lg:hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-violet-500 text-white font-semibold rounded-full p-2 absolute top-8 left-8">
                            <span className="flex justify-center items-center gap-2">
                              <FaCartArrowDown />
                            </span>
                          </p>
                        </div>

                        <div className="mt-2">
                          <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white bg-slate-400 text-white font-semibold rounded-full p-2 absolute right-8 top-8">
                            <span className="flex justify-center items-center gap-2">
                              {/* <CiHeart /> */}
                              <FaHeart />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Promotions */}
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Exclusive Offers</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Explore these limited-time deals!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {/* First Promotion Item */}
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Limited Time Offer"
              >
                <img
                  alt="Limited Time Offer"
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?promotion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Limited Time Offer"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Special Deals
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  20% Off on Selected Items
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>Valid until April 30, 2024</span>
                  <span>1.8K views</span>
                </div>
              </div>
            </article>
            {/* Second Promotion Item */}
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Limited Time Offer"
              >
                <img
                  alt="Limited Time Offer"
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?promotion?2"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Limited Time Offer"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Flash Sale
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Up to 50% Off on Electronics
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>Valid for 48 hours only</span>
                  <span>3.5K views</span>
                </div>
              </div>
            </article>
            {/* Third Promotion Item */}
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Limited Time Offer"
              >
                <img
                  alt="Limited Time Offer"
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?promotion?3"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Limited Time Offer"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Clearance Sale
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Big Discounts on Fashion Items
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>Ends soon!</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
