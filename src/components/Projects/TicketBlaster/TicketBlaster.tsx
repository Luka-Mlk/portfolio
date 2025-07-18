import "../Project.css";
import "./TicketBlaster.css";
import { useMediaQuery } from "@hooks/mediaQuery";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

const TicketBlaster: React.FC = () => {
  const tags: string[] = [
    "🟢 NodeJS",
    "🎉 Social",
    "Distributed Monolith",
    "MongoDB",
    "⚛️ React",
    "PM2",
  ];

  const isDesktop = useMediaQuery("(min-width: 1530px)");

  return <>{isDesktop ? <Desktop tags={tags} /> : <Mobile tags={tags} />}</>;
};

export { TicketBlaster };
