import React from "react";
import Search from "../components/search/Search";
import RotatingImage from "../components/search/RotatingImage";
import backgroundImage from "../images/bg.jpg";

const Main = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.9,
        }}
      />

      <div className="relative z-10">
        <Search />
        <RotatingImage />
      </div>
    </div>
  );
};

export default Main;
