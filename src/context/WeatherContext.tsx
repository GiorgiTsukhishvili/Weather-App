import React, { createContext, ReactNode, useContext, useState } from "react";
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

  const [error, setError] = useState<boolean>(false);

  const fetchData = async (value: string) => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=7257b3fdaf6f41d0ba6a501a08aaecc3`
      );

      setData({
        name: data.data.name,
        temperature: data.data.main.temp,
        clouds: data.data.weather[0].main,
        feelsLike: data.data.main.feels_like,
        humidity: data.data.main.humidity,
        wind: data.data.wind.speed,
      });
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <WeatherContext.Provider value={{ fetchData, data, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
