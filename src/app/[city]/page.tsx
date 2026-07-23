import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildCityJsonLd } from "@/lib/jsonld";
import { services } from "@/data/shared/services";
import { vehicleTypes } from "@/data/shared/vehicleTypes";
import { benefits } from "@/data/shared/benefits";
import { whyChoose } from "@/data/shared/whyChoose";
import { howItWorks } from "@/data/shared/howItWorks";
import Hero from "@/components/city/Hero";
import Stats from "@/components/city/Stats";
import WhyChoose from "@/components/city/WhyChoose";
import Services from "@/components/city/Services";
import VehicleTypes from "@/components/city/VehicleTypes";
import PopularLocations from "@/components/city/PopularLocations";
import NearbyAreas from "@/components/city/NearbyAreas";
import Benefits from "@/components/city/Benefits";
import HowItWorks from "@/components/city/HowItWorks";
import Testimonials from "@/components/city/Testimonials";
import FAQ from "@/components/city/FAQ";
import CTA from "@/components/city/CTA";
import AllCities from "@/components/city/AllCities";
import { JsonLd } from "@/components/seo/structured-data";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities[slug as keyof typeof cities];
  if (!city) return {};

  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,
    alternates: { canonical: `https://swarikaro.com/${slug}` },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: `https://swarikaro.com/${slug}`,
      images: city.hero.image ? [{ url: `https://swarikaro.com${city.hero.image}` }] : [],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = cities[slug as keyof typeof cities];
  if (!city) notFound();

  const schemas = buildCityJsonLd(city);

  return (
    <>
      <JsonLd data={schemas} />
      <div className="bg-hero">
        <Hero city={city} />
        <Stats city={city} />
        <WhyChoose />
        <Services />
        <VehicleTypes />
        <PopularLocations city={city} />
        <NearbyAreas city={city} />
        <Benefits />
        <HowItWorks />
        <Testimonials city={city} />
        <FAQ city={city} />
        <AllCities />
        <CTA city={city} />
      </div>
    </>
  );
}
