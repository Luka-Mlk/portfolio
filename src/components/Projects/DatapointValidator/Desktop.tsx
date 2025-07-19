import datapointvalidator from "@assets/projects/datapoint-validator.png";

interface DesktopProps {
  tags: string[];
}

const Desktop: React.FC<DesktopProps> = ({ tags }) => {
  return (
    <>
      <div className="project datapointvalidator">
        <div className="project__title-desktop">
          <h2>Datapoint Validator</h2>
          <h3>A helpful internal tool that made it into production</h3>
        </div>
        <div className="project__content-wrapper-desktop">
          <img
            src={datapointvalidator}
            alt="Screenshot of DatapointValidator app"
            className="project-image"
          />
          <div className="project__content project__content-desktop">
            <p>
              Written while I was working at a print shop — initially out of
              frustration with the tedious manual labor involved in finding
              client design files across our storage system. It was slow,
              repetitive, and mind-numbing, so I decided to take matters into my
              own hands.
            </p>
            <p>
              We often received massive spreadsheets from clients, listing
              hundreds or even thousands of requested designs. We were tasked to
              manually search the file server row-by-row, find matching designs,
              and report back which ones could be completed quickly.
            </p>
            <p>
              Knowing the rough file structure of our office server, I wrote a
              script that scanned the spreadsheet values and searched for them
              in the server automatically. This drastically cut down the time
              spent on each job and reduced mistakes.
            </p>
            <p>
              Since this was my first tool used in day-to-day operations, I
              wanted it to last. I researched efficient approaches to ensure it
              stayed fast even as the file server grew in size. I eventually
              implemented a two-pass map strategy to optimize lookups.
            </p>
            <p>
              For the interface, I kept things simple: a server-side rendered
              app using EJS as the templating engine. The app cleanly displayed
              which designs were found and which were missing — no complex
              frontend needed.
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
      </div>
    </>
  );
};

export { Desktop };
