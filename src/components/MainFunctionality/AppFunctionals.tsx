import React from "react";
import Cities from "./Cities";
import Search from "./Search";

import "../../styles/AppFunctionals.scss";

const AppFunctionals: React.FC = () => {
  return (
    <div className="app-functionals">
      <Search />
      <Cities />
    </div>
  );
};

export default AppFunctionals;
