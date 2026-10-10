const images = [
  "Chandelier dining room",
  "DJ live set",
  "Plated dish",
  "Stone-carved lounge",
];

export default function Escape() {
  return (
    <section className="escape-section" aria-labelledby="escape-heading">
      <div className="escape-top">
        <div className="escape-content">
          <p className="escape-eyebrow">04 — Your South Delhi Escape</p>
          <h2 id="escape-heading" className="escape-heading">
            A Lounge Bar in Adchini With <em>Its Own Energy</em>
          </h2>
          <p className="escape-text">
            A place to dress up for. A place to unwind in. A place to make plans
            around.
          </p>
        </div>

        <a href="/gallery" className="escape-link">
          View the Gallery →
        </a>
      </div>

      <div className="escape-grid">
        {/* Replace placeholders with <img> tags later */}
        {images.map((label) => (
          <div key={label} className="escape-placeholder" role="img" aria-label={label}>
            Image · {label}
          </div>
        ))}
      </div>
    </section>
  );
}
