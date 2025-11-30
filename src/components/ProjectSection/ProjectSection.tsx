import { StockTrust } from "@components/Projects/StockTrust/StockTrust";
import "./ProjectSection.css";
import { TicketBlaster } from "@components/Projects/TicketBlaster/TicketBlaster";
import { DatapointValidator } from "@components/Projects/DatapointValidator/DatapointValidator";
import { Dscan } from "@components/Projects/Dscan/Dscan";

const ProjectSection: React.FC = () => {
  return (
    <div className="project__section">
      <h2 className="project__section-intro">Here's some of my projects</h2>
      <StockTrust />
      <TicketBlaster />
      <DatapointValidator />
      <Dscan />
    </div>
  );
};

export { ProjectSection };
