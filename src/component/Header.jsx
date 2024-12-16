import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
 import Sidebar from "./Sidebar";




const Header = () => {
    const[search,setSearch] = useState(false)

const handleSearch = () =>{
    setSearch(!search)
}

  return (
    <header className="border flex items-center p-3 ">
      <Link to="/">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="logo" />
          <p className="title">Bhat's Kitchen</p>
        </div>
      </Link>
      <nav className="ml-56">
        <ul className="flex space-x-28">
          <Link to="/">
            <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
              Home
            </li>
          </Link>
          <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
            About
          </li>
          <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
            Recipes
          </li>
          <li className="text-2xl cursor-pointer transition-all duration-300  hover:text-orange-600">
            Blog
          </li>
          <li className="text-2xl cursor-pointer transition-all duration-300 hover:text-orange-600">
            Contact
          </li>
        </ul>
      </nav>
      <div className=" text-4xl cursor-pointer hover:text-orange-600 transition-all duration-300 ml-56  ">
        <CiSearch onClick={handleSearch}/>
      </div>
      {search && <Sidebar search={search} setSearch={setSearch}/>}
    </header>
  );
};

export default Header;
