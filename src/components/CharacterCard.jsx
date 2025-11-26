import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-200">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{character.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">Status: {character.status}</p>
        <p className="text-gray-600 dark:text-gray-300">Species: {character.species}</p>
      </div>
      </div>
    </Link>
  );
}
