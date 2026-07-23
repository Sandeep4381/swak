import type { CityData } from "@/types/city";

const darjeeling: CityData = {
  slug: "darjeeling",
  name: "Darjeeling",
  seo: {
    title: "Self Drive Cars & Bike Rental in Darjeeling | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Darjeeling. Affordable hourly rentals near Mall Road, Chowrasta, and more from trusted local partners.",
    keywords: [
      "Darjeeling self drive cars",
      "Darjeeling bike rental",
      "rent a car Darjeeling",
      "scooty rental Darjeeling",
      "vehicle rental Darjeeling",
      "hourly car rental Darjeeling",
      "self drive in Darjeeling",
    ],
  },
  hero: {
    title: "Explore the Queen of Hills",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Darjeeling. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/darjeeling.webp",
  },
  stats: [
    { value: "80+", label: "Vehicles" },
    { value: "25+", label: "Locations" },
    { value: "4.8★", label: "Average Rating" },
    { value: "10K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "mall-road",
      name: "Mall Road",
      description: "Rent cars, bikes, and scooters near Mall Road, the scenic heart of Darjeeling.",
    },
    {
      slug: "chowrasta",
      name: "Chowrasta",
      description: "Self drive vehicles available near Chowrasta, Darjeeling's iconic meeting point.",
    },
    {
      slug: "darjeeling-station",
      name: "Darjeeling Station",
      description: "Book rental vehicles near Darjeeling Railway Station for easy travel connections.",
    },
    {
      slug: "tiger-hill",
      name: "Tiger Hill",
      description: "Rent vehicles near Tiger Hill, famous for its breathtaking sunrise views of Kanchenjunga.",
    },
    {
      slug: "ghoom",
      name: "Ghoom",
      description: "Find self drive cars and bikes in Ghoom, known for its monastery and scenic surroundings.",
    },
  ],
  nearbyAreas: ["Mall Road", "Chowrasta", "Ghoom", "Jalapahar", "Lebong", "Singamari", "Toong Soong"],
  faqs: [
    { question: "Can I rent a self drive car in Darjeeling by the hour?", answer: "Yes. Swarikaro offers hourly, daily, and weekly rentals across Darjeeling. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Darjeeling?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Mall Road?", answer: "Yes. Bikes and scooters are available near Mall Road, Chowrasta, and across Darjeeling." },
    { question: "Can I book a vehicle in Darjeeling in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Darjeeling inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Rohan G.", location: "Darjeeling", text: "Rented a self drive car near Mall Road for a family trip. Smooth booking and well-maintained vehicle.", rating: 5 },
    { name: "Ananya S.", location: "Darjeeling", text: "Scooty rental near Chowrasta was perfect for exploring the hill town. Great experience!", rating: 5 },
    { name: "Tenzin D.", location: "Darjeeling", text: "Booked a bike near Ghoom for a ride through the hills. Affordable and hassle-free.", rating: 4 },
  ],
  cta: {
    title: "Ready to Explore Darjeeling?",
    description: "Find and book the perfect vehicle near you in Darjeeling. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Darjeeling Vehicles",
    buttonLink: "/darjeeling",
  },
};

export default darjeeling;
