import type { CityData } from "@/types/city";

const bhubaneswar: CityData = {
  slug: "bhubaneswar",
  name: "Bhubaneswar",
  seo: {
    title: "Self Drive Cars & Bike Rental in Bhubaneswar | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Bhubaneswar. Affordable hourly rentals near Master Canteen, Kalinga Nagar, and more from trusted local partners.",
    keywords: [
      "Bhubaneswar self drive cars",
      "Bhubaneswar bike rental",
      "rent a car Bhubaneswar",
      "scooty rental Bhubaneswar",
      "vehicle rental Bhubaneswar",
      "hourly car rental Bhubaneswar",
      "self drive in Bhubaneswar",
    ],
  },
  hero: {
    title: "Discover Bhubaneswar on Wheels",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Bhubaneswar. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/bhubaneswar.webp",
  },
  stats: [
    { value: "120+", label: "Vehicles" },
    { value: "35+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "12K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "master-canteen",
      name: "Master Canteen",
      description: "Rent cars, bikes, and scooters near Master Canteen, the central hub of Bhubaneswar.",
    },
    {
      slug: "kalinga-nagar",
      name: "Kalinga Nagar",
      description: "Self drive vehicles available near Kalinga Nagar, a major commercial and residential area.",
    },
    {
      slug: "bapuji-nagar",
      name: "Bapuji Nagar",
      description: "Book rental vehicles near Bapuji Nagar, one of Bhubaneswar's prime localities.",
    },
    {
      slug: "saheed-nagar",
      name: "Saheed Nagar",
      description: "Rent cars and bikes near Saheed Nagar, known for its markets and accessibility.",
    },
    {
      slug: "patia",
      name: "Patia",
      description: "Find self drive cars and scooters in Patia, Bhubaneswar's growing IT and education hub.",
    },
  ],
  nearbyAreas: ["Master Canteen", "Kalinga Nagar", "Bapuji Nagar", "Saheed Nagar", "Patia", "Nayapalli", "Chandrasekharpur"],
  faqs: [
    { question: "Can I rent a self drive car in Bhubaneswar by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Bhubaneswar. Pay only for what you use." },
    { question: "Do I need a deposit to rent a vehicle in Bhubaneswar?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Master Canteen?", answer: "Yes. Bikes and scooters are available near Master Canteen, Kalinga Nagar, and across Bhubaneswar." },
    { question: "Can I book a vehicle in Bhubaneswar in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Bhubaneswar inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Sourav D.", location: "Bhubaneswar", text: "Rented a self drive car near Master Canteen for a weekend trip. Hassle-free booking and great condition.", rating: 5 },
    { name: "Rashmi P.", location: "Bhubaneswar", text: "Scooty rental in Kalinga Nagar made my daily errands so much easier. Highly recommend!", rating: 5 },
    { name: "Arun B.", location: "Bhubaneswar", text: "Booked a bike near Bapuji Nagar for city rides. Affordable rates and no deposit needed.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Bhubaneswar?",
    description: "Find and book the perfect vehicle near you in Bhubaneswar. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Bhubaneswar Vehicles",
    buttonLink: "/bhubaneswar",
  },
};

export default bhubaneswar;
