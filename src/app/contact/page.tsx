import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact & Reservations | Zammaya, Adchini",
  description:
    "Reserve a table at Zammaya, a premium lounge bar in Adchini, South Delhi. Call or WhatsApp +91 92898 95632, or find us at 81, Sri Aurobindo Marg.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Reserve a Table at Zammaya, South Delhi",
    description:
      "Book your table for dinner, drinks or a celebration at Zammaya, 81 Sri Aurobindo Marg, Adchini.",
    url: "/contact",
    type: "website",
    locale: "en_IN",
    images: ["/experience-interior.jpg"],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "Zammaya",
  description:
    "Premium lounge bar and dining destination in Adchini, South Delhi.",
  url: "https://zammaya.in",
  image: "https://zammaya.in/experience-interior.jpg",
  telephone: "+91-92898-95632",
  servesCuisine: "Global",
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "81, Sri Aurobindo Marg, Adchini",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/zammayadelhi/"],
};

export default function ContactPage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <ContactContent />
      </main>

      <Footer />
    </>
  );
}
