import "../Project.css";
import "./TicketBlaster.css";
import { useMediaQuery } from "@hooks/mediaQuery";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

const TicketBlaster: React.FC = () => {
  const tags: string[] = [
    "🟢 NodeJS",
    "🎉 Social",
    "MongoDB",
    "⚛️ React",
    "PM2",
    "Distributed Monolith",
  ];

  const isDesktop = useMediaQuery("(min-width: 1530px)");

  return <>{isDesktop ? <Desktop tags={tags} /> : <Mobile tags={tags} />}</>;
};

export { TicketBlaster };
