import React, { useState } from "react";
import logo1 from "../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";

const RecipeBookBlog = () => {
  const [values, setValues] = useState("");

  const handleClick = () => {
    setValues(
      "Your order has been placed successfully. Payment details and confirmation will be displayed on the screen shortly."
    );
    setTimeout(() => {
      setValues("");
    }, 3000);
  };
  return (
    <div className="pt-14 lg:pt-24 pb-16 px-6 md:px-20 lg:px-40  mb-20">
      <h1 className="text-xl md:mt-20 md:text-2xl lg:text-4xl font-extrabold text-center text-gray-800 mb-4 lg:mb-6 mt-12">
        Bhat's Kitchen Recipe Book : A Culinary Journey
      </h1>
      <p className="text-lg  text-gray-600 leading-relaxed text-center mb-12">
        Discover the essence of timeless recipes with Bhat's Kitchen's very own
        recipe book. Packed with authentic flavors, cherished memories, and
        easy-to-follow instructions, this book is your ultimate guide to
        becoming a master chef at home.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <img
          src={logo1}
          alt="Bhat's Kitchen Recipe Book"
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md mb-8 md:mb-0"
        />

        <div className="md:ml-10 lg:ml-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-4">
            Why This Book is Special
          </h2>
          <p className=" lg:text-lg  text-gray-600 mb-4 leading-relaxed">
            From traditional Indian recipes passed down through generations to
            modern twists on global cuisines, this book has it all. Each recipe
            is crafted with love and tested to perfection. Whether you're a
            novice or an experienced cook, these recipes are designed to make
            cooking joyful and rewarding.
          </p>
          <p className=" lg:text-lg text-gray-600 leading-relaxed">
            You'll find step-by-step instructions, cooking tips, and personal
            notes from me, Bhat, sharing the inspiration behind each dish. It's
            not just a cookbook; it's a story of passion, family, and food.
          </p>
        </div>
      </div>

      <div className="rounded-lg p-6 mb-16">
        <h2 className="text-xl md:text-2xl -mt-14 lg:text-2xl font-bold text-gray-700 mb-4">
          What's Inside the Book?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 lg:text-lg leading-relaxed">
          <li className="mb-3">
            Over 100 tried-and-tested recipes ranging from starters to desserts.
          </li>
          <li className="mb-3">
            Secret techniques to achieve authentic flavors.
          </li>
          <li className="mb-3">
            Inspiring stories behind iconic dishes from Bhat's Kitchen.
          </li>
          <li className="mb-3">High-quality videos to guide you visually.</li>
        </ul>
      </div>

      <div className="mb-16 md:mt-20 ">
        <h2 className="text-xl md:text-2xl -mt-14 lg:text-3xl font-bold text-gray-700 text-center mb-6">
          A Sneak Peek at Our Favorite Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              General Tso's Chicken
            </h3>
            <p className="text-gray-600 ">
              A creamy and rich curry that's perfect with naan or rice. A true
              favorite for every occasion.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Lamb Biryani
            </h3>
            <p className="text-gray-600">
              A fragrant medley of spiced rice and fresh meat. Simple, yet
              unforgettable.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Sticky Toffee Pudding
            </h3>
            <p className="text-gray-600">
              Sweet dumplings soaked in cardamom-flavored syrup. A dessert to
              cherish.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-4">
          Order Your Copy Today
        </h2>
        <p className="lg:text-lg text-gray-600 leading-relaxed mb-6">
          Don't miss out on this culinary treasure. Join thousands of food
          enthusiasts who are exploring the art of cooking with Bhat's Kitchen.
          Whether it's for you or as a gift for someone special, this book is a
          must-have!
        </p>
        <button
          onClick={handleClick}
          className="inline-block bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-500 transition"
        >
          Order Now <BsArrowRight className="inline ml-2" />
        </button>
        {values && (
          <p className="text-base md:text-xl lg:text-2xl font-bold mt-4 text-center text-orange-600">
            {values}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md">
        <img src={logo1} alt="Bhat's Kitchen" className=" h-16 " />
        <p className="text-gray-600">
          Crafted with love by <span className="font-bold">Bhat's Kitchen</span>
          . Your journey to amazing flavors starts here.
        </p>
      </div>
    </div>
  );
};

export default RecipeBookBlog;
