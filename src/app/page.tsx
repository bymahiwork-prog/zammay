import HomeHero from "@/app/components/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A08] text-[#E8E0D0]">
      {/* SECTION 1: HEADER */}
      <header className="site-header">
        <a href="#home" className="brand">
          ZAMMAY<span> A</span>
        </a>

        <nav className="desktop-nav">
          <a href="#experience">THE EXPERIENCE</a>
          <a href="#dining">DINING</a>
          <a href="#cocktails">COCKTAILS</a>
          <a href="#events">PRIVATE EVENTS</a>
          <a href="#location">LOCATION</a>
        </nav>

        <a href="#reservation" className="gold-button header-button">
          RESERVE A TABLE
        </a>
      </header>

      {/* SECTION 2: HERO COMPONENT */}
      <HomeHero />

      {/* MORE HOMEPAGE COMPONENTS WILL GO HERE */}
    </main>
  );
}
