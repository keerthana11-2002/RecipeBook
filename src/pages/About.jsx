import React from "react";
import img1 from "/img4.png";
import img2 from "/img3.png";
import img3 from "/img2.png";
import img4 from "/img5.png";

const About = () => {
  return (
    <div className="mt-10 text-xl font-light px-5 md:px-12 mb-44">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-16">
        ABOUT CHEF VENKATESH BHAT
      </h1>

       
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <img
          src={img1}
          alt="Chef Venkatesh Bhat"
          className="w-full md:w-5/12 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
        />
        <p className="text-lg text-gray-700 leading-loose md:w-7/12">
          Chef Venkatesh Bhat is a renowned figure in South Indian cuisine,
          celebrated for his culinary expertise and his ability to bridge the
          worlds of traditional flavors and modern culinary trends. With a
          unique blend of leadership and passion for food, Chef Bhat has
          established himself as a top culinary figure in India and beyond.
          Whether in the kitchen or the boardroom, he has successfully built a
          legacy that reflects his deep commitment to authenticity and
          innovation in cooking. His journey began with training at some of the
          most prestigious hotels in India, such as Taj Coromandel and The Leela
          Palace. This foundation of excellence laid the groundwork for his
          successful venture into restaurant ownership with Billionsmiles
          Hospitality Pvt. Ltd. He brought popular South Indian restaurants like
          Up South and Bon South to life, where the focus on bringing the best
          of South Indian cuisine to the table remains his core philosophy.
        </p>
      </div>

       
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <p className="text-lg text-gray-700 leading-loose md:w-7/12">
          Chef Bhat's captivating television presence further expanded his
          influence, with the hit cooking show <em>Samayal Samayal with Venkatesh
          Bhat</em> (2014-2018) making him a household name. His lighthearted
          approach to cooking, coupled with his in-depth culinary knowledge,
          captivated audiences. He continued his television journey with
          appearances on other shows like <em>Cooku with Comali</em> and{" "}
          <em>Cooku with Kirikku</em>, further solidifying his place in Indian
          popular culture. Although Chef Bhat recently stepped down from his
          role as a judge on <em>Cook With Comali</em>, his passion for South
          Indian food continues to drive him. He remains an influential figure in
          the restaurant and culinary world, continuously exploring new projects
          and initiatives that bring the rich heritage of South Indian cooking to
          a global audience.
        </p>
        <img
          src={img2}
          alt="Chef Bhat TV Appearance"
          className="w-full md:w-5/12 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>

      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src={img3}
          alt="Chef Bhat in Tamil Nadu"
          className="w-full md:w-5/12 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
        <p className="text-lg text-gray-700  leading-loose md:w-7/12">
          Chef Bhat's roots in Tamil Nadu are where his love for cooking
          blossomed. Inspired by his mother and grandmother, both extraordinary
          cooks, he developed a deep fascination with the flavors and techniques
          of traditional South Indian cooking. After studying culinary arts at
          Asan Memorial College and Cornell University, his career in top-tier
          hotels and restaurants took off, where he became known for blending
          traditional recipes with modern culinary techniques. His career is not
          only about his work on television or with his restaurants. Chef Bhat
          is an ambassador for South Indian cuisine on the global stage. Through
          his YouTube channel, he shares his passion for cooking, inspiring a
          new generation of chefs and food lovers to embrace the rich flavors of
          South India. His mission is simple: to ensure the legacy of South
          Indian cuisine lives on, while continuously adapting it to modern
          tastes and trends.
        </p>
      </div>
 
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <p className="text-lg text-gray-700 leading-loose md:w-7/12">
          Today, Chef Venkatesh Bhat stands as an influential figure in the
          culinary world, committed to preserving the rich traditions of South
          Indian cuisine while adding a contemporary touch. His dedication to
          quality ingredients, regional flavors, and innovative cooking methods
          makes him one of the leading figures in the industry, and he continues
          to inspire food enthusiasts everywhere. Chef Venkatesh Bhat's legacy
          goes beyond his culinary expertise. He is a proud advocate of South
          Indian culture and its rich culinary traditions. His goal has always
          been to ensure that the authentic tastes of South India are shared,
          appreciated, and embraced by food lovers worldwide. Through his work,
          Bhat has not only redefined South Indian cuisine but has also educated
          a global audience about the value of preserving culinary traditions
          while embracing innovation. His approach has inspired many chefs to
          follow in his footsteps, and his contributions to Indian cuisine
          continue to have a lasting impact on the food industry both in India
          and abroad.
        </p>
        <img
          src={img4}
          alt="Chef Venkatesh Bhat Legacy"
          className="w-full md:w-5/12 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
