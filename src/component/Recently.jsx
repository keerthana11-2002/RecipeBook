import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { idMeals1 } from "../api/recipesAPI";
import Shimmer from "./Shimmer";

const Recently = () => {
  const [recently, setRecently] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getRecently = async () => {
    try {
      const fetchDetails = idMeals1.map((id) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      );
      const responses = await Promise.all(fetchDetails);
      const mealsData = await Promise.all(
        responses.map((response) => response.json())
      );
      const allData = mealsData.map((meal) => meal.meals[0]);
      setRecently(allData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recently updated meals:", error);
    }
  };

  useEffect(() => {
    getRecently();
  }, []);

  const handleClickImages = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h1 className="text-center md:mb-10 text-xl sm:text-2xl lg:text-3xl font-black mt-10 sm:mt-16 lg:mt-20 mb-6">
        RECENTLY UPDATED
      </h1>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-2  mb-20 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8  lg:gap-12">
          {recently.map((item) => (
            <div
              key={item.idMeal}
              className="group text-center cursor-pointer"
              onClick={() => handleClickImages(item.idMeal, item.strMeal)}
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="hover:scale-90 transition-transform duration-300 w-full sm:w-[200px] lg:w-[300px] mx-auto rounded-lg"
              />
              <h1 className="text-sm sm:text-xl font-semibold text-teal-500 group-hover:text-orange-600 transition-colors duration-300 mt-2">
                {item.strMeal}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recently;
