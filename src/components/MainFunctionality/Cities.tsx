import React, { useRef, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import "../../styles/Cities.scss";

const Cities: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  const { fetchData } = useContext(WeatherContext);

  const doToggle = (): void => {
    setToggle((prevToggle) => !prevToggle);
  };

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

      {toggle ? (
        <div className="cities__hidden">
          <h1 onClick={getData}>Tbilisi</h1>
          <h1 onClick={getData}>Rome</h1>
          <h1 onClick={getData}>Berlin</h1>
          <h1 onClick={getData}>Paris</h1>
          <h1 onClick={getData}>Vienna</h1>
          <h1 onClick={getData}>Tokyo</h1>
          <h1 onClick={getData}>London</h1>
          <h1 onClick={getData}>Kiev</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cities;
