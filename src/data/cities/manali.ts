import type { CityData } from "@/types/city";

const manali: CityData = {
  slug: "manali",
  name: "Manali",
  seo: {
    title: "Self Drive Cars & Bike Rental in Manali | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Manali. Affordable hourly rentals near Mall Road, Solang Valley, and more from trusted local partners.",
    keywords: [
      "Manali self drive cars",
      "Manali bike rental",
      "rent a car Manali",
      "scooty rental Manali",
      "vehicle rental Manali",
      "hourly car rental Manali",
      "self drive in Manali",
    ],
  },
  hero: {
    title: "Drive Through the Mountains",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Manali. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/manali.webp",
  },
  stats: [
    { value: "100+", label: "Vehicles" },
    { value: "30+", label: "Locations" },
    { value: "4.8★", label: "Average Rating" },
    { value: "18K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "mall-road-manali",
      name: "Mall Road",
      description: "Rent cars, bikes, and scooters near Mall Road, the vibrant heart of Manali.",
    },
    {
      slug: "solang-valley",
      name: "Solang Valley",
      description: "Self drive vehicles available near Solang Valley, famous for adventure sports.",
    },
    {
      slug: "old-manali",
      name: "Old Manali",
      description: "Book rental vehicles near Old Manali, known for its cafes and relaxed vibe.",
    },
    {
      slug: "manali-bus-stand",
      name: "Manali Bus Stand",
      description: "Rent cars and bikes near Manali Bus Stand for convenient onward travel.",
    },
    {
      slug: "naggar",
      name: "Naggar",
      description: "Find self drive cars and bikes in Naggar, a historic village near Manali.",
    },
  ],
  nearbyAreas: ["Old Manali", "Naggar", "Kullu", "Palchan", "Vashisht", "Kothi", "Prini"],
  faqs: [
    { question: "Can I rent a self drive car in Manali by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Manali. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Manali?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Mall Road?", answer: "Yes. Bikes and scooters are available near Mall Road, Solang Valley, and across Manali." },
    { question: "Can I book a vehicle in Manali in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Manali inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Arjun T.", location: "Manali", text: "Rented a bike near Mall Road for a ride to Solang Valley. Unforgettable experience and great service!", rating: 5 },
    { name: "Neha R.", location: "Manali", text: "Self drive car rental in Manali made our family trip so convenient. Smooth booking process.", rating: 5 },
    { name: "Karan S.", location: "Manali", text: "Booked a scooty near Old Manali for exploring the town. Affordable and hassle-free.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Manali?",
    description: "Find and book the perfect vehicle near you in Manali. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Manali Vehicles",
    buttonLink: "/manali",
  },
};

export default manali;
