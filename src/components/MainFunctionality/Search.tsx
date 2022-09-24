import React, { useState } from "react";
import { useWeatherContext } from "../../context/WeatherContext";

import "../../styles/Search.scss";

const Search: React.FC = () => {
  const { fetchData } = useWeatherContext();

  const [search, setSearch] = useState<string>("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim().length !== 0) {
      fetchData(search);
    }
    setSearch("");
  };

  return (
    <div className="search">
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          value={search}
          placeholder="Search for Location"
          className="search__input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
