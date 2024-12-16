import React from "react";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";

const Sidebar = ({ search, setSearch }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-[750px] bg-white transition-transform duration-300 ease-in-out ${
        search ? "translate-x-0" : "-translate-x-full"
      } w-96 p-4 z-50 border border-gray-300`}
    >
      <header className="flex mt-10 ">
        <div className="flex -mt-10 gap-x-4">
          <img src={logo} alt="logo" className="w-48  -ml-10" />
          <p className="title">Bhat's Kitchen</p>
        </div>
        <div>
          
          <RxCross2 className="cursor-pointer text-4xl  ml-10 -mt-7" onClick={() => setSearch(false)} />
        </div>
      </header>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="text-xl border border-gray-200 py-2 px-10 mt-10"
        />
      </div>

      <div className="mt-7">
        <p className="text-orange-600 underline text-xl mb-2 ">Home</p>
        <p className="text-orange-600 underline text-xl mb-2">About</p>
        <p className="text-orange-600 underline text-xl mb-2">Recipes</p>
        <p className="text-orange-600 underline text-xl mb-2">Blog</p>
        <p className="text-orange-600 underline text-xl mb-2">Contact</p>
      </div>
    </div>
  );
};

export default Sidebar;
