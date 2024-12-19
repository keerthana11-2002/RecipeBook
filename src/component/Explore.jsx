// // import React, { useState, useEffect } from "react";
// import { recImages } from "../api/recimages";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import  recImages  from "../api/recimages";

// const Explore = () => {
//   //   const [exploreReci, setExploreReci] = useState([]);

//   //   const categoryAPI = async () => {
//   //     const data = await fetch(
//   //       "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
//   //     );
//   //     const response = await data.json();
//   //     setExploreReci(response.meals);
//   //   };
//   //   useEffect(() => {
//   //     categoryAPI();
//   //   }, []);

//   return (
//     <div>
//       <h1 className="text-center text-3xl font-black -mt-36 mb-5">
//         FLAVORS TO EXPLORE
//       </h1>
//       <Swiper spaceBetween={50} slidesPerView={1}>
//       {recImages.map((item) => (
//         <SwiperSlide key={item.id}>
//           <img src={item.img} alt={item.name} />
//           <h1>{item.name}</h1>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//       {/* <div>
//         {recImages.map((item) => {
//           return (
//             <div>
//               <h1>{item.name}</h1>
//               <img src={item.img} />
//             </div>
//           );
//         })}
//       </div> */}
//     </div>
//   );
// };

// export default Explore;
import { recImages } from "../api/recimages"; // Adjust based on export type
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Explore = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-black -mt-32 mb-5">
        FLAVORS TO EXPLORE
      </h1>
       
      <div id="horizontal-scroll"
  className="w-full overflow-x-auto scrollbar-hidden animate-horizontal flex space-x-10 p-10 rounded-3xl shadow-lg cursor-pointer "
  style={{ borderRadius: "12px" }}
>
  {recImages.map((item, index) => {
    return (
      <div
        key={index}
        className="group min-w-[300px] bg-white rounded-xl hover:border border-orange-600 shadow-md flex flex-col items-center space-y-2 p-4 -mt-5 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-86 h-52 object-cover rounded-2xl"
        />
        <h1 className="text-xl font-semibold text-teal-500 group hover:text-orange-600">{item.name}</h1>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default Explore;
