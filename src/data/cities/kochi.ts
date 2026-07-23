import type { CityData } from "@/types/city";

const kochi: CityData = {
  slug: "kochi",
  name: "Kochi",
  seo: {
    title: "Self Drive Cars & Bike Rental in Kochi | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Kochi. Affordable hourly rentals near Fort Kochi, Marine Drive, and more from trusted local partners.",
    keywords: [
      "Kochi self drive cars",
      "Kochi bike rental",
      "rent a car Kochi",
      "scooty rental Kochi",
      "vehicle rental Kochi",
      "hourly car rental Kochi",
      "self drive in Kochi",
    ],
  },
  hero: {
    title: "Explore the Queen of Arabian Sea",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Kochi. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/kochi.webp",
  },
  stats: [
    { value: "180+", label: "Vehicles" },
    { value: "45+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "25K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "fort-kochi",
      name: "Fort Kochi",
      description: "Rent cars, bikes, and scooters near Fort Kochi, known for its colonial heritage and charm.",
    },
    {
      slug: "marine-drive-kochi",
      name: "Marine Drive",
      description: "Self drive vehicles available near Marine Drive, Kochi's scenic waterfront promenade.",
    },
    {
      slug: "ernakulam-south",
      name: "Ernakulam South",
      description: "Book rental vehicles near Ernakulam South, the commercial heart of Kochi.",
    },
    {
      slug: "kakkanad",
      name: "Kakkanad",
      description: "Rent cars and bikes in Kakkanad, Kochi's growing IT and business hub.",
    },
    {
      slug: "aluva",
      name: "Aluva",
      description: "Find self drive cars and scooters in Aluva, a major suburb of Kochi.",
    },
  ],
  nearbyAreas: ["Fort Kochi", "Marine Drive", "Ernakulam South", "Kakkanad", "Aluva", "Vyttila", "Edappally"],
  faqs: [
    { question: "Can I rent a self drive car in Kochi by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Kochi. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Kochi?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Fort Kochi?", answer: "Yes. Bikes and scooters are available near Fort Kochi, Marine Drive, and across Kochi." },
    { question: "Can I book a vehicle in Kochi in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Kochi inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Fahad M.", location: "Kochi", text: "Rented a self drive car near Fort Kochi for exploring the city. Smooth booking and great car!", rating: 5 },
    { name: "Sara J.", location: "Kochi", text: "Scooty rental near Marine Drive was perfect for evening rides. Loved the experience!", rating: 5 },
    { name: "Deepak R.", location: "Kochi", text: "Booked a bike near Ernakulam South for daily commute. Affordable and convenient.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Kochi?",
    description: "Find and book the perfect vehicle near you in Kochi. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Kochi Vehicles",
    buttonLink: "/kochi",
  },
};

export default kochi;
