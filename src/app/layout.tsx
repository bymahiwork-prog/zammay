
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zammaya.in"),
  title: {
    default: "Zammaya | Premium Lounge Bar in South Delhi, Adchini",
    template: "%s | Zammaya",
  },
  description:
    "Discover Zammaya, a premium lounge bar and fine dining destination in Adchini, South Delhi. Enjoy signature cocktails, curated dining, celebrations, and memorable nights.",
  applicationName: "Zammaya",
  openGraph: {
    type: "website",
    siteName: "Zammaya",
    title: "Zammaya | Premium Lounge Bar in South Delhi, Adchini",
    description:
      "Discover Zammaya, a premium lounge bar and fine dining destination in Adchini, South Delhi. Enjoy signature cocktails, curated dining, celebrations, and memorable nights.",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
