import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import "../../styles/MainTop.scss";

const MainTop: React.FC = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="app__container__top">
      <div className="app__container__top__location">
        <p className="app__container__top__location__paragraph">{data.name}</p>
      </div>

      <div className="app__container__top__temp">
        <h1 className="app__container__top__temp__header">
          {data.temperature !== "" ? data.temperature + "°F" : ""}
        </h1>
      </div>

      <div className="app__container__top__description">
        <p className="app__container__top__description__paragraph">
          {data.clouds}
        </p>
      </div>
    </div>
  );
};

export default MainTop;
