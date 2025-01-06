import React from "react";

const Shimmer = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6  p-8 sm:p-16 lg:p-24   sm:-mt-24 lg:-mt-52 ml-8 sm:-ml-12 lg:-ml-20">
    {Array(8)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="w-32 h-32 lg:mt-36 lg:ml-20  sm:w-40 md:mt-16 md:ml-14 sm:h-40 lg:w-48 lg:h-48 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
  </div>
);

export default Shimmer;
