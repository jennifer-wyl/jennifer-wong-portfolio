import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1>Strategic HDB Upgrades for Achievers</h1>
        <p className="hero__subtitle">
          Data-driven guidance for HDB families looking to upgrade (30-45 age
          group)
        </p>
        <a href="#contact" className="btn btn--primary">
          Start Your Upgrade Plan
        </a>
      </div>
    </section>
  );
}
