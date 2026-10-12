"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "919289895632";
const PHONE_DISPLAY = "+91 92898 95632";
const ADDRESS_QUERY = "Zammaya, 81 Sri Aurobindo Marg, Adchini, New Delhi";

const occasions = [
  "Dinner",
  "Drinks",
  "Date night",
  "Birthday",
  "Anniversary",
  "Group get-together",
  "Corporate dinner",
  "Other",
];

export default function ContactContent() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const date = get("date")
      ? new Date(`${get("date")}T00:00:00`).toLocaleDateString("en-IN", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "";

    const lines = [
      "Hello Zammaya, I'd like to reserve a table.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Date: ${date}`,
      `Time: ${get("time")}`,
      `Guests: ${get("guests")}`,
      `Occasion: ${get("occasion")}`,
    ];
    const notes = get("notes");
    if (notes) lines.push("", `Notes: ${notes}`);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        lines.join("\n")
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  return (
    <div className="zm-ct">
      <style>{`
        .zm-ct {
          width: 100%;
          background: #080a08;
          color: #e8e0d0;
          font-family: var(--font-sans), Arial, sans-serif;
        }

        .zm-ct *,
        .zm-ct *::before,
        .zm-ct *::after {
          box-sizing: border-box;
        }

        .zm-ct-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: clamp(24px, 6vw, 72px);
          padding-right: clamp(24px, 6vw, 72px);
        }

        .zm-ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: #c6a45b;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .zm-ct-eyebrow--lines::before,
        .zm-ct-eyebrow--lines::after {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
          opacity: 0.7;
        }

        .zm-ct h1,
        .zm-ct h2,
        .zm-ct h3 {
          margin: 0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-weight: 400;
        }

        .zm-ct em {
          font-style: italic;
          color: #c6a45b;
        }

        .zm-ct a {
          color: inherit;
        }

        .zm-ct a:focus-visible,
        .zm-ct button:focus-visible,
        .zm-ct input:focus-visible,
        .zm-ct select:focus-visible,
        .zm-ct textarea:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 3px;
        }

        .zm-ct-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 0 28px;
          border: 1px solid #c6a45b;
          background: #c6a45b;
          color: #080a08 !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 180ms ease, color 180ms ease;
        }

        .zm-ct-btn:hover {
          background: transparent;
          color: #c6a45b !important;
        }

        /* Intro */
        .zm-ct-intro {
          padding-top: clamp(48px, 6vw, 84px);
          padding-bottom: clamp(32px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          text-align: center;
        }

        .zm-ct-intro h1 {
          font-size: clamp(46px, 6.6vw, 92px);
          line-height: 0.98;
        }

        .zm-ct-intro p:last-child {
          margin: 0;
          max-width: 600px;
          color: rgba(232, 224, 208, 0.78);
          font-size: 17px;
          line-height: 1.75;
        }

        /* Main grid */
        .zm-ct-main {
          padding-bottom: clamp(40px, 5vw, 64px);
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: clamp(28px, 4vw, 48px);
          align-items: start;
        }

        /* Form */
        .zm-ct-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: clamp(28px, 3.4vw, 48px);
          border: 1px solid rgba(198, 164, 91, 0.3);
          background: #0d120e;
        }

        .zm-ct-form h2 {
          font-size: clamp(30px, 3.2vw, 42px);
          line-height: 1.1;
        }

        .zm-ct-form-sub {
          margin: -8px 0 4px;
          color: rgba(232, 224, 208, 0.65);
          font-size: 14px;
          line-height: 1.6;
        }

        .zm-ct-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .zm-ct-row--3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .zm-ct-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(232, 224, 208, 0.7);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .zm-ct-field input,
        .zm-ct-field select,
        .zm-ct-field textarea {
          width: 100%;
          min-height: 50px;
          padding: 12px 14px;
          background: transparent;
          border: 1px solid rgba(232, 224, 208, 0.25);
          border-radius: 0;
          color: #e8e0d0;
          color-scheme: dark;
          font-size: 15px;
          letter-spacing: normal;
          text-transform: none;
          transition: border-color 180ms ease;
        }

        .zm-ct-field select option {
          background: #0d120e;
        }

        .zm-ct-field textarea {
          resize: vertical;
        }

        .zm-ct-field input:focus,
        .zm-ct-field select:focus,
        .zm-ct-field textarea:focus {
          border-color: #c6a45b;
        }

        .zm-ct-form .zm-ct-btn {
          align-self: flex-start;
        }

        .zm-ct-note {
          margin: 0;
          color: rgba(232, 224, 208, 0.6);
          font-size: 13px;
          line-height: 1.6;
        }

        .zm-ct-note[role="status"] {
          color: #c6a45b;
        }

        /* Info cards */
        .zm-ct-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(198, 164, 91, 0.25);
          border: 1px solid rgba(198, 164, 91, 0.25);
        }

        .zm-ct-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 28px 30px;
          background: #080a08;
        }

        .zm-ct-card h3 {
          font-size: 24px;
          line-height: 1.2;
        }

        .zm-ct-card address,
        .zm-ct-card p {
          margin: 0;
          color: rgba(232, 224, 208, 0.78);
          font-size: 15px;
          font-style: normal;
          line-height: 1.75;
        }

        .zm-ct-link {
          width: fit-content;
          color: #c6a45b !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .zm-ct-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .zm-ct-phone {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 30px;
          line-height: 1.1;
          text-decoration: none;
        }

        .zm-ct-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
        }

        /* Map */
        .zm-ct-map {
          border-top: 1px solid rgba(198, 164, 91, 0.18);
          background: #101b14;
        }

        .zm-ct-map-inner {
          padding-top: clamp(40px, 5vw, 64px);
          padding-bottom: clamp(40px, 5vw, 64px);
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(28px, 4vw, 56px);
          align-items: center;
        }

        .zm-ct-map-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .zm-ct-map-copy h2 {
          font-size: clamp(32px, 3.8vw, 52px);
          line-height: 1.06;
        }

        .zm-ct-map-copy p {
          margin: 0;
          color: rgba(232, 224, 208, 0.75);
          font-size: 16px;
          line-height: 1.8;
        }

        .zm-ct-map-frame {
          position: relative;
          width: 100%;
          height: clamp(300px, 34vw, 440px);
          border: 1px solid rgba(198, 164, 91, 0.3);
          overflow: hidden;
          background: #080a08;
        }

        .zm-ct-map-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(0.85) invert(0.9) contrast(0.9) hue-rotate(180deg);
        }

        @media (max-width: 900px) {
          .zm-ct-main,
          .zm-ct-map-inner {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @media (max-width: 560px) {
          .zm-ct-row,
          .zm-ct-row--3 {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-ct-btn,
          .zm-ct-field input,
          .zm-ct-field select,
          .zm-ct-field textarea {
            transition: none;
          }
        }
      `}</style>

      <section className="zm-ct-wrap zm-ct-intro" aria-labelledby="contact-heading">
        <p className="zm-ct-eyebrow zm-ct-eyebrow--lines">Contact &amp; Reservations</p>
        <h1 id="contact-heading">
          Reserve Your <em>Evening</em>
        </h1>
        <p>
          A special dinner, a celebration, or simply a good evening with good
          people — tell us when, and we’ll keep a table ready.
        </p>
      </section>

      <div className="zm-ct-wrap zm-ct-main">
        <form
          id="reservation"
          className="zm-ct-form"
          onSubmit={handleSubmit}
          aria-labelledby="reservation-heading"
        >
          <h2 id="reservation-heading">
            Book a <em>Table</em>
          </h2>
          <p className="zm-ct-form-sub">
            Send your request on WhatsApp and our team will confirm your
            booking.
          </p>

          <div className="zm-ct-row">
            <label className="zm-ct-field">
              Name*
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="zm-ct-field">
              Phone*
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
          </div>

          <div className="zm-ct-row zm-ct-row--3">
            <label className="zm-ct-field">
              Date*
              <input name="date" type="date" required />
            </label>
            <label className="zm-ct-field">
              Time*
              <input name="time" type="time" required />
            </label>
            <label className="zm-ct-field">
              Guests*
              <input
                name="guests"
                type="number"
                min={1}
                max={200}
                defaultValue={2}
                inputMode="numeric"
                required
              />
            </label>
          </div>

          <label className="zm-ct-field">
            Occasion
            <select name="occasion" defaultValue="Dinner">
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>

          <label className="zm-ct-field">
            Special Requests
            <textarea
              name="notes"
              rows={3}
              placeholder="Seating preference, cake, decor, dietary needs…"
            />
          </label>

          <button type="submit" className="zm-ct-btn">
            Request Reservation <span aria-hidden="true">→</span>
          </button>

          {sent ? (
            <p className="zm-ct-note" role="status">
              WhatsApp has opened with your booking details — press send there
              and our team will confirm.
            </p>
          ) : (
            <p className="zm-ct-note">
              Your request opens in WhatsApp, ready to send. Prefer to talk?
              Call {PHONE_DISPLAY}.
            </p>
          )}
        </form>

        <div className="zm-ct-info">
          <div className="zm-ct-card">
            <p className="zm-ct-eyebrow">Call or WhatsApp</p>
            <a href="tel:+919289895632" className="zm-ct-phone">
              {PHONE_DISPLAY}
            </a>
            <div className="zm-ct-actions">
              <a href="tel:+919289895632" className="zm-ct-link">
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Zammaya, I'd like to make a reservation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="zm-ct-link"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          <div className="zm-ct-card">
            <p className="zm-ct-eyebrow">Visit Us</p>
            <h3>Zammaya, Adchini</h3>
            <address>
              81, Sri Aurobindo Marg,
              <br />
              Adchini, South Delhi, New Delhi
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                ADDRESS_QUERY
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zm-ct-link"
            >
              Get Directions ↗
            </a>
          </div>

          <div className="zm-ct-card">
            <p className="zm-ct-eyebrow">Celebrations &amp; Private Events</p>
            <p>
              Birthdays, anniversaries, group dinners and corporate evenings —
              tell us what you’re planning and we’ll help make it special.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Zammaya, I'd like to plan a celebration / private event."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zm-ct-link"
            >
              Plan an Event ↗
            </a>
          </div>

          <div className="zm-ct-card">
            <p className="zm-ct-eyebrow">Follow the Night</p>
            <a
              href="https://www.instagram.com/zammayadelhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="zm-ct-phone"
            >
              @zammayadelhi
            </a>
          </div>
        </div>
      </div>

      <section className="zm-ct-map" aria-labelledby="contact-map-heading">
        <div className="zm-ct-wrap zm-ct-map-inner">
          <div className="zm-ct-map-copy">
            <p className="zm-ct-eyebrow">Find Us</p>
            <h2 id="contact-map-heading">
              In the Heart of <em>South Delhi</em>
            </h2>
            <p>
              On Sri Aurobindo Marg in Adchini — minutes from Hauz Khas, Green
              Park, Malviya Nagar, Saket and Mehrauli.
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                ADDRESS_QUERY
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zm-ct-btn"
            >
              Open in Google Maps ↗
            </a>
          </div>

          <div className="zm-ct-map-frame">
            <iframe
              title="Map showing Zammaya, 81 Sri Aurobindo Marg, Adchini"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                ADDRESS_QUERY
              )}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
