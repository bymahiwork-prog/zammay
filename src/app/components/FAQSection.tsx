"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Zammaya a lounge bar or a restaurant?",
    answer:
      "Zammaya is a premium lounge bar and dining destination in Adchini, South Delhi. It brings together globally inspired food, crafted cocktails, immersive ambience, and a vibrant social atmosphere.",
  },
  {
    question: "Is Zammaya suitable for date nights?",
    answer:
      "Yes. Zammaya is ideal for date nights, romantic dinners, cocktails, and relaxed evenings in a premium setting.",
  },
  {
    question: "Can I celebrate a birthday or host a private gathering?",
    answer:
      "Yes. Zammaya is suitable for birthday celebrations, group dinners, anniversaries, private parties, and social gatherings. Contact our team to discuss group size and booking requirements.",
  },
  {
    question: "Where is Zammaya located?",
    answer:
      "Zammaya is located at 81, Sri Aurobindo Marg, Adchini, South Delhi, with convenient access from Hauz Khas, Green Park, Malviya Nagar, and Saket.",
  },
  {
    question: "How can I reserve a table?",
    answer:
      "You can reserve a table through the website booking option, by calling our team, or through WhatsApp.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section
        id="faq"
        className="zm-faq-section"
        aria-labelledby="zm-faq-heading"
      >
        <div className="zm-faq-container">
          <div className="zm-faq-heading">
            <p className="zm-faq-eyebrow">GOOD TO KNOW</p>

            <h2 id="zm-faq-heading">
              Frequently Asked <em>Questions</em>
            </h2>

            <p className="zm-faq-intro">
              Everything you need to know before planning your visit to Zammaya.
            </p>
          </div>

          <div className="zm-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `zm-faq-answer-${index}`;

              return (
                <div className="zm-faq-item" key={faq.question}>
                  <button
                    type="button"
                    className="zm-faq-question"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <span className="zm-faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="zm-faq-answer" id={answerId}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .zm-faq-section {
          position: relative;
          width: 100%;
          padding: 100px 24px 110px;
          background: #101b14;
          color: #e8e0d0;
          overflow: hidden;
        }

        .zm-faq-section *,
        .zm-faq-section *::before,
        .zm-faq-section *::after {
          box-sizing: border-box;
        }

        .zm-faq-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .zm-faq-heading {
          max-width: 720px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .zm-faq-eyebrow {
          margin: 0 0 18px;
          color: #c6a45b;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3.5px;
          line-height: 1.5;
        }

        .zm-faq-heading h2 {
          margin: 0;
          color: #e8e0d0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -0.8px;
        }

        .zm-faq-heading h2 em {
          color: #c6a45b;
          font-weight: 400;
        }

        .zm-faq-intro {
          max-width: 560px;
          margin: 20px auto 0;
          color: rgba(232, 224, 208, 0.7);
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 14px;
          line-height: 1.9;
        }

        .zm-faq-list {
          border-top: 1px solid rgba(198, 164, 91, 0.3);
        }

        .zm-faq-item {
          border-bottom: 1px solid rgba(198, 164, 91, 0.3);
        }

        .zm-faq-question {
          display: flex;
          width: 100%;
          min-height: 76px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 22px 4px;
          border: 0;
          border-radius: 0;
          background: transparent;
          color: #e8e0d0;
          text-align: left;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(19px, 2.2vw, 24px);
          font-weight: 400;
          line-height: 1.45;
          cursor: pointer;
          transition: color 180ms ease;
        }

        .zm-faq-question:hover {
          color: #c6a45b;
        }

        .zm-faq-question:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 4px;
        }

        .zm-faq-icon {
          display: flex;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(198, 164, 91, 0.55);
          border-radius: 50%;
          color: #c6a45b;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 20px;
          font-weight: 300;
          line-height: 1;
          transition: background 180ms ease, color 180ms ease;
        }

        .zm-faq-question[aria-expanded="true"] .zm-faq-icon {
          background: #c6a45b;
          color: #080a08;
        }

        .zm-faq-answer {
          padding: 0 48px 24px 4px;
          animation: zm-faq-reveal 220ms ease both;
        }

        .zm-faq-answer p {
          margin: 0;
          color: rgba(232, 224, 208, 0.72);
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 14px;
          line-height: 1.95;
        }

        @keyframes zm-faq-reveal {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .zm-faq-section {
            padding: 70px 20px 76px;
          }

          .zm-faq-heading {
            margin-bottom: 32px;
          }

          .zm-faq-eyebrow {
            margin-bottom: 14px;
            font-size: 11px;
            letter-spacing: 3px;
          }

          .zm-faq-heading h2 {
            font-size: clamp(34px, 9vw, 44px);
            line-height: 1.13;
          }

          .zm-faq-intro {
            margin-top: 16px;
            font-size: 13px;
          }

          .zm-faq-question {
            min-height: 70px;
            gap: 14px;
            padding: 19px 0;
            font-size: 20px;
          }

          .zm-faq-icon {
            width: 29px;
            height: 29px;
            flex-basis: 29px;
          }

          .zm-faq-answer {
            padding: 0 8px 22px 0;
          }

          .zm-faq-answer p {
            font-size: 13px;
            line-height: 1.85;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-faq-section *,
          .zm-faq-section *::before,
          .zm-faq-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
