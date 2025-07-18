import "./ThemeToggle.css";
import { useTheme } from "@hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div
        className={`theme-toggle__slider ${theme === "dark" ? "dark" : "light"}`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </div>
  );
};
