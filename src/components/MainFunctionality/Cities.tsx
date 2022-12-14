import React from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import { defaultCities } from "../../utils/defaultCities";
import useToggle from "../../hooks/useToggle";

import { v4 } from "uuid";

import "../../styles/Cities.scss";

const Cities: React.FC = () => {
  const { toggle, doToggle } = useToggle();

  const { fetchData } = useWeatherContext();

  const getData = (e: React.MouseEvent<HTMLElement>): void => {
    const name = e.currentTarget.outerText;
    fetchData(name);
    doToggle();
  };

  return (
    <div className="cities">
      <h1 className="cities__toggle" onClick={doToggle}>
        Show Cities
      </h1>

      {toggle && (
        <div className="cities__hidden">
          {defaultCities.map((citie) => (
            <h1 onClick={getData} key={v4()}>
              {citie}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cities;
