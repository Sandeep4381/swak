import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {
  buildLocalBusinessSchema,
  buildMobileApplicationSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/metadata";

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
    default: "Swarikaro - Vehicle Rental Platform in India | Rent Bikes, Cars & More",
   
  },

  description: SITE_DESCRIPTION,

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

manifest: "/site.webmanifest",

icons: {
  icon: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      url: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      url: "/icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],


  shortcut: "/favicon.ico",

  apple: [
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
},
  openGraph: {
    title: "Swarikaro - Vehicle Rental Platform in India | Rent Bikes, Cars & More",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
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
    title: "Swarikaro - Vehicle Rental Platform in India | Rent Bikes, Cars & More",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>

      <head>
    
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>

      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9ZHSK1059R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ZHSK1059R');
          `}
        </Script>
        <JsonLd data={siteSchemas} />
        <Navbar />
{children}
        <Footer />
      </body>
    </html>
  );
}
