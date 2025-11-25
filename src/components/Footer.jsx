import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="text-center">
        <p className="opacity-80">© {new Date().getFullYear()} Gustavo Silva</p>
        <p className="text-green-400 mt-1">
          Mini Projeto M2A - TDW
        </p>
      </div>
    </footer>
  );
}
