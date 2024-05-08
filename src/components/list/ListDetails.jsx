import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PokemonCard from "../list/PokemonCard";
import { fetchAdditionalPokemonData } from "./../../apiCall/api";

const ListDetails = () => {
  const location = useLocation();
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Searched Pokemon:", location.state.searchedPokemon);
    if (location.state && location.state.searchedPokemon) {
      const searchedPokemon = Array.isArray(location.state.searchedPokemon)
        ? location.state.searchedPokemon
        : [location.state.searchedPokemon];

      if (searchedPokemon.length < 10) {
        const fetchAdditionalPokemon = async () => {
          try {
            const remainingPokemonCount = 10 - searchedPokemon.length;
            const additionalPokemon = await fetchAdditionalPokemonData(
              searchedPokemon.length,
              remainingPokemonCount
            );
            console.log(additionalPokemon);
            setPokemonList([...searchedPokemon, ...additionalPokemon]);
          } catch (error) {
            setError("Error fetching additional Pokémon.");
          }
        };

        fetchAdditionalPokemon();
      } else {
        setPokemonList(searchedPokemon);
      }
    }
  }, [location.state]);

  console.log("Pokemon List:", pokemonList);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">List of Pokémon</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <Link key={index} to={`/pokemon/${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
};

export default ListDetails;
