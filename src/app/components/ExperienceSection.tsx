
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.9fr)",
        alignItems: "center",
        gap: "clamp(36px, 7vw, 100px)",
        padding: "clamp(64px, 9vw, 130px) clamp(24px, 7vw, 110px)",
        background: "#080A08",
        color: "#E8E0D0",
        boxSizing: "border-box",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <style>{`
        .zm-experience-visual {
          position: relative;
          width: 100%;
          min-width: 0;
          height: clamp(340px, 45vw, 590px);
          overflow: hidden;
          background: #101B14;
        }

        .zm-experience-visual img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .zm-experience-visual::after {
          content: "";
          position: absolute;
          inset: 45% 0 0;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(8, 10, 8, 0.72)
          );
        }

        .zm-experience-caption {
          position: absolute;
          z-index: 1;
          bottom: 24px;
          left: 24px;
          right: 18px;
          color: #E8E0D0;
          font-size: 9px;
          letter-spacing: 0.2em;
          line-height: 1.8;
        }

        .zm-experience-copy {
          width: 100%;
          max-width: 560px;
          min-width: 0;
        }

        .zm-experience-label {
          margin: 0 0 20px;
          color: #C6A45B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.24em;
          line-height: 1.8;
        }

        .zm-experience-heading {
          margin: 0;
          color: #E8E0D0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.02;
          letter-spacing: -0.025em;
          overflow-wrap: break-word;
        }

        .zm-experience-heading em {
          font-weight: 400;
        }

        .zm-experience-rule {
          width: 52px;
          height: 1px;
          margin: 28px 0;
          background: #C6A45B;
        }

        .zm-experience-description {
          margin: 0 0 18px;
          color: rgba(232, 224, 208, 0.76);
          font-size: 13px;
          line-height: 2;
        }

        .zm-experience-description:first-of-type {
          color: #E8E0D0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 22px;
          line-height: 1.6;
        }

        .zm-experience-link {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-top: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.65);
          color: #C6A45B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.13em;
          line-height: 1.8;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .zm-experience-link:hover {
          color: #E8E0D0;
        }

        .zm-experience-link span {
          font-size: 15px;
        }

        @media (max-width: 800px) {
          .zm-experience-section {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding-top: 70px !important;
            padding-bottom: 76px !important;
          }

          .zm-experience-visual {
            height: clamp(300px, 68vw, 480px);
          }

          .zm-experience-copy {
            max-width: 680px;
          }

          .zm-experience-heading {
            font-size: clamp(42px, 8vw, 58px);
          }
        }

        @media (max-width: 480px) {
          .zm-experience-section {
            gap: 30px !important;
            padding: 48px 20px 58px !important;
          }

          .zm-experience-visual {
            height: 310px;
          }

          .zm-experience-caption {
            left: 18px;
            bottom: 18px;
            font-size: 8px;
          }

          .zm-experience-label {
            margin-bottom: 15px;
            font-size: 9px;
            letter-spacing: 0.19em;
          }

          .zm-experience-heading {
            font-size: clamp(39px, 10vw, 48px);
            line-height: 1.05;
          }

          .zm-experience-rule {
            margin: 22px 0;
          }

          .zm-experience-description {
            font-size: 13px;
            line-height: 1.9;
          }

          .zm-experience-description:first-of-type {
            font-size: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-experience-link {
            transition: none;
          }
        }
      `}</style>

      <div
        className="zm-experience-section"
        style={{
          display: "contents",
        }}
      >
        <div className="zm-experience-visual">
          <img
            src="/experience-interior.jpg"
            alt="Zammaya lounge and dining ambience in Adchini, South Delhi"
            loading="lazy"
          />

          <span className="zm-experience-caption">
            AN EXPERIENCE BEYOND DINING
          </span>
        </div>

        <div className="zm-experience-copy">
          <p className="zm-experience-label">
            THE ZAMMAYA EXPERIENCE
          </p>

          <h2
            id="experience-heading"
            className="zm-experience-heading"
          >
            An Experience
            <br />
            <em>Beyond Dining</em>
          </h2>

          <div className="zm-experience-rule" />

          <p className="zm-experience-description">
            At Zammaya, every visit is designed to feel like an
            occasion.
          </p>

          <p className="zm-experience-description">
            Come in for a relaxed dinner, stay for the cocktails,
            lose track of time with the music, or celebrate the
            people who matter most. From intimate date nights
            and stylish group dinners to birthday celebrations
            and vibrant evenings with friends, Zammaya brings
            together food, drinks, ambience, and energy in one
            memorable setting.
          </p>

          <p className="zm-experience-description">
            We are more than a place to dine. We are a premium
            lounge bar in South Delhi where every table has a
            story, every cocktail has character, and every night
            has a mood of its own.
          </p>

          <a
            href="#reservation"
            className="zm-experience-link"
            aria-label="Book your experience at Zammaya"
          >
            BOOK YOUR EXPERIENCE <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
