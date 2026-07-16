"use client";

import Image from "next/image";
import {
  BookOpen,
  Handshake,
  Globe,
  User,
  Monitor,
  ShieldCheck,
  Link,
  ClipboardList,
  Ban,
  Target,
  BadgeCheck,
  TriangleAlert,
  CircleUser,
  ShieldBan,
  Lock,
  Settings,
  FilePenLine,
  Scale,
  Gavel,
  Mail,
  FileText,
} from "lucide-react";

const terms = [
  {
    number: 1,
    title: "Introduction",
    icon: BookOpen,
    points: [
      "Swarikaro is an India-based mobility and vehicle discovery platform.",
      "This Website provides information about our services, future offerings, and partnerships.",
      "The Website is for informational and promotional purposes only.",
      "Vehicle bookings and transportation services are provided only through official Swarikaro mobile applications when available.",
    ],
  },

  {
    number: 2,
    title: "Acceptance of Terms",
    icon: Handshake,
    points: [
      "By using this Website you agree to these Terms.",
      "You must comply with all applicable laws.",
      "Continued use of the Website means acceptance of these Terms.",
    ],
  },

  {
    number: 3,
    title: "Website Purpose",
    icon: Globe,
    points: [
      "Provide information about Swarikaro.",
      "Promote our mobile application and services.",
      "Help visitors learn about our platform.",
      "Share blogs, announcements and updates.",
      "Redirect users to official applications when required.",
    ],
  },

  {
    number: 4,
    title: "Eligibility",
    icon: User,
    points: [
      "Users must be legally capable of entering agreements.",
      "Users under 18 should access with parental supervision.",
      "Use of this Website must comply with applicable laws.",
    ],
  },

  {
    number: 5,
    title: "Use of Website",
    icon: Monitor,
    points: [
      "Use the Website only for lawful purposes.",
      "Do not misuse or interfere with Website operations.",
      "Unauthorized scraping or hacking is prohibited.",
    ],
  },

  {
    number: 6,
    title: "Intellectual Property Rights",
    icon: ShieldCheck,
    points: [
      "All logos, graphics, images and content belong to Swarikaro.",
      "No material may be copied without written permission.",
    ],
  },

  {
    number: 7,
    title: "Third-Party Links",
    icon: Link,
    points: [
      "External website links are provided for convenience.",
      "Swarikaro is not responsible for third-party content.",
    ],
  },

  {
    number: 8,
    title: "Partner Inquiry Forms",
    icon: ClipboardList,
    points: [
      "Submitted information must be accurate.",
      "Submission does not guarantee approval.",
    ],
  },

  {
    number: 9,
    title: "No Booking or Transaction",
    icon: Ban,
    points: [
      "This Website does not process bookings.",
      "Payments and transportation services are handled separately.",
    ],
  },

  {
    number: 10,
    title: "Accuracy of Information",
    icon: Target,
    points: [
      "Information may change without notice.",
      "We strive to keep content accurate.",
    ],
  },

  {
    number: 11,
    title: "Disclaimer of Warranties",
    icon: BadgeCheck,
    points: [
      "The Website is provided 'as is'.",
      "No warranty of uninterrupted availability is provided.",
    ],
  },

  {
    number: 12,
    title: "Limitation of Liability",
    icon: TriangleAlert,
    points: [
      "Swarikaro shall not be liable for indirect damages arising from Website use.",
    ],
  },

  {
    number: 13,
    title: "User Responsibilities",
    icon: CircleUser,
    points: [
      "Use the Website responsibly.",
      "Provide accurate information where requested.",
    ],
  },

  {
    number: 14,
    title: "Prohibited Activities",
    icon: ShieldBan,
    points: [
      "Uploading malware.",
      "Unauthorized access attempts.",
      "Fraudulent activities.",
    ],
  },

  {
    number: 15,
    title: "Privacy Reference",
    icon: Lock,
    points: [
      "Use of this Website is also governed by our Privacy Policy.",
    ],
  },

  {
    number: 16,
    title: "Changes to Website",
    icon: Settings,
    points: [
      "We may modify or discontinue the Website at any time.",
    ],
  },

  {
    number: 17,
    title: "Changes to Terms",
    icon: FilePenLine,
    points: [
      "Terms may be updated periodically.",
    ],
  },

  {
    number: 18,
    title: "Indemnification",
    icon: Scale,
    points: [
      "Users agree to indemnify Swarikaro against misuse.",
    ],
  },

  {
    number: 19,
    title: "Governing Law",
    icon: Gavel,
    points: [
      "These Terms are governed by the laws of India.",
    ],
  },

  {
    number: 20,
    title: "Contact Us",
    icon: Mail,
    points: [
      "support@swarikaro.com",
    ],
  },

  {
    number: 21,
    title: "Entire Agreement",
    icon: FileText,
    points: [
      "These Terms constitute the complete agreement regarding Website usage.",
    ],
  },
];

export default function TermsContent() {
  return (
     <section
        className="
    
    relative   hero-wrapper  overflow-hidden  !py-16 lg:!py-20
  "
      >
 <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8">

        {/* Hero */}

<section
        className="
    
    relative  overflow-hidden 
  "
      >

        <div className="mx-auto max-w-4xl px-4  text-center">
   <h1 className="mt-2 text-3xl font-bold text-[#29566A] md:text-5xl">
    Terms <span className="text-orange-500">and Conditions</span>
  </h1>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Please read these terms and conditions carefully before using the
    Swarikaro website.
  </p>
</div>
       

        {/* Terms Grid starts here */}
        <div className=" grid gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">

  {terms.slice(0, 12).map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.number}
        className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              {item.number}
            </div>

           <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
              {item.title}
            </h4>

          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
            <Icon
              size={20}
              className="text-orange-500"
            />
          </div>

        </div>

        {/* Points */}

        <ul className="space-y-3">

          {item.points.map((point, index) => (

            <li
              key={index}
              className="flex items-start gap-3"
            >

              <span className="mt-2 h-2 w-2 rounded-full  bg-slate-600 flex-shrink-0"></span>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                {point}
              </p>

            </li>

          ))}

        </ul>

      </div>
    );
  })}

</div>
{/* Remaining Terms */}

<div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

  {terms.slice(12).map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.number}
        className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              {item.number}
            </div>

            <h3 className="text-lg font-bold text-[#183153]">
              {item.title}
            </h3>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
            <Icon
              size={24}
              className="text-orange-500"
            />
          </div>

        </div>

        {/* Points */}

        <ul className="space-y-3">

          {item.points.map((point, index) => (

            <li
              key={index}
              className="flex items-start gap-3"
            >

              <span className="mt-2 h-2 w-2 rounded-full  bg-slate-600 flex-shrink-0"></span>

               <p
                        className="text-xs sm:text-sm leading-relaxed text-slate-600"

                      >
                {point}
              </p>

            </li>

          ))}

        </ul>

        {/* Contact Card */}

        {item.number === 20 && (
          <a
            href="mailto:support@swarikaro.com"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            <Mail size={18} />
            support@swarikaro.com
          </a>
        )}

      </div>
    );
  })}

</div>

{/* Footer Notice */}


 </section>
</div>

</section>

  );
}