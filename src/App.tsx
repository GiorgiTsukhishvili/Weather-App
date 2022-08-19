import React from "react";
import Main from "./components/Main";
import { WeatherProvider } from "./context/WeatherContext";

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
};

export default App;
