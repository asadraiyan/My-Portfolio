import React from "react";
import HomeImage from "./components/HomeImage";
import HomePageProject from "./components/HomePageProject";
import "./Home.css";
import Skill from "../About/components/Skill";

const Home = () => {
  return (
    <div>
      <HomeImage />
      <HomePageProject />
      <Skill />
    </div>
  );
};

export default Home;
