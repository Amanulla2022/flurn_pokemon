import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../apiCall/api";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetchPokemonDetails(id);
        setPokemonDetails(response);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="p-8 rounded-lg relative bg-gradient-to-br from-blue-400 to-green-500 text-center max-w-4xl mx-auto mt-8">
      <div className="absolute right-2 top-2 bg-red-500 rounded-lg text-white">
        #{pokemonDetails.order}
      </div>
      <h1 className="text-3xl font-semibold mb-8 text-white uppercase">
        {pokemonDetails && pokemonDetails.name}
      </h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {pokemonDetails && (
        <>
          <div className="flex flex-col lg:flex-row md:gap-8 gap-1 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={pokemonDetails.sprites.front_default}
                alt={pokemonDetails.name}
                className="mx-auto mb-4 lg:mb-0 h-48 w-48 "
              />
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={pokemonDetails.sprites.back_default}
                alt={pokemonDetails.name}
                className="mx-auto h-48 w-48"
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Details:</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white text-white">
                <tbody>
                  <tr>
                    <td className="border border-white font-semibold">
                      Base Experience:
                    </td>
                    <td className="border border-white">
                      {pokemonDetails.base_experience}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white font-semibold">
                      Height:
                    </td>
                    <td className="border border-white">
                      {pokemonDetails.height} cm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white font-semibold">
                      Weight:
                    </td>
                    <td className="border border-white">
                      {pokemonDetails.weight} kg
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white font-semibold">
                      Abilities:
                    </td>
                    <td className="border border-white">
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
                    <td className="border border-white font-semibold">
                      Types:
                    </td>
                    <td className="border border-white">
                      <ul className="flex flex-wrap gap-2">
                        {pokemonDetails.types.map((type, index) => (
                          <li
                            key={index}
                            className="text-white bg-purple-400 px-2 py-1 rounded-full"
                          >
                            {type.type.name}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white font-semibold">
                      Moves:
                    </td>
                    <td className="border border-white">
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
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Stats:</h2>
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
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
