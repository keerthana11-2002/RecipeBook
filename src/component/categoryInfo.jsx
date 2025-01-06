import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer1 from "./Shimmer1";
import { useNavigate } from "react-router-dom";

const CategoryInfo = () => {
  const { strCategory } = useParams();
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCategoryData();
  }, [strCategory]);

  const handleClick = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <div className="pt-[104px]">
      <h1 className="text-center md:mt-6 text-xl sm:text-3xl lg:text-4xl font-black  text-orange-500">
        {strCategory} Recipes
      </h1>
      {loading ? (
        <Shimmer1 />
      ) : meals.length === 0 ? (
        <p className="text-center text-lg sm:text-xl text-gray-500">
          No meals found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-8 lg:p-16 mb-16">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleClick(meal.idMeal, meal.strMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-lg"
              />
              <h2 className="text-base sm:text-xl font-bold text-teal-500 group-hover:text-orange-600 transition-colors duration-300 underline">
                {meal.strMeal}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryInfo;
