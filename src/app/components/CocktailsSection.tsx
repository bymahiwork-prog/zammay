
"use client";

const cocktailImages = [
  {
    src: "/cocktails-bar.jpg",
    alt: "Cocktail bar at Zammaya in Adchini, South Delhi",
  },
  {
    src: "/cocktails-signature.jpg",
    alt: "Crafted cocktails at Zammaya, a premium lounge bar in South Delhi",
  },
];

export default function CocktailsSection() {
  return (
    <>
      <style>{`
        .zm-cocktails-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: clamp(30px, 5vw, 76px);
          width: 100%;
          box-sizing: border-box;
          padding: clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px);
          overflow: hidden;
          background: #080A08;
          color: #E8E0D0;
        }

        .zm-cocktails-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
          min-width: 0;
        }

        .zm-cocktails-image {
          height: clamp(220px, 34vw, 460px);
          min-width: 0;
          margin: 0;
          overflow: hidden;
          background: #101B14;
        }

        .zm-cocktails-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .zm-cocktails-image:hover img {
          transform: scale(1.035);
        }

        .zm-cocktails-content {
          width: 100%;
          max-width: 580px;
          min-width: 0;
          justify-self: center;
        }

        .zm-cocktails-eyebrow {
          margin: 0 0 16px;
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          line-height: 1.6;
        }

        .zm-cocktails-heading {
          margin: 0 0 22px;
          color: #E8E0D0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(36px, 4.2vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          overflow-wrap: break-word;
        }

        .zm-cocktails-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .zm-cocktails-rule {
          width: 48px;
          height: 1px;
          margin-bottom: 22px;
          background: #C6A45B;
        }

        .zm-cocktails-intro {
          margin: 0 0 16px;
          color: #C6A45B;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 22px;
          line-height: 1.5;
        }

        .zm-cocktails-description {
          margin: 0 0 16px;
          color: rgba(232, 224, 208, 0.78);
          font-size: 13px;
          line-height: 1.9;
        }

        .zm-cocktails-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.55);
          color: #E8E0D0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-cocktails-button span {
          color: #C6A45B;
        }

        .zm-cocktails-button:hover {
          color: #C6A45B;
        }

        @media (max-width: 900px) {
          .zm-cocktails-section {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .zm-cocktails-content {
            max-width: none;
          }

          .zm-cocktails-heading {
            max-width: 650px;
            font-size: clamp(36px, 6vw, 48px);
          }

          .zm-cocktails-image {
            height: clamp(230px, 42vw, 380px);
          }
        }

        @media (max-width: 600px) {
          .zm-cocktails-section {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 26px;
            padding: 44px 20px 52px;
          }

          .zm-cocktails-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .zm-cocktails-image {
            height: auto;
            aspect-ratio: 4 / 3;
          }

          .zm-cocktails-heading {
            font-size: clamp(32px, 8.5vw, 42px);
          }

          .zm-cocktails-intro {
            font-size: 20px;
          }

          .zm-cocktails-description {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-cocktails-image img,
          .zm-cocktails-button {
            transition: none;
          }
        }
      `}</style>

      <section
        id="cocktails"
        className="zm-cocktails-section"
        aria-labelledby="cocktails-heading"
      >
        <div className="zm-cocktails-gallery">
          {cocktailImages.map((image) => (
            <figure
              className="zm-cocktails-image"
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

        <div className="zm-cocktails-content">
          <p className="zm-cocktails-eyebrow">
            CRAFTED FOR THE NIGHT
          </p>

          <h2
            id="cocktails-heading"
            className="zm-cocktails-heading"
          >
            Cocktails That <em>Set the Tone</em>
          </h2>

          <div className="zm-cocktails-rule" />

          <p className="zm-cocktails-intro">
            A great night begins with the right pour.
          </p>

          <p className="zm-cocktails-description">
            At Zammaya, the bar is an essential part of the
            experience. Discover imaginative cocktails, familiar
            favourites, fine spirits, and refreshing pours created
            to match every mood—whether you are starting your
            evening, raising a toast, or settling into a long
            conversation.
          </p>

          <p className="zm-cocktails-description">
            From first sip to last call, this is a cocktail bar
            in South Delhi made for people who enjoy the details.
          </p>

          <a href="#reservation" className="zm-cocktails-button">
            DISCOVER OUR COCKTAILS <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
