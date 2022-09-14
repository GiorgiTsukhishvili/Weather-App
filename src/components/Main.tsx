import React from "react";
import MainTop from "./MainComponents/MainTop";
import MainBottom from "./MainComponents/MainBottom";
import AppFunctionals from "./MainFunctionality/AppFunctionals";

import { useWeatherContext } from "../context/WeatherContext";

import "../styles/Main.scss";

const Main: React.FC = () => {
  const { data, error } = useWeatherContext();

  return (
    <div className="app">
      <AppFunctionals />
      {error ? (
        <div className="app__error">
          <h1>
            404 City Not Found, <br /> Please Enter Different City
          </h1>
        </div>
      ) : (
        <div className="app__container">
          <MainTop />

          {data.wind !== "" && <MainBottom />}
        </div>
      )}
    </div>
  );
};

export default Main;
