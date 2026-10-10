import styles from "./Escape.module.css";

const images = [
  "Chandelier dining room",
  "DJ live set",
  "Plated dish",
  "Stone-carved lounge",
];

export default function Escape() {
  return (
    <section className={styles.section} aria-labelledby="escape-heading">
      <div className={styles.top}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>04 — Your South Delhi Escape</p>
          <h2 id="escape-heading" className={styles.heading}>
            A Lounge Bar in Adchini With <em>Its Own Energy</em>
          </h2>
          <p className={styles.text}>
            A place to dress up for. A place to unwind in. A place to make plans
            around.
          </p>
        </div>

        <a href="/gallery" className={styles.link}>
          View the Gallery →
        </a>
      </div>

      <div className={styles.grid}>
        {/* Replace placeholders with <img> tags later */}
        {images.map((label) => (
          <div key={label} className={styles.placeholder} role="img" aria-label={label}>
            Image · {label}
          </div>
        ))}
      </div>
    </section>
  );
}
