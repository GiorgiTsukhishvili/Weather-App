import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";

import { Data, WeatherContextThings } from "../interfaces/contextInterface";

export const WeatherContext = createContext({} as WeatherContextThings);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Data>({
    name: "",
    temperature: "",
    clouds: "",
    feelsLike: "",
    humidity: "",
    wind: "",
  });

  const fetchData = (value: string) => {
    const data = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=7257b3fdaf6f41d0ba6a501a08aaecc3`
      )
      .then((res) =>
        setData({
          name: res.data.name,
          temperature: res.data.main.temp,
          clouds: res.data.weather[0].main,
          feelsLike: res.data.main.feels_like,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <WeatherContext.Provider value={{ fetchData, data }}>
      {children}
    </WeatherContext.Provider>
  );
};
