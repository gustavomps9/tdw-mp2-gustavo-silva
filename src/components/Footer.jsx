import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-6 mt-10 border-t border-gray-200 dark:border-green-400/20">
      <div className="text-center">
        <p className="opacity-80">© {new Date().getFullYear()} Gustavo Silva</p>
        <p className="text-green-400 dark:text-green-300 mt-1">Mini Projeto M2A - TDW</p>
      </div>
    </footer>
  );
}