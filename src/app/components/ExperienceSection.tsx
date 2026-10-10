export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="experience-visual">
        <img
          src="/experience-interior.jpg"
          alt="Zammaya lounge and dining ambience in Adchini, South Delhi"
          loading="lazy"
        />

        <span className="image-caption">
          AN EXPERIENCE BEYOND DINING
        </span>
      </div>

      <div className="experience-copy">
        <p className="experience-label">
          THE ZAMMAYA EXPERIENCE
        </p>

        <h2 id="experience-heading">
          An Experience
          <br />
          <em>Beyond Dining</em>
        </h2>

        <div className="experience-rule" />

        <p className="experience-description">
          At Zammaya, every visit is designed to feel like an
          occasion.
        </p>

        <p className="experience-description">
          Come in for a relaxed dinner, stay for the cocktails,
          lose track of time with the music, or celebrate the
          people who matter most. From intimate date nights
          and stylish group dinners to birthday celebrations
          and vibrant evenings with friends, Zammaya brings
          together food, drinks, ambience, and energy in one
          memorable setting.
        </p>

        <p className="experience-description">
          We are more than a place to dine. We are a premium
          lounge bar in South Delhi where every table has a
          story, every cocktail has character, and every night
          has a mood of its own.
        </p>

        <a
          href="#reservation"
          className="experience-link"
          aria-label="Book your experience at Zammaya"
        >
          BOOK YOUR EXPERIENCE <span>↗</span>
        </a>
      </div>
    </section>
  );
}
