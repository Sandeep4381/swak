import type { Metadata } from "next";

import BlogHeroCarousel from "@/components/blog/BlogHeroCarousel";
import PopularDestinations from "@/components/blog/PopularDestinations";
import RentalCTA from "@/components/blog/RentalCTA";
import TopBlogsByState from "@/components/blog/TopBlogsByState";

import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Travel Blogs & Guides | Swarikaro",

  metadataBase: new URL(SITE_URL),

  keywords: [
    "Travel Blogs",
    "Travel Guides",
    "India Travel",
    "Travel Tips",
    "Road Trips",
    "Destinations",
    "Manali Travel",
    "Uttarakhand Travel",
    "Swarikaro",
    "Vehicle Rental",
    "Car Rental",
    "Bike Rental",
    "Scooty Rental",
  ],

  description:
    "Inspiring stories, travel tips and updated guides to help you explore India like never before.",

  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

interface Props {
  searchParams: Promise<{
    category?: string;
  }>;
}

/* ============================================================
   IMAGEKIT
============================================================ */

const BLOG_HERO_BASE_URL =
  process.env.IMAGE_URL?.replace(/\/+$/, "") ??
  "https://ik.imagekit.io/swarikaro4/Swarikar_website/Blogs";

const desktopHeroImages = [
  `${BLOG_HERO_BASE_URL}/blog-hero.png`,
  `${BLOG_HERO_BASE_URL}/blog-hero-1.png`,
];

const mobileHeroImage = `${BLOG_HERO_BASE_URL}/blog-hero-mob`;

/* ============================================================
   HERO SLIDES
============================================================ */

const heroSlides = desktopHeroImages.map((image, index) => ({
  image,

  mobileImage: mobileHeroImage,

  alt:
    index === 0
      ? "Scenic Himalayan road trip with mountains and lake"
      : "Beautiful Himalayan travel destination",

  badge: "TRAVEL BLOGS",

  title: "Stories that inspire your next journey",

  subtitle:
    "Explore travel guides, real experiences, road trip stories and expert tips from across India and beyond.",
}));

/* ============================================================
   PAGE
============================================================ */

export default async function BlogHomePage({ searchParams }: Props) {
  await searchParams;

  return (
    <>
      <BlogHeroCarousel slides={heroSlides} />

      <TopBlogsByState />

      <PopularDestinations />

      <RentalCTA
        title="Planning Your Next Trip?"
        text="Find cars, bikes and scooters for your journey with Swarikaro."
      />
    </>
  );
}
