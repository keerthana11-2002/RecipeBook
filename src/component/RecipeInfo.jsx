import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Shimmer2 from "./Shimmer2";

const RecipeDetails = () => {
  const { idMeal } = useParams();

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
      setLoading(true);
      console.log(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  if (!recipeDetails) {
    return <Shimmer2 />;
  }

  const videoId = recipeDetails.strYoutube
    ? recipeDetails.strYoutube.split("v=")[1]?.split("&")[0]
    : null;

  return (
    <div className="p-10 pt-[150px] text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-5 text-orange-600">
        {recipeDetails.strMeal}
      </h1>

      <div className="flex justify-evenly flex-wrap items-start">
        <img
          src={recipeDetails.strMealThumb}
          alt={recipeDetails.strMeal}
          className="rounded-lg mb-5 w-[50%] h-[550px] max-w-[1000px] shadow-lg transition-transform hover:scale-105 ml-44 mt-5"
        />

        <div className="bg-gray-200 shadow-lg w-[30%] max-w-72 mx-auto rounded-2xl overflow-hidden mr-44 mt-10">
          <img
            src={logo}
            alt="Bhat's Kitchen"
            className="w-40 mx-auto rounded-full p-4 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              ABOUT BHAT'S KITCHEN
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              I'm Venkatesh Bhat, a passionate chef creating recipes that form
              lasting memories from one generation to the next. My blog
              showcases true recipes that promise to turn your cooking into
              memorable moments.
            </p>
            <Link to="/about">
              <p className="text-orange-600 mt-4 text-lg flex justify-center items-center gap-2 underline">
                Learn more about me <BsArrowRight className="mt-1 -ml-1" />
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 mb-28 bg-white rounded-lg shadow-md mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Instructions & Details
        </h2>
        <ol className="text-xl leading-loose text-left list-decimal list-inside">
          {recipeDetails.strInstructions
            .split(".")
            .filter((instruction) => instruction.trim() !== "") // Ensure no empty instructions
            .map((instruction, index) => (
              <li key={index} className="text-gray-700 mb-4">
                {instruction.trim()}.
              </li>
            ))}
        </ol>

        <div className="flex ml-72 text-lg">
          <p className="mt-4 text-gray-500">
            <strong>Category:</strong> {recipeDetails.strCategory}
          </p>
          <p className="text-gray-500 ml-64 mt-3">
            <strong>Cuisine:</strong> {recipeDetails.strArea}
          </p>
        </div>
        <div className="text-center text-xl text-blue-700 mt-8 underline">
          {videoId ? (
            <a
              href={`https://www.youtube.com/embed/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Preparation Video
            </a>
          ) : (
            "Sorry! Video is unavailable"
          )}
        </div>
        <div className="flex justify-between mt-6">
          <ul className="text-left ml-20">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Ingredients:
            </h3>
            {Object.keys(recipeDetails)
              .filter(
                (key) => key.includes("strIngredient") && recipeDetails[key]
              )
              .map((ingredientKey) => (
                <li key={ingredientKey} className="text-gray-600 text-md">
                  - {recipeDetails[ingredientKey]}
                </li>
              ))}
          </ul>
          <ul className="text-left mr-20">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Measures:</h3>
            {Object.keys(recipeDetails)
              .filter((key) => key.includes("strMeasure") && recipeDetails[key])
              .map((measureKey) => (
                <li key={measureKey} className="text-gray-600 text-md">
                  - {recipeDetails[measureKey]}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
