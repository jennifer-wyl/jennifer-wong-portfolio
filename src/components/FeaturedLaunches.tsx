import "./FeaturedLaunches.css";

type Launch = {
  title: string;
  status: string;
  previewLaunch: string;
  description: string;
  url: string;
  cta: string;
};

const launches: Launch[] = [
  {
    title: "Lucerne Grand",
    status: "Coming Soon - Sept 18, 2026",
    previewLaunch: "Oct 3, 2026",
    description:
      "[Add brief description of project - location, target, etc.]",
    url: "https://lucerne-grand-launch.vercel.app/",
    cta: "Early Interest",
  },
];

export default function FeaturedLaunches() {
  return (
    <section className="section" id="featured-launches">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__eyebrow">New Projects</p>
          <h2>Featured Launches</h2>
        </div>
        <div className="launches-grid">
          {launches.map((launch) => (
            <article className="launch-card" key={launch.title}>
              <span className="launch-card__badge">{launch.status}</span>
              <h3 className="launch-card__title">{launch.title}</h3>
              <dl className="launch-card__meta">
                <div>
                  <dt>Preview Launch</dt>
                  <dd>{launch.previewLaunch}</dd>
                </div>
              </dl>
              <p className="launch-card__description">{launch.description}</p>
              <a
                className="btn btn--primary"
                href={launch.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {launch.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
