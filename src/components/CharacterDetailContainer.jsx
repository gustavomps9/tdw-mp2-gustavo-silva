import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../api/rickAndMortyApi";

export default function CharacterDetailContainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: character, error, isLoading } = useGetCharacterByIdQuery(id);

  if (isLoading)
    return <p className="p-8 text-xl text-gray-800 dark:text-gray-100">Loading character...</p>;

  if (error)
    return (
      <p className="p-8 text-xl text-red-500 dark:text-red-300">
        Error fetching character details.
      </p>
    );

  const statusColor =
    character.status === "Alive"
      ? "bg-green-400"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-yellow-400";

  return (
    <div className="p-8 flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-6 text-green-600 dark:text-green-400 drop-shadow-[0_0_6px_rgba(0,255,159,0.5)]">
        {character.name}
      </h1>

      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col md:flex-row gap-6">

        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg w-64 h-64 object-cover mx-auto md:mx-0 shadow-md"
        />

        <div className="flex-1 text-lg space-y-3">

          <p className="flex items-center gap-2">
            <span className="font-bold">Status:</span>
            <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
            {character.status}
          </p>

          <p>
            <span className="font-bold">Species:</span> {character.species}
          </p>

          <p>
            <span className="font-bold">Gender:</span> {character.gender}
          </p>

          <p>
            <span className="font-bold">Origin:</span> {character.origin?.name}
          </p>

          <p>
            <span className="font-bold">Location:</span> {character.location?.name}
          </p>

          <p>
            <span className="font-bold">Episodes:</span> {character.episode.length}
          </p>

        </div>
      </div>

      <button
        onClick={() => navigate("/characters")}
        className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition"
      >
        ← Back
      </button>
    </div>
  );
}
