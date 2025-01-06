import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className="pt-[150px] md:pt-[180px] lg:pt-[150px] px-8 md:px-16 lg:px-32  min-h-screen mb-32">
      <h1 className="lg:visible block text-center text-5xl font-extrabold text-gray-800 mb-12">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 ">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-2/3 text-center -mt-36">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Feel free to reach out to me at
            <span className="text-orange-600 font-semibold">
              {" "}
              bhatskitchen123@gmail.com
            </span>
            . I'm always happy to connect and hear from you.
          </p>
          <p className="text-gray-600 text-lg">
            Whether you have a question about recipes, collaborations, or just
            want to say hello, I'd love to hear from you!
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <form onSubmit={handleSubmit} className="mb-8">
            <input
              type="text"
              placeholder="Search for recipes"
              value={search}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </form>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={logo}
              alt="Bhat's Kitchen"
              className="w-32 h-32 mx-auto mt-4 rounded-full object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                About Bhat's Kitchen
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                I'm Bhat, a passionate chef creating recipes that form lasting
                memories from one generation to the next. My blog showcases true
                recipes that promise to turn your cooking into memorable
                moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center md:text-lg text-orange-600 mt-4 text-sm underline hover:text-orange-500"
              >
                Learn more about me
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
