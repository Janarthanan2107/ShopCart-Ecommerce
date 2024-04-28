import React, { useState } from "react";
import { GiBilledCap, GiBoots, GiSchoolBag } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaBottleWater } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import data from "../../constants/products.json";
import ProductCard from "../../components/product/ProductCard";
import LoadingComponent from "../../components/resuable/LoadingComponent";
import { IoGiftOutline } from "react-icons/io5";
import Tag from "../../components/resuable/Tag";
import PromotionCard from "../../components/resuable/PromotionCard";

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

  const promotionsData = [
    {
      id: 1,
      title: "20% Off on Selected Items",
      imageSrc: "https://source.unsplash.com/200x200/?promotion?1",
      promotionType: "Special Deals",
      discountDetails: "20% Off",
      validity: "Valid until April 30, 2024",
      views: "1.8K views",
    },
    {
      id: 2,
      title: "Up to 50% Off on Electronics",
      imageSrc: "https://source.unsplash.com/200x200/?promotion?2",
      promotionType: "Flash Sale",
      discountDetails: "Up to 50% Off",
      validity: "Valid for 48 hours only",
      views: "3.5K views",
    },
    {
      id: 3,
      title: "Big Discounts on Fashion Items",
      imageSrc: "https://source.unsplash.com/200x200/?promotion?3",
      promotionType: "Clearance Sale",
      discountDetails: "Big Discounts",
      validity: "Ends soon!",
      views: "2.2K views",
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
            <span className="text-violet-500">sign up </span>
            today!
          </div>
          <a
            href="#"
            rel="noopener noreferrer"
            className="items-center gap-2 hidden md:flex"
          >
            <IoGiftOutline />
            <span className="hover:underline focus-visible:underline underline-offset-2">
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
              <Tag
                item={item}
                key={index}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
              />
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
          {loading && <LoadingComponent />}

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
                    <ProductCard
                      item={item}
                      key={item.id}
                    />
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
            {promotionsData.map((promotion) => (
              <PromotionCard promotion={promotion} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
