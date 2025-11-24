import React from "react";

export default function CharacterFilters({
  filters,
  setFilters,
  speciesOptions,
  originOptions,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">All Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.species}
        onChange={(e) => setFilters({ ...filters, species: e.target.value })}
      >
        <option value="">All Species</option>
        {speciesOptions.map((sp) => (
          <option key={sp} value={sp}>
            {sp}
          </option>
        ))}
      </select>

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.origin}
        onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
      >
        <option value="">All Origins</option>
        {originOptions.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.episodeRange}
        onChange={(e) => setFilters({ ...filters, episodeRange: e.target.value })}
      >
        <option value="">Episodes</option>
        <option value="1-5">1–5 episodes</option>
        <option value="6-10">6–10 episodes</option>
        <option value="10plus">10+ episodes</option>
      </select>

      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Sort</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
        <option value="episodes">Most Episodes</option>
        <option value="id">By ID</option>
      </select>

    </div>
  );
}
