
const images = [
  {
    src: "/venue-exterior.jpg",
    alt: "Zammaya venue and lounge ambience in South Delhi",
  },
  {
    src: "/cocktails-bar.jpg",
    alt: "Cocktail bar atmosphere at Zammaya",
  },
  {
    src: "/dining-signature.jpg",
    alt: "Signature dining presentation at Zammaya",
  },
  {
    src: "/lounge-interior.jpg",
    alt: "Lounge interior at Zammaya in Adchini",
  },
];

export default function Escape() {
  return (
    <>
      <style>{`
        .zm-escape-section {
          width: 100%;
          box-sizing: border-box;
          padding: clamp(64px, 8vw, 110px) clamp(24px, 7vw, 110px);
          background: #101B14;
          color: #E8E0D0;
          overflow: hidden;
        }

        .zm-escape-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          margin-bottom: 42px;
        }

        .zm-escape-content {
          width: 100%;
          max-width: 760px;
          min-width: 0;
        }

        .zm-escape-eyebrow {
          margin: 0 0 18px;
          color: #C6A45B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.24em;
          line-height: 1.8;
        }

        .zm-escape-heading {
          max-width: 760px;
          margin: 0 0 24px;
          color: #E8E0D0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(40px, 5vw, 66px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.02em;
          overflow-wrap: break-word;
        }

        .zm-escape-heading em {
          font-weight: 400;
        }

        .zm-escape-text {
          max-width: 700px;
          margin: 0 0 14px;
          color: rgba(232, 224, 208, 0.76);
          font-size: 13px;
          line-height: 1.95;
        }

        .zm-escape-link {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 14px;
          margin-bottom: 4px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.6);
          color: #C6A45B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.13em;
          line-height: 1.8;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-escape-link:hover {
          color: #E8E0D0;
        }

        .zm-escape-link span {
          font-size: 15px;
        }

        .zm-escape-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
        }

        .zm-escape-image {
          position: relative;
          min-width: 0;
          aspect-ratio: 3 / 4;
          margin: 0;
          overflow: hidden;
          background: #080A08;
        }

        .zm-escape-image::after {
          content: "";
          position: absolute;
          inset: 50% 0 0;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(8, 10, 8, 0.2)
          );
        }

        .zm-escape-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 450ms ease;
        }

        .zm-escape-image:hover img {
          transform: scale(1.04);
        }

        @media (max-width: 900px) {
          .zm-escape-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 30px;
          }

          .zm-escape-heading {
            font-size: clamp(40px, 6vw, 54px);
          }

          .zm-escape-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .zm-escape-image {
            aspect-ratio: 4 / 5;
          }
        }

        @media (max-width: 480px) {
          .zm-escape-section {
            padding: 52px 20px 60px;
          }

          .zm-escape-eyebrow {
            margin-bottom: 14px;
            font-size: 9px;
            letter-spacing: 0.19em;
          }

          .zm-escape-heading {
            margin-bottom: 20px;
            font-size: clamp(36px, 9vw, 44px);
            line-height: 1.08;
          }

          .zm-escape-text {
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-escape-grid {
            gap: 9px;
          }

          .zm-escape-image {
            aspect-ratio: 3 / 4;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-escape-image img,
          .zm-escape-link {
            transition: none;
          }
        }
      `}</style>

      <section
        id="escape"
        className="zm-escape-section"
        aria-labelledby="escape-heading"
      >
        <div className="zm-escape-top">
          <div className="zm-escape-content">
            <p className="zm-escape-eyebrow">
              YOUR SOUTH DELHI ESCAPE
            </p>

            <h2
              id="escape-heading"
              className="zm-escape-heading"
            >
              A Lounge Bar in Adchini With{" "}
              <em>Its Own Energy</em>
            </h2>

            <p className="zm-escape-text">
              Step into an atmosphere where every detail is created
              for the moment. Zammaya blends immersive interiors,
              warm lighting, striking visual elements, great music,
              and a high-energy social setting to create an experience
              that shifts beautifully from dinner to nightlife.
            </p>

            <p className="zm-escape-text">
              It is a place to dress up for. A place to unwind in.
              A place to make plans around.
            </p>
          </div>

          <a href="/gallery" className="zm-escape-link">
            VIEW THE GALLERY <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="zm-escape-grid">
          {images.map((image) => (
            <figure
              className="zm-escape-image"
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
    </>
  );
}
