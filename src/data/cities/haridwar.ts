import type { CityData } from "@/types/city";

const haridwar: CityData = {
  slug: "haridwar",
  name: "Haridwar",
  seo: {
    title: "Self Drive Cars & Bike Rental in Haridwar | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Haridwar. Affordable hourly rentals near Har Ki Pauri, Mayapur, and more from trusted local partners.",
    keywords: [
      "Haridwar self drive cars",
      "Haridwar bike rental",
      "rent a car Haridwar",
      "scooty rental Haridwar",
      "vehicle rental Haridwar",
      "hourly car rental Haridwar",
      "self drive in Haridwar",
    ],
  },
  hero: {
    title: "Explore the Holy City",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Haridwar. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/haridwar.webp",
  },
  stats: [
    { value: "100+", label: "Vehicles" },
    { value: "30+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "15K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "har-ki-pauri",
      name: "Har Ki Pauri",
      description: "Rent cars, bikes, and scooters near Har Ki Pauri, the most sacred ghat in Haridwar.",
    },
    {
      slug: "mayapur",
      name: "Mayapur",
      description: "Self drive vehicles available near Mayapur, a bustling area near Har Ki Pauri.",
    },
    {
      slug: "haridwar-station",
      name: "Haridwar Station",
      description: "Book rental vehicles near Haridwar Railway Station for convenient travel.",
    },
    {
      slug: "jwala-pur",
      name: "Jwala Pur",
      description: "Rent cars and bikes near Jwala Pur, a growing residential and commercial area.",
    },
    {
      slug: "ranipur",
      name: "Ranipur",
      description: "Find self drive cars and scooters in Ranipur, located on the outskirts of Haridwar.",
    },
  ],
  nearbyAreas: ["Mayapur", "Jwala Pur", "Ranipur", "Shivalik Nagar", "Bhagirathipur", "Roshnabad", "Kankhal"],
  faqs: [
    { question: "Can I rent a self drive car in Haridwar by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Haridwar. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Haridwar?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Har Ki Pauri?", answer: "Yes. Bikes and scooters are available near Har Ki Pauri, Mayapur, and across Haridwar." },
    { question: "Can I book a vehicle in Haridwar in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Haridwar inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Vikram S.", location: "Haridwar", text: "Rented a self drive car near Har Ki Pauri for temple visits. Very convenient and well-maintained.", rating: 5 },
    { name: "Anjali T.", location: "Haridwar", text: "Scooty rental near Mayapur made our family trip so easy. Great service!", rating: 5 },
    { name: "Mohan P.", location: "Haridwar", text: "Booked a bike near Haridwar Station for local travel. Affordable and no deposit needed.", rating: 4 },
  ],
  cta: {
    title: "Ready to Drive in Haridwar?",
    description: "Find and book the perfect vehicle near you in Haridwar. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Haridwar Vehicles",
    buttonLink: "/haridwar",
  },
};

export default haridwar;
