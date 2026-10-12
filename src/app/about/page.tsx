import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Premium Lounge Bar & Dining in Adchini",
  description:
    "Zammaya is a premium lounge bar and dining destination in Adchini, South Delhi — globally inspired food, crafted cocktails, immersive ambience, and celebrations near Hauz Khas and Green Park.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Zammaya | Premium Lounge Bar in South Delhi",
    description:
      "More than a night out. Discover the Zammaya experience in Adchini, South Delhi — food, cocktails, music, and moments that stay with you.",
    url: "/about",
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutPage() {
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
        <AboutContent />
      </main>

      <Footer />
    </>
  );
}
