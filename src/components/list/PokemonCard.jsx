import React, { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [isFront, setIsFront] = useState(true);

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="max-w-sm relative rounded overflow-hidden shadow-lg bg-white">
      <div className="absolute right-2 top-2 bg-red-500 rounded-lg text-white">
        #{pokemon.order}
      </div>
      {isFront ? (
        <div className="front">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {pokemon.name.toUpperCase()}
            </div>
            <div className="mb-2">
              Base Experience: {pokemon.base_experience}
            </div>
            <div className="mb-2">Species: {pokemon.species.name}</div>

            <button
              onClick={toggleCard}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      ) : (
        <div className="back">
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">More Details</div>

            <div className="mb-2">Height: {pokemon.height}</div>
            <div className="mb-2">Weight: {pokemon.weight}</div>

            <button
              onClick={toggleCard}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
