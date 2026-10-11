import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import ExperienceSection from "./components/ExperienceSection";
import DiningSection from "./components/DiningSection";
import CocktailsSection from "./components/CocktailsSection";
import Escape from "./components/Escape";
import OccasionsSection from "./components/OccasionsSection";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Zammaya | Premium Lounge Bar in South Delhi, Adchini",
  description:
    "Discover Zammaya, a premium lounge bar and fine dining destination in Adchini, South Delhi. Enjoy signature cocktails, curated dining, celebrations, and memorable nights.",
  openGraph: {
    title: "Zammaya | Premium Lounge Bar in South Delhi, Adchini",
    description:
      "Discover Zammaya, a premium lounge bar and fine dining destination in Adchini, South Delhi. Enjoy signature cocktails, curated dining, celebrations, and memorable nights.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="top"
        style={{
          background: "#080A08",
          color: "#E8E0D0",
          width: "100%",
        }}
      >
        <HomeHero />

        <ExperienceSection />

        <DiningSection />

        <CocktailsSection />

        <Escape />

        <OccasionsSection />

        <LocationSection />

        <FAQSection />

        <FinalCTASection />
      </main>

      <Footer />
    </>
  );
}
