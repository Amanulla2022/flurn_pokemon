import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-[999]">
      <div className="flex items-center justify-between h-20 px-4 md:mx-8 mx-1">
        <div className="flex items-center">
          <img src={logo} alt="Logo of Pokemon" className="w-28 mr-4" />
          <h1 className="text-2xl font-bold text-teal-700 sm:block hidden">
            Pokémon App
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="bg-gray-100 p-2 rounded-lg">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li className="bg-gray-100 p-2 rounded-lg">
              <Link to="/fav" className="text-gray-700 hover:text-gray-900">
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
