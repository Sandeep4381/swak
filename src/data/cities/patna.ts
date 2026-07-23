import type { CityData } from "@/types/city";

const patna: CityData = {
  slug: "patna",
  name: "Patna",
  seo: {
    title: "Self Drive Cars & Bike Rental in Patna | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Patna. Affordable hourly rentals near Gandhi Maidan, Patna Junction, and more from trusted local partners.",
    keywords: [
      "Patna self drive cars",
      "Patna bike rental",
      "rent a car Patna",
      "scooty rental Patna",
      "vehicle rental Patna",
      "hourly car rental Patna",
      "self drive in Patna",
    ],
  },
  hero: {
    title: "Explore Patna at Your Pace",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Patna. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/patna.webp",
  },
  stats: [
    { value: "150+", label: "Vehicles" },
    { value: "40+", label: "Locations" },
    { value: "4.6★", label: "Average Rating" },
    { value: "15K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "gandhi-maidan",
      name: "Gandhi Maidan",
      description: "Rent cars, bikes, and scooters near Gandhi Maidan, the historic heart of Patna.",
    },
    {
      slug: "patna-junction",
      name: "Patna Junction",
      description: "Self drive vehicles available near Patna Junction for convenient travel connections.",
    },
    {
      slug: "boring-road",
      name: "Boring Road",
      description: "Book rental vehicles near Boring Road, one of Patna's prime commercial areas.",
    },
    {
      slug: "fraser-road",
      name: "Fraser Road",
      description: "Rent cars and bikes near Fraser Road, Patna's bustling business district.",
    },
    {
      slug: "kankarbagh",
      name: "Kankarbagh",
      description: "Find self drive cars and scooters in Kankarbagh, a major residential locality.",
    },
  ],
  nearbyAreas: ["Boring Road", "Fraser Road", "Kankarbagh", "Rajendra Nagar", "Danapur", "Phulwarisharif", "Patna City"],
  faqs: [
    { question: "Can I rent a self drive car in Patna by the hour?", answer: "Yes. Swarikaro offers flexible hourly, daily, and weekly rentals across Patna. Pay only for the time you use." },
    { question: "Do I need a deposit to rent a vehicle in Patna?", answer: "No. Swarikaro does not require any security deposit. Rent without any upfront block." },
    { question: "Is bike rental available near Gandhi Maidan?", answer: "Yes. Bikes and scooters are available near Gandhi Maidan, Patna Junction, and across Patna." },
    { question: "Can I book a vehicle in Patna in advance?", answer: "Absolutely. Book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Patna inspected before rental?", answer: "Yes, every vehicle is verified and inspected before each rental for safety and reliability." },
  ],
  testimonials: [
    { name: "Amit K.", location: "Patna", text: "Rented a self drive car near Gandhi Maidan for a family trip. Smooth booking and well-maintained vehicle.", rating: 5 },
    { name: "Priya S.", location: "Patna", text: "Scooty rental near Patna Junction made my daily commute so easy. Affordable and convenient!", rating: 5 },
    { name: "Vikram J.", location: "Patna", text: "Booked a bike near Boring Road for city exploration. Great service and no hidden charges.", rating: 4 },
  ],
  cta: {
    title: "Ready to Drive in Patna?",
    description: "Find and book the perfect vehicle near you in Patna. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Patna Vehicles",
    buttonLink: "/patna",
  },
};

export default patna;
