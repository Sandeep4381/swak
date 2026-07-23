import type { CityData } from "@/types/city";

const pune: CityData = {
  slug: "pune",
  name: "Pune",
  seo: {
    title: "Self Drive Cars & Bike Rental in Pune | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Pune. Affordable hourly rentals near Hinjawadi, Koregaon Park, and more from trusted local partners.",
    keywords: [
      "Pune self drive cars",
      "Pune bike rental",
      "rent a car in Pune",
      "scooty rental Pune",
      "vehicle rental Pune",
      "hourly car rental Pune",
      "self drive in Pune",
    ],
  },
  hero: {
    title: "Ride Through Pune with Ease",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Pune. Book by the hour or day from trusted local partners.",
    image: "/images/cities/pune.webp",
  },
  stats: [
    { value: "200+", label: "Vehicles" },
    { value: "60+", label: "Locations" },
    { value: "4.8★", label: "Average Rating" },
    { value: "30K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "hinjawadi",
      name: "Hinjawadi",
      description: "Rent cars, bikes, and scooters in Hinjawadi, Pune's IT and business hub.",
    },
    {
      slug: "koregaon-park",
      name: "Koregaon Park",
      description: "Self drive vehicles available near Koregaon Park, Pune's upscale neighbourhood.",
    },
    {
      slug: "shivaji-nagar",
      name: "Shivaji Nagar",
      description: "Book rental vehicles near Shivaji Nagar, the historic heart of Pune.",
    },
    {
      slug: "kharadi",
      name: "Kharadi",
      description: "Rent cars and bikes in Kharadi, Pune's growing IT and residential zone.",
    },
    {
      slug: "baner",
      name: "Baner",
      description: "Find self drive cars and scooters in Baner, one of Pune's most popular localities.",
    },
  ],
  nearbyAreas: ["Hinjawadi", "Koregaon Park", "Kharadi", "Baner", "Viman Nagar", "Wakad", "Aundh"],
  faqs: [
    { question: "Can I rent a self drive car in Pune by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly self drive rentals across Pune. Pay only for what you use." },
    { question: "Do I need a deposit to rent a vehicle in Pune?", answer: "No deposit needed. Rent vehicles in Pune without any security deposit through Swarikaro." },
    { question: "Is bike rental available near Hinjawadi?", answer: "Yes. Bikes and scooters are available near Hinjawadi, Koregaon Park, and across Pune." },
    { question: "Can I book a vehicle in Pune in advance?", answer: "Absolutely. Reserve your vehicle up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Pune inspected before rental?", answer: "Yes, every vehicle is thoroughly inspected and verified before each rental for complete safety." },
  ],
  testimonials: [
    { name: "Sagar M.", location: "Pune", text: "Rented a self drive car near Hinjawadi for a trip to Lonavala. Excellent service and well-maintained car.", rating: 5 },
    { name: "Ankita R.", location: "Pune", text: "Scooty rental in Koregaon Park was so convenient for short rides around the city. Loved it!", rating: 5 },
    { name: "Siddharth P.", location: "Pune", text: "Booked a bike near Shivaji Nagar for daily commute. Affordable rates and no deposit — perfect.", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Pune?",
    description: "Find and book the perfect vehicle near you in Pune. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Pune Vehicles",
    buttonLink: "/pune",
  },
};

export default pune;
