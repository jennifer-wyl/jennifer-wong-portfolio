import "./FeaturedLaunches.css";

type Launch = {
  title: string;
  status: string;
  location: string;
  description: string;
  previewLaunch: string;
  officialLaunch: string;
  url: string;
  cta: string;
};

const launches: Launch[] = [
  {
    title: "Lucerne Grand",
    status: "Coming Soon - Sept 18, 2026",
    location: "D22, Jurong · Lakeside Drive",
    description:
      "200m from Lakeside MRT. 570 units, 2–4 bedrooms (99-year tenure). Completion 2031. A lifetime by the water.",
    previewLaunch: "Sept 18, 2026",
    officialLaunch: "Oct 3, 2026",
    url: "https://lucerne-grand-launch.vercel.app/",
    cta: "Register for Preview",
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
              <p className="launch-card__location">{launch.location}</p>
              <p className="launch-card__description">{launch.description}</p>
              <dl className="launch-card__meta">
                <div>
                  <dt>Preview Launch</dt>
                  <dd>{launch.previewLaunch}</dd>
                </div>
                <div>
                  <dt>Official Launch</dt>
                  <dd>{launch.officialLaunch}</dd>
                </div>
              </dl>
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
