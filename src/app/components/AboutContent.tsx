const experiences = [
  {
    numeral: "I",
    title: "Curated Food",
    text: "Plates inspired by global flavours, made for sharing.",
  },
  {
    numeral: "II",
    title: "Crafted Cocktails",
    text: "Signature creations and premium pours for every mood.",
  },
  {
    numeral: "III",
    title: "Immersive Ambience",
    text: "Warm, visually striking interiors built for the night.",
  },
  {
    numeral: "IV",
    title: "Music & Energy",
    text: "A social atmosphere that shifts from dinner to nightlife.",
  },
  {
    numeral: "V",
    title: "Attentive Hospitality",
    text: "From the first welcome to the final toast.",
  },
  {
    numeral: "VI",
    title: "Made for Memories",
    text: "A setting for conversations and celebrations.",
  },
];

const occasions = [
  "Date nights",
  "Birthdays",
  "Anniversaries",
  "Get-togethers",
  "Group dining",
  "Cocktail evenings",
  "Private celebrations",
  "Corporate dinners",
];

const reasons = [
  "A premium lounge bar and dining experience in South Delhi",
  "Globally inspired food for every kind of gathering",
  "Cocktails designed to complement every mood",
  "A visually immersive and socially vibrant space",
  "A versatile venue for intimate dinners and larger celebrations",
  "A convenient Adchini location near Hauz Khas and Green Park",
];

