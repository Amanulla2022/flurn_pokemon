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
  const [page, setPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    if (location.state && location.state.searchedPokemon) {
      const searchedPokemon = Array.isArray(location.state.searchedPokemon)
        ? location.state.searchedPokemon
        : [location.state.searchedPokemon];
      setSearchedPokemon(searchedPokemon);

      fetchPokemon(searchedPokemon, 0);
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

  const fetchPokemon = async (searchedPokemon, page) => {
    try {
      setLoading(true);
      const additionalPokemon = await fetchAdditionalPokemonData(page, 9);
      setPokemonList([...searchedPokemon, ...additionalPokemon]);
      setLoading(false);
    } catch (error) {
      setError("Error fetching additional Pokémon.");
      setLoading(false);
    }
  };

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

  const handleLoadMore = () => {
    setPage(page + 9);
    fetchPokemon(pokemonList, page + 9);
  };

  const handleCheckboxChange = (e, pokemon) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      if (selectedPokemon.length === 2) {
        const remainingPokemon = selectedPokemon.slice(1);
        setSelectedPokemon([...remainingPokemon, pokemon]);
      } else {
        setSelectedPokemon([...selectedPokemon, pokemon]);
      }
    } else {
      setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
    }
  };

  const handleComparePokemon = () => {
    if (selectedPokemon.length === 2) {
      const ids = selectedPokemon.map((pokemon) => pokemon.id);
      window.location.href = `/compare/${ids[0]}/${ids[1]}`;
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">List of Pokémons</h1>
      {selectedPokemon.length === 2 && (
        <div className="flex fixed z-10">
          <button
            className="bg-black hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4 opacity-75"
            onClick={handleComparePokemon}
          >
            Compare Both Pokémons
          </button>
        </div>
      )}
      <Filter
        types={types}
        searchedPokemon={searchedPokemon}
        selectedType={selectedType}
        selectedAbility={selectedAbility}
        handleTypeChange={handleTypeChange}
        handleAbilityChange={handleAbilityChange}
        handleFilter={handleFilter}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={selectedPokemon.some((p) => p.id === pokemon.id)}
              onChange={(e) => handleCheckboxChange(e, pokemon)}
              className="cursor-pointer"
            />

            <Link to={`/pokemon/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </div>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListDetails;
