export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sarah-marcus",
    quote:
      "Jen's approach is refreshingly different. No pressure, just strategic advice backed by data. We felt confident in our upgrade decision.",
    attribution: "Sarah & Marcus",
  },
  {
    id: "david-amy",
    quote:
      "As first-time HDB upgraders, we were overwhelmed. She broke down the numbers and helped us see which option made sense for our timeline.",
    attribution: "David & Amy",
  },
  {
    id: "robert-lim",
    quote:
      "The best part: she explained her thinking. Why this project, why this timing. That transparency is rare in property.",
    attribution: "Robert Lim",
  },
];
