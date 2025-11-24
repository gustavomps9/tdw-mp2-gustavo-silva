import React, { useState } from "react";
import { useGetCharactersQuery } from "../api/rickAndMortyApi";
import CharacterCard from "./CharacterCard";
import CharacterFilters from "./CharacterFilters";

export default function CharactersContainer() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ status: "", gender: "" });

  const { data, error, isLoading } = useGetCharactersQuery({
    page,
    status: filters.status,
    gender: filters.gender,
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error fetching characters</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Characters</h1>

      <CharacterFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={!data.info.prev}
        >
          Previous
        </button>

        <span className="text-white px-4 py-2">
          Page {page} of {data.info.pages}
        </span>

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
