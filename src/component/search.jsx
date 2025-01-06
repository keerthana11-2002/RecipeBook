import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo.png";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="md:text-2xl md:mt-20 text-lg sm:text-xl lg:text-3xl mt-10 lg:mt-20 font-black">
          SEARCH RECIPES
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-5 lg:mt-8 w-72 sm:w-96 lg:w-[900px] xl:w-[1100px] text-black border border-black rounded-lg p-2 focus:outline-none focus:border-orange-500"
            type="text"
            placeholder="Search for a recipe + hit enter"
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>

      <div className="bg-gray-100 shadow-lg mt-12 lg:mt-20 flex flex-col lg:flex-row w-[90%] lg:w-[70%] max-w-[1000px] mx-auto rounded-2xl overflow-hidden">
        <div className="w-full lg:w-1/3 flex justify-center items-center p-6 bg-white">
          <img
            src={logo}
            alt="Bhat's Kitchen"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-full lg:h-auto rounded-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-center w-full lg:w-2/3">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            ABOUT BHAT'S KITCHEN
          </h1>
          <p className="text-gray-600 text-sm md:text-lg sm:text-base lg:text-xl leading-relaxed">
            I'm Bhat, author and owner of Bhat's Kitchen. I am a trained chef
            and passionate about good food, cooking for family and friends, and
            creating recipes that form lasting memories from one generation to
            the next.
          </p>
          <Link to="/about">
            <p className="text-orange-600 mt-6 sm:mt-10 lg:mt-16 text-sm sm:text-base lg:text-xl flex gap-1 justify-center lg:justify-start items-center underline hover:text-orange-700 transition-all duration-300 md:text-lg">
              Learn more about me <BsArrowRight className="text-orange-600" />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
