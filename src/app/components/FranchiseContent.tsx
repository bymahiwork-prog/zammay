"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "919289895632";




const faqs = [
  {
    q: "Does Zammaya offer franchise opportunities?",
    a: "We are open to conversations with the right partners in new cities. Share your details and our team will get back to you.",
  },
  {
    q: "Who can apply for a Zammaya franchise?",
    a: "Individuals or groups with hospitality or business experience, access to a suitable premium location, and the capacity to invest in a premium lounge and dining build.",
  },
  {
    q: "What support is offered to franchise partners?",
    a: "Details on design, menu, training and launch support are shared with shortlisted partners during our conversations.",
  },
  {
    q: "Which cities are being considered for expansion?",
    a: "We are evaluating opportunities across major Indian cities. Tell us your preferred location in the enquiry form.",
  },
  {
    q: "How can I submit a franchise enquiry?",
    a: "Fill in the enquiry form on this page, or call or WhatsApp our team on +91 92898 95632.",
  },
];

export default function FranchiseContent() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      "Hello Zammaya, I'd like to enquire about a franchise.",
      "",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Preferred city: ${get("city")}`,
    ];
    const message = get("message");
    if (message) lines.push("", message);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="zm-fr">
      <style>{`
        .zm-fr {
          width: 100%;
          background: #080a08;
          color: #e8e0d0;
          font-family: var(--font-sans), Arial, sans-serif;
        }

        .zm-fr *,
        .zm-fr *::before,
        .zm-fr *::after {
          box-sizing: border-box;
        }

        .zm-fr-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: clamp(24px, 6vw, 72px);
          padding-right: clamp(24px, 6vw, 72px);
        }

        .zm-fr-section {
          padding-top: clamp(40px, 5vw, 64px);
          padding-bottom: clamp(40px, 5vw, 64px);
        }

        .zm-fr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: #c6a45b;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .zm-fr-eyebrow::before {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
          opacity: 0.7;
        }

        .zm-fr-serif,
        .zm-fr h1,
        .zm-fr h2,
        .zm-fr h3 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-weight: 400;
        }

        .zm-fr h2 {
          margin: 0;
          font-size: clamp(34px, 4.2vw, 56px);
          line-height: 1.06;
        }

        .zm-fr h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.2;
        }

        .zm-fr em {
          font-style: italic;
          color: #c6a45b;
        }

        .zm-fr-body {
          margin: 0;
          color: rgba(232, 224, 208, 0.74);
          font-size: 16px;
          line-height: 1.8;
        }

        .zm-fr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 0 28px;
          border: 1px solid #c6a45b;
          background: #c6a45b;
          color: #080a08;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 180ms ease, color 180ms ease;
        }

        .zm-fr-btn:hover {
          background: transparent;
          color: #c6a45b;
        }

        .zm-fr-btn--ghost {
          background: transparent;
          color: #e8e0d0;
          border-color: rgba(232, 224, 208, 0.5);
        }

        .zm-fr-btn--ghost:hover {
          border-color: #c6a45b;
        }

        .zm-fr a:focus-visible,
        .zm-fr button:focus-visible,
        .zm-fr summary:focus-visible,
        .zm-fr input:focus-visible,
        .zm-fr textarea:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 3px;
        }

        /* Hero */
        .zm-fr-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: min(640px, 82svh);
          display: flex;
          align-items: center;
        }

        .zm-fr-hero > img {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .zm-fr-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
              90deg,
              rgba(5, 7, 5, 0.92) 0%,
              rgba(5, 7, 5, 0.7) 45%,
              rgba(5, 7, 5, 0.35) 100%
            ),
            linear-gradient(0deg, rgba(5, 7, 5, 0.7), transparent 40%);
        }

        .zm-fr-hero::after {
          content: "";
          position: absolute;
          inset: clamp(12px, 1.6vw, 22px);
          pointer-events: none;
          border: 1px solid rgba(198, 164, 91, 0.28);
        }

        .zm-fr-hero-copy {
          padding-top: clamp(72px, 9vw, 110px);
          padding-bottom: clamp(72px, 9vw, 110px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        .zm-fr-hero h1 {
          margin: 0;
          max-width: 820px;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 0.96;
          letter-spacing: -0.02em;
        }

        .zm-fr-hero .zm-fr-body {
          max-width: 560px;
          font-size: 17px;
          color: rgba(232, 224, 208, 0.86);
        }

        .zm-fr-hero-tag {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .zm-fr-band {
          background: #101b14;
          border-top: 1px solid rgba(198, 164, 91, 0.15);
          border-bottom: 1px solid rgba(198, 164, 91, 0.15);
        }

        /* Enquiry */
        .zm-fr-enquiry {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(40px, 6vw, 72px);
          align-items: start;
        }

        .zm-fr-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .zm-fr-contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .zm-fr-sign {
          margin: 12px 0 0;
          color: #c6a45b;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 26px;
          font-style: italic;
          line-height: 1.3;
        }

        .zm-fr-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: clamp(28px, 3vw, 44px);
          border: 1px solid rgba(198, 164, 91, 0.3);
          background: #0d120e;
        }

        .zm-fr-form-head {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          font-size: 12px;
          color: rgba(232, 224, 208, 0.6);
        }

        .zm-fr-form-head span:first-child {
          color: #c6a45b;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .zm-fr-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .zm-fr-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(232, 224, 208, 0.7);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .zm-fr-field input,
        .zm-fr-field textarea {
          width: 100%;
          min-height: 50px;
          padding: 12px 14px;
          background: transparent;
          border: 1px solid rgba(232, 224, 208, 0.25);
          border-radius: 0;
          color: #e8e0d0;
          font-size: 15px;
          letter-spacing: normal;
          text-transform: none;
          transition: border-color 180ms ease;
        }

        .zm-fr-field textarea {
          resize: vertical;
        }

        .zm-fr-field input:focus,
        .zm-fr-field textarea:focus {
          border-color: #c6a45b;
        }

        .zm-fr-form button {
          align-self: flex-start;
          cursor: pointer;
        }

        .zm-fr-note {
          margin: 0;
          color: rgba(232, 224, 208, 0.6);
          font-size: 13px;
          line-height: 1.6;
        }

        .zm-fr-note[role="status"] {
          color: #c6a45b;
        }

        /* FAQ */
        .zm-fr-faq {
          max-width: 900px;
          margin: 0 auto;
        }

        .zm-fr-faq h2 {
          margin-bottom: 28px;
          text-align: center;
        }

        .zm-fr-faq details {
          border-bottom: 1px solid rgba(198, 164, 91, 0.25);
        }

        .zm-fr-faq details:first-of-type {
          border-top: 1px solid rgba(198, 164, 91, 0.25);
        }

        .zm-fr-faq summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 22px 0;
          cursor: pointer;
          list-style: none;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 22px;
          line-height: 1.3;
        }

        .zm-fr-faq summary::-webkit-details-marker {
          display: none;
        }

        .zm-fr-faq summary::after {
          content: "+";
          flex: 0 0 auto;
          color: #c6a45b;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 22px;
          transition: transform 200ms ease;
        }

        .zm-fr-faq details[open] summary::after {
          transform: rotate(45deg);
        }

        .zm-fr-faq details p {
          margin: 0 0 22px;
          max-width: 760px;
          color: rgba(232, 224, 208, 0.74);
          font-size: 15px;
          line-height: 1.8;
        }

        @media (max-width: 860px) {
          .zm-fr-enquiry {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @media (max-width: 560px) {
          .zm-fr-row {
            grid-template-columns: minmax(0, 1fr);
          }

          .zm-fr-faq summary {
            font-size: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-fr-btn,
          .zm-fr-field input,
          .zm-fr-field textarea,
          .zm-fr-faq summary::after {
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="zm-fr-hero" aria-labelledby="franchise-heading">
        <img src="/venue-exterior.jpg" alt="" />
        <div className="zm-fr-wrap zm-fr-hero-copy">
          <p className="zm-fr-eyebrow">Franchise Opportunity</p>
          <h1 id="franchise-heading">
            Partner With <em>Zammaya</em>
          </h1>
          <p className="zm-fr-hero-tag">
            Bring the Zammaya experience to your city.
          </p>
          <p className="zm-fr-body">
            A distinctive hospitality concept built around premium dining,
            cocktails, ambience, and memorable experiences.
          </p>
          <a href="#enquiry" className="zm-fr-btn">
            Enquire About a Franchise <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Enquiry */}
      <section
        id="enquiry"
        className="zm-fr-wrap zm-fr-section zm-fr-enquiry"
        aria-labelledby="franchise-enquiry-heading"
      >
        <div className="zm-fr-contact">
          <p className="zm-fr-eyebrow">Let’s Connect</p>
          <h2 id="franchise-enquiry-heading">
            Interested in partnering <em>with Zammaya?</em>
          </h2>
          <p className="zm-fr-body">
            Share your details and our team will get in touch with you. For
            quick questions, call or WhatsApp us directly.
          </p>
          <div className="zm-fr-contact-actions">
            <a href="tel:+919289895632" className="zm-fr-btn zm-fr-btn--ghost">
              Call Us
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Zammaya, I'd like to enquire about a franchise."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zm-fr-btn zm-fr-btn--ghost"
            >
              WhatsApp
            </a>
          </div>
          <p className="zm-fr-sign">Let’s create the next Zammaya destination.</p>
        </div>

        <form className="zm-fr-form" onSubmit={handleSubmit}>
          <div className="zm-fr-form-head">
            <span>Franchise Enquiry</span>
            <span>Fields marked * are required.</span>
          </div>

          <div className="zm-fr-row">
            <label className="zm-fr-field">
              Full Name*
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="zm-fr-field">
              Phone Number*
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
          </div>

          <div className="zm-fr-row">
            <label className="zm-fr-field">
              Email Address*
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="zm-fr-field">
              City / Preferred Location*
              <input name="city" type="text" autoComplete="address-level2" required />
            </label>
          </div>

          <label className="zm-fr-field">
            Message
            <textarea name="message" rows={4} />
          </label>

          <button type="submit" className="zm-fr-btn">
            Send Enquiry <span aria-hidden="true">→</span>
          </button>

          {sent ? (
            <p className="zm-fr-note" role="status">
              WhatsApp has opened with your details — press send there and our
              team will get back to you.
            </p>
          ) : (
            <p className="zm-fr-note">
              Your enquiry opens in WhatsApp, ready to send to our team.
            </p>
          )}
        </form>
      </section>

      {/* FAQ */}
      <section className="zm-fr-band" aria-labelledby="franchise-faq-heading">
        <div className="zm-fr-wrap zm-fr-section">
          <div className="zm-fr-faq">
            <h2 id="franchise-faq-heading">
              Franchise <em>FAQs</em>
            </h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