export default function AboutContent() {
  return (
    <div className="zm-about">
      <style>{`
        .zm-about {
          width: 100%;
          background: #080a08;
          color: #e8e0d0;
          font-family: var(--font-sans), Arial, sans-serif;
        }

        .zm-about *,
        .zm-about *::before,
        .zm-about *::after {
          box-sizing: border-box;
        }

        .zm-about-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: clamp(24px, 6vw, 72px);
          padding-right: clamp(24px, 6vw, 72px);
        }

        .zm-about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: #c6a45b;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .zm-about-eyebrow::before {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
          opacity: 0.7;
        }

        .zm-about-intro .zm-about-eyebrow::after {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
          opacity: 0.7;
        }

        .zm-about-promise .zm-about-eyebrow::before {
          display: none;
        }

        .zm-about-h1,
        .zm-about-h2,
        .zm-about-h3,
        .zm-about-serif {
          font-family: var(--font-cormorant), Georgia, serif;
          font-weight: 400;
        }

        .zm-about-h1 {
          margin: 0;
          font-size: clamp(46px, 6.6vw, 92px);
          line-height: 0.98;
        }

        .zm-about-h2 {
          margin: 0;
          font-size: clamp(34px, 4.2vw, 58px);
          line-height: 1.06;
        }

        .zm-about em {
          font-style: italic;
          color: #c6a45b;
        }

        .zm-about-body {
          margin: 0;
          color: rgba(232, 224, 208, 0.72);
          font-size: 16px;
          line-height: 1.85;
        }

        .zm-about-btn {
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

        .zm-about-btn:hover {
          background: transparent;
          color: #c6a45b;
        }

        .zm-about-btn--ghost {
          background: transparent;
          color: #e8e0d0;
          border-color: rgba(232, 224, 208, 0.5);
        }

        .zm-about-btn--ghost:hover {
          border-color: #c6a45b;
        }

        .zm-about a:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 4px;
        }

        /* Hero */
        .zm-about-hero {
          padding-top: clamp(72px, 10vw, 130px);
          padding-bottom: clamp(72px, 9vw, 110px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(40px, 6vw, 80px);
          align-items: end;
        }

        .zm-about-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 26px;
        }

        .zm-about-hero-copy .zm-about-body {
          font-size: 18px;
          color: rgba(232, 224, 208, 0.82);
        }

        .zm-about-hero-visual {
          position: relative;
          isolation: isolate;
        }

        .zm-about-hero-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          transform: translate(18px, -18px);
          border: 1px solid rgba(198, 164, 91, 0.45);
          pointer-events: none;
        }

        .zm-about-hero-visual img {
          display: block;
          width: 100%;
          height: clamp(380px, 42vw, 560px);
          object-fit: cover;
        }

        .zm-about-promise {
          position: absolute;
          left: -24px;
          bottom: -32px;
          max-width: 300px;
          padding: 26px 28px;
          background: #101b14;
          border: 1px solid rgba(198, 164, 91, 0.35);
        }

        .zm-about-promise p:last-child {
          margin: 8px 0 0;
          font-size: 25px;
          font-style: italic;
          line-height: 1.25;
        }

        /* Intro */
        .zm-about-intro {
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(80px, 9vw, 110px) clamp(24px, 6vw, 72px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .zm-about-intro .zm-about-serif {
          margin: 0;
          font-size: clamp(26px, 3vw, 40px);
          line-height: 1.4;
        }

        .zm-about-intro .zm-about-body {
          max-width: 740px;
        }

        /* Experience grid */
        .zm-about-band {
          background: #101b14;
          border-top: 1px solid rgba(198, 164, 91, 0.15);
          border-bottom: 1px solid rgba(198, 164, 91, 0.15);
        }

        .zm-about-band > .zm-about-wrap {
          padding-top: clamp(80px, 9vw, 120px);
          padding-bottom: clamp(80px, 9vw, 120px);
          display: flex;
          flex-direction: column;
          gap: 52px;
        }

        .zm-about-head {
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 720px;
        }

        .zm-about-grid {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(198, 164, 91, 0.25);
          border: 1px solid rgba(198, 164, 91, 0.25);
        }

        .zm-about-grid li {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 38px 32px;
          background: #101b14;
        }

        .zm-about-grid .zm-about-numeral {
          color: #c6a45b;
          font-size: 38px;
          line-height: 1;
        }

        .zm-about-h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.2;
        }

        .zm-about-grid p {
          margin: 0;
          color: rgba(232, 224, 208, 0.72);
          font-size: 14px;
          line-height: 1.75;
        }

        /* Split sections */
        .zm-about-split {
          padding-top: clamp(80px, 10vw, 128px);
          padding-bottom: clamp(80px, 10vw, 128px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(40px, 6vw, 72px);
          align-items: center;
        }

        .zm-about-split-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
        }

        .zm-about-photos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .zm-about-photos img {
          display: block;
          width: 100%;
          height: clamp(280px, 32vw, 440px);
          object-fit: cover;
        }

        .zm-about-photos img:last-child {
          margin-top: 64px;
        }

        /* Occasions */
        .zm-about-occasions {
          background: #0e100d;
          border-top: 1px solid rgba(198, 164, 91, 0.15);
          border-bottom: 1px solid rgba(198, 164, 91, 0.15);
        }

        .zm-about-occasions > .zm-about-wrap {
          padding-top: clamp(80px, 9vw, 120px);
          padding-bottom: clamp(80px, 9vw, 120px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(40px, 6vw, 72px);
        }

        .zm-about-occasion-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 32px;
          font-size: 22px;
        }

        .zm-about-occasion-list li {
          padding: 18px 0;
          border-bottom: 1px solid rgba(198, 164, 91, 0.25);
        }

        /* Reasons */
        .zm-about-reasons {
          margin: 0;
          padding: 0;
          list-style: none;
          counter-reset: reason;
        }

        .zm-about-reasons li {
          counter-increment: reason;
          display: flex;
          gap: 22px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(232, 224, 208, 0.1);
          font-size: 16px;
          line-height: 1.6;
        }

        .zm-about-reasons li::before {
          content: counter(reason, decimal-leading-zero);
          flex: 0 0 auto;
          color: #c6a45b;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 18px;
        }

        /* Closing CTA */
        .zm-about-cta {
          position: relative;
          overflow: hidden;
        }

        .zm-about-cta > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.3);
        }

        .zm-about-cta-inner {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          padding: clamp(100px, 12vw, 150px) clamp(24px, 6vw, 72px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
          text-align: center;
        }

        .zm-about-cta .zm-about-h2 {
          font-size: clamp(42px, 6vw, 82px);
          line-height: 1;
        }

        .zm-about-cta .zm-about-body {
          max-width: 580px;
          color: rgba(232, 224, 208, 0.82);
          font-size: 17px;
        }

        .zm-about-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .zm-about-hero,
          .zm-about-split,
          .zm-about-occasions > .zm-about-wrap {
            grid-template-columns: minmax(0, 1fr);
          }

          .zm-about-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .zm-about-promise {
            left: 16px;
            right: 16px;
            max-width: none;
          }

          .zm-about-hero {
            padding-bottom: 96px;
          }

          .zm-about-split--reverse .zm-about-photos {
            order: 2;
          }
        }

        @media (max-width: 560px) {
          .zm-about-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .zm-about-occasion-list {
            font-size: 19px;
            column-gap: 20px;
          }

          .zm-about-photos img:last-child {
            margin-top: 40px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-about-btn {
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section
        className="zm-about-wrap zm-about-hero"
        aria-labelledby="about-heading"
      >
        <div className="zm-about-hero-copy">
          <p className="zm-about-eyebrow">About Zammaya</p>
          <h1 id="about-heading" className="zm-about-h1">
            More Than a <em>Night Out</em>
          </h1>
          <p className="zm-about-body">
            Zammaya is a premium lounge bar and dining destination in Adchini,
            South Delhi — created for people who believe a great evening should
            be felt, not just planned.
          </p>
          <a href="/contact#reservation" className="zm-about-btn">
            Reserve Your Table
          </a>
        </div>

        <div className="zm-about-hero-visual">
          <img
            src="/lounge-interior.jpg"
            alt="Lounge seating at Zammaya, a premium lounge bar in Adchini, South Delhi"
          />
          <div className="zm-about-promise">
            <p className="zm-about-eyebrow">Za·ma·ya</p>
            <p className="zm-about-serif">Our name means “promise.”</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="zm-about-intro" aria-labelledby="about-intro-heading">
        <h2 id="about-intro-heading" className="zm-about-eyebrow">
          A New Kind of Evening
        </h2>
        <p className="zm-about-serif">
          A promise of bold flavours, carefully crafted cocktails, immersive
          ambience, great energy — and <em>moments that stay with you.</em>
        </p>
        <p className="zm-about-body">
          At Zammaya, dining is only the beginning. Start with a slow dinner,
          raise a toast over signature drinks, celebrate with your people, or
          let the evening unfold exactly as it should.
        </p>
      </section>

      {/* Experience */}
      <section className="zm-about-band" aria-labelledby="about-experience-heading">
        <div className="zm-about-wrap">
          <div className="zm-about-head">
            <p className="zm-about-eyebrow">The Zammaya Experience</p>
            <h2 id="about-experience-heading" className="zm-about-h2">
              Dine. Sip. Celebrate. <em>Repeat.</em>
            </h2>
            <p className="zm-about-body">
              Every part of Zammaya is created around one simple idea: give
              people a place to connect, celebrate, and enjoy the moment.
            </p>
          </div>

          <ul className="zm-about-grid">
            {experiences.map((item) => (
              <li key={item.title}>
                <span className="zm-about-numeral zm-about-serif" aria-hidden="true">
                  {item.numeral}
                </span>
                <h3 className="zm-about-h3">{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Every mood */}
      <section
        className="zm-about-wrap zm-about-split zm-about-split--reverse"
        aria-labelledby="about-mood-heading"
      >
        <div className="zm-about-photos">
          <img
            src="/cocktails-signature.jpg"
            alt="Signature cocktail at Zammaya"
          />
          <img
            src="/dining-signature.jpg"
            alt="Signature dish at Zammaya"
          />
        </div>

        <div className="zm-about-split-copy">
          <p className="zm-about-eyebrow">Crafted for Every Mood</p>
          <h2 id="about-mood-heading" className="zm-about-h2">
            A Space That Changes <em>With Your Evening</em>
          </h2>
          <p className="zm-about-body">
            Come in for a relaxed dinner after work. Meet friends for
            cocktails. Dress up for a special date night. Celebrate a milestone
            around the table.
          </p>
          <p className="zm-about-body">
            Vibrant without losing warmth, premium without feeling distant,
            social without taking away from the conversation at your table.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="zm-about-occasions" aria-labelledby="about-occasions-heading">
        <div className="zm-about-wrap">
          <div className="zm-about-split-copy">
            <p className="zm-about-eyebrow">For the Moments That Matter</p>
            <h2 id="about-occasions-heading" className="zm-about-h2">
              Celebrate <em>Your Way</em>
            </h2>
            <p className="zm-about-body">
              A favourite song, a great drink, a table full of friends, a toast
              to something worth celebrating. Whether your plan is intimate or
              lively, our team is here to help.
            </p>
            <a href="/contact#reservation" className="zm-about-btn zm-about-btn--ghost">
              Plan a Celebration
            </a>
          </div>

          <ul className="zm-about-occasion-list zm-about-serif">
            {occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Zammaya */}
      <section
        className="zm-about-wrap zm-about-split"
        aria-labelledby="about-why-heading"
      >
        <div className="zm-about-split-copy">
          <p className="zm-about-eyebrow">Why Zammaya</p>
          <h2 id="about-why-heading" className="zm-about-h2">
            Come for the Experience. <em>Return for the Feeling.</em>
          </h2>
          <p className="zm-about-body">
            Rooted on Sri Aurobindo Marg in Adchini — minutes from Hauz Khas,
            Green Park, Malviya Nagar, Saket, and Mehrauli.
          </p>
        </div>

        <ol className="zm-about-reasons">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ol>
      </section>

      {/* Closing CTA */}
      <section className="zm-about-cta" aria-labelledby="about-cta-heading">
        <img src="/private-events.jpg" alt="" />
        <div className="zm-about-cta-inner">
          <h2 id="about-cta-heading" className="zm-about-h2">
            Make a Promise <em>to the Night</em>
          </h2>
          <p className="zm-about-body">
            A special dinner, a celebration, or simply a good evening with good
            people — Zammaya is ready to welcome you.
          </p>
          <div className="zm-about-actions">
            <a href="/contact#reservation" className="zm-about-btn">
              Reserve Your Table
            </a>
            <a href="/gallery" className="zm-about-btn zm-about-btn--ghost">
              Explore Zammaya
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
