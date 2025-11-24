import React from "react";

export default function CharacterFilters({ filters, setFilters }) {
  return (
    <div className="flex gap-4 mb-4">
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
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
