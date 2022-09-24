import React, { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

import { Data, WeatherContextThings } from "../interfaces/contextInterface";

const WeatherContext = createContext({} as WeatherContextThings);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Data>({
    name: "",
    temperature: "",
    clouds: "",
    feelsLike: "",
    humidity: "",
    wind: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const fetchData = async (value: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=7257b3fdaf6f41d0ba6a501a08aaecc3`
      );

      setData({
        name: data.name,
        temperature: data.main.temp,
        clouds: data.weather[0].main,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ fetchData, data, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
