
const images = [
  {
    src: "/venue-exterior.jpg",
    alt: "Zammaya venue and lounge ambience in South Delhi",
  },
  {
    src: "/cocktails-bar.jpg",
    alt: "Cocktail bar atmosphere at Zammaya",
  },
  {
    src: "/dining-signature.jpg",
    alt: "Signature dining presentation at Zammaya",
  },
  {
    src: "/lounge-interior.jpg",
    alt: "Lounge interior at Zammaya in Adchini",
  },
];

export default function Escape() {
  return (
    <section
      id="escape"
      className="escape-section"
      aria-labelledby="escape-heading"
    >
      <div className="escape-top">
        <div className="escape-content">
          <p className="escape-eyebrow">
            YOUR SOUTH DELHI ESCAPE
          </p>

          <h2 id="escape-heading" className="escape-heading">
            A Lounge Bar in Adchini With{" "}
            <em>Its Own Energy</em>
          </h2>

          <p className="escape-text">
            Step into an atmosphere where every detail is created
            for the moment. Zammaya blends immersive interiors,
            warm lighting, striking visual elements, great music,
            and a high-energy social setting to create an experience
            that shifts beautifully from dinner to nightlife.
          </p>

          <p className="escape-text">
            It is a place to dress up for. A place to unwind in.
            A place to make plans around.
          </p>
        </div>

        <a href="/gallery" className="escape-link">
          VIEW THE GALLERY <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="escape-grid">
        {images.map((image) => (
          <div className="escape-image" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
