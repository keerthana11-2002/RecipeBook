import React from "react";

const Shimmer1 = () => (
  <div className="grid grid-cols-3 gap-12 p-36 -mt-28">
    {Array(12)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="w-82 h-60 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
  </div>
);

export default Shimmer1;
