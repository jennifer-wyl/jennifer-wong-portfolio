import "./TestimonialCard.css";
import type { Testimonial } from "../data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="testimonial-card">
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>— {testimonial.attribution}</figcaption>
    </figure>
  );
}
