"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Category = "space" | "food" | "cocktails" | "moments";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
};

// To add photos: drop the file in /public and add a line here.
const photos: Photo[] = [
  {
    src: "/experience-interior.jpg",
    alt: "Chandelier-lit dining room at Zammaya, Adchini",
    caption: "The chandelier room",
    category: "space",
  },
  {
    src: "/cocktails-signature.jpg",
    alt: "Signature cocktail served at Zammaya",
    caption: "A signature pour",
    category: "cocktails",
  },
  {
    src: "/dining-platter.jpg",
    alt: "Sushi platter served at the table at Zammaya",
    caption: "Made for sharing",
    category: "food",
  },
  {
    src: "/private-events.jpg",
    alt: "Guests raising a toast beside the mural at Zammaya",
    caption: "A toast at the mural",
    category: "moments",
  },
  {
    src: "/lounge-interior.jpg",
    alt: "Private lounge with green drapes at Zammaya",
    caption: "The private lounge",
    category: "space",
  },
  {
    src: "/dining-signature.jpg",
    alt: "Signature salad plated at Zammaya",
    caption: "From the kitchen",
    category: "food",
  },
  {
    src: "/cocktails-bar.jpg",
    alt: "Cocktails lined up at the Zammaya bar",
    caption: "At the bar",
    category: "cocktails",
  },
  {
    src: "/dining-dessert.jpg",
    alt: "Plated dessert served at Zammaya",
    caption: "Something sweet",
    category: "food",
  },
  {
    src: "/venue-exterior.jpg",
    alt: "Zammaya seen from above at night on Sri Aurobindo Marg, Adchini",
    caption: "Adchini, after dark",
    category: "space",
  },
];

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "space", label: "The Space" },
  { id: "food", label: "Food" },
  { id: "cocktails", label: "Cocktails" },
  { id: "moments", label: "Moments" },
];

const categoryLabel: Record<Category, string> = {
  space: "The Space",
  food: "Food",
  cocktails: "Cocktails",
  moments: "Moments",
};

