import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ search, setSearch }) => {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchVal) {
      navigate(`/search/${searchVal}`);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-[500px] bg-white transition-transform duration-300 ease-in-out ${
        search ? "translate-x-0" : "-translate-x-full"
      } md:w-96  p-4 z-50 border border-gray-300 w-60`}
    >
      <header className="flex justify-between items-center mt-5">
        <Link to="/" className="flex items-center gap-x-4">
          <img src={logo} alt="logo" className="w-40 -ml-10 md:w-48" />
          <p className="title text-base md:text-2xl">Bhat's Kitchen</p>
        </Link>
        <RxCross2
          className="cursor-pointer text-3xl md:text-4xl"
          onClick={() => setSearch(false)}
        />
      </header>

      <div className="mt-5">
        <form onSubmit={handleSubmit} className="flex flex-col items-start">
          <input
            className="w-full border border-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchVal}
          />
        </form>
      </div>

      <nav className="mt-7 flex flex-col space-y-3">
        <Link to="/" className="text-orange-600 underline text-lg md:text-xl">
          Home
        </Link>
        <Link
          to="/about"
          className="text-orange-600 underline text-lg md:text-xl"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="text-orange-600 underline text-lg md:text-xl"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-orange-600 underline text-lg md:text-xl"
        >
          Contact
        </Link>
        <Link to="/addRecipe">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 w-full p-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-white text-lg md:text-xl font-semibold hover:shadow-orange-600">
            RecipeVault
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
