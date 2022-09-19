import React from "react";
import MainTop from "./MainComponents/MainTop";
import MainBottom from "./MainComponents/MainBottom";
import AppFunctionals from "./MainFunctionality/AppFunctionals";
import loadingGif from "../assets/gifs/loader.gif";

import { useWeatherContext } from "../context/WeatherContext";

import "../styles/Main.scss";

const Main: React.FC = () => {
  const { data, error, loading } = useWeatherContext();

  return (
    <div className="app">
      <AppFunctionals />
      {loading ? (
        <img src={loadingGif} alt="Loading" className="app__loading" />
      ) : error ? (
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
