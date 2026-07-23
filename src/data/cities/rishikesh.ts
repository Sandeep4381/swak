import type { CityData } from "@/types/city";

const rishikesh: CityData = {
  slug: "rishikesh",
  name: "Rishikesh",
  seo: {
    title: "Self Drive Cars & Bike Rental in Rishikesh | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Rishikesh. Affordable hourly rentals near Laxman Jhula, Triveni Ghat, and more from trusted local partners.",
    keywords: [
      "Rishikesh self drive cars",
      "Rishikesh bike rental",
      "rent a car Rishikesh",
      "scooty rental Rishikesh",
      "vehicle rental Rishikesh",
      "hourly car rental Rishikesh",
      "self drive in Rishikesh",
    ],
  },
  hero: {
    title: "Ride to the Yoga Capital",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Rishikesh. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/rishikesh.webp",
  },
  stats: [
    { value: "120+", label: "Vehicles" },
    { value: "35+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "20K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "laxman-jhula",
      name: "Laxman Jhula",
      description: "Rent cars, bikes, and scooters near Laxman Jhula, Rishikesh's iconic suspension bridge.",
    },
    {
      slug: "triveni-ghat",
      name: "Triveni Ghat",
      description: "Self drive vehicles available near Triveni Ghat, the sacred bathing ghat of Rishikesh.",
    },
    {
      slug: "ram-jhula",
      name: "Ram Jhula",
      description: "Book rental vehicles near Ram Jhula, surrounded by ashrams and temples.",
    },
    {
      slug: "rishikesh-bus-stand",
      name: "Rishikesh Bus Stand",
      description: "Rent cars and bikes near Rishikesh Bus Stand for easy travel connections.",
    },
    {
      slug: "shivpuri",
      name: "Shivpuri",
      description: "Find self drive cars and bikes in Shivpuri, famous for river rafting and camping.",
    },
  ],
  nearbyAreas: ["Laxman Jhula", "Ram Jhula", "Shivpuri", "Tapovan", "Muni Ki Reti", "Raiwala", "Neelkanth Road"],
  faqs: [
    { question: "Can I rent a self drive car in Rishikesh by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Rishikesh. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Rishikesh?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Laxman Jhula?", answer: "Yes. Bikes and scooters are available near Laxman Jhula, Triveni Ghat, and across Rishikesh." },
    { question: "Can I book a vehicle in Rishikesh in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Rishikesh inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Priya M.", location: "Rishikesh", text: "Rented a self drive car near Laxman Jhula for exploring the ashrams. Smooth and affordable.", rating: 5 },
    { name: "Rahul V.", location: "Rishikesh", text: "Bike rental in Rishikesh was perfect for reaching the nearby waterfalls. Great experience!", rating: 5 },
    { name: "Sanya K.", location: "Rishikesh", text: "Booked a scooty near Triveni Ghat for local sightseeing. Hassle-free and fun!", rating: 4 },
  ],
  cta: {
    title: "Ready to Ride in Rishikesh?",
    description: "Find and book the perfect vehicle near you in Rishikesh. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Rishikesh Vehicles",
    buttonLink: "/rishikesh",
  },
};

export default rishikesh;
