import React from "react";

const Pokemons = ({ pokemon }) => {
  return (
    <div>
      <div className="border relative p-4 rounded-lg shadow-md bg-gray-100">
        <h2 className="text-xl font-bold mb-2 uppercase underline">
          {pokemon.name}
        </h2>
        <div className="absolute right-2 top-2 pl-2 bg-gray-500 rounded-lg w-12 text-white">
          #{pokemon.order}
        </div>
        <div className="flex justify-around flex-wrap gap-4">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="image image-border"
          />

          <img
            src={pokemon.sprites.other.home.front_shiny}
            alt={pokemon.name}
            className="image image-border"
          />
          <img
            src={pokemon.sprites.other.showdown.front_shiny}
            alt={pokemon.name}
            className="image image-border"
          />
          <img
            src={pokemon.sprites.other.showdown.back_shiny}
            alt={pokemon.name}
            className="image image-border"
          />
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          <p>Type of this pokemon is</p>
          {pokemon.types.map((type, index) => (
            <li key={index} className="list-item">
              {type.type.name}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-8">
          <p>It's Height is: {pokemon.height} cm</p>
          <p>It's Weight is: {pokemon.weight} kg</p>
        </div>

        <ul className="flex flex-wrap gap-2 mt-4">
          <p>Some abilities are</p>
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="list-item">
              {ability.ability.name}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2 mt-4">
          <p>Best moves</p>
          {pokemon.moves.slice(0, 5).map((move, index) => (
            <li key={index} className="list-item">
              {move.move.name}
            </li>
          ))}
        </ul>

        <p className="mt-4">All stats</p>
        <div className="flex flex-wrap gap-4">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-300 h-4 w-48 rounded-lg overflow-hidden">
                <div
                  className="bg-green-500 h-full"
                  style={{ width: `${(stat.base_stat / 100) * 100}%` }}
                ></div>
              </div>
              <p className="font-semibold text-red-400">{stat.stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
