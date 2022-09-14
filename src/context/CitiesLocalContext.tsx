import { useState, createContext, ReactNode, useContext } from "react";
import { CitiesLocalContextProps } from "../utils/citiesLocalint";

const CitiesLocalContext = createContext({} as CitiesLocalContextProps);

const data = localStorage.getItem("cities");

export const CitiesLocalProvider = ({ children }: { children: ReactNode }) => {
  const [savedCities, setSavedCities] = useState<string[]>(
    data !== null ? JSON.parse(data) : ["No City Saved"]
  );

  const saveCities = (citie: string) => {
    const filteredCities = savedCities.filter(
      (citie) => citie !== "No City Saved"
    );

    const newCities = savedCities.every((item) => item !== citie)
      ? [...filteredCities, citie]
      : filteredCities;

    console.log(filteredCities, newCities);

    localStorage.setItem("cities", JSON.stringify([...newCities, citie]));

    setSavedCities([...newCities]);
  };

  return (
    <CitiesLocalContext.Provider value={{ savedCities, saveCities }}>
      {children}
    </CitiesLocalContext.Provider>
  );
};

export const useCitiesLocalContext = () => useContext(CitiesLocalContext);
