import React, { useState } from "react";
import newsletter from "/newsletter.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" || email.trim() === "") {
      setError("Both fields are required.");
      setSuccessMessage("");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage(`Thank you, ${firstName}, for subscribing!`);
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      setFirstName("");
      setEmail("");
    }
  };

  return (
    <div className="lg:mb-[700px] lg:pt-[50px] ">
      <h1 className="text-xl text-center  lg:text-4xl tracking-wider font-extrabold text-gray-800 mb-8 pt-24">
        NEWSLETTER
      </h1>
      <div className="flex lg:ml-1  -mb-[550px] -ml-[180px]">
        <div
          className="relative bg-cover bg-center text-white ml-52"
          style={{ backgroundImage: `url(${newsletter})`, height: "500px" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 text-center">
            <h1 className="text-2xl lg:text-4xl md:text-5xl font-bold mb-6">
              Join Our Newsletter
            </h1>
            <p className="text-baase lg:text-lg md:text-xl mb-8">
              Stay updated with our latest recipes and tips!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                className="px-4 py-3 w-64 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                value={email}
                className="px-4 py-3 w-64 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-lg rounded-lg text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-orange-800 text-xl mt-4">{error}</p>}
            {successMessage && (
              <p className="text-white text-base lg:text-xl font-bold mt-4">
                {successMessage}
              </p>
            )}
          </div>
        </div>
        <div className="bg-white ml-44  w-[300px] shadow-lg rounded-lg overflow-hidden">
          <img
            src={logo}
            alt="Bhat's Kitchen"
            className="w-32 h-32 mx-auto mt-4 rounded-full object-cover"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              About Bhat's Kitchen
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm Venkatesh Bhat, a passionate chef creating recipes that form
              lasting memories from one generation to the next. My blog
              showcases true recipes that promise to turn your cooking into
              memorable moments.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-orange-600 mt-4 text-sm underline hover:text-orange-500"
            >
              Learn more about me
              <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
