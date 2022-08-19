import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import "../../styles/MainBottom.scss";

const MainBottom: React.FC = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="app__container__bottom">
      <div className="app__container__bottom__feels">
        <p className="app__container__bottom__feels__paragraph--bold">
          {data.feelsLike + "°F"}
        </p>
        <p className="app__container__bottom__feels__paragraph">Feels Like</p>
      </div>
      <div className="app__container__bottom__humidity">
        <p className="app__container__bottom__humidity__paragraph--bold">
          {data.humidity + "%"}
        </p>
        <p className="app__container__bottom__humidity__paragraph">Humidity</p>
      </div>
      <div className="app__container__bottom__wind">
        <p className="app__container__bottom__wind__paragraph--bold">
          {data.wind + " MPH"}
        </p>
        <p className="app__container__bottom__wind__paragraph">Wind</p>
      </div>
    </div>
  );
};

export default MainBottom;
