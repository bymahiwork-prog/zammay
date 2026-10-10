export default function LocationSection() {
  return (
    <section
      id="location"
      className="location-section"
      aria-labelledby="location-heading"
    >
      <div className="location-content">
        <p className="location-eyebrow">FIND YOUR WAY TO ZAMMAYA</p>

        <h2 id="location-heading">
          In the Heart of <em>South Delhi</em>
        </h2>

        <p className="location-subheading">
          Easy to Reach. Difficult to Forget.
        </p>

        <div className="location-rule" />

        <p className="location-description">
          Zammaya is conveniently located in Adchini on Sri Aurobindo Marg,
          making it easily accessible from Hauz Khas, Green Park, Malviya
          Nagar, Saket, Mehrauli, and other key South Delhi neighbourhoods.
        </p>

        <p className="location-description">
          Whether you are searching for a bar near Hauz Khas, a premium
          restaurant near Green Park, or a lounge bar in Adchini, Zammaya
          is ready to welcome you.
        </p>

        <div className="location-details">
          <p>
            <span className="location-label">ADDRESS</span>
            <br />
            81, Sri Aurobindo Marg, Adchini, South Delhi
          </p>

          <p>
            <span className="location-label">RESERVATIONS</span>
            <br />
            <a href="tel:+919289895632">+91 92898 95632</a>
          </p>
        </div>

        <div className="location-actions">
          <a
            href="https://www.google.com/maps/search/?api=1&query=81+Sri+Aurobindo+Marg+Adchini+South+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            GET DIRECTIONS <span aria-hidden="true">↗</span>
          </a>

          <a href="#reservation" className="location-button-secondary">
            RESERVE A TABLE
          </a>
        </div>
      </div>

      <div className="location-image">
        <img
          src="/venue-exterior.jpg"
          alt="Zammaya venue in Adchini, South Delhi"
          loading="lazy"
        />
      </div>
    </section>
  );
}
