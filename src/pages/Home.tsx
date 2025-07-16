import { Hero } from "@components/Hero/Hero";
import Parallax from "@components/Parallax/Parallax";

const Home: React.FC = () => {
  return (
    <>
      <Parallax />
      <Hero />
    </>
  );
};

export { Home };
