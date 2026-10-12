import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import GalleryContent from "../components/GalleryContent";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Lounge, Food & Cocktails in Adchini",
  description:
    "See inside Zammaya — the chandelier dining room, private lounge, signature cocktails, plated food, and nights out at our premium lounge bar in Adchini, South Delhi.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Zammaya, Premium Lounge Bar in South Delhi",
    description:
      "A glimpse into the flavours, nights, and moments that define Zammaya.",
    url: "/gallery",
    type: "website",
    locale: "en_IN",
    images: ["/experience-interior.jpg"],
  },
};

export default function GalleryPage() {
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
        <GalleryContent />
      </main>

      <Footer />
    </>
  );
}
