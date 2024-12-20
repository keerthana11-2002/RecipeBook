import React from "react";
import { useState, useEffect } from "react";
import { idMeals } from "../api/recipesAPI.js";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [recipe, setRecipe] = useState([]);
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
      console.log(allMeals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    recipeDetails();
  }, []);

  const handleClick = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g,"")
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <>
      <div>
        <h1 className="text-4xl py-8 text-center tracking-wide font-bold">
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
                "irresistible ",
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

      <h1 className="text-center text-3xl font-black mb-7 mt-2">
        NEW & TRENDING
      </h1>

      <div className="grid grid-cols-4 gap-12 p-52 -mt-52 cursor-pointer">
        {recipe.map((item) => (
          <div
            key={item.idMeal}
            className="group text-center"
            onClick={() => handleClick(item.idMeal, item.strMeal)}
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="hover:scale-90 transition-all duration-300"
              style={{ width: "300px", borderRadius: "8px" }}
            />
            <h1 className="text-xl font-semibold text-center p-1 text-teal-500  group-hover:text-orange-600 transition-colors duration-300">
              {item.strMeal}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
