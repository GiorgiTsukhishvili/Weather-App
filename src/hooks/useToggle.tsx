import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const doToggle = (): void => {
    setToggle((prevToggle) => !prevToggle);
  };

  return { toggle, doToggle };
};

export default useToggle;
