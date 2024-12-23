import React from "react";

const Shimmer = () => (
  <div className="grid grid-cols-4 gap-12 p-52 -mt-52">
    {Array(8)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="w-48 h-48 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
  </div>
);

export default Shimmer;
