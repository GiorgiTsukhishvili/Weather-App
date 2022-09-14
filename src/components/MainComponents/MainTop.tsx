import React from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import { useCitiesLocalContext } from "../../context/CitiesLocalContext";

import "../../styles/MainTop.scss";
import Gifs from "../Gifs";

const MainTop: React.FC = () => {
  const { data } = useWeatherContext();
  const { saveCities } = useCitiesLocalContext();

  return (
    <div className="app__container__top">
      <div className="app__container__top__left">
        <div className="app__container__top__left__location">
          <p className="app__container__top__left__location__paragraph">
            {data.name}
          </p>
        </div>

        <div className="app__container__top__left__temp">
          <h1 className="app__container__top__left__temp__header">
            {data.temperature !== "" ? data.temperature + "°F" : ""}
          </h1>
        </div>

        <div className="app__container__top__left__description">
          <p className="app__container__top__left__description__paragraph">
            {data.clouds}
          </p>
          {data.clouds !== "" && <Gifs />}
        </div>
      </div>
      {data.name !== "" && (
        <h1
          className="app__container__top__right"
          onClick={() => saveCities(data.name)}
        >
          Save City
        </h1>
      )}
    </div>
  );
};

export default MainTop;
