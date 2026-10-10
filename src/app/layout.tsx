
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
