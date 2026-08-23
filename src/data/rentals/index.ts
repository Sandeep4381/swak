import {
  Armchair,
  BatteryCharging,
  CalendarClock,
  Fuel,
  Headphones,
  KeyRound,
  MapPin,
  Mountain,
  ShieldCheck,
  Tag,
  Users,
  Wallet,
} from "lucide-react";
import type {
  CatalogueVehicle,
  RentalConfig,
  RentalType,
} from "@/types/rental";

/**
 * Base URL for rental images (ImageKit).
 * Uses the full CDN root (not IMAGE_URL, which points to /Blogs) so vehicle
 * and poster assets under /Swarikar_website resolve correctly.
 */
const IMAGE_BASE_URL = "https://ik.imagekit.io/swarikaro4/Swarikar_website";

/* ============================================================
   SHARED SECTIONS
============================================================ */

export const RENTAL_SHARED = {
  destinations: [
    {
      city: "Rishikesh",
      slug: "rishikesh",
      state: "Uttarakhand",
      description:
        "The yoga capital of India, set on the banks of the Ganges with adventure sports and serene ashrams.",
      locations: [
        { slug: "tapovan", name: "Tapovan" },
        { slug: "laxman-jhula", name: "Laxman Jhula" },
        { slug: "ram-jhula", name: "Ram Jhula" },
        { slug: "neelkanth", name: "Neelkanth" },
      ],
    },
    {
      city: "Manali",
      slug: "manali",
      state: "Himachal Pradesh",
      description:
        "A mountain paradise in the Kullu valley — gateway to Solang Valley and the atal tunnel.",
      locations: [
        { slug: "mall-road", name: "Mall Road" },
        { slug: "old-manali", name: "Old Manali" },
        { slug: "solang-valley", name: "Solang Valley" },
        { slug: "vashisht", name: "Vashisht" },
      ],
    },
    {
      city: "Shimla",
      slug: "shimla",
      state: "Himachal Pradesh",
      description:
        "The Queen of Hills — colonial charm, mall road and panoramic mountain views.",
      locations: [{ slug: "mall-road", name: "Mall Road" }],
    },
    {
      city: "Dehradun",
      slug: "dehradun",
      state: "Uttarakhand",
      description:
        "Gateway to the hills — a modern city surrounded by the shivalik range and green valleys.",
      locations: [
        { slug: "rajpur-road", name: "Rajpur Road" },
        { slug: "mussoorie-road", name: "Mussoorie Road" },
        { slug: "prem-nagar", name: "Prem Nagar" },
      ],
    },
    {
      city: "Haridwar",
      slug: "haridwar",
      state: "Uttarakhand",
      description:
        "The holy city where the ganges enters the plains, famous for har ki pauri and evening aarti.",
      locations: [
        { slug: "har-ki-pauri", name: "Har Ki Pauri" },
        { slug: "bara-bazaar", name: "Bara Bazaar" },
        { slug: "jwalapur", name: "Jwalapur" },
      ],
    },
    {
      city: "Mussoorie",
      slug: "mussoorie",
      state: "Uttarakhand",
      description:
        "The queen of the hills — misty mornings, kempty falls and the mall road ridge.",
      locations: [
        { slug: "mall-road", name: "Mall Road" },
        { slug: "kempty-falls", name: "Kempty Falls" },
      ],
    },
    {
      city: "Dharamshala",
      slug: "dharamshala",
      state: "Himachal Pradesh",
      description:
        "Home of the dalai lama — tibetan culture, monasteries and the dhauladhar range.",
      locations: [
        { slug: "mcleod-ganj", name: "McLeod Ganj" },
        { slug: "bhagsu", name: "Bhagsu" },
      ],
    },
    {
      city: "Nainital",
      slug: "nainital",
      state: "Uttarakhand",
      description:
        "A lake town in the kumaon hills — naini lake, tall towers and cool mountain air.",
      locations: [
        { slug: "mall-road", name: "Mall Road" },
        { slug: "bhimtal", name: "Bhimtal" },
        { slug: "naukuchiatal", name: "Naukuchiatal" },
      ],
    },
  ],
  availableIn: [
    "Delhi",
    "Gurugram",
    "Noida",
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Mussoorie",
    "Manali",
    "Shimla",
    "Dharamshala",
    "Chandigarh",
    "Jaipur",
    "Agra",
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Indore",
    "Bhopal",
    "Nagpur",
    "Pune",
  ],
};

