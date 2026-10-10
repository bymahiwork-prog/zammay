const occasions = [
  "Romantic date nights",
  "Birthday celebrations",
  "Anniversary dinners",
  "Group dining",
  "Private parties",
  "Corporate gatherings",
  "Weekend plans with friends",
  "Cocktail evenings and social celebrations",
];

export default function OccasionsSection() {
  return (
    <section
      id="occasions"
      className="occasions-section"
      aria-labelledby="occasions-heading"
    >
      <div className="occasions-image">
        <img
          src="/private-events.jpg"
          alt="Private events and celebrations at Zammaya in South Delhi"
          loading="lazy"
        />
      </div>

      <div className="occasions-content">
        <p className="occasions-eyebrow">CELEBRATE AT ZAMMAYA</p>

        <h2 id="occasions-heading">
          Made for <em>Every Occasion</em>
        </h2>

        <p className="occasions-subheading">
          Date Nights, Celebrations &amp; Private Gatherings
        </p>

        <div className="occasions-rule" />

        <p className="occasions-description">
          Looking for a date night restaurant in South Delhi? Planning a
          birthday celebration, an anniversary dinner, a group gathering, or
          a private party?
        </p>

        <p className="occasions-description">
          Zammaya offers the setting, food, drinks, and ambience to make the
          occasion feel special. Our team helps create seamless experiences
          for couples, friends, families, and groups looking to celebrate in
          style.
        </p>

        <h3 className="occasions-list-heading">PERFECT FOR</h3>

        <ul className="occasions-list">
          {occasions.map((occasion) => (
            <li key={occasion}>
              <span aria-hidden="true">✦</span>
              {occasion}
            </li>
          ))}
        </ul>

        <a href="#reservation" className="occasions-button">
          PLAN YOUR CELEBRATION <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
