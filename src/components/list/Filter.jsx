import React from "react";
import { FaFilter } from "react-icons/fa";

const Filter = ({
  types,
  searchedPokemon,
  selectedType,
  selectedAbility,
  handleTypeChange,
  handleAbilityChange,
  handleFilter,
}) => {
  return (
    <div className="flex items-center gap-4 md:ml-auto ml-8 w-full md:justify-end mb-8">
      <label htmlFor="type-select">Type:</label>
      <select
        id="type-select"
        value={selectedType}
        onChange={handleTypeChange}
        className="filter-border"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="ability-select">Ability:</label>
      <select
        id="ability-select"
        value={selectedAbility}
        onChange={handleAbilityChange}
        className="filter-border"
      >
        <option value="">All Abilities</option>
        {searchedPokemon &&
          searchedPokemon
            .flatMap((pokemon) => pokemon.abilities.map((a) => a.ability.name))
            .filter((ability, index, self) => self.indexOf(ability) === index) // Unique abilities
            .map((ability) => (
              <option key={ability} value={ability}>
                {ability}
              </option>
            ))}
      </select>
      <button
        onClick={handleFilter}
        className=" text-purple-500 px-4 py-2 rounded-md bg-gray-200"
      >
        <FaFilter />
      </button>
    </div>
  );
};

export default Filter;
