import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../api/rickAndMortyApi";

export default function CharacterDetailContainer() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  const navigate = useNavigate();

  if (isLoading)
    return <p className="text-white p-8 text-xl">Loading character...</p>;

  if (error)
    return (
      <p className="text-red-400 p-8 text-xl">
        Error fetching character details.
      </p>
    );

  const character = data;

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-400 mb-6">
        {character.name}
      </h1>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl flex flex-col md:flex-row gap-6">

        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg w-64 h-64 object-cover mx-auto md:mx-0"
        />

        <div className="flex-1 text-gray-200">
          <p className="text-lg mb-2">
            <span className="font-bold text-white">Status:</span>{" "}
            {character.status}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold text-white">Species:</span>{" "}
            {character.species}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold text-white">Gender:</span>{" "}
            {character.gender}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold text-white">Origin:</span>{" "}
            {character.origin?.name}
          </p>

          <p className="text-lg mb-2">
            <span className="font-bold text-white">Location:</span>{" "}
            {character.location?.name}
          </p>

          <p className="text-lg mt-4">
            <span className="font-bold text-white">Episodes:</span>{" "}
            {character.episode.length}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate('/characters')}
        className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
      >
        ← Back
      </button>
    </div>
  );
}