/* ============================================================
   VEHICLE CATALOGUE — "Choose Your Vehicle"
   Cross-category showcase shared across car / bike / scooter pages.
   `image` values are swappable with real vehicle photography.
============================================================ */

export const VEHICLE_CATALOGUE: CatalogueVehicle[] = [
  // Cars
  {
    name: "Toyota Innova Crysta",
    category: "Car",
    type: "MUV",
    image: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
    imageAlt: "Toyota Innova Crysta MUV for family trips",
    description: "Comfortable for family trips",
    specs: ["7 Seats", "Spacious Cabin"],
    transmission: "Manual / Automatic",
    href: "/car-rental",
  },
  {
    name: "Toyota Fortuner",
    category: "Car",
    type: "SUV",
    image: `${IMAGE_BASE_URL}/home/hero_3.jpg?updatedAt=1785009827548`,
    imageAlt: "Toyota Fortuner SUV for premium travel",
    description: "Premium travel",
    specs: ["7 Seats", "4WD"],
    transmission: "Automatic",
    href: "/car-rental",
  },
  {
    name: "Hyundai Creta",
    category: "Car",
    type: "SUV",
    image: `${IMAGE_BASE_URL}/home/hero_2.jpg?updatedAt=1785009827548`,
    imageAlt: "Hyundai Creta SUV rental",
    description: "Built for city & highway drives",
    specs: ["5 Seats", "Turbo Petrol"],
    transmission: "Manual / Automatic",
    href: "/car-rental",
  },
  {
    name: "Honda City",
    category: "Car",
    type: "Sedan",
    image: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
    imageAlt: "Honda City sedan rental",
    description: "Smooth, comfortable long journeys",
    specs: ["5 Seats", "Big Boot"],
    transmission: "Manual",
    href: "/car-rental",
  },
  // Bikes
  {
    name: "Royal Enfield Classic 350",
    category: "Bike",
    type: "350cc",
    image: `${IMAGE_BASE_URL}/home/hero_2.jpg?updatedAt=1785009827548`,
    imageAlt: "Royal Enfield Classic 350 for long rides",
    description: "Perfect for long rides",
    specs: ["350cc", "Single Cylinder"],
    transmission: "Manual",
    href: "/bike-rental",
  },
  {
    name: "KTM Duke 200",
    category: "Bike",
    type: "200cc",
    image: `${IMAGE_BASE_URL}/home/hero_3.jpg?updatedAt=1785009827548`,
    imageAlt: "KTM Duke 200 adventure bike",
    description: "Adventure & city rides",
    specs: ["200cc", "BS6"],
    transmission: "Manual",
    href: "/bike-rental",
  },
  // Scooties
  {
    name: "Honda Activa",
    category: "Scooty",
    type: "110cc",
    image: `${IMAGE_BASE_URL}/home/hero_3.jpg?updatedAt=1785009827548`,
    imageAlt: "Honda Activa scooter for city travel",
    description: "Perfect for city travel",
    specs: ["110cc", "21L Boot"],
    transmission: "Automatic",
    href: "/scooter-rental",
  },
  {
    name: "Yamaha Fascino",
    category: "Scooty",
    type: "125cc",
    image: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
    imageAlt: "Yamaha Fascino scooter for everyday rides",
    description: "Comfortable everyday ride",
    specs: ["125cc", "Blue Core"],
    transmission: "Automatic",
    href: "/scooter-rental",
  },
];

