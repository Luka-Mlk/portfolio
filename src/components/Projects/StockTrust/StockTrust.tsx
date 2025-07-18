import "../Project.css";
import { useMediaQuery } from "@hooks/mediaQuery";
import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";

const StockTrust: React.FC = () => {
  const tags = [
    "🐹 Go",
    "⚙️ ETL Pipeline",
    "🕷️ Web Scraping",
    "Microservices",
    "Concurrency",
    "🐳 Docker",
    "🐘 PostgreSQL",
    "Nginx",
    "Design Patterns",
  ];

  const isDesktop = useMediaQuery("(min-width: 1530px)");

  return <>{isDesktop ? <Desktop tags={tags} /> : <Mobile tags={tags} />}</>;
};

export { StockTrust };
