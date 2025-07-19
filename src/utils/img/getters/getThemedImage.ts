// light
import smBgLight from "@assets/parallax/small/day/s-bg.png";
import smMgLight from "@assets/parallax/small/day/s-mg.png";
import smFgLight from "@assets/parallax/small/day/s-fg.png";
import mBgLight from "@assets/parallax/medium/day/m-bg.png";
import mMgLight from "@assets/parallax/medium/day/m-mg.png";
import mFgLight from "@assets/parallax/medium/day/m-fg.png";
import lBgLight from "@assets/parallax/large/day/l-bg.png";
import lMgLight from "@assets/parallax/large/day/l-mg.png";
import lFgLight from "@assets/parallax/large/day/l-fg.png";
import xlBgLight from "@assets/parallax/xlarge/day/xl-bg.png";
import xlMgLight from "@assets/parallax/xlarge/day/xl-mg.png";
import xlFgLight from "@assets/parallax/xlarge/day/xl-fg.png";

// dark
import smBgDark from "@assets/parallax/small/night/s-bg.png";
import smMgDark from "@assets/parallax/small/night/s-mg.png";
import smFgDark from "@assets/parallax/small/night/s-fg.png";
import mBgDark from "@assets/parallax/medium/night/m-bg.png";
import mMgDark from "@assets/parallax/medium/night/m-mg.png";
import mFgDark from "@assets/parallax/medium/night/m-fg.png";
import lBgDark from "@assets/parallax/large/night/l-bg.png";
import lMgDark from "@assets/parallax/large/night/l-mg.png";
import lFgDark from "@assets/parallax/large/night/l-fg.png";
import xlBgDark from "@assets/parallax/xlarge/night/xl-bg.png";
import xlMgDark from "@assets/parallax/xlarge/night/xl-mg.png";
import xlFgDark from "@assets/parallax/xlarge/night/xl-fg.png";
// ... continue for all images

type Size = "sm" | "md" | "lg" | "xl";
type Layer = "bg" | "mg" | "fg";
type Theme = "light" | "dark";

const imageMap: Record<string, string> = {
  // light
  "sm-bg-light": smBgLight,
  "sm-mg-light": smMgLight,
  "sm-fg-light": smFgLight,
  "md-bg-light": mBgLight,
  "md-mg-light": mMgLight,
  "md-fg-light": mFgLight,
  "lg-bg-light": lBgLight,
  "lg-mg-light": lMgLight,
  "lg-fg-light": lFgLight,
  "xl-bg-light": xlBgLight,
  "xl-mg-light": xlMgLight,
  "xl-fg-light": xlFgLight,
  // dark
  "sm-bg-dark": smBgDark,
  "sm-mg-dark": smMgDark,
  "sm-fg-dark": smFgDark,
  "md-bg-dark": mBgDark,
  "md-mg-dark": mMgDark,
  "md-fg-dark": mFgDark,
  "lg-bg-dark": lBgDark,
  "lg-mg-dark": lMgDark,
  "lg-fg-dark": lFgDark,
  "xl-bg-dark": xlBgDark,
  "xl-mg-dark": xlMgDark,
  "xl-fg-dark": xlFgDark,
};

export const getThemedImage = (
  size: Size,
  layer: Layer,
  theme: Theme,
): string => {
  return imageMap[`${size}-${layer}-${theme}`];
};
