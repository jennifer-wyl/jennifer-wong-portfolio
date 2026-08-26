import "./About.css";

const points = [
  "16+ years in technical/systems thinking",
  "Bachelor's in Electrical Engineering",
  "Advisory-first approach",
  "Specialize in HDB → HDB upgrades, HDB → Private",
];

export default function About() {
  return (
    <section className="section section--cream" id="about">
      <div className="section__inner about">
        <img
          className="about__photo"
          src="/images/jennifer-headshot.png"
          alt="Jennifer Wong"
        />
        <div className="about__content">
          <p className="section__eyebrow">About Jennifer</p>
          <h2>A Different Kind of Property Advisor</h2>
          <p className="about__bio">
            Jen spent 16 years as an M&amp;E Manager at Evergreen Engineering
            before transitioning to property in 2025. Engineering background
            = data-driven decisions. No high-pressure sales. Just strategic
            advice for HDB upgraders.
          </p>
          <ul className="about__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
