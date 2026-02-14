import { useState } from "react";

export const useSideBar = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);

  const sideBarToggle = () => {
    setOpenSideBar(true);
  };

  const closeSideBar = () => {
    if (openSideBar) {
      setIsClosing(true);
      setTimeout(() => {
        setOpenSideBar(false);
        setIsClosing(false);
      }, 300);
    }
  };

  return {
    sideBarToggle,
    openSideBar,
    isClosing,
    closeSideBar,
  };
};
