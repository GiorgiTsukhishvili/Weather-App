import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Reset.scss";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";
import { CitiesLocalProvider } from "./context/CitiesLocalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CitiesLocalProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </CitiesLocalProvider>
  </React.StrictMode>
);
