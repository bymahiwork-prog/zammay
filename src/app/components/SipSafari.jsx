import styles from "./SipSafari.module.css";

export default function SipSafari() {
  return (
    <section className={styles.section} aria-labelledby="sip-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>03 — Sip Safari</p>

          <h2 id="sip-heading" className={styles.heading}>
            Crafted for <em>the Night</em>
          </h2>

          <p className={styles.tagline}>Cocktails That Set the Tone</p>

          <p className={styles.text}>
            A great night begins with the right pour. Discover imaginative
            cocktails, familiar favourites, fine spirits, and refreshing pours
            created to match every mood. From first sip to last call, this is a
            cocktail bar in South Delhi made for people who enjoy the details.
          </p>

          <a href="/contact" className={styles.button}>
            Discover Our Cocktails
          </a>
        </div>

        {/* Replace with <img> later */}
        <div className={styles.placeholder} role="img" aria-label="Signature cocktail">
          Image · Signature cocktail
        </div>
      </div>
    </section>
  );
}
