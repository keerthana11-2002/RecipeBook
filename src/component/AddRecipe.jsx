import React, { useState } from "react";
import ReciAdded from "./ReciAdded";

const AddRecipe = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-[530px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-6 md:p-10 max-w-lg md:max-w-2xl lg:max-w-6xl text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Turn your kitchen creations into a global sensation! Share your
            unique recipes on our Recipe Book website, inspire others, and join
            a community that celebrates culinary art. Whether it's a family
            favorite or a new dish, your recipe deserves the spotlight. Every
            dish tells a story—let yours shine!
          </p>

          <button
            onClick={handleClick}
            className="bg-orange-500 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 mb-16  rounded-full font-semibold shadow-md hover:bg-orange-600 transition duration-300"
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
