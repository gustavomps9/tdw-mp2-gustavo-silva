import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import AppRouter from "./router/AppRouter";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <FavoritesProvider>
          <LanguageProvider>
            <AppRouter />
          </LanguageProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
