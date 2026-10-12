
const diningImages = [
  {
    src: "/dining-signature.jpg",
    alt: "Signature dishes at Zammaya, a premium lounge bar in South Delhi",
  },
  {
    src: "/dining-platter.jpg",
    alt: "Food platter for sharing at Zammaya in Adchini, South Delhi",
  },
  {
    src: "/dining-dessert.jpg",
    alt: "Dessert served as part of the dining experience at Zammaya",
  },
];

export default function DiningSection() {
  return (
    <section
      id="dining"
      aria-labelledby="dining-heading"
      className="zm-dining-section"
    >
      <style>{`
        .zm-dining-section {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          align-items: center;
          gap: clamp(36px, 6vw, 90px);
          width: 100%;
          box-sizing: border-box;
          padding: clamp(64px, 9vw, 125px) clamp(24px, 7vw, 110px);
          background: #101B14;
          color: #E8E0D0;
          overflow: hidden;
        }

        .zm-dining-content {
          width: 100%;
          max-width: 560px;
          min-width: 0;
        }

        .zm-dining-eyebrow {
          margin: 0 0 20px;
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.24em;
          line-height: 1.8;
        }

        .zm-dining-heading {
          margin: 0;
          color: #E8E0D0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -0.025em;
          overflow-wrap: break-word;
        }

        .zm-dining-heading em {
          font-weight: 400;
        }

        .zm-dining-subheading {
          margin: 20px 0 0;
          color: #E8E0D0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(20px, 2.2vw, 27px);
          font-weight: 400;
          line-height: 1.45;
        }

        .zm-dining-rule {
          width: 52px;
          height: 1px;
          margin: 26px 0;
          background: #C6A45B;
        }

        .zm-dining-description {
          margin: 0 0 18px;
          color: rgba(232, 224, 208, 0.76);
          font-size: 13px;
          line-height: 2;
        }

        .zm-dining-button {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-top: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.65);
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          line-height: 1.8;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-dining-button:hover {
          color: #E8E0D0;
        }

        .zm-dining-button span {
          font-size: 15px;
        }

        .zm-dining-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 14px;
          width: 100%;
          min-width: 0;
          height: clamp(360px, 44vw, 570px);
        }

        .zm-dining-image {
          position: relative;
          min-width: 0;
          min-height: 0;
          margin: 0;
          overflow: hidden;
          background: #080A08;
        }

        .zm-dining-image-1 {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .zm-dining-image-2 {
          grid-column: 2;
          grid-row: 1;
        }

        .zm-dining-image-3 {
          grid-column: 2;
          grid-row: 2;
        }

        .zm-dining-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 450ms ease;
        }

        .zm-dining-image:hover img {
          transform: scale(1.035);
        }

        @media (max-width: 800px) {
          .zm-dining-section {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-top: 72px;
            padding-bottom: 76px;
          }

          .zm-dining-content {
            max-width: 680px;
          }

          .zm-dining-heading {
            font-size: clamp(42px, 8vw, 58px);
          }

          .zm-dining-gallery {
            height: clamp(340px, 72vw, 500px);
          }
        }

        @media (max-width: 480px) {
          .zm-dining-section {
            gap: 30px;
            padding: 52px 20px 60px;
          }

          .zm-dining-eyebrow {
            margin-bottom: 15px;
            font-size: 11px;
            letter-spacing: 0.19em;
          }

          .zm-dining-heading {
            font-size: clamp(39px, 10vw, 48px);
          }

          .zm-dining-subheading {
            margin-top: 15px;
            font-size: 21px;
          }

          .zm-dining-rule {
            margin: 22px 0;
          }

          .zm-dining-description {
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-dining-gallery {
            gap: 8px;
            height: 340px;
          }

          .zm-dining-image {
            min-height: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-dining-image img,
          .zm-dining-button {
            transition: none;
          }
        }
      `}</style>

      <div className="zm-dining-content">
        <p className="zm-dining-eyebrow">
          TASTE THE UNEXPECTED
        </p>

        <h2 id="dining-heading" className="zm-dining-heading">
          Taste the <em>Unexpected</em>
        </h2>

        <h3 className="zm-dining-subheading">
          Global Flavours. Bold Plates. Memorable Moments.
        </h3>

        <div className="zm-dining-rule" />

        <p className="zm-dining-description">
          Our menu brings together globally inspired flavours,
          thoughtfully crafted plates, and a dining experience
          made for sharing. Whether you are here for a slow
          evening meal, small plates with friends, or a
          celebration around the table, Zammaya serves food
          that complements the energy of the night.
        </p>

        <p className="zm-dining-description">
          Expect a refined yet expressive dining experience—one
          that feels equally right for a romantic dinner, a
          catch-up with friends, or a special occasion.
        </p>

        <a href="/menu" className="zm-dining-button">
          EXPLORE THE MENU <span>↗</span>
        </a>
      </div>

      <div className="zm-dining-gallery">
        {diningImages.map((image, index) => (
          <figure
            className={`zm-dining-image zm-dining-image-${index + 1}`}
            key={image.src}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
