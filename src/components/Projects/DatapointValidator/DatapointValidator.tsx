import { useMediaQuery } from "@hooks/mediaQuery";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import "./DatapointValidator.css";

const DatapointValidator: React.FC = () => {
  const tags: string[] = [
    "🟢 Node.js",
    "EJS",
    "File Search",
    "Server Side Rendering",
  ];

  const isDesktop = useMediaQuery("(min-width: 1530px)");

  return <>{isDesktop ? <Desktop tags={tags} /> : <Mobile tags={tags} />}</>;
};

export { DatapointValidator };
