import React from "react";

const PokemonDesc = ({ pokemonDetails }) => {
  return (
    <div className="mt-8 flex flex-col w-full lg:w-2/3">
      <h2 className="text-xl font-semibold mb-4 underline">Details:</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-black text-white">
          <tbody>
            <tr className="p-2">
              <td className="border p-2 font-semibold">Base Experience:</td>
              <td className="border p-2 border-white">
                {pokemonDetails.base_experience}
              </td>
            </tr>
            <tr>
              <td className="border p-2 border-white font-semibold">Height:</td>
              <td className="border p-2 border-white">
                {pokemonDetails.height} cm
              </td>
            </tr>
            <tr>
              <td className="border p-2 border-white font-semibold">Weight:</td>
              <td className="border p-2 border-white">
                {pokemonDetails.weight} kg
              </td>
            </tr>
            <tr>
              <td className="border p-2 border-white font-semibold">
                Abilities:
              </td>
              <td className="border p-2 border-white">
                <ul className="flex flex-wrap gap-2">
                  {pokemonDetails.abilities.map((ability, index) => (
                    <li
                      key={index}
                      className="text-white bg-purple-400 px-2 py-1 rounded-full"
                    >
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border p-2 border-white font-semibold">Moves:</td>
              <td className="border p-2 border-white">
                <ul className="flex flex-wrap gap-2">
                  {pokemonDetails.moves.slice(0, 5).map((move, index) => (
                    <li
                      key={index}
                      className="text-white bg-purple-400 px-2 py-1 rounded-full"
                    >
                      {move.move.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonDesc;