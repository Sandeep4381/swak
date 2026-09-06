import {
  BadgeIndianRupee,
  Ban,
  BookOpen,
  CarFront,
  FileCheck2,
  FileText,
  Gavel,
  Handshake,
  HeartHandshake,
  Landmark,
  Lock,
  Mail,
  MessageSquareText,
  ReceiptIndianRupee,
  RefreshCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Star,
  UserCheck,
  UserCog,
  UsersRound,
  WalletCards,
} from "lucide-react";
import TermsUseLayout from "@/components/legal/TermsUseLayout";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata = {
  title: `User App Terms of Use | ${SITE_NAME}`,
  description:
    "Read the terms governing access to and use of the Swarikaro User App.",
  alternates: { canonical: `${SITE_URL}/Swarikaro-UserApp-Terms-of-Use` },
};

const lastUpdated = "September 6, 2026";

const terms = [
  {
    title: "Introduction",
    icon: BookOpen,
    paragraphs: [
      'Swarikaro is a technology platform that enables users to discover, search, reserve, and access mobility solutions offered by independent vehicle owners, fleet operators, and mobility service providers ("Partners").',
      "Through the App, users may search for vehicles around preferred locations, discover mobility options using location-based search, reserve vehicles for future or immediate travel, access rental and reservation vehicle services, communicate with Partners through platform features, make payments for eligible services, and rate and review completed journeys.",
      "Swarikaro acts solely as a technology intermediary platform and, unless expressly stated otherwise, does not own, operate, lease, manage, or directly provide transportation services or vehicles.",
    ],
  },
  {
    title: "Eligibility",
    icon: UserCheck,
    points: [
      "Be at least 18 years of age.",
      "Be legally capable of entering into binding contracts under applicable laws.",
      "Register and maintain an active account.",
      "Provide accurate and complete information.",
    ],
    closing:
      "If you are using the App on behalf of another person or organization, you represent that you are authorized to do so.",
  },
  {
    title: "User Account Registration",
    icon: UserCog,
    intro:
      "To access certain features, you may be required to create an account. You agree to:",
    points: [
      "Provide accurate, current, and complete information.",
      "Keep your account credentials confidential.",
      "Maintain and promptly update account information.",
      "Be solely responsible for all activities conducted through your account.",
    ],
    closing:
      "You must immediately notify Swarikaro of any unauthorized use of your account.",
  },
  {
    title: "Services Available Through the App",
    icon: CarFront,
    paragraphs: [
      "The App may enable users to reserve vehicles for self-use or other available rental options for specified durations.",
    ],
    subheading: "Reservation Vehicle Services",
    points: [
      "Airport transfers",
      "Outstation travel",
      "Family events",
      "Weddings",
      "Business travel",
      "One-way trips",
      "Round trips",
      "Other available transportation needs",
    ],
    closing:
      "Availability of services, vehicle categories, and features may vary by location.",
  },
  {
    title: "Nature of Platform Services",
    icon: Handshake,
    intro: "You acknowledge and agree that:",
    points: [
      "Swarikaro provides a technology platform that connects users with independent Partners.",
      "Transportation, rental, and related services are provided by independent Partners.",
      "Swarikaro is not a transportation carrier, travel agency, fleet owner, or employer of Partners.",
    ],
    closing:
      "Accordingly, Swarikaro shall not be responsible for acts, omissions, conduct, quality of service, delays, cancellations, or performance failures attributable to Partners except to the extent required by law.",
  },
  {
    title: "Bookings and Reservations",
    icon: FileCheck2,
    intro:
      "Users may submit booking or reservation requests through the App. By making a reservation, you agree that:",
    points: [
      "All booking information provided is accurate.",
      "Reservation confirmations are subject to Partner acceptance and availability.",
      "Vehicle availability cannot be guaranteed until confirmation is received.",
      "Certain reservations may require advance payment or deposits.",
    ],
    closing:
      "Users are responsible for reviewing all booking details before confirming reservations.",
  },
  {
    title: "Pricing and Charges",
    icon: ReceiptIndianRupee,
    intro: "Pricing displayed within the App may include:",
    points: [
      "Vehicle rental charges",
      "Reservation charges",
      "Convenience fees",
      "Taxes",
      "Platform fees",
      "Additional applicable charges",
    ],
    closing:
      "Users agree to pay all charges associated with confirmed reservations. Final charges may vary depending on duration of use, extra distance traveled, additional services requested, waiting charges, toll fees, parking charges, government taxes, and applicable penalties. Applicable charges shall be disclosed wherever reasonably possible.",
  },
  {
    title: "Payments",
    icon: WalletCards,
    intro:
      "Payments may be processed through integrated third-party payment service providers. By making payments through the App, you agree that:",
    points: [
      "You are authorized to use the selected payment method.",
      "Payment information provided is accurate.",
      "Swarikaro may use third-party payment processors.",
    ],
    closing:
      "Swarikaro is not responsible for failures, delays, or errors caused by banks, payment gateways, or third-party payment providers.",
  },
  {
    title: "Cancellations and Refunds",
    icon: RefreshCcw,
    paragraphs: [
      "Cancellation and refund rules may vary depending on service category, vehicle type, booking timing, and Partner policies.",
      "Applicable cancellation and refund terms shall be communicated during the booking process or through separate policies. Users agree to comply with all applicable cancellation rules.",
    ],
  },
  {
    title: "User Responsibilities",
    icon: UsersRound,
    intro: "Users agree to:",
    points: [
      "Provide accurate information.",
      "Arrive at designated pickup locations on time.",
      "Treat Partners, drivers, and vehicles respectfully.",
      "Follow all applicable laws and regulations.",
      "Use vehicles only for lawful purposes.",
      "Return rental vehicles in the agreed condition and time where applicable.",
    ],
    closing:
      "Users shall be responsible for any damage caused due to misuse, negligence, or unlawful conduct.",
  },
  {
    title: "Prohibited Conduct",
    icon: Ban,
    intro: "Users shall not:",
    points: [
      "Provide false or misleading information.",
      "Use the App for unlawful purposes.",
      "Damage or misuse vehicles.",
      "Engage in abusive, threatening, discriminatory, or offensive behavior.",
      "Carry illegal or prohibited items.",
      "Circumvent the platform to avoid applicable charges.",
      "Create fraudulent or duplicate accounts.",
      "Attempt unauthorized access to the App or its systems.",
    ],
    closing: "Violation may result in suspension or permanent termination.",
  },
  {
    title: "Vehicle Use Requirements",
    icon: ShieldCheck,
    intro:
      "Where self-drive or rental services are available, users agree that:",
    points: [
      "They possess valid licenses required to operate the vehicle.",
      "They shall comply with all traffic laws.",
      "Vehicles shall not be used for unlawful activities.",
      "Vehicles shall not be sub-rented or transferred without authorization.",
    ],
    closing:
      "Users shall remain responsible for fines, penalties, challans, damages, or legal violations occurring during the usage period.",
  },
  {
    title: "Ratings and Reviews",
    icon: Star,
    intro:
      "Users may provide ratings and reviews regarding Partners, drivers, and services. Users agree:",
    points: [
      "Reviews shall be truthful and based on actual experiences.",
      "Swarikaro may moderate, remove, or investigate reviews that violate policies.",
    ],
    closing:
      "False, misleading, abusive, or defamatory reviews are prohibited.",
  },
  {
    title: "Intellectual Property",
    icon: Lock,
    paragraphs: [
      "All intellectual property rights relating to the App, software, trademarks, logos, content, graphics, and platform technology are owned by Swarikaro or its licensors.",
    ],
    intro:
      "Users shall not copy, modify, reverse engineer, distribute, or exploit any part of the App without prior written permission.",
  },
  {
    title: "Disclaimer",
    icon: ShieldAlert,
    intro:
      'The App and services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Swarikaro disclaims all warranties regarding:',
    points: [
      "Availability of services.",
      "Accuracy of information.",
      "Vehicle availability.",
      "Uninterrupted access.",
      "Fitness for a particular purpose.",
    ],
    closing:
      "Swarikaro does not guarantee that every reservation request will be fulfilled.",
  },
  {
    title: "Limitation of Liability",
    icon: Scale,
    intro:
      "To the maximum extent permitted by applicable law, Swarikaro shall not be liable for:",
    points: [
      "Indirect or consequential losses.",
      "Loss of profits or opportunities.",
      "Delays caused by Partners.",
      "Vehicle breakdowns.",
      "Trip cancellations by Partners.",
      "Personal belongings left in vehicles.",
      "Acts or omissions of independent Partners.",
      "Traffic delays, accidents, or force majeure events.",
    ],
    closing:
      "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
  },
  {
    title: "Safety and Conduct",
    icon: HeartHandshake,
    intro: "Users are expected to prioritize safety at all times. Users shall:",
    points: [
      "Follow driver instructions where applicable.",
      "Comply with safety requirements.",
      "Avoid behavior that threatens the safety of others.",
    ],
    closing:
      "Swarikaro reserves the right to suspend users involved in unsafe conduct.",
  },
  {
    title: "Suspension and Termination",
    icon: BadgeIndianRupee,
    intro:
      "Swarikaro may suspend or terminate user accounts for reasons including:",
    points: [
      "Violation of these Terms.",
      "Fraudulent activities.",
      "Abuse or misconduct.",
      "Non-payment.",
      "Safety concerns.",
      "Regulatory requirements.",
    ],
    closing: "Users may discontinue use of the App at any time.",
  },
  {
    title: "Privacy",
    icon: Lock,
    paragraphs: [
      "Collection and processing of personal information shall be governed by the Swarikaro Privacy Policy. By using the App, you consent to such collection and processing.",
    ],
  },
  {
    title: "Force Majeure",
    icon: Landmark,
    intro:
      "Swarikaro shall not be liable for delays or failures caused by circumstances beyond reasonable control, including:",
    points: [
      "Natural disasters",
      "Government actions",
      "Strikes",
      "Network failures",
      "Epidemics",
      "Civil disturbances",
      "Technical outages",
    ],
  },
  {
    title: "Modifications to Services and Terms",
    icon: RefreshCcw,
    intro: "Swarikaro reserves the right to:",
    points: [
      "Modify App features.",
      "Add or remove services.",
      "Update pricing structures.",
      "Revise these Terms.",
    ],
    closing:
      "Updated Terms shall become effective upon publication within the App or other communication channels. Continued use constitutes acceptance.",
  },
  {
    title: "Governing Law and Jurisdiction",
    icon: Gavel,
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Noida, Uttar Pradesh, India.",
    ],
  },
  {
    title: "Contact Information",
    icon: Mail,
    paragraphs: [
      "For questions regarding these Terms, contact Swarikaro at support@swarikaro.com or visit www.swarikaro.com.",
    ],
    contact: true,
  },
  {
    title: "Severability",
    icon: FileText,
    paragraphs: [
      "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain valid and enforceable.",
    ],
  },
  {
    title: "Entire Agreement",
    icon: MessageSquareText,
    paragraphs: [
      "These Terms constitute the entire agreement between you and Swarikaro concerning the use of the App and supersede all prior agreements relating to the same.",
    ],
  },
];

