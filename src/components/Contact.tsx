import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";

type PropertyInterest = "HDB resale" | "BTO" | "Private" | "Unsure";

const interestOptions: PropertyInterest[] = [
  "HDB resale",
  "BTO",
  "Private",
  "Unsure",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<PropertyInterest | "">("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !interest) {
      setError("Please fill in your name, phone, and property interest.");
      return;
    }

    setError("");

    // TODO: wire this up to an actual form backend (e.g. Formspree,
    // a serverless function, or an email API) once one is chosen.
    // For now this only simulates a successful submission.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="section" id="contact">
        <div className="section__inner contact__confirmation">
          <h2>Thank you, {name.split(" ")[0]}.</h2>
          <p>I'll reach out within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <div className="section__heading">
          <h2>Start Your Upgrade Journey</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-form__field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>

          <label className="contact-form__field">
            <span>Phone (WhatsApp preferred)</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </label>

          <label className="contact-form__field">
            <span>Property Interest</span>
            <select
              value={interest}
              onChange={(e) =>
                setInterest(e.target.value as PropertyInterest)
              }
            >
              <option value="" disabled>
                Select an option
              </option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="contact-form__field">
            <span>Message (optional)</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </label>

          {error && <p className="contact-form__error">{error}</p>}

          <button type="submit" className="btn btn--primary btn--full">
            Let's Chat
          </button>
        </form>
      </div>
    </section>
  );
}
