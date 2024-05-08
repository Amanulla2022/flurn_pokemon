import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const searchPokemon = async (pokemonName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon/${pokemonName.toLowerCase()}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to find Pokémon");
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon details.");
  }
};

export const fetchAdditionalPokemonData = async (offset, limit) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
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

export const fetchTypes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/type`);
    const data = await response.json();
    return data.results.map((type) => type.name);
  } catch (error) {
    throw new Error("Error fetching types:", error);
  }
};

export const fetchPokemonByType = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const data = await response.json();
    const pokemonUrls = data.pokemon.map((poke) => poke.pokemon.url);
    const pokemonData = await Promise.all(
      pokemonUrls.map((url) => fetch(url).then((res) => res.json()))
    );
    return pokemonData;
  } catch (error) {
    throw new Error("Error fetching Pokémon for the selected type:", error);
  }
};
