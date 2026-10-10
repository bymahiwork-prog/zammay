import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>01 — The Experience</p>

        <h2 id="experience-heading" className={styles.heading}>
          An Experience <em>Beyond</em> Dining
        </h2>

        <p className={styles.text}>
          At Zammaya, every visit is designed to feel like an occasion. Come in
          for a relaxed dinner, stay for the cocktails, lose track of time with
          the music, or celebrate the people who matter most.
        </p>

        <p className={styles.text}>
          We are more than a place to dine. We are a premium lounge bar in South
          Delhi where every table has a story, every cocktail has character, and
          every night has a mood of its own.
        </p>

        <a href="/contact" className={styles.link}>
          Book Your Experience →
        </a>
      </div>

      <div className={styles.images}>
        {/* Replace these placeholders with <img> tags later */}
        <div className={styles.placeholder} role="img" aria-label="Carved stone dining nook">
          Image 1 · Stone dining nook
        </div>
        <div
          className={`${styles.placeholder} ${styles.offset}`}
          role="img"
          aria-label="Guest at the jungle mural"
        >
          Image 2 · Jungle mural
        </div>
      </div>
    </section>
  );
}
