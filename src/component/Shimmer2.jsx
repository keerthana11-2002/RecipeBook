import React from "react";

const Shimmer2 = () => {
  return (
    <div className="flex  justify-center space-x-4 p-5">
      <div className="bg-gray-200 animate-pulse rounded-lg  mb-5 w-[50%] h-[500px] max-w-[1000px] shadow-lg transition-transform hover:scale-105 mr-24 mt-20"></div>
      <div className="bg-gray-200 animate-pulse shadow-lg w-[20%] max-w-72 mt-32 h-[400px] mx-auto rounded-2xl overflow-hidden mr-44 mb-60 "></div>
    </div>
  );
};

export default Shimmer2;
