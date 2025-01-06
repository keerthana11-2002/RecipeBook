import React, { useState } from "react";
import img1 from "/image2.png";
import img2 from "/image1.png";
import img3 from "/image3.png";
import img4 from "/im4.png";
import { useNavigate } from "react-router-dom";

const About = () => {
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
    <div className="text-xl font-light px-5 md:px-12 mb-44 pt-[140px] text-center">
      <div className="flex justify-around">
        <h1 className="md:mt-4 md:ml-32 lg:mt-2 text-center ml-10 -mt-10 text-xl  lg:ml-96  md:text-4xl font-extrabold text-gray-800 mb-16 ">
          ABOUT CHEF BHAT
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="-ml-72 lg:ml-20 mt-4 md:hidden block lg:block lg:mt-1 mb-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 "
            type="text"
            placeholder="Search for Recipes"
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>
      <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <img
          src={img1}
          alt="Chef Bhat"
          className="w-full lg:w-[600px] md:w-9/12  rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
        />
        <p className="text-lg text-gray-700 leading-loose ">
          Hello there! I'm Chef Bhat, the heart and soul behind Bhat's Kitchen.
          I renowned figure in North and South Indian cuisine. and ability to
          bridge the worlds of traditional flavors and modern culinary trends.
          With a unique blend of leadership and passion for food, I have
          established himself as a top culinary figure in India and beyond.
          Whether in the kitchen or the boardroom, I have successfully built a
          legacy that reflects his deep commitment to authenticity and
          innovation in cooking. My journey began with training at some of the
          most prestigious hotels in India, such as Taj Coromandel and The Leela
          Palace. This foundation of excellence laid the groundwork for his
          successful venture into restaurant ownership with Billionsmiles
          Hospitality Pvt. Ltd.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <p className="text-lg text-gray-700 leading-loose ">
          My lighthearted approach to cooking, coupled with his in-depth
          culinary knowledge, captivated audiences. I continued in television
          journey with appearances on other shows like{" "}
          <em>Cooku with Comali</em> and <em>Cooku with Kirikku</em>, further
          solidifying my place in Indian popular culture. Although I recently
          stepped down from his role as a judge on <em>Cook With Comali</em>,
          this is my passion for South Indian food continues to drive. It
          remains an influential figure in the restaurant and culinary world,
          continuously exploring new projects and initiatives that bring the
          rich heritage of South Indian cooking to a global audience.
        </p>
        <img
          src={img2}
          alt="Chef Bhat TV Appearance"
          className="w-full md:w-9/12 lg:w-[600px] rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>

      <div className="hidden lg:flex flex-row items-center gap-8 mb-12">
        <img
          src={img3}
          alt="Chef Bhat in Tamil Nadu"
          className="w-full md:w-9/12 lg:w-[600px] rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
        <p className="text-lg text-gray-700  leading-loose ">
          My roots in Tamil Nadu are where I love for cooking blossomed. I
          inspired by my mother and grandmother, both extraordinary cooks, I
          developed a deep fascination with the flavors and techniques of
          traditional South Indian cooking. After studying culinary arts at Asan
          Memorial College and Cornell University, my career in top-tier hotels
          and restaurants took off, where I became known for blending
          traditional recipes with modern culinary techniques.My career is not
          only about work on television or with my restaurants. I am ambassador
          for South Indian cuisine on the global stage. Through my YouTube
          channel, I shares my passion for cooking, inspiring a new generation
          of chefs and food lovers to embrace the rich flavors of South India.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <p className="text-lg text-gray-700 leading-loose ">
          Today, I stands as an influential figure in the culinary world,
          committed to preserving the rich traditions of South Indian cuisine
          while adding a contemporary touch. My dedication to quality
          ingredients, regional flavors, and innovative cooking methods makes me
          one of the leading figures in the industry, and I continues to inspire
          food enthusiasts everywhere. My legacy goes beyond his culinary
          expertise. He is a proud advocate of South Indian culture and its rich
          culinary traditions. His goal has always been to ensure that the
          authentic tastes of South India are shared, appreciated, and embraced
          by food lovers worldwide. Through his work, Bhat has not only
          redefined South Indian cuisine but has also educated a global audience
          about the value of preserving culinary traditions while embracing
          innovation.
        </p>
        <img
          src={img4}
          alt="Chef Venkatesh Bhat Legacy"
          className="w-full md:w-9/12 lg:w-[600px] rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
