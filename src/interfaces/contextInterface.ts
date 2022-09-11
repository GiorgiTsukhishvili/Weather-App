export interface Data {
  name: string;
  temperature: string;
  clouds: string;
  feelsLike: string;
  humidity: string;
  wind: string;
}

export interface WeatherContextThings {
  fetchData: (value: string) => void;
  data: Data;
  error: boolean;
}
