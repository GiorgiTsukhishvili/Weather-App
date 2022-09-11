import React, { useContext } from "react";
import MainTop from "./MainComponents/MainTop";
import MainBottom from "./MainComponents/MainBottom";
import AppFunctionals from "./MainFunctionality/AppFunctionals";

import { WeatherContext } from "../context/WeatherContext";

import "../styles/Main.scss";

const Main: React.FC = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="app">
      <AppFunctionals />
      <div className="app__container">
        <MainTop />

        {data.wind !== "" ? <MainBottom /> : ""}
      </div>
    </div>
  );
};

export default Main;
