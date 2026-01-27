import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.ts";

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <button onClick={themeContext.handleThemeChange}>
      Змінити тему {themeContext.theme === "light" ? "🌒" : "☀"}
    </button>
  );
};

export default ThemeButton;