/* ============================================================
   CAR RENTAL
============================================================ */

export const CAR_RENTAL_CONFIG: RentalConfig = {
  type: "car-rental",
  label: "Car Rental",
  labelShort: "Cars",
  singular: "car",
  heroImage: `${IMAGE_BASE_URL}/rental/car-rental/car-rental-hero.webp`,
  heroImageAlt:
    "Self drive car rental in India – Swarikaro car rental services",
  heroMobileImage: `${IMAGE_BASE_URL}/rental/car-rental/car-rental-hero-mob.webp`,
  heroMob: `${IMAGE_BASE_URL}/rental/car-rental/car-rental-hero-mob.webp`,
  seo: {
    title: "Car Rental in India | Self Drive & Chauffeur Cars | Swarikaro",
    description:
      "Book self drive, chauffeur and outstation car rentals in India with Swarikaro. Compare prices, choose your car and rent a car in Rishikesh, Manali, Shimla, Dehradun and more.",
    keywords: [
      "car rental",
      "self drive car rental",
      "chauffeur car rental",
      "outstation car rental",
      "rent a car in India",
      "car rental Rishikesh",
      "car rental Manali",
      "car rental Shimla",
      "car rental Dehradun",
      "car rental Haridwar",
      "Swarikaro car rental",
    ],
    h1: "Rent a Car, Your Way",
    h1Accent: "Your Way",
    badge: "CAR RENTAL",
    heroSubtitle:
      "Self drive or with a chauffeur – pick the car you love and explore India at your own pace with Swarikaro.",
  },
  stats: [
    { value: "50+", label: "Cities" },
    { value: "1.2L+", label: "Cars Listed" },
    { value: "4.8★", label: "Average Rating" },
    { value: "2M+", label: "Happy Riders" },
  ],
  services: [
    {
      slug: "self-drive",
      name: "Self Drive",
      description:
        "Take the wheel yourself. Pick up your car, drive freely and drop it back when you're done.",
      icon: KeyRound,
      features: [
        "Zero paperwork hassles",
        "Flexible hourly & daily plans",
        "Verified, well-maintained cars",
      ],
      longDescription:
        "Rent a self drive car and explore at your own pace. Choose from hatchbacks, sedans and SUVs, unlock the car at your pickup point and drive without a chauffeur. Ideal for daily commutes, weekend getaways and spontaneous road trips.",
      intro:
        "Looking for a self drive car rental? Swarikaro helps you discover self-drive cars from rental partners for exploring the city and nearby destinations at your own pace.",
      seoContent: [
        "A self-drive car gives you the freedom to plan your own sightseeing schedule, stop at viewpoints and cafés along the way, and travel beyond the main town according to your itinerary and applicable rental-partner policies.",
        "For confident drivers, self-drive is a comfortable way to explore local attractions and surrounding valleys — especially for families, groups and travellers who prefer privacy and flexibility over a chauffeur-driven journey.",
      ],
      steps: [
        "Pick your car and city",
        "Choose date, time and plan",
        "Verify your driving licence",
        "Unlock & drive, then return",
      ],
      highlights: [
        "Freedom to explore on your own schedule",
        "Privacy & comfort without a chauffeur",
        "Wide choice of hatchbacks, sedans, SUVs & MUVs",
        "24x7 roadside assistance",
      ],
      documents: [
        "Valid driving licence",
        "Government-issued photo ID",
        "Refundable security deposit",
        "Additional documents if required by the partner",
      ],
      compare: {
        vs: "Chauffeur Drive",
        rows: [
          { self: "Drive yourself", other: "Professional driver" },
          { self: "More privacy & independence", other: "Sit back and relax" },
          {
            self: "Flexible stops, you decide the route",
            other: "Driver handles the route",
          },
          {
            self: "Best for independent trips",
            other: "Best for families & groups",
          },
          {
            self: "You manage the driving",
            other: "Driver manages the journey",
          },
        ],
        otherHref: "/chauffeur-drive",
      },
    },
    {
      slug: "chauffeur-drive",
      name: "Chauffeur Drive",
      description:
        "Sit back and relax while an experienced, verified driver handles the journey.",
      icon: Armchair,
      features: [
        "Professional local drivers",
        "Doorstep pickup",
        "Ideal for long trips",
      ],
      longDescription:
        "Prefer to relax? Book a car with a trained chauffeur who knows the local routes. Perfect for outstation trips, airport transfers, weddings and business travel — you arrive comfortable while the driver handles the road.",
      steps: [
        "Book a chauffeured car",
        "We assign a verified driver",
        "Driver arrives at your pickup",
        "Relax and enjoy the journey",
      ],
      highlights: [
        "Experienced, background-checked drivers",
        "Doorstep and airport pickup",
        "Best for groups & special occasions",
        "Fare includes driver allowance",
      ],
    },
    {
      slug: "outstation",
      name: "Outstation",
      description:
        "One-way or round-trip intercity travel with transparent per-km pricing.",
      icon: MapPin,
      features: [
        "One-way drops available",
        "Transparent per-km fares",
        "Round-the-clock support",
      ],
      longDescription:
        "Travel between cities with ease. Book a one-way or round-trip outstation car for intercity journeys with clear per-kilometre pricing, no surge and no surprises. Perfect for temple tours, weddings, business trips and long weekends.",
      steps: [
        "Enter pickup, drop and distance",
        "Get a transparent fare estimate",
        "Confirm your car and driver",
        "Travel & pay at the end",
      ],
      highlights: [
        "One-way drops across India",
        "Toll, parking & tax guidance",
        "Ideal for 100-1000 km trips",
        "Dedicated trip support",
      ],
    },
  ],
  popularVehicles: [
    {
      name: "Maruti Swift",
      category: "Hatchback",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Maruti Swift hatchback self drive rental",
      seats: "5 Seats",
      luggage: "2 Bags",
      mileage: "21 km/l",
      transmission: "Manual",
      badge: "Most Popular",
    },
    {
      name: "Hyundai Creta",
      category: "SUV",
      image: `${IMAGE_BASE_URL}/home/hero_1.jpg`,
      imageAlt: "Hyundai Creta SUV rental in India",
      seats: "5 Seats",
      luggage: "4 Bags",
      mileage: "17 km/l",
      transmission: "Manual",
      badge: "Family Pick",
    },
    {
      name: "Honda City",
      category: "Sedan",
      image: `${IMAGE_BASE_URL}/home/hero_3.jpg`,
      imageAlt: "Honda City sedan self drive rental",
      seats: "5 Seats",
      luggage: "3 Bags",
      mileage: "18 km/l",
      transmission: "Manual",
    },
    {
      name: "Toyota Innova Crysta",
      category: "MPV",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Toyota Innova Crysta MPV rental for group travel",
      seats: "7 Seats",
      luggage: "5 Bags",
      mileage: "14 km/l",
      transmission: "Manual",
      badge: "Group Choice",
    },
  ],
  whyChoose: [
    {
      title: "Verified Cars",
      description:
        "Every car is listed by verified owners and rental partners.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. What you see is what you pay.",
      icon: Tag,
    },
    {
      title: "Flexible Plans",
      description: "Rent by the hour, day, week or month – your call.",
      icon: CalendarClock,
    },
    {
      title: "24x7 Support",
      description: "Real humans on call, whenever you need help.",
      icon: Headphones,
    },
  ],
  popularDestinations: RENTAL_SHARED.destinations,
  faqs: [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You need a valid driving licence (with at least 1 year of driving experience in most cases), a government-issued photo ID (Aadhaar, Passport or Voter ID) and a security deposit as per the partner's policy.",
    },
    {
      question: "Can I rent a car for a single day?",
      answer:
        "Yes. Most partners offer daily rentals starting from 24 hours. Hourly plans are also available in select cities.",
    },
    {
      question: "What is the fuel policy for self drive cars?",
      answer:
        "Fuel policies vary by partner. Most self drive cars are delivered with a full tank and need to be returned with a full tank, or you pay for the fuel used.",
    },
    {
      question: "Is there a security deposit for renting a car?",
      answer:
        "Yes, a refundable security deposit is collected before the trip. It is refunded after the car is returned in good condition within the partner's stated time.",
    },
    {
      question: "Do you provide cars with a driver?",
      answer:
        "Yes. You can choose between self drive and chauffeur drive cars depending on the partner and city.",
    },
    {
      question: "Can I take the rental car to another city?",
      answer:
        "Yes, outstation trips are supported. Additional per-kilometre charges and state permit fees may apply depending on the destination.",
    },
  ],
  availableIn: RENTAL_SHARED.availableIn,
};

