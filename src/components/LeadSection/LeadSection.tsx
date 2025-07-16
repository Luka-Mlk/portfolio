import "./LeadSection.css";

const LeadSection: React.FC = () => {
  return (
    <>
      <div className="lead__section">
        <p className="lead__section-hello">Hi, and thanks for scrolling.</p>
        <br />
        <p className="lead__section-main">
          My name is Luka I mess around with web development, Linux, automation,
          and the stuff in between.
          <br />
          Some of it ends up here. Maybe you'll like something.
        </p>
      </div>
    </>
  );
};

export { LeadSection };
