import { LeadSection } from "@components/LeadSection/LeadSection";
import Parallax from "@components/Parallax/Parallax";
import { ProjectSection } from "@components/ProjectSection/ProjectSection";

const Home: React.FC = () => {
  return (
    <>
      <Parallax />
      <LeadSection />
      <ProjectSection />
    </>
  );
};

export { Home };
