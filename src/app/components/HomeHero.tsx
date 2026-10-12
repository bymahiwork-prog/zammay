
const heroImage = "/experience-interior.jpg";

export default function HomeHero() {
  return (
    <section
      id="home"
      aria-label="Zammaya premium lounge bar in South Delhi"
      style={{
        position: "relative",
        isolation: "isolate",
        minHeight: "min(780px, calc(100svh - 80px))",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#080A08",
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 7, 5, 0.88) 0%,
            rgba(5, 7, 5, 0.68) 42%,
            rgba(5, 7, 5, 0.18) 100%
          ),
          linear-gradient(
            0deg,
            rgba(5, 7, 5, 0.58) 0%,
            transparent 32%
          ),
          url("${heroImage}")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#E8E0D0",
        padding: "clamp(100px, 12vw, 160px) clamp(24px, 7vw, 110px) 145px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "#C6A45B",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            margin: "0 0 24px",
            lineHeight: 1.8,
          }}
        >
          PREMIUM LOUNGE BAR · SOUTH DELHI
        </p>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(44px, 6.5vw, 88px)",
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            maxWidth: "850px",
            margin: "0",
            textWrap: "balance",
          }}
        >
          A Promise to
          <br />
          <em style={{ fontWeight: 400 }}>
            Reimagine the Night
          </em>
        </h1>

        <div
          style={{
            width: "64px",
            height: "1px",
            background: "#C6A45B",
            margin: "28px 0 24px",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(13px, 1.2vw, 16px)",
            fontWeight: 500,
            lineHeight: 1.7,
            margin: "0 0 12px",
            color: "#E8E0D0",
          }}
        >
          Zammaya — Premium Lounge Bar in South Delhi
        </h2>

        <p
          style={{
            maxWidth: "570px",
            fontSize: "14px",
            lineHeight: 1.9,
            color: "rgba(232, 224, 208, 0.88)",
            margin: "0 0 12px",
          }}
        >
          Where elevated dining, crafted cocktails, immersive
          ambience, and unforgettable energy come together.
        </p>

        <p
          style={{
            maxWidth: "570px",
            fontSize: "13px",
            lineHeight: 1.9,
            color: "rgba(232, 224, 208, 0.76)",
            margin: "0 0 30px",
          }}
        >
          Located on Sri Aurobindo Marg in Adchini, Zammaya is
          your destination for flavour-filled evenings,
          meaningful conversations, celebratory dinners, and
          nights that stay with you long after the music fades.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px 26px",
          }}
        >
          <a
            href="#reservation"
            aria-label="Reserve your table at Zammaya"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "48px",
              padding: "0 24px",
              background: "#C6A45B",
              color: "#080A08",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              boxSizing: "border-box",
            }}
          >
            Reserve Your Table <span style={{ marginLeft: "12px" }}>↗</span>
          </a>

          <a
            href="#experience"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "44px",
              color: "#E8E0D0",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Explore the Experience <span>↓</span>
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          left: "clamp(24px, 7vw, 110px)",
          right: "clamp(24px, 7vw, 110px)",
          bottom: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          color: "rgba(232, 224, 208, 0.76)",
          fontSize: "11px",
          letterSpacing: "0.13em",
          lineHeight: 1.8,
        }}
      >
        <span>81, SRI AUROBINDO MARG, ADCHINI, SOUTH DELHI</span>

        <a
          href="#experience"
          style={{
            color: "inherit",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          SCROLL TO DISCOVER ↓
        </a>
      </div>

      <style>{`
        #home::before {
          content: "";
          position: absolute;
          inset: clamp(12px, 1.6vw, 22px);
          z-index: 0;
          pointer-events: none;
          border: 1px solid rgba(198, 164, 91, 0.28);
        }

        @media (max-width: 600px) {
          #home {
            min-height: 720px !important;
            min-height: min(760px, calc(100svh - 64px)) !important;
            align-items: center !important;
            background-position: 58% center !important;
            padding: 90px 24px 105px !important;
          }

          #home h1 {
            font-size: clamp(43px, 11vw, 60px) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.04em !important;
          }

          #home h2 {
            font-size: 13px !important;
          }

          #home p {
            overflow-wrap: break-word;
          }

          #home > div:last-child {
            left: 24px !important;
            right: 24px !important;
            bottom: 30px !important;
            font-size: 10px !important;
          }

          #home > div:last-child span {
            max-width: 58%;
          }
        }

        @media (max-width: 380px) {
          #home {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          #home h1 {
            font-size: 41px !important;
          }

          #home > div:last-child {
            left: 18px !important;
            right: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
