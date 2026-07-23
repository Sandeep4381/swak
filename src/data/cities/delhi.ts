import type { CityData } from "@/types/city";

const delhi: CityData = {
  slug: "delhi",
  name: "Delhi",
  seo: {
    title: "Self Drive Cars & Bike Rental in Delhi | Swarikaro",
    description:
      "Book self drive cars, bikes, and scooters in Delhi NCR. Affordable hourly rentals near India Gate, Connaught Place, and more from trusted local partners.",
    keywords: [
      "Delhi self drive cars",
      "Delhi bike rental",
      "rent a car Delhi",
      "scooty rental Delhi",
      "vehicle rental Delhi NCR",
      "self drive in Delhi",
      "hourly car rental Delhi",
    ],
  },
  hero: {
    title: "Drive Delhi Your Way",
    subtitle:
      "Rent self drive cars, bikes, or scooters across Delhi NCR. Book by the hour or day from trusted local vehicle partners.",
    image: "/images/cities/delhi.webp",
  },
  stats: [
    { value: "300+", label: "Vehicles" },
    { value: "80+", label: "Locations" },
    { value: "4.7★", label: "Average Rating" },
    { value: "50K+", label: "Happy Riders" },
  ],
  locations: [
    {
      slug: "india-gate",
      name: "India Gate",
      description: "Rent bikes, cars, and scooters near India Gate, Delhi's iconic war memorial.",
    },
    {
      slug: "connaught-place",
      name: "Connaught Place",
      description: "Self drive vehicles available near Connaught Place, the heart of New Delhi.",
    },
    {
      slug: "chandni-chowk",
      name: "Chandni Chowk",
      description: "Find rental bikes and scooters near Chandni Chowk for exploring Old Delhi.",
    },
    {
      slug: "hauz-khas",
      name: "Hauz Khas",
      description: "Book self drive cars near Hauz Khas, Delhi's trendy urban village.",
    },
    {
      slug: "dwarka",
      name: "Dwarka",
      description: "Rent vehicles in Dwarka, one of Delhi's largest residential and commercial sub-cities.",
    },
  ],
  nearbyAreas: ["Connaught Place", "Karol Bagh", "Lajpat Nagar", "Rohini", "Saket", "Vasant Kunj", "Janakpuri"],
  faqs: [
    { question: "Can I rent a self drive car in Delhi by the hour?", answer: "Yes. Swarikaro offers flexible hourly, daily, and weekly rentals across Delhi NCR. Pay only for what you use." },
    { question: "Do I need a deposit to rent a vehicle in Delhi?", answer: "No deposit needed. Swarikaro believes in zero-deposit rentals so you can drive without any upfront block." },
    { question: "Is bike rental available near India Gate?", answer: "Yes. Bikes and scooters are available near India Gate, Connaught Place, and all major Delhi landmarks." },
    { question: "Can I book a vehicle in Delhi in advance?", answer: "Absolutely. Plan ahead and book up to 7 days in advance through the Swarikaro platform." },
    { question: "Are vehicles in Delhi inspected before each rental?", answer: "Yes, every vehicle is thoroughly inspected and verified before every rental to ensure top safety." },
  ],
  testimonials: [
    { name: "Arun P.", location: "Delhi", text: "Rented a self drive car near Connaught Place for a weekend trip. Hassle-free booking and great condition.", rating: 5 },
    { name: "Neha G.", location: "Delhi", text: "Scooty rental in Delhi was perfect for navigating through traffic. Affordable and easy.", rating: 5 },
    { name: "Vikram R.", location: "Delhi", text: "Booked a bike near India Gate for a day ride. Excellent service and no hidden charges.", rating: 4 },
  ],
  cta: {
    title: "Ready to Drive in Delhi?",
    description: "Find and book the perfect vehicle near you in Delhi NCR. No deposit, flexible hours, trusted partners.",
    buttonText: "Explore Delhi Vehicles",
    buttonLink: "/delhi",
  },
};

export default delhi;
