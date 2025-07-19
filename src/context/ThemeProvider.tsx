import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const getPreferredTheme = () => (prefersDarkQuery.matches ? "dark" : "light");

  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Listen to system theme changes
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    prefersDarkQuery.addEventListener("change", listener);
    return () => prefersDarkQuery.removeEventListener("change", listener);
  }, [prefersDarkQuery]);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
