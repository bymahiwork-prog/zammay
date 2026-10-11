
export default function LocationSection() {
  return (
    <>
      <style>{`
        .zm-location-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: clamp(36px, 6vw, 88px);
          width: 100%;
          box-sizing: border-box;
          padding: clamp(64px, 9vw, 120px) clamp(24px, 7vw, 110px);
          background: #101B14;
          color: #E8E0D0;
          overflow: hidden;
        }

        .zm-location-content {
          width: 100%;
          max-width: 580px;
          min-width: 0;
        }

        .zm-location-eyebrow {
          margin: 0 0 18px;
          color: #C6A45B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.23em;
          line-height: 1.8;
        }

        .zm-location-heading {
          margin: 0;
          color: #E8E0D0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(42px, 4.8vw, 64px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.02em;
          overflow-wrap: break-word;
        }

        .zm-location-heading em {
          font-weight: 400;
        }

        .zm-location-subheading {
          margin: 18px 0 0;
          color: #E8E0D0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(21px, 2.2vw, 27px);
          font-weight: 400;
          line-height: 1.45;
        }

        .zm-location-rule {
          width: 50px;
          height: 1px;
          margin: 25px 0;
          background: #C6A45B;
        }

        .zm-location-description {
          margin: 0 0 16px;
          color: rgba(232, 224, 208, 0.76);
          font-size: 13px;
          line-height: 1.95;
        }

        .zm-location-details {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 24px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(198, 164, 91, 0.25);
        }

        .zm-location-detail {
          margin: 0;
          color: #E8E0D0;
          font-size: 13px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .zm-location-label {
          display: inline-block;
          margin-bottom: 8px;
          color: #C6A45B;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          line-height: 1.8;
        }

        .zm-location-detail a {
          color: #E8E0D0;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-location-detail a:hover {
          color: #C6A45B;
        }

        .zm-location-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 28px;
        }

        .zm-location-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 46px;
          padding: 0 20px;
          background: #C6A45B;
          color: #080A08;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-decoration: none;
          transition: background 180ms ease;
        }

        .zm-location-button:hover {
          background: #E0C47D;
        }

        .zm-location-button-secondary {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: #E8E0D0;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-decoration: none;
          border-bottom: 1px solid rgba(198, 164, 91, 0.65);
          transition: color 180ms ease;
        }

        .zm-location-button-secondary:hover {
          color: #C6A45B;
        }

        .zm-location-image {
          width: 100%;
          min-width: 0;
          height: clamp(360px, 44vw, 560px);
          margin: 0;
          overflow: hidden;
          background: #080A08;
        }

        .zm-location-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 450ms ease;
        }

        .zm-location-image:hover img {
          transform: scale(1.035);
        }

        @media (max-width: 900px) {
          .zm-location-section {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 72px;
            padding-bottom: 76px;
          }

          .zm-location-content {
            max-width: 680px;
          }

          .zm-location-heading {
            font-size: clamp(42px, 7vw, 56px);
          }

          .zm-location-image {
            height: clamp(320px, 65vw, 480px);
          }
        }

        @media (max-width: 520px) {
          .zm-location-section {
            gap: 28px;
            padding: 50px 20px 58px;
          }

          .zm-location-eyebrow {
            margin-bottom: 14px;
            font-size: 9px;
            letter-spacing: 0.19em;
          }

          .zm-location-heading {
            font-size: clamp(38px, 9.5vw, 46px);
          }

          .zm-location-subheading {
            margin-top: 14px;
            font-size: 21px;
          }

          .zm-location-rule {
            margin: 21px 0;
          }

          .zm-location-description {
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-location-details {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 24px;
            padding-top: 20px;
          }

          .zm-location-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
          }

          .zm-location-button {
            min-height: 46px;
          }

          .zm-location-image {
            height: 310px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-location-image img,
          .zm-location-detail a,
          .zm-location-button,
          .zm-location-button-secondary {
            transition: none;
          }
        }
      `}</style>

      <section
        id="location"
        className="zm-location-section"
        aria-labelledby="location-heading"
      >
        <div className="zm-location-content">
          <p className="zm-location-eyebrow">
            FIND YOUR WAY TO ZAMMAYA
          </p>

          <h2
            id="location-heading"
            className="zm-location-heading"
          >
            In the Heart of <em>South Delhi</em>
          </h2>

          <p className="zm-location-subheading">
            Easy to Reach. Difficult to Forget.
          </p>

          <div className="zm-location-rule" />

          <p className="zm-location-description">
            Zammaya is conveniently located in Adchini on Sri Aurobindo Marg,
            making it easily accessible from Hauz Khas, Green Park, Malviya
            Nagar, Saket, Mehrauli, and other key South Delhi neighbourhoods.
          </p>

          <p className="zm-location-description">
            Whether you are searching for a bar near Hauz Khas, a premium
            restaurant near Green Park, or a lounge bar in Adchini, Zammaya
            is ready to welcome you.
          </p>

          <div className="zm-location-details">
            <p className="zm-location-detail">
              <span className="zm-location-label">ADDRESS</span>
              <br />
              81, Sri Aurobindo Marg, Adchini, South Delhi
            </p>

            <p className="zm-location-detail">
              <span className="zm-location-label">RESERVATIONS</span>
              <br />
              <a href="tel:+919289895632">
                +91 92898 95632
              </a>
            </p>
          </div>

          <div className="zm-location-actions">
            <a
              href="https://www.google.com/maps/search/?api=1&query=81+Sri+Aurobindo+Marg+Adchini+South+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="zm-location-button"
            >
              GET DIRECTIONS <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#reservation"
              className="zm-location-button-secondary"
            >
              RESERVE A TABLE
            </a>
          </div>
        </div>

        <figure className="zm-location-image">
          <img
            src="/venue-exterior.jpg"
            alt="Zammaya venue in Adchini, South Delhi"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
}
