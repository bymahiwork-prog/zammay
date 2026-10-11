
"use client";

import React from "react";

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
      <style jsx>{`
        .cocktails-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: clamp(30px, 5vw, 76px);
          padding: clamp(60px, 8vw, 112px) 5%;
          overflow: hidden;
          background: #080a08;
          color: #e8e0d0;
          box-sizing: border-box;
          width: 100%;
        }

        .cocktails-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          min-width: 0;
        }

        .cocktails-image {
          height: clamp(220px, 34vw, 460px);
          margin: 0;
          overflow: hidden;
          background: #101b14;
        }

        .cocktails-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .cocktails-image:hover img {
          transform: scale(1.035);
        }

        .cocktails-content {
          width: 100%;
          max-width: 580px;
          min-width: 0;
          justify-self: center;
        }

        .cocktails-eyebrow {
          margin: 0 0 16px;
          color: #c6a45b;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .cocktails-content h2 {
          margin: 0 0 22px;
          color: #e8e0d0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(34px, 4.2vw, 56px);
          font-weight: 400;
          line-height: 1.1;
        }

        .cocktails-content h2 em {
          font-style: italic;
        }

        .cocktails-rule {
          width: 48px;
          height: 1px;
          margin-bottom: 22px;
          background: #c6a45b;
        }

        .cocktails-intro {
          margin: 0 0 16px;
          color: #c6a45b;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 22px;
          line-height: 1.5;
        }

        .cocktails-description {
          margin: 0 0 16px;
          color: rgba(232, 224, 208, 0.78);
          font-size: 13px;
          line-height: 1.9;
        }

        .cocktails-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.55);
          color: #e8e0d0;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          text-decoration: none;
        }

        .cocktails-button span {
          color: #c6a45b;
        }

        @media (max-width: 900px) {
          .cocktails-section {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-block: 64px;
          }

          .cocktails-content {
            max-width: none;
          }

          .cocktails-content h2 {
            max-width: 650px;
            font-size: clamp(34px, 6vw, 48px);
          }

          .cocktails-image {
            height: clamp(230px, 42vw, 380px);
          }
        }

        @media (max-width: 600px) {
          .cocktails-section {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 26px;
            padding: 44px 20px 52px;
          }

          .cocktails-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .cocktails-image {
            height: auto;
            aspect-ratio: 4 / 3;
          }

          .cocktails-content h2 {
            font-size: clamp(32px, 8.5vw, 42px);
          }

          .cocktails-intro {
            font-size: 20px;
          }

          .cocktails-description {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cocktails-image img {
            transition: none;
          }
        }
      `}</style>

      <section
        id="cocktails"
        className="cocktails-section"
        aria-labelledby="cocktails-heading"
      >
        <div className="cocktails-gallery">
          {cocktailImages.map((image) => (
            <figure className="cocktails-image" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className="cocktails-content">
          <p className="cocktails-eyebrow">
            CRAFTED FOR THE NIGHT
          </p>

          <h2 id="cocktails-heading">
            Cocktails That <em>Set the Tone</em>
          </h2>

          <div className="cocktails-rule" />

          <p className="cocktails-intro">
            A great night begins with the right pour.
          </p>

          <p className="cocktails-description">
            At Zammaya, the bar is an essential part of the
            experience. Discover imaginative cocktails, familiar
            favourites, fine spirits, and refreshing pours created
            to match every mood—whether you are starting your
            evening, raising a toast, or settling into a long
            conversation.
          </p>

          <p className="cocktails-description">
            From first sip to last call, this is a cocktail bar
            in South Delhi made for people who enjoy the details.
          </p>

          <a href="#reservation" className="cocktails-button">
            DISCOVER OUR COCKTAILS <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
