import React from "react";
import Typical from "react-typical";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl py-20 text-center tracking-wide">
          Cooking made simple, flavors made {" "}
          <Typical className="text-orange-600"
            loop={Infinity}
            wrapper="b"
            steps={["memorable", 2000, "unforgettable", 2000, "heavenly", 2000]}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
