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
    <section
      id="faq"
      className="faq-section"
      aria-labelledby="faq-heading"
    >
      <div className="faq-heading">
        <p className="faq-eyebrow">GOOD TO KNOW</p>

        <h2 id="faq-heading">
          Frequently Asked <em>Questions</em>
        </h2>

        <p>
          Everything you need to know before planning your visit to Zammaya.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <div className="faq-item" key={faq.question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer" id={answerId}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
