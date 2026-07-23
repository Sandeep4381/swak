import type { CityData } from "@/types/city";

const mumbai: CityData = {
  slug: "mumbai",
  name: "Mumbai",
  seo: {
    title: "Self Drive Cars & Bike Rental in Mumbai | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Mumbai. Affordable hourly rentals near Marine Drive, Bandra, and more from trusted local partners.",
    keywords: [
      "Mumbai self drive cars",
      "Mumbai bike rental",
      "rent a car in Mumbai",
      "scooty rental Mumbai",
      "vehicle rental Mumbai",
      "hourly car rental Mumbai",
      "self drive in Mumbai",
    ],
  },
  hero: {
    title: "Navigate Mumbai with Freedom",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Mumbai. Book by the hour or day from trusted local partners.",
    image: "/images/cities/mumbai.webp",
  },
  stats: [
    { value: "400+", label: "Vehicles" },
    { value: "100+", label: "Locations" },
    { value: "4.6★", label: "Average Rating" },
    { value: "80K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "marine-drive",
      name: "Marine Drive",
      description: "Rent cars and bikes near Marine Drive, Mumbai's iconic seaside promenade.",
    },
    {
      slug: "bandra",
      name: "Bandra",
      description: "Self drive vehicles available near Bandra, Mumbai's vibrant hub.",
    },
    {
      slug: "andheri",
      name: "Andheri",
      description: "Book rental cars, bikes, and scooters in Andheri — West and East.",
    },
    {
      slug: "powai",
      name: "Powai",
      description: "Rent vehicles near Powai, home to the scenic Powai Lake and business parks.",
    },
    {
      slug: "navi-mumbai",
      name: "Navi Mumbai",
      description: "Find self drive cars and bikes across Navi Mumbai — Vashi, Nerul, and beyond.",
    },
  ],
  nearbyAreas: ["Andheri", "Bandra", "Powai", "Borivali", "Thane", "Navi Mumbai", "Dadar"],
  faqs: [
    { question: "Can I rent a self drive car in Mumbai by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Mumbai. Perfect for both short trips and full-day outings." },
    { question: "Do I need a deposit to rent a vehicle in Mumbai?", answer: "No deposit required. Rent vehicles in Mumbai without any security deposit — pay only for the time you book." },
    { question: "Is bike rental available near Marine Drive?", answer: "Yes. Bikes and scooters are available near Marine Drive, Bandra, Andheri, and across Mumbai." },
    { question: "Can I book a vehicle in Mumbai in advance?", answer: "Absolutely. You can reserve your vehicle up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Mumbai inspected before rental?", answer: "Yes, every vehicle undergoes a thorough inspection and verification before each rental." },
  ],
  testimonials: [
    { name: "Sneha D.", location: "Mumbai", text: "Rented a self drive car near Bandra for a day trip to Lonavala. Smooth process and great car.", rating: 5 },
    { name: "Rajesh K.", location: "Mumbai", text: "Scooty rental in Andheri saved me so much time commuting. Affordable and convenient.", rating: 5 },
    { name: "Anita P.", location: "Mumbai", text: "Booked a bike near Marine Drive for a coastal ride. Amazing experience with Swarikaro.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Mumbai?",
    description: "Find and book the perfect vehicle near you in Mumbai. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Mumbai Vehicles",
    buttonLink: "/mumbai",
  },
};

export default mumbai;
