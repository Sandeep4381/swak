"use client";
import { FAQS } from "@/lib/faqs";
import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Car,
  Users,
  Store,
  ShieldCheck,
  Headphones,
  Smartphone,
  Mail,
  Phone,
  Clock3,
  IndianRupee,
  UserRound,
  CreditCard,
} from "lucide-react";

const categories = [
  { name: "All", icon: Search, color: "text-slate-600", bg: "bg-white" },
  { name: "General", icon: Car, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "For Renters", icon: Car, color: "text-slate-600", bg: "bg-slate-100" },
  {
    name: "For Vehicle Owners & Partners",
    icon: UserRound,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  { name: "Payments & Security", icon: ShieldCheck, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Bookings & Cancellations", icon: Clock3, color: "text-sky-600", bg: "bg-sky-50" },
  { name: "Support", icon: Headphones, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "About Swarikaro", icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
];



export default function FAQContent() {
  const [active, setActive] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory = selectedCategory === "All" ? true : item.category === selectedCategory;

    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
        className="
    
    relative     overflow-hidden  !py-16 lg:!py-20
  "
      >
     <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="container mx-auto hero-wrapper px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center ">
         

          <h1 className="mt-2 text-3xl font-bold text-[#29566A] md:text-5xl">
            Frequently Asked{" "}
            <span className="text-orange-500">
              Questions
            </span>
          </h1>

         <p className="mt-3 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about
            Swarikaro. Can't find what you're looking for?
            Contact our support team.
          </p>
        </div>

        {/* Hero Card */}

      
<div className="mt-6 overflow-hidden rounded-[20px] border border-orange-100 bg-gradient-to-r from-[#FFF8F1] via-[#FFFDFB] to-[#FFF8F1] px-2 py-2 shadow-sm lg:px-10">
  <div className="grid items-center  lg:grid-cols-[200px_1fr]">

<div className="flex justify-center lg:justify-end lg:translate-x-16">
  <Image
    src="/faq/faq_boy.webp"
    alt="Swarikaro FAQ Illustration with a person holding a question mark"
    width={420}
    height={500}
    priority
    className="w-full max-w-[420px] h-[340px] object-contain -translate-y-3"
  />
</div>

    {/* Right */}
    <div className="max-w-[560px] lg:ml-48">
       <h2 className="text-2xl font-bold  text-slate-600">
        Have a question?
      </h2>

      <h4 className="mt-1 text-2xl font-bold  text-orange-500 ">
        We're here to help!
      </h4>

      <div className="relative mt-5">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-600"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for answers..."
          className="h-12 w-full rounded-xl border border-orange-100 bg-white pl-11 pr-4 text-sm outline-none focus:border-orange-500"
        />
      </div>
    </div>

  </div>
</div>
<div className="mb-5 mt-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
  {categories.map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        onClick={() => setSelectedCategory(item.name)}
        className={`flex items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium ${
          selectedCategory === item.name
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-orange-100 bg-white text-[#29566A]"
        }`}
      >
        <Icon size={16} />
        {item.name}
      </button>
    );
  })}
</div>

        {/* Main Layout */}

      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">

          {/* Sidebar */}
<aside className="hidden space-y-6 lg:block">

            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">

              <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                Browse by Topic
              </h4>

            <div className="space-y-2">
  {categories.map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        onClick={() => setSelectedCategory(item.name)}
        className={`flex w-full items-center gap-2 rounded-2xl px-2 py-3 text-left transition ${
          selectedCategory === item.name
            ? "bg-orange-50"
            : "hover:bg-orange-50"
        }`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}
        >
          <Icon size={20} className={item.color} />
        </div>

        <span
          className={`text-sm font-medium ${
            selectedCategory === item.name
              ? "text-orange-500"
              : "text-slate-600 "
          }`}
        >
          {item.name}
        </span>
      </button>
    );
  })}
</div>

            </div>
                        {/* Mobile Categories */}
          {/* Mobile Categories */}




            {/* Need Help */}
            <div className="hidden rounded-3xl border border-orange-100 bg-white p-5 shadow-sm lg:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                <Headphones
                  className="text-orange-500"
                  size={16}
                />
              </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                Still Need Help?
              </h4>

              <p className="mt-2 text-sm leading-8 text-slate-600">
                Our support team is always ready to assist you.
              </p>

              <div className="mt-6 space-y-3">

                <a
                  href="mailto:support@swarikaro.com"
                  className="flex items-center gap-3 rounded-xl border border-orange-100 p-3 text-sm hover:bg-orange-50"
                >
                  <Mail
                    size={18}
                    className="text-orange-500"
                  />
                  support@swarikaro.com
                </a>

                <a
                  href="tel:+91 9065442523"
                  className="flex items-center gap-3 rounded-xl border border-orange-100 p-3 text-sm hover:bg-orange-50"
                >
                  <Phone
                    size={18}
                    className="text-orange-500"
                  />
                   +91 9065442523
                </a>

              </div>

              <button className="mt-6 w-full py-3 text-sm font-semibold ">
             <a
  href="/contact"
  className="mt-6 block w-full rounded-xl bg-orange-500 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--secondary)]"
>
  Contact Support
</a>
              </button>
            </div>

          </aside>

          {/* FAQ */}

          <div className="space-y-4">

            {filteredFaqs.map((faq, index) => {

              const open = active === index;

              return (

                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm"
                >

                 <button
  type="button"
  onClick={() =>
    setActive(open ? -1 : index)
  }
                   className="flex w-full cursor-pointer items-center justify-between p-4 text-left md:p-5">

                    <div className="flex items-center gap-4">

                      <div
  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white transition-all duration-300 ${
    open ? "bg-orange-500" : "bg-[#29566A]"
  }`}
>
  Q
</div>

<h3
  className={`font-bold text-sm sm:text-base  mb-2 transition-colors duration-300 ${
    open ? "text-orange-500" : "text-slate-600"
  }`}
>
  {faq.question}
</h3>

                    </div>

                    {open ? (
                      <ChevronUp className="text-orange-500" />
                    ) : (
                      <ChevronDown className="mt-3 text-lg leading-8 text-slate-600" />
                    )}

                  </button>

                  {open && (
                <div className="border-t border-orange-100 bg-white px-5 py-5">
 
     <p className="  leading-8 text-slate-600">
      {faq.answer}
    </p>
  
</div>
                  )}

                </div>

              );

            })}

          </div>

        </div>

        {/* Bottom Features */}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: ShieldCheck,
              title: "Trusted Platform",
              desc: "Safe, secure and verified users.",
            },
            {
              icon: Clock3,
              title: "Flexible Options",
              desc: "Hourly or daily rentals.",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "We're here anytime you need us.",
            },
            {
              icon: IndianRupee,
              title: "Best Prices",
              desc: "Affordable rates and great deals.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm"
              >

                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                  <Icon
                    className="text-orange-500"
                    size={16}
                  />
                </div>

               <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  {item.title}
                </h4>

                <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}