import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaPinterest } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-4 ">
      <div className="flex flex-wrap justify-between items-start px-6 sm:px-12 lg:px-32">
        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-5">
            QUICK LINKS
          </h1>
          <Link to="/about">
            <p className="text-orange-600 text-lg underline cursor-pointer mb-3">
              ABOUT
            </p>
          </Link>
          <Link to="/contact">
            <p className="text-orange-600 text-lg underline cursor-pointer mb-3">
              CONTACT
            </p>
          </Link>
          <p className="text-orange-600 text-lg underline cursor-pointer">
            PRIVACY POLICY
          </p>
        </div>

        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg font-extrabold sm:text-xl lg:text-2xl mb-5">
            NEWSLETTER
          </h1>
          <Link to="/newsletter">
            <p className="text-lg">
              <span className="text-orange-600 underline cursor-pointer">
                SIGN UP!
              </span>{" "}
              FOR EMAILS AND UPDATES
            </p>
          </Link>
        </div>

        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg sm:text-xl lg:text-2xl  font-extrabold  mb-5">
            INFORMATION
          </h1>
          <Link to="/">
            <p className="text-orange-600 text-lg underline cursor-pointer mb-3">
              HOME
            </p>
          </Link>
          <Link to="/addRecipe">
            <p className="text-orange-600 text-lg underline cursor-pointer">
              RECIPEVAULT
            </p>
          </Link>
        </div>
      </div>

      <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl text-orange-600 mt-6">
        <IoIosMail className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
        <FaInstagramSquare className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
        <BsFacebook className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
        <FaPinterest className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
        <AiFillTwitterCircle className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
        <MdRssFeed className="transform transition duration-300 hover:scale-110 hover:text-orange-800" />
      </div>

      <p className="text-center text-xs sm:text-sm mt-4">
        COPYRIGHT © 2024 BHAT'S KITCHEN
      </p>
    </footer>
  );
};

export default Footer;
