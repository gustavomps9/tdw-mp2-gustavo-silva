import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function CharacterFilters({
  filters,
  setFilters,
  speciesOptions,
  originOptions,
}) {
  const { t } = useLanguage();

  const baseSelect =
    "p-2 rounded-lg border outline-none transition-colors " +
    "bg-white text-gray-900 border-gray-300 " +                
    "dark:bg-gray-800 dark:text-white dark:border-gray-600";

  return (
    <div className="flex flex-wrap gap-4 mb-6">

      <select
        className={baseSelect}
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">{t('characters.status')} - {t('common.all')}</option>
        <option value="alive">{t('characters.alive')}</option>
        <option value="dead">{t('characters.dead')}</option>
        <option value="unknown">{t('characters.unknown')}</option>
      </select>

      <select
        className={baseSelect}
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">{t('characters.gender')} - {t('common.all')}</option>
        <option value="female">{t('characters.female')}</option>
        <option value="male">{t('characters.male')}</option>
        <option value="genderless">{t('characters.genderless')}</option>
        <option value="unknown">{t('characters.unknown')}</option>
      </select>

      <select
        className={baseSelect}
        value={filters.species}
        onChange={(e) => setFilters({ ...filters, species: e.target.value })}
      >
        <option value="">{t('characters.species')} - {t('common.all')}</option>
        {speciesOptions.map((sp) => (
          <option key={sp} value={sp}>
            {sp}
          </option>
        ))}
      </select>

      <select
        className={baseSelect}
        value={filters.origin}
        onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
      >
        <option value="">{t('characters.origin')} - {t('common.all')}</option>
        {originOptions.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <select
        className={baseSelect}
        value={filters.episodeRange}
        onChange={(e) => setFilters({ ...filters, episodeRange: e.target.value })}
      >
        <option value="">{t('characters.episodeRange')}</option>
        <option value="1-5">{t('characters.episode1_5')}</option>
        <option value="6-10">{t('characters.episode6_10')}</option>
        <option value="10plus">{t('characters.episode10plus')}</option>
      </select>

      <select
        className={baseSelect}
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">{t('characters.sort')}</option>
        <option value="az">{t('characters.sortAZ')}</option>
        <option value="za">{t('characters.sortZA')}</option>
        <option value="episodes">{t('characters.sortEpisodes')}</option>
        <option value="id">{t('characters.sortId')}</option>
      </select>
    </div>
  );
}