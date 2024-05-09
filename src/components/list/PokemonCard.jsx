import React, { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [isFront, setIsFront] = useState(true);
  const [backColor] = useState(generateRandomGradient());

  const handleMouseEnter = () => {
    setIsFront(false);
  };

  const handleMouseLeave = () => {
    setIsFront(true);
  };

  function generateRandomGradient() {
    const randomHue = Math.floor(Math.random() * 360);
    return `hsl(${randomHue}, 70%, 50%)`;
  }

  return (
    <div
      className={`max-w-sm relative  rounded-xl overflow-hidden shadow-lg h-72 md:66  ${
        isFront ? "" : "rotate-y-180"
      }`}
      style={{ backgroundColor: backColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute right-2 top-2 bg-purple-500 rounded-lg text-white p-1">
        #{pokemon.order}
      </div>
      <div>
        <div className="flex flex-col justify-center gap-8 items-center ">
          {isFront ? (
            <>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="h-36 w-36"
              />
              <p className="text-xl text-gray-800 bg-gray-300 w-full flex items-center justify-center">
                {pokemon.name}
              </p>
              <ul className="flex flex-wrap gap-2">
                {pokemon.types.map((type, index) => (
                  <li
                    key={index}
                    className="text-white bg-black px-2 py-1 rounded-full"
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <img
                src={pokemon.sprites.other.home.front_shiny}
                alt={pokemon.name}
                className="h-36 w-36"
              />
              <p className="text-xl text-gray-800 bg-gray-200 w-full flex items-center justify-center">
                {pokemon.name}
              </p>
              <ul className="flex flex-wrap item-center justify-center gap-2 pl-2 bg-black text-white w-full">
                <p>Abilities :</p>
                {pokemon.abilities.map((ability, index) => (
                  <span>
                    {ability.ability.name}
                    {index !== pokemon.abilities.length - 1 && ","}
                  </span>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
