// src/pages/Home/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-green-400">
        Welcome to the Rick and Morty App
      </h1>
      <p className="text-gray-300 mt-4">
        Navigate to /characters to see the list of characters.
      </p>
    </div>
  );
}
