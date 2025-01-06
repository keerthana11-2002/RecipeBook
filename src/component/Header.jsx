import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <header className="border fixed flex items-center justify-between z-50 p-2 bg-white w-full ">
      <Link to="/">
        <div className="flex items-center -ml-20 md:ml-20 lg:-ml-5  ">
          <img src={logo} alt="logo" className="logo " />
          <p className="title">Bhat's Kitchen</p>
        </div>
      </Link>

      <nav className="hidden md:flex  lg:ml-32">
        <ul className="flex space-x-6 md:space-x-10 lg:space-x-16 ml-20 lg:-ml-20  ">
          <Link to="/">
            <li className="text-base md:text-lg lg:text-xl cursor-pointer mt-2 transition-all duration-300 hover:text-orange-600 lg:mt-5">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-base md:text-lg lg:text-xl cursor-pointer mt-2 transition-all duration-300 hover:text-orange-600 lg:mt-5">
              About
            </li>
          </Link>
          <Link to="/blog">
            <li className="text-base md:text-lg lg:text-xl cursor-pointer mt-2 transition-all duration-300 hover:text-orange-600 lg:mt-5">
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-base md:text-lg lg:text-xl cursor-pointer mt-2 transition-all duration-300 hover:text-orange-600 lg:mt-5">
              Contact
            </li>
          </Link>
          <Link to="/addRecipe">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 p-2 md:p-3   lg:p-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-white text-sm md:text-base lg:text-lg font-semibold hover:shadow-orange-600">
              RecipeVault
            </button>
          </Link>
        </ul>
      </nav>

      <div className="text-3xl  md:text-3xl md:ml-10 lg:text-4xl lg:mr-28 mr-[30px] cursor-pointer hover:text-orange-600 transition-all duration-300 ">
        <CiSearch onClick={handleSearch} />
      </div>

      {search && <Sidebar search={search} setSearch={setSearch} />}
    </header>
  );
};

export default Header;
