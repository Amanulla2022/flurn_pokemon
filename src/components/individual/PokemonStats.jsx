import React from "react";

const PokemonStats = ({ pokemonDetails }) => {
  return (
    <div className="mt-8 flex flex-col w-full lg:w-1/3">
      <h2 className="text-xl font-semibold mb-4 underline">Stats:</h2>
      <div className="flex flex-wrap gap-4">
        {pokemonDetails.stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="font-semibold text-white">{stat.stat.name}:</p>
            <div className="bg-gray-300 h-4 w-48 rounded-lg overflow-hidden">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${(stat.base_stat / 100) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
