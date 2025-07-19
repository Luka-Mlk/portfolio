import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./Layout.css";
import { useTheme } from "@hooks/useTheme";
import { ThemeToggle } from "@components/ThemeToggle/ThemeToggle";

import githubIconDotted from "@assets/icons/github-dotted.png";
import linkedinIconDotted from "@assets/icons/linkedin-dotted.png";
import githubIconSticker from "@assets/icons/github-sticker.png";
import linkedinIconSticker from "@assets/icons/linkedin-sticker.png";

export const Layout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = ""; // clear previous
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
      <header className="layout__header">
        <nav className="layout__nav">
          <div className="layout__nav-links">
            <a
              href="https://github.com/Luka-Mlk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={theme == "dark" ? githubIconDotted : githubIconSticker}
                alt=""
              />
            </a>
            <a
              href="https://mk.linkedin.com/in/luka-milik"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={theme == "dark" ? linkedinIconDotted : linkedinIconSticker}
                alt=""
              />
            </a>
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
