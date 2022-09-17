import React from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import { useCitiesLocalContext } from "../../context/CitiesLocalContext";
import useToggle from "../../hooks/useToggle";

import { v4 } from "uuid";

const SavedCities = () => {
  const { toggle, doToggle } = useToggle();
  const { savedCities, removeCitie } = useCitiesLocalContext();
  const { fetchData } = useWeatherContext();

  const getData = (e: React.MouseEvent<HTMLElement>): void => {
    const name = e.currentTarget.outerText;
    fetchData(name);
    doToggle();
  };

  return (
    <div className="cities">
      <h1 className="cities__toggle" onClick={doToggle}>
        Show Saved Cities
      </h1>

      {toggle && (
        <div className="cities__hidden">
          {savedCities.map((citie) => {
            return citie === "No City Saved" ? (
              <h1 key={v4()} onClick={doToggle}>
                {citie}
              </h1>
            ) : (
              <div className="cities__hidden__cities">
                <h1 onClick={getData} key={v4()}>
                  {citie}
                </h1>
                <p onClick={() => removeCitie(citie)}>X</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SavedCities;
