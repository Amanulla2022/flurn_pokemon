import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PokemonCard from "../list/PokemonCard";
import {
  fetchAdditionalPokemonData,
  fetchPokemonByType,
  fetchTypes,
} from "./../../apiCall/api";
import Filter from "./Filter";

const ListDetails = () => {
  const location = useLocation();
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAbility, setSelectedAbility] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    if (location.state && location.state.searchedPokemon) {
      const searchedPokemon = Array.isArray(location.state.searchedPokemon)
        ? location.state.searchedPokemon
        : [location.state.searchedPokemon];
      setSearchedPokemon(searchedPokemon);

      if (searchedPokemon.length < 10) {
        const fetchAdditionalPokemon = async () => {
          try {
            const remainingPokemonCount = 10 - searchedPokemon.length;
            const additionalPokemon = await fetchAdditionalPokemonData(
              searchedPokemon.length,
              remainingPokemonCount
            );
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const typesData = await fetchTypes();
        setTypes(typesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAbilityChange = (e) => {
    setSelectedAbility(e.target.value);
  };

  const handleFilter = async () => {
    if (selectedType) {
      try {
        setLoading(true);
        const pokemonData = await fetchPokemonByType(selectedType);
        setPokemonList(pokemonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    } else if (selectedAbility) {
      const filteredPokemon = searchedPokemon.filter((pokemon) =>
        pokemon.abilities.some((a) => a.ability.name === selectedAbility)
      );
      setPokemonList(filteredPokemon);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">List of Pokémon</h1>
      <Filter
        types={types}
        searchedPokemon={searchedPokemon}
        selectedType={selectedType}
        selectedAbility={selectedAbility}
        handleTypeChange={handleTypeChange}
        handleAbilityChange={handleAbilityChange}
        handleFilter={handleFilter}
      />
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
