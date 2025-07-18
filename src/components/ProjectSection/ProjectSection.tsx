import { StockTrust } from "@components/Projects/StockTrust/StockTrust";
import "./ProjectSection.css";

const ProjectSection: React.FC = () => {
  return (
    <div className="project__section">
      <h2>Here's some of my projects</h2>
      <StockTrust />
    </div>
  );
};

export { ProjectSection };
