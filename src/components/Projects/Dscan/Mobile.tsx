import dscan from "@assets/projects/dscan.png";

interface MobileProps {
  tags: string[];
}

const Mobile: React.FC<MobileProps> = ({ tags }) => {
  return (
    <>
      <div className="project dscan">
        <div className="project__title-mobile">
          <h2>Dscan</h2>
          <h3>
            A unix like tool that parses javascript files and resolves
            dependencies
          </h3>
        </div>
        <img
          src={dscan}
          alt="Screenshot of Dscan app"
          className="project-image"
        />
        <div className="project__content">
          <p>
            Dscan is a tool I built to help track dependencies and dependants
            between files. I originally made it to help test just the modules
            that were actually affected by changes. The idea was to keep it
            simple, like a Unix tool: do one thing, and do it well — find
            dependencies and dependants.
          </p>
          <p>
            Dscan gives the developer the power to do what they want with the
            output. You can get a clean JSON output for easy reading, or use
            options like “reverse” to only show dependants, or “regular” to see
            direct dependencies of the file.
          </p>
          <p>
            To make it work, I used the TypeScript Language Server Protocol
            (LSP) to parse imports and build a dependency graph of all the files
            in the directory where Dscan is run. It's built in TypeScript with
            just one external dependency — TypeScript itself.
          </p>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Mobile };
