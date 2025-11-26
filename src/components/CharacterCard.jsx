import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-400";

  return (
    <Link to={`/characters/${character.id}`}>
      <div className="bg-gray-100 dark:bg-gray-800 
                      rounded-lg shadow-md overflow-hidden 
                      hover:scale-105 transform transition duration-200">

        <img
          src={character.image}
          alt={character.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-4">

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {character.name}
          </h2>

          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mt-1">
            <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
            {character.status} – {character.species}
          </p>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Last known location:
            </span>
            <br />
            {character.location.name}
          </p>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              First seen in:
            </span>
            <br />
            {character.origin.name}
          </p>

        </div>
      </div>
    </Link>
  );
}
