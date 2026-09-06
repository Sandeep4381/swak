import {
  BadgeIndianRupee,
  Ban,
  BookOpen,
  CarFront,
  FileCheck2,
  FileText,
  Gavel,
  Handshake,
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
  title: `Partner App Terms of Use | ${SITE_NAME}`,
  description:
    "Read the terms governing access to and use of the Swarikaro Partner App.",
  alternates: { canonical: `${SITE_URL}/Swarikaro-Partner-Terms-of-Use` },
};

const lastUpdated = "September 6, 2026";

const terms = [
  {
    title: "Introduction",
    icon: BookOpen,
    paragraphs: [
      "Swarikaro is a technology platform that enables vehicle owners, fleet operators, travel businesses, and mobility service providers to connect with users seeking mobility solutions.",
      "The Partner App allows eligible partners to register and manage a business profile, list and manage vehicles, receive and manage booking requests, manage availability, pricing and schedules, communicate with customers, and access business-related tools and analytics.",
      "Swarikaro does not own, lease, operate, or control vehicles listed by Partners unless expressly stated otherwise.",
    ],
  },
  {
    title: "Eligibility",
    icon: UserCheck,
    intro: "To become a Partner, you must:",
    points: [
      "Be at least 18 years of age.",
      "Be legally capable of entering into binding contracts.",
      "Possess all licenses, registrations, permits, approvals, and authorizations required by applicable laws.",
      "Provide valid identity, address, vehicle, and business documentation as requested.",
      "Successfully complete Swarikaro's onboarding and verification process.",
    ],
    closing:
      "Swarikaro reserves the right to approve, reject, suspend, or terminate any Partner account at its sole discretion.",
  },
  {
    title: "Independent Business Relationship",
    icon: Handshake,
    intro: "You acknowledge and agree that:",
    points: [
      "You are an independent business entity or individual service provider.",
      "Nothing in these Terms creates an employer-employee relationship, partnership, agency, franchise, or joint venture between you and Swarikaro.",
      "You are solely responsible for your business operations, employees, drivers, taxes, permits, and legal obligations.",
    ],
    closing: "Swarikaro acts solely as a technology intermediary platform.",
  },
  {
    title: "Partner Registration and Account",
    icon: UserCog,
    intro: "You agree to:",
    points: [
      "Provide complete, accurate, and updated information.",
      "Maintain confidentiality of account credentials.",
      "Promptly update changes in business, vehicle, or contact information.",
      "Use only one authorized account unless expressly approved.",
    ],
    closing:
      "You are solely responsible for all activities conducted through your account.",
  },
  {
    title: "Vehicle Listing Requirements",
    icon: CarFront,
    intro: "Partners may list only vehicles that:",
    points: [
      "Are legally owned, leased, or otherwise lawfully operated by the Partner.",
      "Possess valid registration certificates.",
      "Carry all mandatory permits required by law.",
      "Have valid insurance coverage.",
      "Maintain valid pollution certificates where applicable.",
      "Are roadworthy, safe, and properly maintained.",
    ],
    closing:
      "Partners shall ensure that all information provided regarding vehicles is accurate.",
  },
  {
    title: "Driver Requirements",
    icon: UsersRound,
    intro:
      "Where driver-inclusive services are offered, Partners shall ensure that drivers:",
    points: [
      "Hold valid driving licenses appropriate for the vehicle category.",
      "Possess legally required permits and authorizations.",
      "Comply with all traffic and transport laws.",
      "Conduct themselves professionally and respectfully.",
      "Do not operate vehicles under the influence of alcohol, drugs, or prohibited substances.",
    ],
    closing:
      "Partners are solely responsible for the actions and conduct of their drivers.",
  },
  {
    title: "Bookings and Reservation Requests",
    icon: FileCheck2,
    intro:
      "The Partner App may facilitate booking or reservation requests from users. Partners agree that:",
    points: [
      "They shall respond to booking requests promptly.",
      "Acceptance or rejection of requests shall be based on genuine availability.",
      "Confirmed bookings should be honored except in exceptional circumstances.",
      "Repeated cancellations or failure to fulfill confirmed bookings may lead to penalties, suspension, or termination.",
    ],
    closing: "Swarikaro reserves the right to monitor booking performance.",
  },
  {
    title: "Pricing and Charges",
    icon: ReceiptIndianRupee,
    intro:
      "Partners may be allowed to set or manage pricing subject to platform policies. Partners agree that:",
    points: [
      "All pricing information shall be accurate and transparent.",
      "Hidden charges shall not be imposed on users.",
      "Prices displayed through the platform shall be honored unless modified through approved platform mechanisms.",
    ],
    closing:
      "Swarikaro may introduce platform commissions, subscription fees, convenience fees, promotional fees, or other charges from time to time. Applicable fees shall be communicated separately.",
  },
  {
    title: "Payments and Settlement",
    icon: WalletCards,
    intro: "Where payment services are enabled:",
    points: [
      "Swarikaro may facilitate payment collection on behalf of Partners.",
      "Settlement timelines, deductions, commissions, taxes, and charges shall be governed by applicable payment policies.",
      "Partners are responsible for ensuring accurate bank account details.",
    ],
    closing:
      "Swarikaro shall not be responsible for delays caused by banks, payment gateways, or incorrect information provided by the Partner.",
  },
  {
    title: "Taxes",
    icon: BadgeIndianRupee,
    intro: "Partners shall be solely responsible for:",
    points: [
      "GST obligations.",
      "Income tax obligations.",
      "Professional taxes.",
      "Local levies.",
      "Any other statutory taxes, duties, or government charges arising from their business activities.",
    ],
    closing: "Swarikaro shall not be responsible for Partner tax compliance.",
  },
  {
    title: "Ratings and Reviews",
    icon: Star,
    intro:
      "Users may provide ratings and reviews regarding Partner services. Partners acknowledge that:",
    points: [
      "Ratings and reviews contribute to platform trust and transparency.",
      "Swarikaro may display, moderate, remove, or investigate reviews.",
      "Consistently poor ratings may affect visibility, incentives, or account status.",
    ],
  },
  {
    title: "Partner Responsibilities",
    icon: ShieldCheck,
    intro: "Partners shall:",
    points: [
      "Maintain high service standards.",
      "Ensure customer safety.",
      "Provide accurate information.",
      "Deliver services as promised.",
      "Maintain vehicles in good condition.",
      "Treat customers respectfully and without discrimination.",
      "Comply with all applicable laws and regulations.",
    ],
  },
  {
    title: "Prohibited Conduct",
    icon: Ban,
    intro: "Partners shall not:",
    points: [
      "Submit false information.",
      "Manipulate bookings or reviews.",
      "Overcharge customers outside approved pricing.",
      "Engage in fraud or deceptive practices.",
      "Harass customers or Swarikaro personnel.",
      "Use abusive, discriminatory, or unlawful behavior.",
      "Circumvent platform transactions.",
      "Share misleading vehicle information.",
      "Create fake accounts.",
    ],
    closing: "Violation may result in immediate suspension or termination.",
  },
  {
    title: "Verification and Compliance",
    icon: FileText,
    intro: "Swarikaro may request documentation at any time, including:",
    points: [
      "Identity proof.",
      "Vehicle documents.",
      "Business licenses.",
      "Tax registrations.",
      "Insurance certificates.",
      "Permit documentation.",
    ],
    closing:
      "Failure to provide requested documentation may result in suspension.",
  },
  {
    title: "Suspension and Termination",
    icon: ShieldAlert,
    intro:
      "Swarikaro may suspend or terminate Partner access for reasons including:",
    points: [
      "Violation of these Terms.",
      "Fraudulent activities.",
      "Safety concerns.",
      "Regulatory non-compliance.",
      "Poor service quality.",
      "Repeated cancellations.",
      "Customer complaints.",
    ],
    closing:
      "Partners may discontinue use of the Partner App at any time, subject to completion of ongoing obligations.",
  },
  {
    title: "Intellectual Property",
    icon: Lock,
    paragraphs: [
      "All intellectual property rights relating to the Swarikaro platform, software, trademarks, logos, and content remain the exclusive property of Swarikaro.",
    ],
    closing:
      "Partners shall not copy, modify, reverse engineer, or misuse any platform technology.",
  },
  {
    title: "Disclaimer",
    icon: ShieldAlert,
    intro:
      'The Partner App is provided on an "as is" and "as available" basis. Swarikaro does not guarantee:',
    points: [
      "Continuous platform availability.",
      "Specific earnings.",
      "Minimum booking volumes.",
      "Uninterrupted operation.",
    ],
    closing:
      "Swarikaro acts solely as a technology platform and does not guarantee customer demand.",
  },
  {
    title: "Limitation of Liability",
    icon: Scale,
    intro:
      "To the maximum extent permitted by law, Swarikaro shall not be liable for:",
    points: [
      "Loss of profits.",
      "Loss of business opportunities.",
      "Indirect or consequential damages.",
      "Customer disputes.",
      "Driver misconduct.",
      "Vehicle damage.",
      "Regulatory actions against Partners.",
    ],
    closing: "Partner use of the platform is at their own risk.",
  },
  {
    title: "Indemnification",
    icon: Landmark,
    intro:
      "Partners agree to indemnify and hold harmless Swarikaro, its directors, employees, affiliates, and representatives from claims, losses, damages, liabilities, penalties, or expenses arising from:",
    points: [
      "Partner services.",
      "Vehicle operations.",
      "Driver conduct.",
      "Violation of law.",
      "Breach of these Terms.",
      "Customer claims.",
    ],
  },
  {
    title: "Privacy",
    icon: Lock,
    paragraphs: [
      "Partner information shall be processed in accordance with the Swarikaro Privacy Policy. By using the Partner App, you consent to such collection, use, and processing.",
    ],
  },
  {
    title: "Modifications",
    icon: RefreshCcw,
    paragraphs: [
      "Swarikaro reserves the right to modify these Terms at any time. Updated Terms shall become effective upon publication within the Partner App or other communication channels. Continued use after updates constitutes acceptance.",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    icon: Gavel,
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts located in Noida, Uttar Pradesh, India.",
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
    title: "Entire Agreement",
    icon: MessageSquareText,
    paragraphs: [
      "These Terms constitute the entire agreement between Swarikaro and the Partner regarding use of the Partner App and supersede all previous agreements or understandings relating to the same.",
    ],
  },
];

export default function PartnerAppTermsPage() {
  return (
    <TermsUseLayout
      appName="Partner App"
      lastUpdated={lastUpdated}
      terms={terms}
      supportEmail={SUPPORT_EMAIL}
    />
  );
  /*
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf5] py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#29566A]/10 blur-3xl" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Partner legal information
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#29566A] md:text-5xl">
            Partner App <span className="text-orange-500">Terms of Use</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These terms govern your access to and use of the Swarikaro Partner
            App.
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
                These Partner App Terms of Use (\"Terms\") govern your access to
                and use of the Swarikaro Partner App (\"Partner App\") operated
                by Swarikaro (\"Swarikaro\", \"Company\", \"we\", \"our\", or
                \"us\"). By registering, accessing, or using the Partner App,
                you agree to be bound by these Terms. If you do not agree, you
                must not use the Partner App.
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
                  {term.points && (
                    <ul className="space-y-2.5">
                      {term.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
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
