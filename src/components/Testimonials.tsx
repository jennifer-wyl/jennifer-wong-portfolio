import "./Testimonials.css";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="section section--cream" id="testimonials">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__eyebrow">In Their Words</p>
          <h2>Client Testimonials</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
