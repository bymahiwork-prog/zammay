
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import ExperienceSection from "./components/ExperienceSection";
import DiningSection from "./components/DiningSection";
import CocktailsSection from "./components/CocktailsSection";
import Escape from "./components/Escape";
import OccasionSection from "./components/OccasionSection";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";

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
    <main style={{ background: "#0B0D0B" }}>
      <Navbar />
      <HomeHero />
      <ExperienceSection />
      <DiningSection />
      <CocktailsSection />
      <Escape />
      <OccasionSection />
      <LocationSection />
      <FAQSection />
    </main>
  );
}
