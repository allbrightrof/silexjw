import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="w-full p-2 sticky top-0 z-50 bg-white font-[Montserrat]">
      <div className="flex justify-evenly bg-white w-full items-center">
        <div className="flex items-center justify-between flex-row">
          <div>
            <img src="./bio-log.png"/>
          </div>
          <div className="hidden md:flex relative w-[300px] h-[45px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full flex  h-full pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-[#f5f5f5]"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="hidden md:flex justify-between flex-row gap-22">
          <ul className="flex flex-col md:flex-row justify-between gap-22">
            <li>
              {" "}
              <a className="hover:text-blue-600 transition-transform no-underline hover:scale-110 duration-300">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-600 no-underline hover:scale-110 transition-transform duration-300 ">About</a>{" "}
            </li>
            <li>
              {" "}
              <a className="hover:text-blue-600 no-underline hover:scale-110  transition-transform duration-300">
                Contact Us
              </a>{" "}
            </li>
            <li>
              <a className="hover:text-blue-600 no-underline hover:scale-110 transition-transform duration-300">Blog</a>
            </li>
          </ul>
          <div className="flex justify-between flex-row gap-6">
            <span className="hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon
                icon={farHeart}
                className="text-xl text-gray-700"
              />
            </span>
            <span className="hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-xl text-gray-700"
              />
            </span>
            <span className="hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl text-gray-700"
              />
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-2xl"
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden justify-between pb-20 pt-10 mt-5 absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center border-b border-gray-700">
          <div className="relative w-[300px] h-[45px] mt-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full flex  h-full pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-[#f5f5f5]"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <ul className="flex justify-between pt-24 flex-col gap-22">
            <li>
              {" "}
              <a className="hover:text-blue-600 no-underline mt-5 ">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-600 no-underline ">About</a>{" "}
            </li>
            <li>
              {" "}
              <a className="hover:text-blue-600 no-underline">
                Contact Us
              </a>{" "}
            </li>
            <li>
              <a className="hover:text-blue-600 no-underline">Blog</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
    <style>
  {`
    @keyframes scroll {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `}
</style>
    <div className="flex w-[100%]  overflow-hidden justify-evenly bg-[#4B2C7A] space-x-6 text-white
       text-sm border-t border-b p-5">
          <div className="flex marquee md:animate-none md:whitespace-normal w-max space-x-50 text-white text-sm p-5"
       style={{
         animation: 'scroll 15s linear infinite',
         whiteSpace: 'nowrap',
       }}
  >
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <i className="fas fa-gem"></i>
          <span>Necklaces</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <i className="fas fa-star"></i>
          <span>Earrings</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <i className="fas fa-ring"></i>
          <span>Rings</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <i className="fas fa-link"></i>
          <span>Bracelets</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <i className="fas fa-heart"></i>
          <span className="">Pendants</span>
        </a>
      </div>
      </div>
      </>
     
    
  );
  
  
};

export default Navbar;
