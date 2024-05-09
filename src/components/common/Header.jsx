import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/images/logo/logo.png";

function Header() {
  const menuList = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      icon: <FaShopify />,
      link: "/shop",
    },
    {
      id: 3,
      name: "Contact Us",
      icon: <IoCall />,
      link: "/contactUs",
    },
    {
      id: 4,
      name: "Cart",
      icon: <FaCartShopping />,
      link: "/cart",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={logo} alt="Logo"></img>
          </a>
          <div className="lg:hidden">
            <button className="p-4" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen
                ? "flex flex-col justify-center items-center space-x-3 lg:hidden fixed top-0 left-0 h-full w-full bg-gray-100  transition-opacity ease-in duration-300"
                : "hidden"
            }`}
          >
            <button
              className="absolute top-4 right-4 lg:hidden"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {menuList.map((item) => {
              return (
                <li className="flex p-5" key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 -mb-1 border-b-2 bg-violet-200 rounded-lg hover:dark:text-violet-600 hover:dark:border-violet-600 font-semibold text-violet-600"
                        : "fl0 rounded-lgx items-center p-2 -mb-1 hover:dark:text-violet-600 hover:dark:border-violet-600"
                    }
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}

            <div className="border-t-2 mt-4 pt-3">
              <li>
                <button className="self-center px-8 py-3 rounded">
                  Sign in
                </button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                  Sign up
                </button>
              </li>
            </div>
          </ul>

          {/* Desktop view menu */}
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <div className="flex">
              {menuList.map((item) => {
                return (
                  <NavLink
                    to={item.link}
                    key={item.id}
                    className={({ isActive }) =>
                      isActive
                        ? "m-3 p-4 border-b-2 hover:dark:text-violet-600 hover:dark:border-violet-600 font-semibold text-violet-600 border-violet-600"
                        : "m-3 p-4 border-b-2 hover:dark:text-violet-600 hover:dark:border-violet-600"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </span>
                  </NavLink>
                );
              })}
            </div>
            <div>
              <button className="self-center px-8 py-3 rounded">Sign in</button>
              <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
