import React, { useState, useEffect } from "react";

const ReciAdded = () => {
  const [values, setValues] = useState({
    name: "",
    ingredients: "",
    measures: "",
    preparation: "",
  });

  const [recipes, setRecipes] = useState([]);

  const handleClick = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const newRecipe = {
      name: values.name,
      ingredients: values.ingredients,
      measures: values.measures,
      preparation: values.preparation,
    };

    const updatedRecipes = [...existingRecipes, newRecipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
    setValues({
      name: "",
      ingredients: "",
      measures: "",
      preparation: "",
    });
  };

  useEffect(() => {
    const fetchRecipes = () => {
      const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      setRecipes(storedRecipes);
    };
    fetchRecipes();
  }, []);

  const handleDelete = (index) => {
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = existingRecipes.filter((_, i) => i !== index);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };

  return (
    <div className="container mb-32  md:-mt-[700px] -mt-36 ">
      <form
        className="max-w-xl mx-auto lg:mt-[50px] p-8 rounded-lg border"
        onSubmit={handleSubmit}
      >
        <h2 className="md:text-2xl text-xl lg:text-3xl font-bold text-center text-orange-500 mb-8">
          Share Your Delicious Recipe
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Recipe Name
          </label>
          <input
            onChange={handleClick}
            type="text"
            name="name"
            value={values.name}
            placeholder="Enter Recipe Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="ingredients"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Ingredients
          </label>
          <textarea
            onChange={handleClick}
            name="ingredients"
            cols="20"
            rows="5"
            value={values.ingredients}
            placeholder="Enter Ingredients List"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="measures"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Measures
          </label>
          <textarea
            onChange={handleClick}
            name="measures"
            cols="20"
            rows="5"
            value={values.measures}
            placeholder="Enter Measurements"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="preparation"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Preparation
          </label>
          <textarea
            onChange={handleClick}
            name="preparation"
            cols="30"
            rows="5"
            value={values.preparation}
            placeholder="Enter Preparation Details"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 text-white text-lg md:text-xl px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Your Recipes</h3>
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-300 hover:scale-105"
              >
                <div className="p-4">
                  <h4 className="text-xl font-bold text-orange-500">
                    {recipe.name}
                  </h4>
                  <p className="mt-2">
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <p className="mt-2">
                    <strong>Measures:</strong> {recipe.measures}
                  </p>
                  <p className="mt-2">
                    <strong>Preparation:</strong> {recipe.preparation}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No recipes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReciAdded;
