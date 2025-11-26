import React from "react";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AppRouter />
    </div>
  );
}

export default App;