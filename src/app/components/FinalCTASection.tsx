"use client";

import React from "react";

export default function FinalCTASection() {
  const phoneNumber = "919289895632";

  const whatsappMessage = encodeURIComponent(
    "Hello Zammaya, I would like to reserve a table. Please share the available timings."
  );

  return (
    <>
      <section
        className="zm-final-cta"
        aria-labelledby="zm-final-cta-heading"
      >
        <div className="zm-final-cta-content">
          <p className="zm-final-cta-eyebrow">
            AN EVENING TO REMEMBER
          </p>

          <h2 id="zm-final-cta-heading">
            Your Table Is <em>Waiting</em>
          </h2>

          <p className="zm-final-cta-description">
            Make room for exceptional flavours, crafted cocktails,
            meaningful conversations, and nights worth remembering.
            We look forward to welcoming you to Zammaya.
          </p>

          <div className="zm-final-cta-actions">
            <a
              href="#reservation"
              className="zm-final-cta-button zm-final-cta-primary"
            >
              Reserve Your Table
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={`tel:+${phoneNumber}`}
              className="zm-final-cta-button zm-final-cta-secondary"
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zm-final-cta-button zm-final-cta-secondary"
            >
              WhatsApp Us
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="zm-final-cta-location">
            81, Sri Aurobindo Marg, Adchini, South Delhi
          </p>
        </div>
      </section>

      <style>{`
        .zm-final-cta {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 110px 24px 100px;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(198, 164, 91, 0.12) 0%,
              transparent 55%
            ),
            #080a08;
          color: #e8e0d0;
          text-align: center;
        }

        .zm-final-cta *,
        .zm-final-cta *::before,
        .zm-final-cta *::after {
          box-sizing: border-box;
        }

        .zm-final-cta::before,
        .zm-final-cta::after {
          position: absolute;
          z-index: -1;
          content: "";
          width: 240px;
          height: 240px;
          border: 1px solid rgba(198, 164, 91, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .zm-final-cta::before {
          top: -150px;
          left: -130px;
        }

        .zm-final-cta::after {
          right: -130px;
          bottom: -150px;
        }

        .zm-final-cta-content {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .zm-final-cta-eyebrow {
          margin: 0 0 20px;
          color: #c6a45b;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          line-height: 1.6;
        }

        .zm-final-cta h2 {
          margin: 0;
          color: #e8e0d0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(44px, 6.5vw, 76px);
          font-weight: 400;
          letter-spacing: -1px;
          line-height: 1.08;
        }

        .zm-final-cta h2 em {
          color: #c6a45b;
          font-weight: 400;
        }

        .zm-final-cta-description {
          max-width: 610px;
          margin: 24px auto 0;
          color: rgba(232, 224, 208, 0.75);
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 14px;
          line-height: 2;
        }

        .zm-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 36px;
        }

        .zm-final-cta-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          border: 1px solid #c6a45b;
          border-radius: 0;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          line-height: 1.4;
          text-align: center;
          text-decoration: none;
          transition:
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease;
        }

        .zm-final-cta-primary {
          background: #c6a45b;
          color: #080a08;
        }

        .zm-final-cta-primary:hover {
          border-color: #e0c47e;
          background: #e0c47e;
        }

        .zm-final-cta-secondary {
          background: transparent;
          color: #e8e0d0;
        }

        .zm-final-cta-secondary:hover {
          background: #c6a45b;
          color: #080a08;
        }

        .zm-final-cta-button:focus-visible {
          outline: 2px solid #e8e0d0;
          outline-offset: 4px;
        }

        .zm-final-cta-location {
          margin: 32px 0 0;
          color: rgba(232, 224, 208, 0.55);
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.8px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .zm-final-cta {
            padding: 78px 20px 72px;
          }

          .zm-final-cta-eyebrow {
            margin-bottom: 17px;
            font-size: 11px;
            letter-spacing: 3px;
          }

          .zm-final-cta h2 {
            font-size: clamp(42px, 11vw, 58px);
            line-height: 1.1;
          }

          .zm-final-cta-description {
            margin-top: 20px;
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-final-cta-actions {
            flex-direction: column;
            gap: 12px;
            margin-top: 28px;
          }

          .zm-final-cta-button {
            width: 100%;
            max-width: 340px;
            min-height: 50px;
          }

          .zm-final-cta-location {
            margin-top: 26px;
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-final-cta-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
