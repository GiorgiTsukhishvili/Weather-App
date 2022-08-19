import React, { useRef, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import "../../styles/Search.scss";

const Search: React.FC = () => {
  const { fetchData } = useContext(WeatherContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <div className="search">
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search for Location"
          className="search__input"
        />
      </form>
    </div>
  );
};

export default Search;
