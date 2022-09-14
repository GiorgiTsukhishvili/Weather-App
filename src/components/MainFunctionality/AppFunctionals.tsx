import React from "react";
import Cities from "./Cities";
import Search from "./Search";
import SavedCities from "./SavedCities";

import "../../styles/AppFunctionals.scss";

const AppFunctionals: React.FC = () => {
  return (
    <div className="app-functionals">
      <SavedCities />
      <Search />
      <Cities />
    </div>
  );
};

export default AppFunctionals;
