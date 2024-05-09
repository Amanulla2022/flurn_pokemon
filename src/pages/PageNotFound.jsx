import React from "react";
import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <p className="text-bold text-2xl text-red-500">
        I guess You have came to wrong path do one thing go to home page :)
      </p>

      <div>
        <Link
          className="m-8 flex items-center gap-4 bg-gray-600 p-2 rounded-xl text-white"
          to="/"
        >
          <GrLinkPrevious /> Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
