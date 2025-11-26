const saved = localStorage.getItem("darkMode");
if (saved && JSON.parse(saved) === true) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './context/ThemeContext';
import AppRouter from './router/AppRouter';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
