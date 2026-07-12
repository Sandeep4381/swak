import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashProvider from "@/components/ui/SplashProvider";
import PageLoader from "@/components/ui/PageLoader";


import {
  buildLocalBusinessSchema,
  buildMobileApplicationSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Swarikaro | Apna Safar Apne Log",
    template: "%s | Swarikaro",
  },
  description: "Rent Cars, Bikes & Scooters with Swarikaro",
  metadataBase: new URL("https://swarikaro.com"),
  alternates: {
    canonical: "https://swarikaro.com",
  },
  openGraph: {
    title: "Swarikaro | Apna Safar Apne Log",
    description: "Rent Cars, Bikes & Scooters with Swarikaro",
    url: "https://swarikaro.com",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarikaro | Apna Safar Apne Log",
    description: "Rent Cars, Bikes & Scooters with Swarikaro",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const siteSchemas = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
    buildMobileApplicationSchema({
      name: "Swarikaro User App",
      description:
        "Book trusted bikes, scooters and cars from local vehicle partners.",
      applicationCategory: "TravelApplication",
    }),
    buildMobileApplicationSchema({
      name: "Swarikaro Partner App",
      description:
        "Manage partner bookings, availability and earnings from the Swarikaro Partner App.",
      applicationCategory: "BusinessApplication",
    }),
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <JsonLd data={siteSchemas} />
        <PageLoader />
        <Navbar />

        <SplashProvider>
          {children}
        </SplashProvider>
        <Footer />
      </body>
    </html>
  );
}
