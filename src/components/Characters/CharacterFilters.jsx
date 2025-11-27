import React from "react";

export default function CharacterFilters({
  filters,
  setFilters,
  speciesOptions,
  originOptions,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
      <select
        className="select-modern"
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">Todos os Status</option>
        <option value="alive">Vivo</option>
        <option value="dead">Morto</option>
        <option value="unknown">Desconhecido</option>
      </select>

      <select
        className="select-modern"
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">Todos os Géneros</option>
        <option value="female">Feminino</option>
        <option value="male">Masculino</option>
        <option value="genderless">Sem Género</option>
        <option value="unknown">Desconhecido</option>
      </select>

      <select
        className="select-modern"
        value={filters.species}
        onChange={(e) => setFilters({ ...filters, species: e.target.value })}
      >
        <option value="">Todas as Espécies</option>
        {speciesOptions.map((sp) => (
          <option key={sp} value={sp}>
            {sp}
          </option>
        ))}
      </select>

      <select
        className="select-modern"
        value={filters.origin}
        onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
      >
        <option value="">Todas as Origens</option>
        {originOptions.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <select
        className="select-modern"
        value={filters.episodeRange}
        onChange={(e) => setFilters({ ...filters, episodeRange: e.target.value })}
      >
        <option value="">Episódios</option>
        <option value="1-5">1–5 episódios</option>
        <option value="6-10">6–10 episódios</option>
        <option value="10plus">10+ episódios</option>
      </select>

      <select
        className="select-modern"
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Ordenar por</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
        <option value="episodes">Mais Episódios</option>
        <option value="id">Por ID</option>
      </select>
    </div>
  );
}