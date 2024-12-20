 import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Bhat from "/img1.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const RecipeDetails = () => {
  const { idMeal, strMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [idMeal]);

  if (!recipeDetails) {
    return <div className="text-center text-xl font-bold mt-10">Loading...</div>;
  }

  const videoId = recipeDetails.strYoutube?.split("v=")[1]?.split("&")[0];
 

  return (
    <div className="p-10 text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-5 text-orange-600">{recipeDetails.strMeal.toUpperCase()}</h1>

      <div className="flex justify-evenly flex-wrap items-start ">
        
        <img
          src={recipeDetails.strMealThumb}
          alt={recipeDetails.strMeal}
          className="rounded-lg mb-5 w-[50%] h-[550px] max-w-[1000px] shadow-lg transition-transform hover:scale-105 ml-44 mt-5"
        />

   
        <div className="bg-gray-200 shadow-lg w-[30%] max-w-72 mx-auto rounded-2xl overflow-hidden mr-44 mt-10">
          <img
            src={Bhat}
            alt="Bhat's Kitchen"
            className="w-40 mx-auto rounded-full p-4 object-cover"
          />
          <div className="p-5 ">
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              ABOUT BHAT'S KITCHEN
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              I'm Venkatesh Bhat, a passionate chef creating recipes that form lasting memories from one generation to the next. My blog showcases true recipes that promise to turn your cooking into memorable moments.
            </p>
            <Link to="/about">
              <p className="text-orange-600 mt-4 text-lg flex justify-center items-center gap-2 underline">
                Learn more about me <BsArrowRight />
              </p>
            </Link>
          </div>
        </div>
      </div>

    
      <div className="mt-8 p-4 mb-28 bg-white rounded-lg shadow-md mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Instructions & Details
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          {recipeDetails.strInstructions}
        </p>
        <div className="flex ml-72 text-lg">
        <p className="mt-4 text-gray-500">
          <strong>Category:</strong> {recipeDetails.strCategory}
        </p>
        <p className=" text-gray-500 ml-64 mt-3">
          <strong>Cuisine:</strong> {recipeDetails.strArea}
        </p>

</div>
<div className="text-center text-xl text-blue-700  mt-8 underline">
        <Link to={`https://www.youtube.com/embed/${videoId}`}>Recipe Preparation Video</Link>
        </div>
        <div className="flex justify-between mt-6">
          <ul className="text-left ml-20">
            <h3 className="text-xl font-bold text-gray-700 mb-2 ">
              Ingredients:
            </h3>
            {Object.keys(recipeDetails)
              .filter(
                (key) =>
                  key.includes("strIngredient") && recipeDetails[key]
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
              .filter(
                (key) => key.includes("strMeasure") && recipeDetails[key]
              )
              .map((measureKey) => (
                <li key={measureKey} className="text-gray-600 text-md">
                  - {recipeDetails[measureKey]}
                </li>
              ))}
          </ul>
        </div>
      </div>


     
      {/* {videoId && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Watch Recipe Preparation
          </h2>
          <div className="video-container rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
            <iframe
              width="50%"
              height="3"
              src=
              title="YouTube video player"
              frameBorder="0"
              className="rounded-lg "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default RecipeDetails;
