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
  return (
    <div className="project">
      <h2>Stocktrust</h2>
      <h3>From homework assignment to passion project</h3>
      <img
        src="/images/stocktrust.png"
        alt="Screenshot of the Stocktrust app"
      />
      <p>
        Stocktrust started as a Software Design & Architecture course assignment
        to scrape the Macedonian Stock Exchange and analyze its historical data
        with trading indicators.
      </p>
      <p>
        I used Go for backend development, leveraging the gocolly scraping
        library. Since gocolly does not execute JavaScript, I reverse-engineered
        the site’s API calls and replicated them with custom fetch requests to
        collect accurate historical data.
      </p>
      <p>
        To handle data efficiently, I built an ETL pipeline that scrapes
        concurrently across multiple threads, queues the results, and writes
        them to a PostgreSQL database.
      </p>
      <p>
        The project architecture was refactored from a monorepo into a
        microservices setup consisting of three services: a frontend renderer, a
        scraper, and a data communication service serving as an entrypoint for
        the renderer to get data.
      </p>
      <p>
        For deployment, I created Dockerfiles for all services and combined them
        into a Docker Compose setup, which also runs PostgreSQL and an Nginx
        server responsible for routing requests.
      </p>
      <p>
        For more details, feel free to check out the repository, which includes
        a tutorial on running the project and configuring the Docker containers.
      </p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export { StockTrust };
