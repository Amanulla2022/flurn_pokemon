import React, { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../apiCall/api";
import { Link } from "react-router-dom";

const MyFav = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    const fetchFavoritePokemons = async () => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      const pokemonDetailsPromises = bookmarks.map((id) =>
        fetchPokemonDetails(id)
      );
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      setFavoritePokemons(pokemonDetails);
    };

    fetchFavoritePokemons();
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favoritePokemons.filter(
      (pokemon) => pokemon.id !== id
    );
    setFavoritePokemons(updatedFavorites);
    const updatedBookmarks = updatedFavorites.map((pokemon) => pokemon.id);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">My Favorite Pokémon's</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoritePokemons.map((pokemon) => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-center font-semibold uppercase">
                {pokemon.name}
              </p>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto mb-2"
              />

              <div className="mb-2">Height: {pokemon.height} cm</div>
              <div className="mb-2">Weight: {pokemon.weight} kg</div>
              <button
                className="block mx-auto mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFavorite(pokemon.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link className="m-8 bg-gray-600 p-2 rounded-xl text-white" to="/">
          Go to Home Page
        </Link>
      </div>
    </>
  );
};

export default MyFav;
