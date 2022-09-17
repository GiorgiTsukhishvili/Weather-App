import { useState, createContext, ReactNode, useContext } from "react";
import { CitiesLocalContextProps } from "../interfaces/citiesLocalint";

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

    localStorage.setItem("cities", JSON.stringify([...newCities, citie]));

    setSavedCities([...newCities]);
  };

  const removeCitie = (citie: string) => {
    const filteredCities = savedCities.filter((item) => item !== citie);

    if (filteredCities.length === 0) {
      localStorage.setItem("cities", JSON.stringify(["No City Saved"]));
      filteredCities.push("No City Saved");
    } else {
      localStorage.setItem("cities", JSON.stringify(filteredCities));
    }

    setSavedCities(filteredCities);
  };

  return (
    <CitiesLocalContext.Provider
      value={{ removeCitie, savedCities, saveCities }}
    >
      {children}
    </CitiesLocalContext.Provider>
  );
};

export const useCitiesLocalContext = () => useContext(CitiesLocalContext);