export default function GalleryContent() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visible =
    filter === "all" ? photos : photos.filter((p) => p.category === filter);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div className="zm-gallery">
      <style>{`
        .zm-gallery {
          width: 100%;
          background: #080a08;
          color: #e8e0d0;
          font-family: var(--font-sans), Arial, sans-serif;
        }

        .zm-gallery *,
        .zm-gallery *::before,
        .zm-gallery *::after {
          box-sizing: border-box;
        }

        .zm-gallery-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: clamp(24px, 6vw, 72px);
          padding-right: clamp(24px, 6vw, 72px);
        }

        .zm-gallery-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: #c6a45b;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .zm-gallery-eyebrow::before,
        .zm-gallery-eyebrow::after {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
          opacity: 0.7;
        }

        .zm-gallery-serif {
          font-family: var(--font-cormorant), Georgia, serif;
          font-weight: 400;
        }

        .zm-gallery em {
          font-style: italic;
          color: #c6a45b;
        }

        /* Intro */
        .zm-gallery-intro {
          padding-top: clamp(48px, 6vw, 84px);
          padding-bottom: clamp(32px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .zm-gallery-intro h1 {
          margin: 0;
          font-size: clamp(46px, 6.6vw, 92px);
          line-height: 0.98;
        }

        .zm-gallery-intro p {
          margin: 0;
          max-width: 600px;
          color: rgba(232, 224, 208, 0.78);
          font-size: 17px;
          line-height: 1.75;
        }

        /* Filters */
        .zm-gallery-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
        }

        .zm-gallery-filter {
          min-height: 44px;
          padding: 0 22px;
          background: transparent;
          border: 1px solid rgba(198, 164, 91, 0.4);
          color: #e8e0d0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: background 180ms ease, color 180ms ease,
            border-color 180ms ease;
        }

        .zm-gallery-filter:hover {
          border-color: #c6a45b;
          color: #c6a45b;
        }

        .zm-gallery-filter[aria-pressed="true"] {
          background: #c6a45b;
          border-color: #c6a45b;
          color: #080a08;
        }

        /* Masonry grid */
        .zm-gallery-grid {
          padding-top: clamp(24px, 3vw, 40px);
          padding-bottom: clamp(40px, 5vw, 64px);
          columns: 3;
          column-gap: 16px;
        }

        .zm-gallery-item {
          position: relative;
          display: block;
          width: 100%;
          margin: 0 0 16px;
          padding: 0;
          overflow: hidden;
          break-inside: avoid;
          background: #101b14;
          border: 0;
          color: inherit;
          text-align: left;
          cursor: zoom-in;
        }

        .zm-gallery-item img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
            filter 700ms ease;
          filter: brightness(0.92);
        }

        .zm-gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 10, 8, 0.82),
            transparent 45%
          );
          opacity: 0;
          transition: opacity 400ms ease;
        }

        .zm-gallery-caption {
          position: absolute;
          z-index: 1;
          left: 22px;
          right: 22px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 400ms ease, transform 400ms ease;
        }

        .zm-gallery-caption span:first-child {
          color: #c6a45b;
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .zm-gallery-caption span:last-child {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 24px;
          font-style: italic;
          line-height: 1.2;
        }

        .zm-gallery-item:hover img,
        .zm-gallery-item:focus-visible img {
          transform: scale(1.04);
          filter: brightness(1);
        }

        .zm-gallery-item:hover::after,
        .zm-gallery-item:focus-visible::after,
        .zm-gallery-item:hover .zm-gallery-caption,
        .zm-gallery-item:focus-visible .zm-gallery-caption {
          opacity: 1;
          transform: none;
        }

        .zm-gallery button:focus-visible,
        .zm-gallery a:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 4px;
        }

        /* Instagram strip + CTA */
        .zm-gallery-band {
          border-top: 1px solid rgba(198, 164, 91, 0.18);
          background: #101b14;
        }

        .zm-gallery-band > .zm-gallery-wrap {
          padding-top: clamp(40px, 5vw, 64px);
          padding-bottom: clamp(40px, 5vw, 64px);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .zm-gallery-band h2 {
          margin: 0;
          font-size: clamp(32px, 3.8vw, 52px);
          line-height: 1.05;
        }

        .zm-gallery-band p {
          margin: 10px 0 0;
          color: rgba(232, 224, 208, 0.72);
          font-size: 15px;
        }

        .zm-gallery-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .zm-gallery-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .zm-gallery-btn:hover {
          background: transparent;
          color: #c6a45b;
        }

        .zm-gallery-btn--ghost {
          background: transparent;
          color: #e8e0d0;
          border-color: rgba(232, 224, 208, 0.5);
        }

        .zm-gallery-btn--ghost:hover {
          border-color: #c6a45b;
        }

        /* Lightbox */
        .zm-lightbox {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr) 64px;
          grid-template-rows: 64px minmax(0, 1fr) auto;
          align-items: center;
          justify-items: center;
          padding: 12px;
          background: rgba(5, 7, 5, 0.96);
        }

        .zm-lightbox figure {
          grid-column: 2;
          grid-row: 2;
          margin: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zm-lightbox img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          animation: none !important;
        }

        .zm-lightbox-caption {
          grid-column: 1 / -1;
          grid-row: 3;
          padding: 16px 0 8px;
          display: flex;
          gap: 16px;
          align-items: baseline;
          color: rgba(232, 224, 208, 0.8);
          font-size: 13px;
        }

        .zm-lightbox-caption span:first-child {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 24px;
          font-style: italic;
          color: #e8e0d0;
        }

        .zm-lightbox-btn {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(198, 164, 91, 0.45);
          color: #e8e0d0;
          font-size: 20px;
          line-height: 1;
        }

        .zm-lightbox-btn:hover {
          border-color: #c6a45b;
          color: #c6a45b;
        }

        .zm-lightbox-close {
          grid-column: 3;
          grid-row: 1;
        }

        .zm-lightbox-prev {
          grid-column: 1;
          grid-row: 2;
        }

        .zm-lightbox-next {
          grid-column: 3;
          grid-row: 2;
        }

        .zm-lightbox-count {
          grid-column: 1 / 3;
          grid-row: 1;
          justify-self: start;
          padding-left: 8px;
          color: #c6a45b;
          font-size: 11px;
          letter-spacing: 0.26em;
        }

        @media (max-width: 900px) {
          .zm-gallery-grid {
            columns: 2;
          }
        }

        @media (max-width: 560px) {
          .zm-gallery-grid {
            columns: 1;
          }

          .zm-gallery-caption {
            opacity: 1;
            transform: none;
          }

          .zm-gallery-item::after {
            opacity: 1;
          }

          .zm-lightbox {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 64px minmax(0, 1fr) auto auto;
          }

          .zm-lightbox figure {
            grid-column: 1 / -1;
          }

          .zm-lightbox-close {
            grid-column: 2;
            justify-self: end;
          }

          .zm-lightbox-count {
            grid-column: 1;
          }

          .zm-lightbox-prev,
          .zm-lightbox-next {
            grid-row: 4;
          }

          .zm-lightbox-prev {
            grid-column: 1;
            justify-self: start;
          }

          .zm-lightbox-next {
            grid-column: 2;
            justify-self: end;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-gallery-item img,
          .zm-gallery-item::after,
          .zm-gallery-caption,
          .zm-gallery-filter,
          .zm-gallery-btn {
            transition: none;
          }
        }
      `}</style>

      {/* Intro + filters */}
      <section className="zm-gallery-wrap zm-gallery-intro" aria-labelledby="gallery-heading">
        <p className="zm-gallery-eyebrow">Gallery · Mood Archives</p>
        <h1 id="gallery-heading" className="zm-gallery-serif">
          The Zammaya <em>Experience</em>
        </h1>
        <p>
          A glimpse into the flavours, nights, and moments that define
          Zammaya.
        </p>

        <div className="zm-gallery-filters" role="group" aria-label="Filter photos">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="zm-gallery-filter"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="zm-gallery-wrap" aria-label="Photos">
        <div className="zm-gallery-grid">
          {visible.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className="zm-gallery-item"
              aria-label={`Open photo: ${photo.caption}`}
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenIndex(index);
              }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="zm-gallery-caption" aria-hidden="true">
                <span>{categoryLabel[photo.category]}</span>
                <span>{photo.caption}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Instagram + reserve */}
      <section className="zm-gallery-band" aria-labelledby="gallery-cta-heading">
        <div className="zm-gallery-wrap">
          <div>
            <h2 id="gallery-cta-heading" className="zm-gallery-serif">
              Your next night <em>starts here.</em>
            </h2>
            <p>More from the night, every week on Instagram.</p>
          </div>
          <div className="zm-gallery-actions">
            <a href="/contact#reservation" className="zm-gallery-btn">
              Reserve Your Table
            </a>
            <a
              href="https://www.instagram.com/zammayadelhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="zm-gallery-btn zm-gallery-btn--ghost"
            >
              @zammayadelhi ↗
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && openIndex !== null && (
        <div
          className="zm-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <span className="zm-lightbox-count">
            {String(openIndex + 1).padStart(2, "0")} /{" "}
            {String(visible.length).padStart(2, "0")}
          </span>

          <button
            ref={closeRef}
            type="button"
            className="zm-lightbox-btn zm-lightbox-close"
            aria-label="Close"
            onClick={close}
          >
            ×
          </button>

          {visible.length > 1 && (
            <button
              type="button"
              className="zm-lightbox-btn zm-lightbox-prev"
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              ←
            </button>
          )}

          <figure>
            <img src={current.src} alt={current.alt} />
          </figure>

          {visible.length > 1 && (
            <button
              type="button"
              className="zm-lightbox-btn zm-lightbox-next"
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              →
            </button>
          )}

          <div className="zm-lightbox-caption">
            <span>{current.caption}</span>
            <span>{categoryLabel[current.category]}</span>
          </div>
        </div>
      )}
    </div>
  );
}