/* ============================================================
   BIKE RENTAL
============================================================ */

export const BIKE_RENTAL_CONFIG: RentalConfig = {
  type: "bike-rental",
  label: "Bike Rental",
  labelShort: "Bikes",
  singular: "bike",
  heroImage: `${IMAGE_BASE_URL}/home/hero_2.jpg?updatedAt=1785009827548`,
  heroImageAlt:
    "Self drive bike rental in India – Swarikaro bike rental services",
  heroMobileImage: `${IMAGE_BASE_URL}/home/hero_2.jpg?updatedAt=1785009827548`,
  heroMob: `${IMAGE_BASE_URL}/home/hero_2.jpg?updatedAt=1785009827548`,
  seo: {
    title: "Bike Rental in India | Rent a Bike for Self Drive | Swarikaro",
    description:
      "Rent a bike for your next road trip with Swarikaro. Royal Enfield, Himalayan and more – self drive bike rental in Manali, Rishikesh, Shimla, Dehradun and across India.",
    keywords: [
      "bike rental",
      "rent a bike",
      "self drive bike rental",
      "Royal Enfield rental",
      "bike rental Manali",
      "bike rental Rishikesh",
      "bike rental Shimla",
      "bike rental Dehradun",
      "bike rental Haridwar",
      "Swarikaro bike rental",
    ],
    h1: "Ride Your Way",
    h1Accent: "Your Way",
    badge: "BIKE RENTAL",
    heroSubtitle:
      "From Royal Enfields to Himalayan adventure bikes – rent a bike and hit the hills with Swarikaro.",
  },
  stats: [
    { value: "50+", label: "Cities" },
    { value: "40K+", label: "Bikes Listed" },
    { value: "4.8★", label: "Average Rating" },
    { value: "2M+", label: "Happy Riders" },
  ],
  services: [
    {
      slug: "self-drive",
      name: "Self Drive",
      description:
        "Grab the keys, ride out and explore at your own pace. Simple hourly and daily plans.",
      icon: KeyRound,
      features: [
        "Flexible ride plans",
        "Verified, serviced bikes",
        "Quick pickup",
      ],
      longDescription:
        "Rent a self drive bike and ride free. Pick a commuter, cruiser or adventure bike, get a serviced motorcycle with a helmet, and explore city streets or mountain highways on your own schedule.",
      steps: [
        "Choose your bike & city",
        "Pick ride dates and plan",
        "Verify your licence",
        "Ride & return with fuel",
      ],
      highlights: [
        "Helmet & ride gear included",
        "Hourly to monthly plans",
        "Serviced, road-trip ready bikes",
        "Inter-state rides allowed",
      ],
    },
    {
      slug: "mountain-rides",
      name: "Mountain Rides",
      description:
        "Specially prepared bikes and gear for high-altitude rides in the Himalayas.",
      icon: Mountain,
      features: [
        "High-altitude ready bikes",
        "Winter gear available",
        "Route guidance",
      ],
      longDescription:
        "Gear up for the Himalayas. We prepare adventure and cruiser bikes for high-altitude riding — Royal Enfields, Himalayan 450s — with winter gear, toolkit and route guidance for trips like Manali–Leh, Spiti and beyond.",
      steps: [
        "Pick an adventure-ready bike",
        "Book your high-altitude trip",
        "Collect winter gear & maps",
        "Ride with round-the-clock support",
      ],
      highlights: [
        "High-altitude tuned bikes",
        "Winter riding gear included",
        "Route & permit guidance",
        "Backup support on the trail",
      ],
    },
    {
      slug: "group-rides",
      name: "Group Rides",
      description:
        "Planning a ride with friends? Get multiple bikes on one booking with group discounts.",
      icon: Users,
      features: [
        "Discounted group rates",
        "Flexible pickup timing",
        "Dedicated support",
      ],
      longDescription:
        "Ride together, save together. Book multiple bikes under a single group booking for weekend rides, biker meetups and road trips, with discounted rates and a dedicated coordinator who keeps everyone rolling.",
      steps: [
        "Share your group size & route",
        "Get a group quote",
        "Confirm all bikes together",
        "Roll out with one coordinator",
      ],
      highlights: [
        "Bulk booking discounts",
        "One booking, many bikes",
        "Synchronised pickup",
        "Dedicated ride coordinator",
      ],
    },
  ],
  popularVehicles: [
    {
      name: "Royal Enfield Classic 350",
      category: "Cruiser",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Royal Enfield Classic 350 bike rental",
      seats: "2 Seats",
      mileage: "35 km/l",
      transmission: "Manual",
      badge: "Most Popular",
    },
    {
      name: "Royal Enfield Himalayan",
      category: "Adventure",
      image: `${IMAGE_BASE_URL}/home/hero_1.jpg`,
      imageAlt: "Royal Enfield Himalayan adventure bike rental",
      seats: "2 Seats",
      mileage: "30 km/l",
      transmission: "Manual",
      badge: "Mountain Ready",
    },
    {
      name: "Honda Activa",
      category: "Commuter",
      image: `${IMAGE_BASE_URL}/home/hero_3.jpg`,
      imageAlt: "Honda Activa scooter rental",
      seats: "2 Seats",
      mileage: "45 km/l",
      transmission: "Automatic",
    },
    {
      name: "Bajaj Pulsar 220",
      category: "Sport",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Bajaj Pulsar 220 sport bike rental",
      seats: "2 Seats",
      mileage: "38 km/l",
      transmission: "Manual",
    },
  ],
  whyChoose: [
    {
      title: "Serviced Bikes",
      description: "Regularly serviced and road-trip ready motorcycles.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Pricing",
      description: "Clear per-day rates with no hidden costs.",
      icon: Tag,
    },
    {
      title: "Ride Gear",
      description: "Helmets and riding essentials included with every booking.",
      icon: Fuel,
    },
    {
      title: "24x7 Support",
      description: "Roadside help and support whenever you ride.",
      icon: Headphones,
    },
  ],
  popularDestinations: RENTAL_SHARED.destinations,
  faqs: [
    {
      question: "Do I need a driving licence to rent a bike?",
      answer:
        "Yes. A valid motorcycle driving licence is mandatory. The name on the licence should match your government-issued photo ID.",
    },
    {
      question: "Can I rent a Royal Enfield for a Leh trip?",
      answer:
        "Yes, adventure and cruiser bikes are available for long rides. We recommend booking at least a week in advance for high-altitude trips.",
    },
    {
      question: "Are helmets included with bike rentals?",
      answer:
        "Yes, a helmet is included with every bike rental. Riding without a helmet is unsafe and may attract challans.",
    },
    {
      question: "What is the mileage and fuel policy for bikes?",
      answer:
        "Bikes are usually delivered with a full tank. Return the bike with the same amount of fuel, or pay for the fuel consumed at prevailing rates.",
    },
    {
      question: "Can I take a rented bike to another state?",
      answer:
        "Yes, inter-state rides are allowed in most cases. A refundable deposit and state permit charges may apply.",
    },
    {
      question: "What happens if my bike breaks down mid-ride?",
      answer:
        "Swarikaro partners provide roadside assistance. Call the support number in your booking for help with towing or repairs.",
    },
  ],
  availableIn: RENTAL_SHARED.availableIn,
};

