const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="hero"
      aria-label="Zammaya premium lounge bar in South Delhi"
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          A Promise to
          <br />
          <em>Reimagine the Night</em>
        </h1>

        <div className="gold-rule" />

        <h2>
          Zammaya - Premium Lounge Bar in South Delhi
        </h2>

        <p className="hero-description">
          Where elevated dining, crafted cocktails, immersive
          ambience, and unforgettable energy come together.
        </p>

        <p className="hero-description">
          Located on Sri Aurobindo Marg in Adchini, Zammaya is
          your destination for flavour-filled evenings,
          meaningful conversations, celebratory dinners, and
          nights that stay with you long after the music fades.
        </p>

        <div className="hero-actions">
          <a
            href="#reservation"
            className="gold-button"
            aria-label="Reserve your table at Zammaya"
          >
            RESERVE YOUR TABLE
          </a>

          <a
            href="#experience"
            className="hero-secondary-button"
          >
            EXPLORE THE EXPERIENCE
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>
          81, SRI AUROBINDO MARG, ADCHINI, SOUTH DELHI
        </span>

        <a href="#experience">
          SCROLL TO DISCOVER ↓
        </a>
      </div>
    </section>
  );
}
