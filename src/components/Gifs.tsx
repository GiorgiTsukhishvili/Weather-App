import React, { useEffect, useState } from "react";

import { useWeatherContext } from "../context/WeatherContext";
import rain from "../assets/gifs/rain.gif";
import clouds from "../assets/gifs/clouds.gif";
import sun from "../assets/gifs/sun.gif";

const Gifs = () => {
  const { data } = useWeatherContext();
  const [gif, setGif] = useState<string>("");

  useEffect(() => {
    switch (data.clouds) {
      case "Rain":
        setGif(rain);
        break;
      case "Clouds":
        setGif(clouds);
        break;
      case "Clear":
        setGif(sun);
        break;
      default:
        break;
    }
  }, [data.clouds]);

  return (
    <img
      src={gif}
      alt="Gif"
      style={{ width: "250px", margin: "20px 0 0 90px" }}
    />
  );
};

export default Gifs;
