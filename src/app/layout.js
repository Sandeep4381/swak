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
// import PageLoader from "@/components/ui/PageLoader";
// import SplashProvider from "@/components/ui/SplashProvider";
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

icons: {
  icon: [
    { url: "https://ik.imagekit.io/swarikaro4/Swarikar_website/icon/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    { url: "https://ik.imagekit.io/swarikaro4/Swarikar_website/icon/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    { url: "https://ik.imagekit.io/swarikaro4/Swarikar_website/icon/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
    { url: "https://ik.imagekit.io/swarikaro4/Swarikar_website/icon/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
  ],
  shortcut: "https://ik.imagekit.io/swarikaro4/Swarikar_website/icon/favicon.ico",
  apple: "/apple-touch-icon.png",
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  ],
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
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
