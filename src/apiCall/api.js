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
