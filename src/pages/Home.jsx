import React from "react";
import Trending from "../component/Trending";
import Explore from "../component/Explore";
import Search from "../component/search";
import RecentReci from "../component/RecentReci";
import Recently from "../component/Recently";

const Home = () => {
  return (
    <div>
      <Trending />
      <Explore />
      <Search />
      <RecentReci />
      <Recently />
    </div>
  );
};

export default Home;
