import type { CityData } from "@/types/city";

const jaipur: CityData = {
  slug: "jaipur",
  name: "Jaipur",
  seo: {
    title: "Jaipur Self Drive & Rental Cars, Bikes & Scooters | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Jaipur. Affordable hourly & daily rentals from trusted local partners. Rent a vehicle near Hawa Mahal, Amer Fort & more.",
    keywords: [
      "Jaipur self drive cars",
      "Jaipur bike rental",
      "Jaipur scooty rental",
      "rent a car in Jaipur",
      "vehicle rental Jaipur",
      "hourly car rental Jaipur",
      "self drive in Jaipur",
    ],
  },
  hero: {
    title: "Explore Jaipur at Your Own Pace",
    subtitle:
      "Rent self drive cars, bikes, or scooters in Jaipur. Book by the hour or day from trusted local partners across the Pink City.",
    image: "/images/cities/jaipur.webp",
  },
  stats: [
    { value: "120+", label: "Vehicles" },
    { value: "50+", label: "Locations" },
    { value: "4.8★", label: "Average Rating" },
    { value: "20K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "hawa-mahal",
      name: "Hawa Mahal",
      description: "Rent vehicles near Hawa Mahal, the iconic Palace of Winds in the heart of Jaipur.",
    },
    {
      slug: "amber-fort",
      name: "Amer Fort",
      description: "Find rental cars, bikes, and scooters near the majestic Amer Fort.",
    },
    {
      slug: "city-palace",
      name: "City Palace",
      description: "Self drive vehicles available near City Palace, Jaipur's royal residence.",
    },
    {
      slug: "johari-bazaar",
      name: "Johari Bazaar",
      description: "Rent vehicles near Johari Bazaar, Jaipur's famous jewellery market.",
    },
    {
      slug: "gt",
      name: "GT",
      description: "Book vehicles near GT, one of Jaipur's bustling commercial areas.",
    },
  ],
  nearbyAreas: ["Mansarovar", "Vaishali Nagar", "Malviya Nagar", "Raja Park", "MI Road", "C-Scheme", "Tonk Road"],
  faqs: [
    { question: "Can I rent a self drive car in Jaipur by the hour?", answer: "Yes! Swarikaro offers hourly, daily, and weekly rental options for cars, bikes, and scooters all across Jaipur." },
    { question: "Do I need a deposit to rent a vehicle in Jaipur?", answer: "No. Swarikaro does not require any security deposit. You pay only for the rental duration you choose." },
    { question: "Is bike rental available near Hawa Mahal?", answer: "Yes. Bikes and scooters are available for self drive rental near Hawa Mahal, Amer Fort, and many other Jaipur locations." },
    { question: "Can I book a vehicle in Jaipur in advance?", answer: "Absolutely. You can book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are the vehicles in Jaipur inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental to ensure safety and reliability." },
  ],
  testimonials: [
    { name: "Rahul S.", location: "Jaipur", text: "Rented a bike near Hawa Mahal for a day trip to Amer Fort. Smooth booking and great condition vehicle.", rating: 5 },
    { name: "Priya M.", location: "Jaipur", text: "Self drive car rental in Jaipur was so convenient. No deposit, transparent pricing, and doorstep delivery.", rating: 5 },
    { name: "Amit K.", location: "Jaipur", text: "Used Swarikaro for hourly scooty rental near Johari Bazaar. Perfect for short city trips.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Jaipur?",
    description: "Find and book the perfect vehicle near you in Jaipur. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Jaipur Vehicles",
    buttonLink: "/jaipur",
  },
};

export default jaipur;
