import "./JourneyCard.css";
import type { JourneyStory } from "../data/journey";

export default function JourneyCard({ story }: { story: JourneyStory }) {
  return (
    <article className="journey-card">
      <span className="journey-card__badge">Jennifer's Story</span>
      <h3>{story.title}</h3>

      <div className="journey-card__images">
        <figure className="journey-card__image">
          <img src={story.images.left.src} alt={story.images.left.alt} />
          <figcaption>{story.images.left.caption}</figcaption>
        </figure>
        <div className="journey-card__arrow" aria-hidden="true">
          →
        </div>
        <figure className="journey-card__image">
          <img src={story.images.right.src} alt={story.images.right.alt} />
          <figcaption>{story.images.right.caption}</figcaption>
        </figure>
      </div>

      <div className="journey-card__milestone">
        <p className="journey-card__milestone-label">Background</p>
        <p className="journey-card__milestone-text">{story.background}</p>
      </div>

      <div className="journey-card__milestone">
        <p className="journey-card__milestone-label">2022 Upgrade</p>
        <p className="journey-card__milestone-text">{story.upgrade2022}</p>
      </div>

      <div className="journey-card__prices">
        <div className="journey-card__prices-property">
          {story.current.propertyName}
        </div>
        <div>
          <p className="journey-card__price-label">Entry price</p>
          <p className="journey-card__price-value">
            {story.current.entryPrice}
          </p>
        </div>
        <div>
          <p className="journey-card__price-label">Current valuation</p>
          <p className="journey-card__price-value">
            {story.current.currentValuation}
          </p>
        </div>
      </div>

      <div className="journey-card__milestone">
        <p className="journey-card__milestone-label">Outcome</p>
        <p className="journey-card__milestone-text journey-card__milestone-text--outcome">
          {story.outcome}
        </p>
      </div>

      <p className="journey-card__strategy">{story.strategy}</p>
    </article>
  );
}
