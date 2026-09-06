import {
  Bell,
  BookOpen,
  CreditCard,
  FileKey2,
  FolderLock,
  Gavel,
  Globe2,
  HeartHandshake,
  KeyRound,
  MapPin,
  MessageCircle,
  ReceiptText,
  Scale,
  ShieldCheck,
  Smartphone,
  Star,
  Trash2,
  UserCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import TermsUseLayout from "@/components/legal/TermsUseLayout";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata = {
  title: `User App Privacy Policy | ${SITE_NAME}`,
  description:
    "Learn how Swarikaro collects, uses and protects information in the User App.",
  alternates: { canonical: `${SITE_URL}/swarikaro-user-app-privacy-policy` },
};

const lastUpdated = "September 6, 2026";
const sections = [
  {
    title: "Scope of this Privacy Policy",
    icon: BookOpen,
    paragraphs: [
      "This Privacy Policy applies to personal information collected through the Swarikaro User App and related services. It covers account use, vehicle search, location selection, bookings, KYC, payments, rewards, support, reports, reviews and communications made through App features.",
    ],
    closing:
      "It does not govern the Swarikaro Partner App, which is covered by a separate Partner App Privacy Policy.",
  },
  {
    title: "Information We Collect",
    icon: UserCheck,
    intro:
      "Depending on how you use the App, we may collect the following categories of information.",
    points: [
      "Account information such as name, mobile number, email, profile details, authentication information and age-related information where required.",
      "Identity and KYC information such as Aadhaar or other identity information, driving licence, photograph or selfie, verification information and other identity documents.",
    ],
  },
  {
    title: "Location Information",
    icon: MapPin,
    paragraphs: [
      "With your permission, the App may collect location information to provide location-based features.",
    ],
    points: [
      "Find vehicles near you or around a selected destination.",
      "Calculate search areas, improve vehicle discovery and support booking-related functionality.",
      "Provide location-based assistance.",
    ],
    closing:
      "You can control location permissions through your device settings. Some features may not work properly if location access is disabled.",
  },
  {
    title: "Vehicle and Booking Information",
    icon: ReceiptText,
    paragraphs: [
      "When you search for or book a vehicle, we may collect selected vehicle details, pickup and return locations, booking dates and times, rental duration, reservation details, booking status, pickup and return information, OTP transaction information, Partner information, cancellations, charges and booking history. This information is necessary to provide and manage the services you request.",
    ],
  },
  {
    title: "Payment Information",
    icon: CreditCard,
    paragraphs: [
      "Payments may be processed by our payment service providers. We may receive transaction IDs, payment status, amount paid, payment method, refund status and relevant transaction information.",
    ],
    closing:
      "Where a third-party payment provider handles payment processing, its privacy policy and terms may also apply. Swarikaro does not intend to store complete card information unless lawfully required for a particular service.",
  },
  {
    title: "Wallet, Coins and Rewards",
    icon: WalletCards,
    paragraphs: [
      "Where available, we may process wallet balance, Swarikaro Coin balance, reward history, coupon usage, referral activity, promotional benefits and reward transactions. These features are subject to the applicable Swarikaro terms and reward policies.",
    ],
  },
  {
    title: "Device and Technical Information",
    icon: Smartphone,
    paragraphs: [
      "We may automatically collect device type, operating system, App version, device identifiers, IP address, network information, crash reports, log information, App usage information and security-related information. This helps us maintain, secure and improve the App.",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: HeartHandshake,
    intro: "We may use personal information to:",
    points: [
      "Create and manage accounts, verify identity and process KYC.",
      "Provide vehicle discovery, bookings, payments, refunds and cancellation management.",
      "Provide support, booking communications and important service notifications.",
      "Prevent fraud, maintain security, resolve disputes and comply with law.",
      "Improve services, analyze platform performance and provide rewards or promotions where applicable.",
    ],
  },
  {
    title: "Communications and Notifications",
    icon: Bell,
    paragraphs: [
      "We may send communications about account activity, booking confirmations or changes, cancellations, payment and refund status, KYC verification, security alerts, customer support and important service updates. Where permitted by law, we may also send promotional communications.",
    ],
    closing:
      "You may be able to manage certain notification preferences through the App or device settings.",
  },
  {
    title: "Sharing of Information",
    icon: UsersRound,
    intro: "We may share relevant information with:",
    points: [
      "Vehicle Partners, where necessary to fulfill a booking.",
      "Service providers for payment processing, KYC, cloud hosting, analytics, notifications, customer support, security and communications.",
      "Legal and regulatory authorities when required by law or lawful request.",
      "Parties involved in a merger, acquisition, restructuring, sale of assets or similar business transaction, subject to applicable law.",
    ],
    closing: "We do not sell your personal information as a commodity.",
  },
  {
    title: "Information Shared With Partners",
    icon: UsersRound,
    paragraphs: [
      "When you make a booking, we may provide the relevant Partner with information reasonably necessary for booking and vehicle handover, such as your name, necessary contact details, booking and pickup details, verification status and service-related information. We aim to limit this sharing to what is reasonably necessary.",
    ],
  },
  {
    title: "Reviews, Feedback and User Content",
    icon: Star,
    paragraphs: [
      "If you submit reviews, ratings, photos, feedback, complaints or other content, we may process and use it for platform operations, quality improvement, support and safety. Please do not submit sensitive personal information that is not required for the relevant purpose.",
    ],
  },
  {
    title: "Cookies and Similar Technologies",
    icon: Globe2,
    paragraphs: [
      "The App and related services may use cookies, SDKs, analytics tools, device identifiers and similar technologies to understand App usage, detect technical problems, improve performance, maintain security and measure service effectiveness.",
    ],
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
    paragraphs: [
      "We take reasonable technical, administrative and organizational measures designed to protect information against unauthorized access, disclosure, alteration, misuse or destruction.",
    ],
    points: [
      "Access controls and authentication mechanisms.",
      "Encryption and secure data transmission where appropriate.",
      "Monitoring, logging and internal access restrictions.",
    ],
    closing:
      "No electronic system or transmission method can be guaranteed completely secure.",
  },
  {
    title: "Data Retention",
    icon: FolderLock,
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary to provide services, maintain records, process bookings, resolve disputes, prevent fraud, meet legal obligations, maintain financial records and enforce agreements.",
    ],
    closing:
      "When no longer required, information may be deleted, anonymized or securely disposed of in accordance with law and our retention practices.",
  },
  {
    title: "Account Deletion",
    icon: Trash2,
    paragraphs: [
      "You may request deletion of your account and associated personal information through the available account deletion feature or by contacting Swarikaro Support.",
    ],
    closing:
      "Some information may be retained for legal, security, financial, dispute-resolution or other lawful purposes. Deletion can affect access to bookings, rewards, wallet balances and associated services.",
  },
  {
    title: "Your Privacy Rights",
    icon: Scale,
    intro: "Subject to applicable law, you may have rights to:",
    points: [
      "Obtain information about processing.",
      "Request correction of inaccurate information or deletion where applicable.",
      "Withdraw consent where processing is based on consent.",
      "Raise a grievance and exercise other data protection rights.",
    ],
    closing: "Requests can be made using the contact details below.",
  },
  {
    title: "Children's Privacy",
    icon: UserCheck,
    paragraphs: [
      "The App is not intended for individuals who are not legally eligible to use the relevant services. We do not knowingly collect personal information from children except where permitted and appropriately authorized by law. Please contact us if you believe a child has provided information improperly.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    icon: Globe2,
    paragraphs: [
      "The App may integrate with payment providers, identity-verification providers, Google Play, mapping and location services, communication providers and analytics services. Your interaction with third parties may be governed by their own terms and privacy policies. Swarikaro is not responsible for their independent privacy practices.",
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    icon: FileKey2,
    paragraphs: [
      "We may update this Privacy Policy from time to time. When changes are made, we may update the Last Updated date and provide additional notice where required. Please review this Privacy Policy periodically for the latest information.",
    ],
  },
  {
    title: "Governing Law",
    icon: Gavel,
    paragraphs: [
      "This Privacy Policy is governed by the laws applicable in India. Any dispute relating to it is subject to the jurisdiction of the competent courts specified in the applicable Swarikaro terms.",
    ],
  },
  {
    title: "Contact and Grievance",
    icon: MessageCircle,
    paragraphs: [
      "For privacy questions, requests or complaints, contact Swarikaro at privacy@swarikaro.com or support@swarikaro.com, phone +91 9065442523, Dombivli East, Maharashtra, 421201, India. We will handle privacy-related requests and complaints in accordance with applicable law.",
    ],
    contact: true,
  },
  {
    title: "Consent",
    icon: KeyRound,
    paragraphs: [
      "By using the Swarikaro User App and providing personal information, you acknowledge that your information may be processed as described in this Privacy Policy and in accordance with applicable law. Where consent is required, Swarikaro will seek it through appropriate mechanisms.",
    ],
  },
];

export default function UserAppPrivacyPolicyPage() {
  return (
    <TermsUseLayout
      appName="User App"
      lastUpdated={lastUpdated}
      terms={sections}
      supportEmail={SUPPORT_EMAIL}
      documentTitle="Privacy Policy"
      heroDescription="How Swarikaro collects, uses, shares and protects your information in the User App."
      introduction={[
        'Swarikaro ("Swarikaro", "we", "our", or "us") respects your privacy and is committed to protecting your personal data.',
        'This Privacy Policy explains how Swarikaro collects, uses, stores, shares and protects information when you use the Swarikaro User App ("App") and related services.',
        "The User App is intended for customers/renters who use Swarikaro to discover and book vehicles for rental or reservation services.",
        "By downloading, registering for, accessing or using the App, you acknowledge that you have read and understood this Privacy Policy.",
      ]}
    />
  );
}
