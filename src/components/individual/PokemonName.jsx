import React from "react";

const PokemonName = ({ pokemonDetails, toggleBookmark, isBookmarked }) => {
  return (
    <div className="relative">
      <div
        className="absolute left-2 top-2 text-2xl cursor-pointer"
        onClick={toggleBookmark}
      >
        {isBookmarked ? "❤️" : "🖤"}
      </div>

      <div className="flex flex-col items-center">
        <div className="absolute right-2 top-2 bg-gray-500 rounded-lg w-12 text-white">
          #{pokemonDetails.order}
        </div>
        <h1 className="text-3xl font-semibold my-8 text-teal-600 ">
          <span>See It's </span>
          <span className="uppercase underline">{pokemonDetails.name}!!!</span>
        </h1>
        <div className="flex flex-col lg:flex-row md:gap-20 gap-1 items-center">
          <div className="image-div">
            <img
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt={pokemonDetails.name}
              className="mx-auto h-40 w-40 border rounded-full image-border"
            />
          </div>

          <div className="image-div">
            <img
              src={pokemonDetails.sprites.other.showdown.front_shiny}
              alt={pokemonDetails.name}
              className="mx-auto h-28 w-40 "
            />
          </div>
          <div className="image-div">
            <img
              src={pokemonDetails.sprites.other.home.front_shiny}
              alt={pokemonDetails.name}
              className="mx-auto h-40 w-40 border rounded-full image-border"
            />
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {pokemonDetails.types.map((type, index) => (
            <li
              key={index}
              className="text-white bg-purple-400 px-2 py-1 rounded-full"
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonName;
