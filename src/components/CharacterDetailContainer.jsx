import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../api/rickAndMortyApi";

export default function CharacterDetailContainer() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCharacterByIdQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      document.title = `${data.name} | Mini Projeto M2A`;
    }
  }, [data]);

  if (isLoading)
    return <p className="text-gray-800 dark:text-gray-200 p-8 text-xl">Loading character...</p>;

  if (error)
    return (
      <p className="text-red-500 dark:text-red-400 p-8 text-xl">
        Error fetching character details.
      </p>
    );

  const character = data;

  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-400";

  return (
    <div className="p-8 flex flex-col items-center">

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {character.name}
      </h1>

      <div className="bg-gray-100 dark:bg-gray-800 
                      border border-gray-300 dark:border-green-400/20
                      rounded-lg shadow-lg p-6 
                      w-full max-w-2xl flex flex-col md:flex-row gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg w-64 h-64 object-cover mx-auto md:mx-0"
        />

        <div className="flex-1 text-gray-700 dark:text-gray-300">

          <p className="text-lg mb-2 flex items-center gap-2">
            <span className="font-bold text-gray-900 dark:text-white">Status:</span>
            <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
            {character.status}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold dark:text-white">Species:</span> {character.species}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold dark:text-white">Gender:</span> {character.gender}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold dark:text-white">Origin:</span> {character.origin.name}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold dark:text-white">Location:</span> {character.location.name}
          </p>

          <p className="text-lg mt-4">
            <span className="font-bold dark:text-white">Episodes:</span> {character.episode.length}
          </p>

        </div>
      </div>

      <button
        onClick={() => navigate('/characters')}
        className="mt-6 px-6 py-2 bg-gray-700 dark:bg-gray-600 
                   text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-500"
      >
        ← Back
      </button>
    </div>
  );
}
