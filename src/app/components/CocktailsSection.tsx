
const cocktailImages = [
  {
    src: "/cocktails-bar.jpg",
    alt: "Cocktail bar at Zammaya in Adchini, South Delhi",
  },
  {
    src: "/cocktails-signature.jpg",
    alt: "Crafted cocktails at Zammaya, a premium lounge bar in South Delhi",
  },
];

export default function CocktailsSection() {
  return (
    <section
      id="cocktails"
      className="cocktails-section"
      aria-labelledby="cocktails-heading"
    >
      <div className="cocktails-inner">
        <div className="cocktails-gallery">
          {cocktailImages.map((image) => (
            <figure
              className="cocktails-image"
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className="cocktails-content">
          <p className="cocktails-eyebrow">
            CRAFTED FOR THE NIGHT
          </p>

          <h2 id="cocktails-heading">
            Cocktails That <em>Set the Tone</em>
          </h2>

          <div className="cocktails-rule" />

          <p className="cocktails-intro">
            A great night begins with the right pour.
          </p>

          <p className="cocktails-description">
            At Zammaya, the bar is an essential part of the
            experience. Discover imaginative cocktails, familiar
            favourites, fine spirits, and refreshing pours created
            to match every mood—whether you are starting your
            evening, raising a toast, or settling into a long
            conversation.
          </p>

          <p className="cocktails-description">
            From first sip to last call, this is a cocktail bar
            in South Delhi made for people who enjoy the details.
          </p>

          <a
            href="#reservation"
            className="cocktails-button"
          >
            DISCOVER OUR COCKTAILS <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
