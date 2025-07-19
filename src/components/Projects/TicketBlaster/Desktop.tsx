import ticketBlaster from "@assets/projects/ticket-blaster.png";

interface DesktopProps {
  tags: string[];
}

const Desktop: React.FC<DesktopProps> = ({ tags }) => {
  return (
    <div className="project ticketblaster">
      <div className="project__title-desktop">
        <h2>🎟️ TicketBlaster</h2>
        <h3>A full-stack Ticketmaster clone built as a course capstone</h3>
      </div>
      <div className="project__content project__content-desktop ticketblaster__content">
        <div>
          <p>
            TicketBlaster was built as the final project for the full-stack
            development program I completed at Semos Education. After 9 months
            of hands-on learning, this app was meant to sum everything up into a
            real-world application.
          </p>
          <p>
            The goal was to build a Ticketmaster-style app with user accounts,
            admin dashboards, ticket history, and session persistence — all
            built using the MERN stack.
          </p>
          <p>
            A unique challenge was implementing a custom proxy server in Node.js
            to route traffic between services. This became necessary to satisfy
            the project requirement for a proxy and gave me valuable experience
            working with low-level HTTP routing and middleware.
          </p>
          <p>
            Due to some issues with cross-platform service management on
            Windows, I introduced PM2 as a process manager to ensure all
            services booted as seperate services
          </p>
          <p>
            The frontend was my first large-scale React project, and it greatly
            improved my understanding of component architecture, state
            management, and API integration.
          </p>
          <p>
            TicketBlaster uses MongoDB as its primary data store — being my
            first hands-on experience with NoSQL databases, including modeling,
            indexing, and querying with Mongoose.
          </p>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <img
          src={ticketBlaster}
          alt="Screenshot of TicketBlaster app"
          className="project-image"
        />
      </div>
    </div>
  );
};

export { Desktop };
