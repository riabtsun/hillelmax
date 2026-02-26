import {
  createContext,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

export type ThemeContextType = {
  theme: string;
  handleThemeChange: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: UserProviderProps) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "dark-theme" : "light-theme";
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      handleThemeChange,
    }),
    [theme, handleThemeChange],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
