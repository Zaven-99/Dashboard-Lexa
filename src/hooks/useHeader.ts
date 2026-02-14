import { useState } from "react";

export const useHeader = () => {
  const [isOpenBurger, setisOpenBurger] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toggleBurger = () => {
    if (isOpenBurger) {
      setIsClosing(true);
      setTimeout(() => {
        setisOpenBurger(false);
        setIsClosing(false);
      }, 300);
    } else {
      setisOpenBurger(true);
    }
  };
  return {
    toggleBurger,
    isOpenBurger,
    isClosing,
  };
};
