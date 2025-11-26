import React from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesStats({ favorites }) {
  const stats = {
    total: favorites.length,
    alive: favorites.filter(c => c.status === 'Alive').length,
    dead: favorites.filter(c => c.status === 'Dead').length,
    unknown: favorites.filter(c => c.status === 'unknown').length,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Estatísticas dos Favoritos
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <StatCard 
          value={stats.total} 
          label="Total" 
          color="green" 
        />
        <StatCard 
          value={stats.alive} 
          label="Vivos" 
          color="blue" 
        />
        <StatCard 
          value={stats.dead} 
          label="Mortos" 
          color="red" 
        />
        <StatCard 
          value={stats.unknown} 
          label="Desconhecidos" 
          color="purple" 
        />
      </div>
    </div>
  );
}

function StatCard({ value, label, color }) {
  const colorClasses = {
    green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    red: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  };

  return (
    <div className={`p-4 rounded-lg ${colorClasses[color]}`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}