/* ============================================================
   SCOOTER RENTAL
============================================================ */

export const SCOOTER_RENTAL_CONFIG: RentalConfig = {
  type: "scooter-rental",
  label: "Scooter Rental",
  labelShort: "Scooters",
  singular: "scooter",
  heroImage: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
  heroImageAlt: "Scooter rental in India – Swarikaro scooter rental services",
  heroMobileImage: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
  heroMob: `${IMAGE_BASE_URL}/home/hero_1.jpg?updatedAt=1785009827651`,
  seo: {
    title: "Scooter Rental in India | Rent a Scooty Online | Swarikaro",
    description:
      "Rent a scooter in India at the best prices with Swarikaro. Activa, Jupiter and electric scooters for daily commutes and city trips in Rishikesh, Dehradun, Haridwar and more.",
    keywords: [
      "scooter rental",
      "scooty rental",
      "rent a scooter",
      "Activa rental",
      "electric scooter rental",
      "scooter rental Rishikesh",
      "scooter rental Dehradun",
      "scooter rental Haridwar",
      "scooter rental India",
      "Swarikaro scooter rental",
    ],
    h1: "Zip Through the City",
    h1Accent: "Through the City",
    badge: "SCOOTER RENTAL",
    heroSubtitle:
      "Light, easy and fun – rent a scooter for quick city trips and daily commutes with Swarikaro.",
  },
  stats: [
    { value: "50+", label: "Cities" },
    { value: "30K+", label: "Scooters Listed" },
    { value: "4.8★", label: "Average Rating" },
    { value: "2M+", label: "Happy Riders" },
  ],
  services: [
    {
      slug: "self-drive",
      name: "Self Drive",
      description:
        "Scoot around town on your own schedule with flexible hourly and daily plans.",
      icon: KeyRound,
      features: ["Pay-per-hour options", "Helmet included", "Easy self pickup"],
      longDescription:
        "Rent a scooter for a few hours, a day or a week. Ideal for quick errands, sightseeing and daily commutes — with a helmet included and pickup from a partner near you.",
      steps: [
        "Choose your scooter",
        "Pick hours or days",
        "Verify your licence",
        "Scoot & return",
      ],
      highlights: [
        "Hourly to monthly plans",
        "Helmet included free",
        "Zero fuel stress with e-scooters",
        "Pickup within minutes",
      ],
    },
    {
      slug: "daily-commute",
      name: "Daily Commute",
      description:
        "Weekly and monthly plans for students and professionals who ride daily.",
      icon: CalendarClock,
      features: [
        "Discounted monthly rates",
        "Priority availability",
        "Free servicing",
      ],
      longDescription:
        "Ride to college or office without owning a vehicle. Weekly and monthly scooter plans come with big discounts, priority availability and free servicing, so your commute is simple, predictable and affordable.",
      steps: [
        "Pick a weekly or monthly plan",
        "Choose your scooter",
        "Pay a flat discounted rate",
        "Ride daily & renew anytime",
      ],
      highlights: [
        "Up to 40% off monthly rates",
        "Same scooter, every day",
        "Free servicing included",
        "Pause or cancel anytime",
      ],
    },
    {
      slug: "electric-rides",
      name: "Electric Rides",
      description:
        "Eco-friendly electric scooters with easy charging and zero fuel cost.",
      icon: BatteryCharging,
      features: [
        "Zero fuel cost",
        "Low running charges",
        "Perfect for city trips",
      ],
      longDescription:
        "Go green with electric scooters. Silent, smooth and cheap to run — perfect for city trips, groceries and short commutes. Charging points and swap guidance are provided with every booking.",
      steps: [
        "Book an electric scooter",
        "Collect it fully charged",
        "Ride with zero fuel cost",
        "Charge or swap & return",
      ],
      highlights: [
        "Zero fuel & low running cost",
        "Silent, smooth city rides",
        "Charging guidance included",
        "Best for short trips",
      ],
    },
  ],
  popularVehicles: [
    {
      name: "Honda Activa 6G",
      category: "Petrol",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Honda Activa 6G scooter rental",
      seats: "2 Seats",
      mileage: "45 km/l",
      transmission: "Automatic",
      badge: "Most Popular",
    },
    {
      name: "TVS Jupiter",
      category: "Petrol",
      image: `${IMAGE_BASE_URL}/home/hero_1.jpg`,
      imageAlt: "TVS Jupiter scooter rental",
      seats: "2 Seats",
      mileage: "48 km/l",
      transmission: "Automatic",
    },
    {
      name: "Ola S1 Pro",
      category: "Electric",
      image: `${IMAGE_BASE_URL}/home/hero_3.jpg`,
      imageAlt: "Ola S1 Pro electric scooter rental",
      seats: "2 Seats",
      mileage: "150 km/charge",
      transmission: "Automatic",
      badge: "Eco Pick",
    },
    {
      name: "Suzuki Access 125",
      category: "Premium",
      image: `${IMAGE_BASE_URL}/home/hero_2.jpg`,
      imageAlt: "Suzuki Access 125 premium scooter rental",
      seats: "2 Seats",
      mileage: "46 km/l",
      transmission: "Automatic",
    },
  ],
  whyChoose: [
    {
      title: "Everyday Affordable",
      description: "The cheapest way to move around town, all day every day.",
      icon: Wallet,
    },
    {
      title: "Helmet Included",
      description: "Safety gear comes with every scooter, free of cost.",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Plans",
      description: "Hourly, daily, weekly and monthly plans to suit your ride.",
      icon: CalendarClock,
    },
    {
      title: "Easy Pickup",
      description: "Pick up your scooter from a partner near you in minutes.",
      icon: MapPin,
    },
  ],
  popularDestinations: RENTAL_SHARED.destinations,
  faqs: [
    {
      question: "Do I need a licence to rent a scooter?",
      answer:
        "Yes, a valid driving licence (two-wheeler) is required. In most cities, an electric scooter below a certain speed limit can be driven with a licence endorsed for motor vehicles.",
    },
    {
      question: "Can I rent a scooter for a few hours?",
      answer:
        "Yes. Hourly rentals are available in most cities, making scooters perfect for quick errands and short city trips.",
    },
    {
      question: "Are electric scooters available for rent?",
      answer:
        "Yes, electric scooters are available in select cities. They come with a charged battery and low running costs.",
    },
    {
      question: "Is fuel included in the rental price?",
      answer:
        "For petrol scooters, fuel is not included. The scooter is delivered with a full tank and should be returned with a full tank.",
    },
    {
      question: "Can I take a scooter for an outstation trip?",
      answer:
        "Scooters are best for city rides. For outstation trips we recommend renting a bike or a car instead.",
    },
    {
      question: "What if I get a challan while riding?",
      answer:
        "Challans issued during your rental period are the rider's responsibility. Always carry your licence and wear a helmet.",
    },
  ],
  availableIn: RENTAL_SHARED.availableIn,
};

/* ============================================================
   LOOKUP
============================================================ */

export const RENTAL_CONFIGS: Record<RentalType, RentalConfig> = {
  "car-rental": CAR_RENTAL_CONFIG,
  "bike-rental": BIKE_RENTAL_CONFIG,
  "scooter-rental": SCOOTER_RENTAL_CONFIG,
};

export function getRentalConfig(type: RentalType): RentalConfig {
  return RENTAL_CONFIGS[type];
}
