import React, { useEffect, useState } from "react";
import { idMeals2 } from "../api/recipesAPI";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";

const RecentReci = () => {
  const [recentReci, setRecentReci] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const getRecentReci = async () => {
    try {
      const fetchDetails = idMeals2.map((id) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      );
      const responses = await Promise.all(fetchDetails);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      const mealsData = data.map((meal) => meal.meals[0]);
      setRecentReci(mealsData);
      setloading(false);
    } catch (error) {
      console.error("Error Fetching Recipes:", error);
    }
  };

  useEffect(() => {
    getRecentReci();
  }, []);

  const HandleClickImages = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-black mt-20 mb-8">
        RECENT RECIPES
      </h1>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-4 gap-12 p-52 -mt-52 cursor-pointer">
          {recentReci.map((item) => {
            return (
              <div
                className="group text-center"
                key={item.idMeal}
                onClick={() => HandleClickImages(item.idMeal, item.strMeal)}
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentReci;
