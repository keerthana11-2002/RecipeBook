import { useNavigate } from "react-router-dom";
import { recImages } from "../api/recimages";

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div>
      <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-black  mt-5">
        FLAVORS TO EXPLORE
      </h1>

      <div
        id="horizontal-scroll"
        className="w-full overflow-x-auto scrollbar-hide flex space-x-5 sm:space-x-8 p-4 md:p-6 lg:p-10 rounded-3xl shadow-lg cursor-pointer"
      >
        {recImages.map((item) => {
          return (
            <div
              key={item.name}
              className="group flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-xl hover:border border-orange-600 shadow-md flex flex-col items-center space-y-3 p-4 hover:scale-105 transition-transform duration-300"
              onClick={() => handleClick(item.name)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-2xl"
              />
              <h1 className="text-base md:text-xl lg:text-xl font-semibold text-teal-500 group-hover:text-orange-600">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
