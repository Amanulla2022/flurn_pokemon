import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const searchPokemon = async (pokemonName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${pokemonName.toLowerCase()}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to find Pokémon");
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon details.");
  }
};

export const fetchAdditionalPokemonData = async (offset, limit) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?offset=${offset}&limit=${limit}`
    );
    const { results } = response.data;
    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
        const pokemonData = await fetchPokemonDetails(pokemonId);
        return pokemonData;
      })
    );
    return pokemonDetails;
  } catch (error) {
    throw new Error("Failed to fetch additional Pokémon data.");
  }
};
