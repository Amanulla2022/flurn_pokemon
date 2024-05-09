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
      className={`max-w-sm relative  rounded-xl overflow-hidden shadow-lg  ${
        isFront ? "" : "rotate-y-180"
      }`}
      style={{ backgroundColor: backColor }}
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
          className={`image-of-pokemon ${
            isFront ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={`image-of-pokemon ${isFront ? "" : "opacity-100"}`}
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
            <div className={`common-b-margin ${isFront ? "" : "rotate-y-180"}`}>
              Base Experience: <span>{pokemon.base_experience} level</span>
            </div>
            <div className={`common-b-margin ${isFront ? "" : "rotate-y-180"}`}>
              Species: <span>{pokemon.species.name}</span>
            </div>
          </>
        ) : (
          <>
            <div className="common-b-margin">
              Height: <span>{pokemon.height} cm</span>
            </div>
            <div className="common-b-margin">
              Weight: <span>{pokemon.weight} kg</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
