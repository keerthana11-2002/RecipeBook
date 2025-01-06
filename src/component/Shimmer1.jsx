import React from "react";

const Shimmer1 = () => (
  <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-4 sm:p-8 md:p-16 lg:p-36 mt-16 sm:-mt-20 lg:-mt-28">
    {Array(12)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="w-full md:mt-20 h-24 sm:h-32 md:h-40 lg:h-60 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
  </div>
);

export default Shimmer1;
