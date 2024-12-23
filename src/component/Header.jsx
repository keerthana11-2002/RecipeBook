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
    <header className="border fixed flex z-50 items-center p-2 bg-white w-full ">
      <Link to="/">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="logo" />
          <p className="title">Bhat's Kitchen</p>
        </div>
      </Link>
      <nav className="ml-44">
        <ul className="flex space-x-20">
          <Link to="/">
            <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
              About
            </li>
          </Link>

          <Link to="/recipe/:id">
            <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
              Recipes
            </li>
          </Link>

          <Link to="/blog">
            <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
              Blog
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-2xl cursor-pointer transition-all duration-300 hover:text-orange-600">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div className=" text-4xl cursor-pointer hover:text-orange-600 transition-all duration-300 ml-44  ">
        <CiSearch onClick={handleSearch} />
      </div>
      {search && <Sidebar search={search} setSearch={setSearch} />}
    </header>
  );
};

export default Header;
