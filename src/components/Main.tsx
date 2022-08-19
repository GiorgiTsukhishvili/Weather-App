import React, { useState, useContext } from "react";
import axios from "axios";
import MainTop from "./MainComponents/MainTop";
import MainBottom from "./MainComponents/MainBottom";
import Search from "./Search";

import { WeatherContext } from "../context/WeatherContext";

import "../styles/Main.scss";

const Main: React.FC = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="app">
      <Search />
      <div className="app__container">
        <MainTop />

        {data.wind !== "" ? <MainBottom /> : ""}
      </div>
    </div>
  );
};

export default Main;
