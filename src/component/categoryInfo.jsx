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
      setMeals(data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleClick = (idMeal, strMeal) => {
    const mealName = strMeal.toLowerCase().replace(/\s+/g, "");
    navigate(`/${idMeal}/${mealName}`);
  };

  return (
    <div className="pt-[104px]">
      <h1 className="text-center text-3xl font-black mt-5 text-orange-500">
        {strCategory} Recipes
      </h1>
      {loading ? (
        <Shimmer1 />
      ) : (
        <div className="grid grid-cols-4 gap-12 p-5 mb-32 cursor-pointer">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-2 group"
              onClick={() => handleClick(meal.idMeal, meal.strMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold  text-teal-500  group-hover:text-orange-600 transition-colors duration-300 underline">
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
