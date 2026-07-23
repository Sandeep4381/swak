export interface Location {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  image?: string;
}

export interface Stats {
  value: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface CTA {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface CityData {
  slug: string;
  name: string;
  seo: SEO;
  hero: Hero;
  stats: Stats[];
  locations: Location[];
  nearbyAreas: string[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  cta: CTA;
}