export default function UserAppTermsPage() {
  return (
    <TermsUseLayout
      appName="User App"
      lastUpdated={lastUpdated}
      terms={terms}
      supportEmail={SUPPORT_EMAIL}
    />
  );
  /*return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf5] py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#29566A]/10 blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Legal information
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#29566A] md:text-5xl">
            User App <span className="text-orange-500">Terms of Use</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These terms govern your access to and use of the Swarikaro User App.
          </p>
          <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-5 py-3 text-sm font-semibold text-[#29566A] shadow-sm">
            <MapPin className="h-4 w-4 text-orange-500" /> Last updated:{" "}
            {lastUpdated}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#29566A] text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#29566A]">
                Please read these terms carefully
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                These User App Terms of Use (\"Terms\") govern your access to
                and use of the Swarikaro User App (\"App\") operated by
                Swarikaro (\"Swarikaro\", \"Company\", \"we\", \"our\", or
                \"us\"). By downloading, registering for, accessing, or using
                the App, you agree to be bound by these Terms. If you do not
                agree, you must not use the App.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <article
                key={term.title}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h2 className="text-base font-bold leading-6 text-[#29566A]">
                      {term.title}
                    </h2>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </span>
                </div>

                <div className="space-y-3 text-sm leading-7 text-slate-600">
                  {term.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {term.intro && <p>{term.intro}</p>}
                  {term.subheading && (
                    <p className="font-semibold text-[#29566A]">
                      {term.subheading}
                    </p>
                  )}
                  {term.points && (
                    <ul className="space-y-2.5">
                      {term.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />{" "}
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {term.closing && <p>{term.closing}</p>}
                </div>

                {term.contact && (
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Mail className="h-4 w-4" /> {SUPPORT_EMAIL}
                  </a>
                )}
              </article>
            );
          })}
        </section>

        <p className="mt-10 text-center text-sm font-medium text-[#29566A]">
          Swarikaro <span className="mx-1 text-orange-500">—</span> Apna Safar,
          Apne Log.
        </p>
      </div>
    </main>
  );*/
}
