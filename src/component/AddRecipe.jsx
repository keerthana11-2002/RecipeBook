import React, { useState } from "react";
import ReciAdded from "./ReciAdded";

const AddRecipe = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className=" rounded-lg p-10  max-w-4xl text-center md:-mt-[630px] -mt-32 lg:pt-[550px]">
          <h1 className="md:text-2xl text-xl lg:text-4xl font-bold text-orange-500 mb-6">
            Share Your Recipes, Inspire the World!
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Turn your kitchen creations into a global sensation! Share your
            unique recipes on our Recipe Book website, inspire others, and join
            a community that celebrates culinary art. Whether it's a family
            favorite or a new dish, your recipe deserves the spotlight. Every
            dish tells a story—let yours shine!
          </p>

          <button
            onClick={handleClick}
            className="bg-orange-500 text-white text-lg px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition duration-300"
          >
            {loading ? "Close Recipe Form" : "Add Your Recipe Now"}
          </button>
        </div>
      </div>
      {loading && <ReciAdded />}
    </>
  );
};

export default AddRecipe;
