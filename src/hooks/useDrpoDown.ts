import { useState } from "react";

export const useDrpoDown = () => {
  const [isDrpoDown, setIsDropDown] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleDropDownMenu = () => {
    if (isDrpoDown) {
      setIsClosing(true);
      setTimeout(() => {
        setIsDropDown(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsDropDown(true);
    }
  };

  return {
    isDrpoDown,
    isClosing,
    toggleDropDownMenu,
  };
};
