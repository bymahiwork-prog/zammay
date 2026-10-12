import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import FranchiseContent from "../components/FranchiseContent";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Franchise | Partner With Zammaya",
  description:
    "Bring Zammaya to your city. Explore franchise opportunities with a premium lounge bar and dining concept from South Delhi, and send an enquiry to our team.",
  alternates: {
    canonical: "/franchise",
  },
  openGraph: {
    title: "Partner With Zammaya | Franchise Opportunities",
    description:
      "A premium lounge bar and dining concept built around food, cocktails, ambience and memorable nights. Enquire about bringing Zammaya to your city.",
    url: "/franchise",
    type: "website",
    locale: "en_IN",
    images: ["/venue-exterior.jpg"],
  },
};

export default function FranchisePage() {
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
        <FranchiseContent />
      </main>

      <Footer />
    </>
  );
}
