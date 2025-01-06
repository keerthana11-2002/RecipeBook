import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Shimmer from "../component/Shimmer";
import logo from "../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchRecipeDetails = async () => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const response = await data.json();
      setResults(response.meals || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (search) {
  //     const formattedSearch = search.replace(/\s+/g, "");
  //     navigate(`/search/${formattedSearch}`);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
     navigate(`/search/${search}`);
    
  };

  const handleClickImages = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [searchQuery]);

  return (
    <div className="lg:mb-10 pt-32 px-4 sm:px-8 lg:px-20 min-h-screen">
      <h1 className="lg:pt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 tracking-widest">
        SEARCH RESULTS FOR :{" "}
        <span className="text-orange-600">{searchQuery.toUpperCase()}</span>
      </h1>

      <div className="flex flex-col md:ml-4  lg:flex-row justify-between items-start gap-10 lg:gap-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow mb-16 md:gap-14">
          {loading ? (
            <Shimmer />
          ) : results.length ? (
            results.map((meal) => (
              <div
                key={meal.idMeal}
                className="group relative rounded-lg shadow-md bg-white overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleClickImages(meal.idMeal, meal.strMeal)}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 ">
                  <h2 className="md:text-xl text-lg font-semibold text-teal-500 group-hover:text-orange-600 transition-colors">
                    {meal.strMeal}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl sm:text-2xl text-black tracking-widest">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>

        <div className="w-full lg:w-[15%] lg:block hidden ">
          <form onSubmit={handleSubmit} className="mb-10">
            <input
              type="text"
              placeholder="Search for recipes"
              value={search}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </form>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={logo}
              alt="Bhat's Kitchen"
              className="w-24 h-24 mx-auto mt-4 rounded-full object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                About Bhat's Kitchen
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm Venkatesh Bhat, a passionate chef creating recipes that form
                lasting memories from one generation to the next. My blog
                showcases true recipes that promise to turn your cooking into
                memorable moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-orange-600 mt-4 text-sm underline hover:text-orange-500"
              >
                Learn more about me
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
