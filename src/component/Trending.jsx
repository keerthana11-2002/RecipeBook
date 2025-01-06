import React, { useState, useEffect } from "react";
import { idMeals } from "../api/recipesAPI.js";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";

const Trending = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const recipeDetails = async () => {
    try {
      const fetchPromise = idMeals.map((id) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      );

      const responses = await Promise.all(fetchPromise);
      const mealsData = await Promise.all(
        responses.map((response) => response.json())
      );
      const allMeals = mealsData.map((meal) => meal.meals[0]);
      setRecipe(allMeals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    recipeDetails();
  }, []);

  const handleClick = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <>
      <div className="pt-20">
        <h1 className="text-xl p-6 mt-3 lg:mt-14 md:text-3xl md:mt-10 lg:text-4xl font-bold text-center tracking-wide py-4">
          Cooking made simple, flavors made{" "}
          <span style={{ color: "rgb(253, 101, 46)" }}>
            <Typewriter
              words={[
                "memorable",
                "unforgettable",
                "heavenly",
                "timeless",
                "exquisite",
                "delightful",
                "magical",
                "extraordinary",
                "sensational",
                "irresistible",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>

      <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-black  ">
        NEW & TRENDING
      </h1>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="grid lg:-mt-10  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 md:p-10 lg:p-16">
          {recipe.map((item) => (
            <div
              key={item.idMeal}
              className="group text-center cursor-pointer"
              onClick={() => handleClick(item.idMeal, item.strMeal)}
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-64 object-cover rounded-lg shadow-md hover:scale-95 transition-transform duration-300"
              />
              <h1 className="text-sm md:text-lg lg:text-lg font-semibold mt-2 text-teal-500 group-hover:text-orange-600 transition-colors duration-300">
                {item.strMeal}
              </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Trending;
