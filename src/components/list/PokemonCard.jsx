import React, { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [isFront, setIsFront] = useState(true);

  const handleMouseEnter = () => {
    setIsFront(false);
  };

  const handleMouseLeave = () => {
    setIsFront(true);
  };

  return (
    <div
      className={`max-w-sm relative rounded-xl overflow-hidden shadow-lg bg-gray-400 ${
        isFront ? "" : "rotate-y-180"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute right-2 top-2 bg-purple-500 rounded-lg text-white p-1">
        #{pokemon.order}
      </div>
      <div className="w-full h-300 flex">
        <img
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          className={`w-full h-full object-cover ${
            isFront ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={`w-3/4 h-full object-cover ${
            isFront ? "" : "opacity-100"
          }`}
        />
      </div>
      <div className="px-6 py-4">
        <div
          className={`font-bold text-xl mb-2 text-white underline ${
            isFront ? "" : "rotate-y-180"
          }`}
        >
          {isFront ? pokemon.name.toUpperCase() : "More Details"}
        </div>
        {isFront ? (
          <>
            <div className={`mb-2 ${isFront ? "" : "rotate-y-180"}`}>
              Base Experience: <span>{pokemon.base_experience} level</span>
            </div>
            <div className={`mb-2 ${isFront ? "" : "rotate-y-180"}`}>
              Species: <span>{pokemon.species.name}</span>
            </div>
          </>
        ) : (
          <>
            <div className="mb-2">
              Height: <span>{pokemon.height} cm</span>
            </div>
            <div className="mb-2">
              Weight: <span>{pokemon.weight} kg</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
