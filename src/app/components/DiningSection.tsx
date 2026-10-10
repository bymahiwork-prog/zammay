const diningImages = [
  {
    src: "/dining-signature.jpg",
    alt: "Signature dishes at Zammaya, a premium lounge bar in South Delhi",
  },
  {
    src: "/dining-platter.jpg",
    alt: "Food platter for sharing at Zammaya in Adchini, South Delhi",
  },
  {
    src: "/dining-dessert.jpg",
    alt: "Dessert served as part of the dining experience at Zammaya",
  },
];

export default function DiningSection() {
  return (
    <section
      id="dining"
      aria-labelledby="dining-heading"
      className="dining-section"
    >
      <div className="dining-content">
        <p className="dining-eyebrow">
          TASTE THE UNEXPECTED
        </p>

        <h2 id="dining-heading" className="dining-heading">
          Taste the <em>Unexpected</em>
        </h2>

        <h3 className="dining-subheading">
          Global Flavours. Bold Plates. Memorable Moments.
        </h3>

        <div className="dining-rule" />

        <p className="dining-description">
          Our menu brings together globally inspired flavours,
          thoughtfully crafted plates, and a dining experience
          made for sharing. Whether you are here for a slow
          evening meal, small plates with friends, or a
          celebration around the table, Zammaya serves food
          that complements the energy of the night.
        </p>

        <p className="dining-description">
          Expect a refined yet expressive dining experience—one
          that feels equally right for a romantic dinner, a
          catch-up with friends, or a special occasion.
        </p>

        <a href="/menu" className="dining-button">
          EXPLORE THE MENU <span>↗</span>
        </a>
      </div>

      <div className="dining-gallery">
        {diningImages.map((image, index) => (
          <figure
            className={`dining-image dining-image-${index + 1}`}
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
    </section>
  );
}
