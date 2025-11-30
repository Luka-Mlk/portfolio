import { useMediaQuery } from "@hooks/mediaQuery";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import "./Dscan.css";

const Dscan: React.FC = () => {
  const tags: string[] = [
    "CLI Tool",
    "TypeScript",
    "File Navigation",
    "Typescript LSP",
    "Tool",
    "Code Analysis",
    "Unix-like",
    "Build Optimization",
  ];

  const isDesktop = useMediaQuery("(min-width: 1530px)");

  return <>{isDesktop ? <Desktop tags={tags} /> : <Mobile tags={tags} />}</>;
};

export { Dscan };
