"use client";

import ComingSoonButton from "@/components/ui/comingsoon";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  CheckCircle2,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Users,
  IndianRupee,
  Headphones,
  Car,
  CalendarDays,
  Store,
  BookOpen,
  MapPinned,
} from "lucide-react";

export default function AboutContent() {
  return (
    <main >

      {/* Hero Section */}
    {/* Hero Section */}
      <section
        className="relative hero-wrapper overflow-hidden !py-16 lg:!py-20"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid items-start mt-10 gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>


              <h1
                className="max-w-[720px] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold leading-[1.08] tracking-tight text-[#29566A] mb-6 text-center lg:text-left mx-auto lg:mx-0"
              >
               Building India's Smart 
                <br />
                <span className="text-orange-500">
                Vehicle  Rental Platform
                </span>
              </h1>

           

<p className="mt-3 text-lg leading-8 text-slate-600">
  <strong>Moving Together, Growing Together.</strong> Swarikaro is a smart
  vehicle rental platform that connects travellers, vehicle owners, and rental
  businesses through technology. Our mission is to make mobility more
  accessible by helping people discover trusted rental vehicles while creating
  new earning opportunities for local vehicle owners and rental partners.{" "}
  <Link
    href="/swarikaro-partner"
    className=" text-[var(--secondary)]  hover:text-orange-500 transition-colors"
  >
    Become a Swarikaro Partner
  </Link>{" "}
  and grow your vehicle rental business with us.
</p>
        
       <p className="mt-3 text-lg leading-8 text-slate-600">
          Whether you need a bike for a few hours, a car for a family trip, or want to grow your rental
          business Swarikaro brings everything together in one trusted platform.
        </p>
       <p className="mt-3 text-lg leading-8 text-slate-600">
          From self drive rentals to driver assisted travel, Swarikaro is designed to make vehicle discovery simple, secure, flexible, and location based.
        </p>

              {/* Features */}



            </div>

            {/* Right Image */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-[20px] border border-orange-100 shadow-xl">

                {/* Hero Image */}
                <Image
                  src="https://ik.imagekit.io/swarikaro4/Swarikar_website/about/about_hero.webp?updatedAt=1785008103865"
                  alt="About Swarikaro vehicle rental platform"
                  width={900}
                  height={750}
                  priority
                  className="w-full object-cover"
                />

             

              </div>
              
           <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">

                {/* Card 1 */}
                <div
                  className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg active:scale-95 active:border-orange-300 active:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <Users
                      size={20}
                      className="text-orange-500 transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mt-2 font-bold text-sm sm:text-base text-slate-600">
                    People First
                  </h4>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Built for community
                    <br />
                    and trust
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg active:scale-95 active:border-orange-300 active:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <ShieldCheck
                      size={20}
                      className="text-orange-500 transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-[15px] font-semibold leading-5 text-slate-600">
                    Safe & Reliable
                  </h4>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Verified vehicles
                    <br />
                    & partners
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg active:scale-95 active:border-orange-300 active:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <IndianRupee
                      size={20}
                      className="text-orange-500 transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-[15px] font-semibold leading-5 text-slate-600">
                    More Earnings
                  </h4>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    More income
                    <br />
                    opportunities
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg active:scale-95 active:border-orange-300 active:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <Headphones
                      size={20}
                      className="text-orange-500 transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mt-2 text-[15px] font-semibold leading-5 text-[#29566A]">
                    Always Here
                  </h4>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Support whenever
                    <br />
                    you need us
                  </p>
                </div>

              </div>
            </div>


          </div>

        </div>
      </section>



      {/* ================= OUR STORY ================= */}

      <section
        className="relative overflow-hidden hero-wrapper !py-16 lg:!py-20"
      >

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />
        

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">

            {/* Left Content */}
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-base font-extrabold text-orange-500">
  <span className="h-px w-16 bg-orange-300" />
  OUR STORY
  <span className="h-px w-16 bg-orange-300" />
</div>

<h2 className="mt-2 text-center lg:text-left text-3xl font-bold leading-tight text-[#29566A] lg:text-3xl">
  A Simple Idea with a{" "}
  <span className="text-orange-500">Big Impact</span>
</h2>
             <p className="mt-3 text-lg leading-8 text-slate-600">
  Millions of vehicles remain unused every day while travellers often struggle
  to find reliable and affordable transportation.{" "}
  <span className="font-semibold text-[#29566A]">Swarikaro was created
  to bridge this gap.</span> 
</p>

              <p className="mt-3 text-lg  leading-8 text-slate-600">
               By connecting vehicle owners, rental businesses, and customers through one digital platform, we make it easier to discover vehicles, increase vehicle utilization, and support local entrepreneurship.


              </p>

              <p className="mt-3 text-lg leading-8 text-slate-600">
               Today, Swarikaro is more than a vehicle rental platform  we're building India's next generation mobility network where technology creates opportunities for communities and makes travel more convenient for everyone.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="https://ik.imagekit.io/swarikaro4/Swarikar_website/about/story.webp?updatedAt=1785008103749"
                  alt="India's vehicle rental platform"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Full Width Feature Bar (One Line) */}
          <div className="mt-10 w-full rounded-2xl border border-orange-100 bg-white">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2 p-6">
                <Car className="text-orange-500" size={24} />
                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  Vehicle Owners <br /> Earn More
                </h4>
              </div>

              <div className="flex flex-col items-center gap-2 border-l border-orange-100 p-6">
                <Store className="text-orange-500" size={24} />
                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  Rental Shops <br /> Go Digital
                </h4>
              </div>

              <div className="flex flex-col items-center gap-2 border-t border-orange-100 lg:border-l lg:border-t-0 p-6">
                <Users className="text-orange-500" size={24} />
               <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  Community <br /> Driven
                </h4>
              </div>

              <div className="flex flex-col items-center gap-2 border-l border-t border-orange-100 lg:border-t-0 p-6">
                <MapPinned className="text-orange-500" size={24} />
                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  Expanding <br /> Across India
                </h4>
              </div>
            </div>
          </div>
    
      </section>



      {/* ================= WHAT WE DO ================= */}

      <section
      className="relative overflow-hidden hero-wrapper !py-16 lg:!py-18"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

       

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-300" />
          WHAT WE DO
            <span className="h-px w-16 bg-orange-300" />
          </div>

            <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-3xl">
              Smarter
              <span className="text-orange-500"> Mobility </span>
              For Everyone
            </h2>

            <p className="mt-3 text-lg leading-8 text-slate-600">
             Swarikaro delivers digital mobility solutions designed for every part of the vehicle rental ecosystem.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {/* Card 1 */}

            <div className="group overflow-hidden rounded-[20px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="https://ik.imagekit.io/swarikaro4/Swarikar_website/about/about_1.webp?updatedAt=1785008103682"
                alt="Earn money by renting your vehicle"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-7">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Car className="text-orange-500" size={20} />
                </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                 For  Vehicle Owners
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
Turn your idle bikes, scooters, cars, and other vehicles into additional income by listing them on Swarikaro and reaching more customers.
                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="https://ik.imagekit.io/swarikaro4/Swarikar_website/about/about_2.webp?updatedAt=1785008103800"
                alt="Digital platform for vehicle rental businesses"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-7">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Store className="text-orange-500" size={20} />
                </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  For Rental Businesses
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                 Digitize your rental operations with tools to manage bookings, increase visibility, connect with travellers, and grow your business.
                </p>

              </div>

            </div>

            {/* Card 3 */}

            <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="https://ik.imagekit.io/swarikaro4/Swarikar_website/about/about_4.webp?updatedAt=1785008103853"
                alt="Earn money by renting your vehicle"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-7">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Users className="text-orange-500" size={20} />
                </div>

               <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  For Travellers
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                 Discover nearby rental vehicles using smart location-based search, compare available options, choose self drive or driver assisted services, and book with trusted partners.

                </p>

              </div>

            </div>

          </div>

      
      </section>

      {/* ================= MISSION & VISION ================= */}
     <section className="relative py-20">
  <div className="container mx-auto max-w-6xl px-4">

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Mission */}
      <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
        <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          OUR VISION
            <span className="h-px w-16 bg-orange-500" />
          </div>

        <h2 className=" mt-3 text-3xl  text-center font-bold text-[#29566A]">
          Making Vehicle Rentals{" "}
          <span className="text-orange-500">
            Accessible Across India
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Our mission is to simplify vehicle rentals by connecting people with
          trusted mobility partners through technology.
        </p>

        <div className="mt-8 space-y-3">
          {[
            "Travellers find reliable rental vehicles easily.",
            "Vehicle owners earn from underutilized vehicles.",
            "Rental businesses grow digitally.",
            "Local communities benefit from better mobility.",
          ].map((item) => (
            <div key={item} className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-orange-500" />
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="rounded-3xl bg-[#29566A] p-8 text-white shadow-lg">

        <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          OUR MISSION
            <span className="h-px w-16 bg-orange-500" />
          </div>

        <h2 className=" mt-3 text-center text-3xl font-bold">
          Building India's Trusted{" "}
          <span className="text-orange-500">
            Mobility Network
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          We envision a future where anyone, anywhere in India, can easily
          discover and access the right vehicle through a trusted,
          technology driven mobility platform.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          By continuously expanding our network of verified partners,
          Swarikaro is working to make transportation smarter, more connected,
          and more accessible.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* ================= STATISTICS ================= */}

     <section
      className="
   
    relative overflow-hidden hero-wrapper  !py-16 lg:!py-18
  "
    >
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />
       
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

           <div className="flex items-center justify-center gap-2 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          OUR IMPACT
            <span className="h-px w-16 bg-orange-500" />
          </div>

           <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-3xl">
              Growing Every
              <span className="text-orange-500"> Day</span>
            </h2>

           <p className="mt-3 text-lg leading-8 text-slate-600">
             Every vehicle listed, every partner onboarded, and every successful booking helps strengthen Swarikaro's growing mobility network.

            </p>

          </div>

          {/* Cards */}

          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Card */}

            {[
              {
                number: "200+",
                title: "Registered Vehicles",
                desc: "200+ vehicles available across India.",
              },
              {
                number: "10+",
                title: "Cities Connected",
                desc: "Growing across major cities and emerging destinations.",
              },
              {
                number: "50+",
                title: "Verified Mobility Partners",
                desc: "Trusted local rental businesses serving travellers.",
              },
              {
                number: "1000+",
                title: "Happy Customers",
                desc: "Thousands of successful journeys completed through Swarikaro.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-[28px] border border-orange-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-600">
                  {item.number}
                </h3>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-orange-500"></div>

               <h4
                className="font-bold mt-2 text-sm sm:text-base text-slate-600 "
                
              >
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>



       
      </section>

      {/* ================= WHY THOUSANDS CHOOSE ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-orange-200/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
  <div className="flex items-center justify-center gap-4 text-sm font-extrabold uppercase tracking-wide text-orange-500">
    <span className="h-px w-16 bg-orange-500" />
    WHY CHOOSE US
    <span className="h-px w-16 bg-orange-500" />
  </div>

  <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-3xl">
    Why Thousands Choose{" "}
    <span className="text-orange-500 whitespace-nowrap">
      Swarikaro
    </span>
  </h2>
</div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Location first Search",
                  desc: "Discover vehicles around the place that matters to you.",
                  icon: MapPin,
                },
                {
                  title: "Trusted Partners",
                  desc: "Connect with verified vehicle owners and rental businesses.",
                  icon: ShieldCheck,
                },
                {
                  title: "Flexible Travel",
                  desc: "Choose from self-drive rentals and driver-assisted options.",
                  icon: RefreshCw,
                },
                {
                  title: "Growing Network",
                  desc: "Expanding to more cities with new mobility partners every month.",
                  icon: Globe2,
                },
                {
                  title: "Built for Everyone",
                  desc: "Designed for travellers, vehicle owners, and rental businesses alike.",
                  icon: Users,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[24px] border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <item.icon size={26} />
                  </div>
                  <h4
                className="font-bold mt-2 text-sm sm:text-base text-slate-600 mb-2"
                
              >
                    {item.title}
                  </h4>
                 <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[28px] 
   bg-[var(--secondary)] px-6 py-10 text-center text-white shadow-[0_30px_60px_-25px_rgba(249,115,22,0.45)] sm:px-10 sm:py-12">
              <h3 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Join the Future of Mobility
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
                Join thousands of travellers and partners building the future of
                mobility with Swarikaro. Download the app or become a partner
                today.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ComingSoonButton
                  ariaLabel="Download the app"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-orange-500 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
                >
                  Download the App
                </ComingSoonButton>
                <Link
                  href="/swarikaro-partner"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border-2 border-white px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  );
}
