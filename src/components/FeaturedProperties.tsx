import "./FeaturedProperties.css";
import { jenniferJourney } from "../data/journey";
import JourneyCard from "./JourneyCard";

export default function FeaturedProperties() {
  return (
    <section className="section" id="properties">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__eyebrow">The Upgrade Journey</p>
          <h2>Proof, Not Just Promises</h2>
          <p className="section__subtitle">
            Long-term accumulation (HDB) → Strategic upgrade (Private) →
            Wealth building
          </p>
        </div>
        <div className="properties-grid">
          <JourneyCard story={jenniferJourney} />
          <article className="property-placeholder">
            <p>Your client story here — coming soon</p>
          </article>
        </div>
      </div>
    </section>
  );
}
