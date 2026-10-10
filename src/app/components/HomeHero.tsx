const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url("${heroImage}")` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">
          AN IMMERSIVE DINING & LOUNGE EXPERIENCE
        </p>

        <h1>
          A Promise to
          <br />
          <em>Reimagine the Night</em>
        </h1>

        <div className="gold-rule" />

        <p className="hero-description">
          Where extraordinary flavours, atmospheric interiors
          and unforgettable moments come together.
        </p>

        <p className="hero-note">
          AN EXPERIENCE DESIGNED TO BE REMEMBERED
        </p>

        <a href="#experience" className="gold-button">
          EXPLORE THE EXPERIENCE
        </a>
      </div>

      <div className="hero-bottom">
        <span>DINING · COCKTAILS · EXPERIENCES</span>
        <a href="#experience">SCROLL TO DISCOVER ↓</a>
      </div>
    </section>
  );
}
