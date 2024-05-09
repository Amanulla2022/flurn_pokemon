import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../apiCall/api";
import Pokemons from "./Pokemons";

const Comparison = () => {
  const { id1, id2 } = useParams();
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await fetchPokemonDetails(id1);
        const data2 = await fetchPokemonDetails(id2);
        setPokemon1(data1);
        console.log(data1);
        setPokemon2(data2);
        setLoading(false);
      } catch (error) {
        setError("Error fetching Pokémon details.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id1, id2]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Comparing Two Pokémon</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pokemon1 && <Pokemons pokemon={pokemon1} />}
        <div className="flex items-center justify-center md:hidden display">
          <h2 className="text-xl font-bold mb-2">v/s</h2>
        </div>
        {pokemon2 && <Pokemons pokemon={pokemon2} />}
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Comparison;
