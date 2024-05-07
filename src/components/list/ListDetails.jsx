import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PokemonCard from "../list/PokemonCard";

const ListPage = () => {
  const location = useLocation();
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Searched Pokemon:", location.state.searchedPokemon);
    setPokemonList(
      Array.isArray(location.state.searchedPokemon)
        ? location.state.searchedPokemon
        : [location.state.searchedPokemon]
    );
  }, [location.state]);

  console.log("Pokemon List:", pokemonList);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">List of Pokémon</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

export default ListPage;
