import type { CityData } from "@/types/city";

const bengaluru: CityData = {
  slug: "bengaluru",
  name: "Bengaluru",
  seo: {
    title: "Self Drive Cars & Bike Rental in Bengaluru | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Bengaluru. Affordable hourly rentals near MG Road, Koramangala, Whitefield & more from trusted local partners.",
    keywords: [
      "Bengaluru self drive cars",
      "Bangalore bike rental",
      "rent a car in Bengaluru",
      "scooty rental Bangalore",
      "vehicle rental Bengaluru",
      "hourly car rental Bangalore",
      "self drive in Bengaluru",
    ],
  },
  hero: {
    title: "Explore Bengaluru on Your Terms",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Bengaluru. Book by the hour or day from trusted local partners.",
    image: "/images/cities/bengaluru.webp",
  },
  stats: [
    { value: "350+", label: "Vehicles" },
    { value: "90+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "60K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "mg-road",
      name: "MG Road",
      description: "Rent cars, bikes, and scooters near MG Road, Bengaluru's iconic commercial street.",
    },
    {
      slug: "koramangala",
      name: "Koramangala",
      description: "Self drive vehicles available near Koramangala, Bengaluru's startup and food hub.",
    },
    {
      slug: "whitefield",
      name: "Whitefield",
      description: "Book rental cars and bikes in Whitefield — IT corridor of Bengaluru.",
    },
    {
      slug: "indiranagar",
      name: "Indiranagar",
      description: "Rent vehicles near Indiranagar, known for its pubs, cafes, and nightlife.",
    },
    {
      slug: "electronic-city",
      name: "Electronic City",
      description: "Find self drive cars and bikes near Electronic City, Bengaluru's tech hub.",
    },
  ],
  nearbyAreas: ["Koramangala", "Indiranagar", "Whitefield", "Marathahalli", "JP Nagar", "BTM Layout", "HSR Layout"],
  faqs: [
    { question: "Can I rent a self drive car in Bengaluru by the hour?", answer: "Yes. Swarikaro offers flexible hourly, daily, and weekly rentals across Bengaluru. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Bengaluru?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near MG Road?", answer: "Yes. Bikes and scooters are available near MG Road, Koramangala, Indiranagar, and across Bengaluru." },
    { question: "Can I book a vehicle in Bengaluru in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Bengaluru inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Karthik N.", location: "Bengaluru", text: "Rented a self drive car near Koramangala for a weekend getaway. Super smooth booking and great car.", rating: 5 },
    { name: "Divya S.", location: "Bengaluru", text: "Scooty rental in Whitefield made my daily commute so much easier. Highly recommend Swarikaro.", rating: 5 },
    { name: "Ravi P.", location: "Bengaluru", text: "Booked a bike near MG Road for exploring the city. Affordable rates and no deposit needed.", rating: 4 },
  ],
  cta: {
    title: "Ready to Drive in Bengaluru?",
    description: "Find and book the perfect vehicle near you in Bengaluru. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Bengaluru Vehicles",
    buttonLink: "/bengaluru",
  },
};

export default bengaluru;
