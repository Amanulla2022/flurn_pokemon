import React from "react";
import imageUrl from "../../images/poko.png";
import MyDetails from "./MyDetails";

const RotatingImage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="relative">
        <img src={imageUrl} alt="Rotating" className="h-28 w-28 animate-spin" />
      </div>
      <MyDetails />
    </div>
  );
};

export default RotatingImage;
