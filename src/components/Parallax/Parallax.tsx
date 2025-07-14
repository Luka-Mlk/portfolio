import React, { useEffect } from "react";
import { getThemedImage } from "@utils/img/getters/getThemedImage";
import "./Parallax.css";
import { useTheme } from "@hooks/useTheme";

const Parallax: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const mg = document.querySelector(".parallax__layer--mg") as HTMLElement;
      const fg = document.querySelector(".parallax__layer--fg") as HTMLElement;

      if (mg) mg.style.transform = `translateY(${scrollY * -0.9}px)`;
      if (fg) fg.style.transform = `translateY(${scrollY * -1.25}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax">
      {/* Background */}
      <picture className="parallax__layer parallax__layer--bg">
        <source
          media="(min-width: 1535px)"
          srcSet={getThemedImage("xl", "bg", theme)}
        />
        <source
          media="(min-width: 1279px)"
          srcSet={getThemedImage("lg", "bg", theme)}
        />
        <source
          media="(min-width: 750px)"
          srcSet={getThemedImage("md", "bg", theme)}
        />
        <source
          media="(min-width: 379px)"
          srcSet={getThemedImage("sm", "bg", theme)}
        />
        <img
          src={getThemedImage("sm", "bg", theme)}
          alt="Background layer"
          className="parallax__image"
        />
      </picture>

      {/* Midground */}
      <picture className="parallax__layer parallax__layer--mg">
        <source
          media="(min-width: 1535px)"
          srcSet={getThemedImage("xl", "mg", theme)}
        />
        <source
          media="(min-width: 1279px)"
          srcSet={getThemedImage("lg", "mg", theme)}
        />
        <source
          media="(min-width: 750px)"
          srcSet={getThemedImage("md", "mg", theme)}
        />
        <source
          media="(min-width: 379px)"
          srcSet={getThemedImage("sm", "mg", theme)}
        />
        <img
          src={getThemedImage("sm", "mg", theme)}
          alt="Middleground layer"
          className="parallax__image"
        />
      </picture>

      {/* Foreground */}
      <picture className="parallax__layer parallax__layer--fg">
        <source
          media="(min-width: 1535px)"
          srcSet={getThemedImage("xl", "fg", theme)}
        />
        <source
          media="(min-width: 1279px)"
          srcSet={getThemedImage("lg", "fg", theme)}
        />
        <source
          media="(min-width: 750px)"
          srcSet={getThemedImage("md", "fg", theme)}
        />
        <source
          media="(min-width: 359px)"
          srcSet={getThemedImage("sm", "fg", theme)}
        />
        <img
          src={getThemedImage("sm", "fg", theme)}
          alt="Foreground layer"
          className="parallax__image"
        />
      </picture>

      {/* <div className="parallax__overlay">
        <h1 className="parallax__title">Welcome</h1>
      </div> */}
    </section>
  );
};

export default Parallax;
