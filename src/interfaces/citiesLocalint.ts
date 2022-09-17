export interface CitiesLocalContextProps {
  savedCities: string[];
  saveCities: (citie: string) => void;
  removeCitie: (citie: string) => void;
}
