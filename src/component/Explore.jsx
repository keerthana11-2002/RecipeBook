import { useNavigate } from "react-router-dom";
import { recImages } from "../api/recimages";

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-black -mt-32 mb-5">
        FLAVORS TO EXPLORE
      </h1>

      <div
        id="horizontal-scroll"
        className="w-full overflow-x-auto scrollbar-hidden animate-horizontal flex space-x-10 p-10 rounded-3xl shadow-lg cursor-pointer"
        style={{ borderRadius: "12px" }}
      >
        {recImages.map((item, index) => {
          return (
            <div
              key={index}
              className="group min-w-[300px] bg-white rounded-xl hover:border border-orange-600 shadow-md flex flex-col items-center space-y-2 p-4 -mt-5 hover:scale-105 transition-transform duration-300"
              onClick={() => handleClick(item.name)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-86 h-52 object-cover rounded-2xl"
              />
              <h1 className="text-xl font-semibold text-teal-500 group hover:text-orange-600">
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
