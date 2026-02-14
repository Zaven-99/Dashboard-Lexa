import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  const toggletheme = (mode: "light" | "dark") => {
    setTheme(mode);
    localStorage.setItem("mode", mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    toggletheme,
    theme,
  };
};
