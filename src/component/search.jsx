import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo.png";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchRecipeDetails = async (query) => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const response = await data.json();
      console.log(response.meals);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/${search}`);
      fetchRecipeDetails(search);
    }
  };

  return (
    <>
      <div className="ml-52">
        <h1 className="text-3xl mt-20 font-black">SEARCH RECIPES</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-8 w-[1100px] text-black border border-black p-2"
            type="text"
            placeholder="search for a recipe + hit enter"
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>

      <div className="bg-gray-100 shadow-lg mt-20 flex w-[70%] max-w-[1000px] mx-auto rounded-2xl overflow-hidden ">
        <img
          src={logo}
          alt="Bhat's Kitchen"
          className="w-1/3 rounded-full p-4 object-cover "
        />

        <div className="p-6 flex flex-col justify-center w-2/3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            ABOUT BHAT'S KITCHEN
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed ">
            I'm Bhat, author and owner of Bhat's Kitchen. I am a trained chef
            and passionate about good food, cooking for family and friends, and
            creating recipes that form lasting memories from one generation to
            the next.
          </p>
          <Link to="/about">
            <p className="text-orange-600 mt-20 ml-96 text-xl flex gap-1 underline-text">
              Learn more about me{" "}
              <BsArrowRight className="text-orange-600 mt-1.5 " />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
