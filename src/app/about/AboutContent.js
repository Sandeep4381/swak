"use client";

import Image from "next/image";
import {
  Users,
  ShieldCheck,
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
      <section
        className="
    
    relative   hero-wrapper overflow-hidden  !py-16 lg:!py-20
  "
      >
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid items-start mt-10 gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>


              <h1
                className="
    max-w-[720px]
    text-4xl
    sm:text-5xl
    lg:text-5xl
    xl:text-5xl
    font-bold
    leading-[1.08]
    tracking-tight
    text-[#29566A]
    mb-6
    text-center
    lg:text-left
    mx-auto
    lg:mx-0
  "
              >
                Moving Together,
                <br />
                <span className="text-orange-500">
                  Growing Together.
                </span>
              </h1>

              <p className="mt-3 text-lg leading-8 text-slate-600">
                Swarikaro is building a smarter way for people to access and share mobility. We connect vehicle owners, rental businesses and travellers through a trusted digital platform that makes renting vehicles simple, secure and accessible.</p>
              <p className="mt-3 text-lg leading-8 text-slate-600">  Whether you're looking to earn from an idle vehicle, grow your rental business, or find the right vehicle for your next journey, Swarikaro brings everything together in one place.</p>
              <p className="mt-3 text-lg leading-8 text-slate-600">

                From bikes and scooters to cars and other vehicles, our platform supports both self-drive rentals and driver-assisted reservations, giving users the flexibility to travel their way while helping partners unlock new earning opportunities.
              </p>

              {/* Features */}



            </div>

            {/* Right Image */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-[20px] border border-orange-100 shadow-xl">

                {/* Hero Image */}
                <Image
                  src="/about/about_hero.webp"
                  alt="About Swarikaro"
                  width={900}
                  height={750}
                  priority
                  className="w-full object-cover"
                />

             

              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">

                {/* Card 1 */}
                <div
                  className="
    group
    flex h-[140px] flex-col items-center justify-center
    rounded-2xl border border-orange-100 bg-white
    px-3 py-3 text-center shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg
    active:scale-95 active:border-orange-300 active:shadow-lg
  "
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
                  className="
    group
    flex h-[140px] flex-col items-center justify-center
    rounded-2xl border border-orange-100 bg-white
    px-3 py-3 text-center shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg
    active:scale-95 active:border-orange-300 active:shadow-lg
  "
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
                  className="
    group
    flex h-[140px] flex-col items-center justify-center
    rounded-2xl border border-orange-100 bg-white
    px-3 py-3 text-center shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg
    active:scale-95 active:border-orange-300 active:shadow-lg
  "
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
                  className="
    group
    flex h-[140px] flex-col items-center justify-center
    rounded-2xl border border-orange-100 bg-white
    px-3 py-3 text-center shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg
    active:scale-95 active:border-orange-300 active:shadow-lg
  "
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

                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
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
        className="
   
    relative overflow-hidden hero-wrapper  !py-16 lg:!py-20
  "
      >

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />
        

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">

            {/* Left Content */}
            <div>
              <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-300" />
           OUR STORY
            <span className="h-px w-16 bg-orange-300" />
          </div>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#29566A] lg:text-3xl">
                A Simple Idea with a
                <span className="text-orange-500"> Big Impact</span>
              </h2>

              <p className="mt-3 text-lg font-bold leading-8 text-slate-600">
                Why should thousands of perfectly good vehicles remain idle while millions of people struggle to find convenient and affordable transportation ?
              </p>

              <p className="mt-3 text-lg leading-8 text-slate-600">
                We saw an opportunity to bridge this gap.


              </p>

              <p className="mt-2 text-lg leading-8 text-slate-600">
                By combining technology with local entrepreneurship, Swarikaro empowers individuals and businesses to share vehicles efficiently while making transportation more accessible for everyone.

                Today, we're building more than a vehicle rental platform—we're creating a trusted mobility ecosystem where communities grow together through shared opportunities.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="/about/story.webp"
                  alt="Our Story"
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
      className="
   
    relative overflow-hidden hero-wrapper  !py-16 lg:!py-20
  "
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
              Swarikaro provides digital solutions that benefit every part of the mobility ecosystem.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {/* Card 1 */}

            <div className="group overflow-hidden rounded-[20px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="/about/about_1.webp"
                alt="Vehicle Owners"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-7">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Car className="text-orange-500" size={20} />
                </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  Vehicle Owners
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">

                  Turn your idle vehicles into an additional source of income. List your bikes, scooters or cars and start earning whenever they're available.
                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="/about/about_2.webp"
                alt="Rental Shops"
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
                  Digitize your rental operations, manage bookings with ease, increase visibility and grow your customer base through Swarikaro.
                </p>

              </div>

            </div>

            {/* Card 3 */}

            <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <Image
                src="/about/about_4.webp"
                alt="Customers"
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
                  Find nearby vehicles for hourly or daily rentals, choose between self-drive or driver-assisted options, and enjoy flexible transportation that fits your needs.

                </p>

              </div>

            </div>

          </div>

      
      </section>

      {/* ================= STATISTICS ================= */}

     <section
      className="
   
    relative overflow-hidden hero-wrapper  !py-16 lg:!py-20
  "
    >
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />
       
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

           <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-300" />
          OUR IMPACT
            <span className="h-px w-16 bg-orange-300" />
          </div>

           <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-3xl">
              Growing Every
              <span className="text-orange-500"> Day</span>
            </h2>

           <p className="mt-3 text-lg leading-8 text-slate-600">
              Every new partner, vehicle and booking helps us build a stronger mobility network across India.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Card */}

            {[
              {
                number: "200+",
                title: "Registered Vehicles",
                desc: "Cars, Bikes & Scooters available across India.",
              },
              {
                number: "10+",
                title: "Cities Connected",
                desc: "Expanding rapidly into towns and villages.",
              },
              {
                number: "50+",
                title: "Mobility Partners",
                desc: "Trusted rental businesses growing with us.",
              },
              {
                number: "1.8 Lakh+",
                title: "Happy Customers",
                desc: "Thousands of successful journeys completed.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-[28px] border border-orange-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(249,115,22,0.10)" }}>

                  <span className="text-2xl font-bold text-orange-500">
                    {index + 1}
                  </span>

                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-600">
                  {item.number}
                </h3>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-orange-500"></div>

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

         

       
      </section>

    </main>

  );
}