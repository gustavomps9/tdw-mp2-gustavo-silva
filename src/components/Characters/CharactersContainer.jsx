import React, { useState } from "react";
import { useGetCharactersQuery } from "../../api/rickAndMortyApi";
import CharacterCard from "./CharacterCard";
import CharacterFilters from "./CharacterFilters";
import SearchBar from "../Other/SearchBar";
import { useLanguage } from "../../hooks/useLanguage";

export default function CharactersContainer() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    gender: "",
    species: "",
    episodeRange: "",
    sort: "",
  });

  const { t } = useLanguage();
  const { data, error, isLoading } = useGetCharactersQuery({
    page,
    name: filters.search,
    status: filters.status,
    gender: filters.gender,
    species: filters.species,
  });

  const speciesOptions = data
    ? [...new Set(data.results.map((c) => c.species))]
    : [];

  let filteredCharacters = data ? [...data.results] : [];

  if (filters.episodeRange === "1-5") {
    filteredCharacters = filteredCharacters.filter(
      (c) => c.episode.length <= 5,
    );
  }
  if (filters.episodeRange === "6-10") {
    filteredCharacters = filteredCharacters.filter(
      (c) => c.episode.length > 5 && c.episode.length <= 10,
    );
  }
  if (filters.episodeRange === "10plus") {
    filteredCharacters = filteredCharacters.filter(
      (c) => c.episode.length > 10,
    );
  }

  if (filters.sort === "az")
    filteredCharacters.sort((a, b) => a.name.localeCompare(b.name));
  if (filters.sort === "za")
    filteredCharacters.sort((a, b) => b.name.localeCompare(a.name));
  if (filters.sort === "episodes")
    filteredCharacters.sort((a, b) => b.episode.length - a.episode.length);
  if (filters.sort === "id") filteredCharacters.sort((a, b) => a.id - b.id);

  const noResults =
    !data || (error && error.status === 404) || filteredCharacters.length === 0;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {t("characters.title")}
      </h1>

      <SearchBar
        value={filters.search}
        onChange={(value) => {
          setFilters({ ...filters, search: value });
          setPage(1);
        }}
      />

      <CharacterFilters
        filters={filters}
        setFilters={setFilters}
        speciesOptions={speciesOptions}
      />

      {isLoading && (
        <p className="text-gray-800 dark:text-gray-300">
          {t("common.loading")}
        </p>
      )}

      {!isLoading && error && error.status !== 404 && (
        <p className="text-red-500 dark:text-red-400">{t("common.error")}</p>
      )}

      {!isLoading && noResults && (
        <p className="text-yellow-500 dark:text-yellow-300 text-lg">
          {t("characters.noResults")}
        </p>
      )}

      {!isLoading && !noResults && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              className="px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded disabled:opacity-50 
                         hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
              onClick={() => setPage((p) => p - 1)}
              disabled={!data.info.prev}
            >
              {t("common.back")}
            </button>

            <span className="text-gray-900 dark:text-gray-300 px-4 py-2">
              {t("common.page", { current: page, total: data.info.pages })}
            </span>

            <button
              className="px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded disabled:opacity-50 
                         hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
              onClick={() => setPage((p) => p + 1)}
              disabled={!data.info.next}
            >
              {t("common.next")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
