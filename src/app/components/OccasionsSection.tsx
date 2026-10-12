
const occasions = [
  "Romantic date nights",
  "Birthday celebrations",
  "Anniversary dinners",
  "Group dining",
  "Private parties",
  "Corporate gatherings",
  "Weekend plans with friends",
  "Cocktail evenings and social celebrations",
];

export default function OccasionsSection() {
  return (
    <>
      <style>{`
        .zm-occasions-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(36px, 6vw, 88px);
          width: 100%;
          box-sizing: border-box;
          padding: clamp(40px, 5vw, 64px) clamp(24px, 7vw, 110px);
          background: #080A08;
          color: #E8E0D0;
          overflow: hidden;
        }

        .zm-occasions-image {
          position: relative;
          width: 100%;
          min-width: 0;
          height: clamp(380px, 46vw, 600px);
          margin: 0;
          overflow: hidden;
          background: #101B14;
        }

        .zm-occasions-image img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 450ms ease;
        }

        .zm-occasions-image:hover img {
          transform: scale(1.035);
        }

        .zm-occasions-content {
          width: 100%;
          max-width: 570px;
          min-width: 0;
        }

        .zm-occasions-eyebrow {
          margin: 0 0 18px;
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.23em;
          line-height: 1.8;
        }

        .zm-occasions-heading {
          margin: 0;
          color: #E8E0D0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(42px, 4.8vw, 64px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.02em;
          overflow-wrap: break-word;
        }

        .zm-occasions-heading em {
          font-weight: 400;
        }

        .zm-occasions-subheading {
          margin: 18px 0 0;
          color: #E8E0D0;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 400;
          line-height: 1.45;
        }

        .zm-occasions-rule {
          width: 50px;
          height: 1px;
          margin: 25px 0;
          background: #C6A45B;
        }

        .zm-occasions-description {
          margin: 0 0 16px;
          color: rgba(232, 224, 208, 0.76);
          font-size: 13px;
          line-height: 1.95;
        }

        .zm-occasions-list-heading {
          margin: 26px 0 16px;
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          line-height: 1.8;
        }

        .zm-occasions-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px 20px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .zm-occasions-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 0;
          color: rgba(232, 224, 208, 0.86);
          font-size: 12px;
          line-height: 1.7;
        }

        .zm-occasions-list li span {
          flex: 0 0 auto;
          color: #C6A45B;
          font-size: 11px;
          line-height: 1.9;
        }

        .zm-occasions-button {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.6);
          color: #C6A45B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          line-height: 1.8;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-occasions-button:hover {
          color: #E8E0D0;
        }

        .zm-occasions-button span {
          font-size: 15px;
        }

        @media (max-width: 900px) {
          .zm-occasions-section {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .zm-occasions-image {
            height: clamp(320px, 65vw, 480px);
          }

          .zm-occasions-content {
            max-width: 680px;
          }

          .zm-occasions-heading {
            font-size: clamp(42px, 7vw, 56px);
          }
        }

        @media (max-width: 480px) {
          .zm-occasions-section {
            gap: 28px;
            padding: 50px 20px 58px;
          }

          .zm-occasions-image {
            height: 310px;
          }

          .zm-occasions-eyebrow {
            margin-bottom: 14px;
            font-size: 11px;
            letter-spacing: 0.19em;
          }

          .zm-occasions-heading {
            font-size: clamp(38px, 9.5vw, 46px);
          }

          .zm-occasions-subheading {
            margin-top: 14px;
            font-size: 21px;
          }

          .zm-occasions-rule {
            margin: 21px 0;
          }

          .zm-occasions-description {
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-occasions-list-heading {
            margin-top: 24px;
          }

          .zm-occasions-list {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .zm-occasions-list li {
            font-size: 13px;
          }

          .zm-occasions-button {
            margin-top: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-occasions-image img,
          .zm-occasions-button {
            transition: none;
          }
        }
      `}</style>

      <section
        id="occasions"
        className="zm-occasions-section"
        aria-labelledby="occasions-heading"
      >
        <figure className="zm-occasions-image">
          <img
            src="/private-events.jpg"
            alt="Private events and celebrations at Zammaya in South Delhi"
            loading="lazy"
          />
        </figure>

        <div className="zm-occasions-content">
          <p className="zm-occasions-eyebrow">
            CELEBRATE AT ZAMMAYA
          </p>

          <h2
            id="occasions-heading"
            className="zm-occasions-heading"
          >
            Made for <em>Every Occasion</em>
          </h2>

          <p className="zm-occasions-subheading">
            Date Nights, Celebrations &amp; Private Gatherings
          </p>

          <div className="zm-occasions-rule" />

          <p className="zm-occasions-description">
            Looking for a date night restaurant in South Delhi?
            Planning a birthday celebration, an anniversary
            dinner, a group gathering, or a private party?
          </p>

          <p className="zm-occasions-description">
            Zammaya offers the setting, food, drinks, and ambience
            to make the occasion feel special. Our team helps
            create seamless experiences for couples, friends,
            families, and groups looking to celebrate in style.
          </p>

          <h3 className="zm-occasions-list-heading">
            PERFECT FOR
          </h3>

          <ul className="zm-occasions-list">
            {occasions.map((occasion) => (
              <li key={occasion}>
                <span aria-hidden="true">✦</span>
                <span>{occasion}</span>
              </li>
            ))}
          </ul>

          <a
            href="#reservation"
            className="zm-occasions-button"
          >
            PLAN YOUR CELEBRATION
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
