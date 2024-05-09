import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchPokemon } from "../../apiCall/api";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    if (!pokemonName.trim()) {
      alert(
        "Please enter a Pokémon name before searching!!!. like abra, pikachu"
      );
      setIsLoading(false);
      return;
    }
    try {
      const data = await searchPokemon(pokemonName);
      setIsLoading(false);
      console.log("Data fetched:", data);
      if (data) {
        navigate("/list", { state: { searchedPokemon: data } });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching Pokémon. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-3xl font-bold mb-4 text-teal-500">
        Search Pokémon By Name :
      </h1>
      <div className="flex items-center md:flex-row flex-col gap-4">
        <input
          type="text"
          className="px-4 py-2 rounded-md border border-gray-300 mr-2 w-full"
          placeholder="Enter Pokémon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed "
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Search;
