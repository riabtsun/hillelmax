import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  return (
    <button onClick={themeContext.handleThemeChange}>
      Змінити тему {themeContext.theme === "light" ? "🌒" : "☀"}
    </button>
  );
};

export default ThemeButton;
