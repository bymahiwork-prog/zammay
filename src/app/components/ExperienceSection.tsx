
export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-visual">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
          alt="Elegant restaurant interior"
        />
        <span className="image-caption">
          AN ATMOSPHERE BEYOND ORDINARY
        </span>
      </div>

      <div className="experience-copy">
        <p className="experience-label">
          THE ZAMMAY EXPERIENCE
        </p>

        <h2>
          More Than a Place.
          <br />
          <em>A Feeling.</em>
        </h2>

        <div className="experience-rule" />

        <p className="experience-description">
          Some evenings are simply different. At Zammay,
          every detail is thoughtfully curated — from the
          atmosphere that welcomes you to the flavours that
          surprise you and the moments that stay with you
          long after the night ends.
        </p>

        <p className="experience-tagline">
          Come for the experience. Stay for the feeling.
        </p>

        <a href="#dining" className="experience-link">
          DISCOVER OUR WORLD <span>↗</span>
        </a>

        <div className="experience-features">
          <div>
            <span>01</span>
            <p>THOUGHTFUL<br />AMBIENCE</p>
          </div>
          <div>
            <span>02</span>
            <p>CURATED<br />FLAVOURS</p>
          </div>
          <div>
            <span>03</span>
            <p>LASTING<br />MOMENTS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
