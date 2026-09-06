import {
  Bell,
  BookOpen,
  Building2,
  CarFront,
  CreditCard,
  FileCheck2,
  FileKey2,
  FolderLock,
  Gavel,
  Globe2,
  Handshake,
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
  title: `Partner App Privacy Policy | ${SITE_NAME}`,
  description:
    "Learn how Swarikaro collects, uses and protects Partner App information.",
  alternates: { canonical: `${SITE_URL}/swarikaro-partner-app-privacy-policy` },
};

const lastUpdated = "September 6, 2026";
const sections = [
  {
    title: "Scope",
    icon: BookOpen,
    paragraphs: [
      "This Privacy Policy applies to information collected through the Swarikaro Partner App and related Partner services. It applies to individual vehicle owners, rental shops, fleet operators, drivers, mobility providers and authorized representatives of partner businesses.",
    ],
    closing:
      "It does not apply to the User App or marketing website, which are governed by separate privacy policies.",
  },
  {
    title: "Information We Collect",
    icon: UserCheck,
    paragraphs: [
      "Depending on your role and use of the Partner App, we may collect the information described in the following sections.",
    ],
  },
  {
    title: "Partner Account Information",
    icon: UserCheck,
    points: [
      "Full name, mobile number, email address and profile photograph.",
      "Date of birth or age-related information where required.",
      "Residential or business address, city, state and account login information.",
      "Partner profile information.",
    ],
  },
  {
    title: "Business and Shop Information",
    icon: Building2,
    intro: "If you operate a rental shop or business, we may collect:",
    points: [
      "Shop or business name, address, location and contact details.",
      "Business registration details, documents and authorized representative information where applicable.",
      "Business photographs, operating hours and service categories.",
    ],
    closing: "This helps us verify and display your business on the platform.",
  },
  {
    title: "Vehicle Information",
    icon: CarFront,
    points: [
      "Vehicle registration number, make, model, type and manufacturing/year information.",
      "Vehicle photographs, pricing, availability, features and location.",
      "Registration, insurance and pollution certificate information where applicable.",
      "Other verification information reasonably required for a vehicle listing.",
    ],
  },
  {
    title: "Vehicle Documents and Verification",
    icon: FileCheck2,
    paragraphs: [
      "To verify vehicles and maintain platform trust, we may request Registration Certificate, insurance, pollution certificate, permit or authorization documents and other documents reasonably needed for verification. We may use third-party verification services where appropriate.",
    ],
  },
  {
    title: "KYC and Identity Information",
    icon: FileKey2,
    paragraphs: [
      "Depending on your role and applicable requirements, we may collect Aadhaar or other government identity, PAN, driving licence, photograph or selfie, identity-verification information and other KYC information. This is used to verify identity and eligibility, prevent fraud and meet legal or platform requirements.",
    ],
  },
  {
    title: "Bank and Payment Information",
    icon: CreditCard,
    points: [
      "Bank account holder name, account number, IFSC and UPI information where applicable.",
      "Payment, settlement and transaction details.",
      "Tax-related information where required.",
    ],
    closing:
      "Payment information may be processed through third-party payment or banking providers.",
  },
  {
    title: "Booking and Business Activity Information",
    icon: ReceiptText,
    points: [
      "Booking requests and accepted, rejected, cancelled or completed bookings.",
      "Booking dates and times, vehicle utilization and customer-related booking information.",
      "Pickup, return and OTP transaction information.",
      "Damage reports, late returns, penalties, disputes and partner performance information.",
    ],
  },
  {
    title: "Location Information",
    icon: MapPin,
    paragraphs: [
      "The Partner App may use location information where necessary for platform functionality.",
    ],
    points: [
      "Display your business or vehicle location and help customers discover available vehicles.",
      "Manage availability, support bookings and provide relevant location-based services.",
      "Improve platform functionality and security.",
    ],
    closing:
      "Location access may require device permission and can vary by App version and device settings.",
  },
  {
    title: "Customer-Related Information",
    icon: UsersRound,
    paragraphs: [
      "When you receive a booking, we may provide customer information reasonably necessary to fulfill it, including customer name, booking and pickup details, necessary contact details, verification status and other service-related information.",
    ],
    closing:
      "You must use this information only for legitimate booking, operational, safety, support and legal purposes. It must not be misused, sold, copied, unnecessarily retained or used for unrelated purposes.",
  },
  {
    title: "How We Use Partner Information",
    icon: Handshake,
    intro: "We may use your information to:",
    points: [
      "Create and manage your account, verify identity, shop, business, vehicles and documents.",
      "Publish listings, display relevant Partner information and facilitate bookings and cancellations.",
      "Process settlements, fees, commissions, earnings and disputes.",
      "Provide support, investigate damage or penalty claims, prevent fraud and maintain security.",
      "Improve performance, send Partner communications and meet legal, tax and regulatory obligations.",
    ],
  },
  {
    title: "Partner Profile and Vehicle Visibility",
    icon: Star,
    paragraphs: [
      "Certain information may be displayed to customers through the User App, including Partner or business name, general location, vehicle information and photographs, type, pricing, availability, ratings, reviews and service-related information.",
    ],
    closing:
      "We aim to avoid publicly displaying information that is not necessary for customers to discover or use the relevant service.",
  },
  {
    title: "Ratings and Reviews",
    icon: Star,
    paragraphs: [
      "Customers may provide ratings and reviews about your service. We may process and display them and investigate reviews or complaints where necessary for safety, fraud prevention, quality control or dispute resolution.",
    ],
  },
  {
    title: "Payments, Earnings and Settlements",
    icon: WalletCards,
    paragraphs: [
      "We may process booking revenue, platform commission, fees, penalties, adjustments, refund-related deductions, settlements, bank transactions and earnings history. This information may be retained as necessary for accounting, taxation, dispute resolution and legal compliance.",
    ],
  },
  {
    title: "Communication",
    icon: Bell,
    paragraphs: [
      "We may contact Partners through App notifications, SMS, email, phone, WhatsApp or other applicable channels about booking requests and updates, verification, payments, account alerts, document reminders, support, security and important policy changes.",
    ],
  },
  {
    title: "Device and Technical Information",
    icon: Smartphone,
    paragraphs: [
      "We may automatically collect device model, operating system, App version, IP address, device identifiers, network information, crash information, App logs, performance information and security-related information. This helps improve reliability, troubleshoot problems and protect the platform.",
    ],
  },
  {
    title: "Sharing Partner Information",
    icon: UsersRound,
    intro: "We may share information with:",
    points: [
      "Customers, where relevant Partner, vehicle and booking information is needed to facilitate a booking.",
      "Service providers for payments, KYC and document verification, cloud hosting, notifications, analytics, support, communication, security and fraud prevention.",
      "Government and regulatory authorities when legally required.",
      "Professional advisors and parties involved in a merger, acquisition, financing, restructuring, sale or similar transaction, subject to law.",
    ],
    closing: "We do not sell Partner personal information as a commodity.",
  },
  {
    title: "Partner Responsibilities Regarding Customer Data",
    icon: ShieldCheck,
    intro: "If customer data is provided through Swarikaro, you agree to:",
    points: [
      "Use it only for legitimate booking-related purposes and keep it confidential.",
      "Take reasonable steps to protect it and not sell or share it with unauthorized persons.",
      "Not use it for unrelated marketing without appropriate authorization or retain it longer than reasonably necessary.",
      "Report suspected misuse or security incidents to Swarikaro.",
    ],
    closing:
      "Partners remain responsible for compliance with applicable privacy and data protection requirements when handling customer information.",
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
    paragraphs: [
      "Swarikaro implements reasonable technical, administrative and organizational safeguards to protect personal and business information.",
    ],
    points: [
      "Access controls, authentication and role-based access.",
      "Secure transmission and encryption where appropriate.",
      "Monitoring, logging and internal security controls.",
    ],
    closing: "No digital system can guarantee absolute security.",
  },
  {
    title: "Data Retention",
    icon: FolderLock,
    paragraphs: [
      "We retain information as long as reasonably necessary for Partner services, account maintenance, booking management, settlements, financial and tax records, disputes, fraud prevention, agreement enforcement and legal compliance.",
    ],
    closing:
      "When no longer required, information may be deleted, anonymized or securely disposed of according to law and our retention practices.",
  },
  {
    title: "Account Deactivation and Deletion",
    icon: Trash2,
    paragraphs: [
      "You may request deactivation or deletion through available App functionality or Partner Support. You may need to complete active bookings, resolve disputes, complete settlements and resolve financial obligations first.",
    ],
    closing:
      "Information may be retained where legally required or reasonably necessary for accounting, fraud prevention, disputes or legal compliance.",
  },
  {
    title: "Partner Privacy Rights",
    icon: Scale,
    points: [
      "Obtain information about processing.",
      "Request correction of inaccurate information or deletion where applicable.",
      "Withdraw consent where processing is based on consent.",
      "Raise privacy grievances and exercise other rights available under law.",
    ],
    closing:
      "Contact Swarikaro using the details below to exercise applicable rights.",
  },
  {
    title: "Third-Party Services",
    icon: Globe2,
    paragraphs: [
      "The Partner App may integrate with payment providers, identity-verification providers, mapping and location services, cloud providers, communication services, analytics providers and security providers. These services may have their own policies and terms; Swarikaro is not responsible for their independent privacy practices.",
    ],
  },
  {
    title: "Cookies, SDKs and Analytics",
    icon: Globe2,
    paragraphs: [
      "The App may use SDKs and similar technologies for analytics, crash reporting, security, performance monitoring, notifications, fraud prevention and service improvement. The exact technologies may change as the platform develops.",
    ],
  },
  {
    title: "Children's Privacy",
    icon: UserCheck,
    paragraphs: [
      "The Partner App is intended for eligible adults and businesses capable of entering into applicable agreements. We do not knowingly collect personal information from children except where permitted and appropriately authorized under applicable law.",
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    icon: FileKey2,
    paragraphs: [
      "Swarikaro may update this Privacy Policy periodically. We may notify Partners about material changes through the App, email, notification or another appropriate method. The updated policy will show a revised Last Updated date.",
    ],
  },
  {
    title: "Governing Law",
    icon: Gavel,
    paragraphs: [
      "This Privacy Policy is governed by applicable laws of India. Any dispute relating to it is subject to the jurisdiction of the competent courts specified in the Swarikaro Partner Terms of Use.",
    ],
  },
  {
    title: "Contact and Grievance",
    icon: MessageCircle,
    paragraphs: [
      "For privacy questions, requests or complaints, contact Swarikaro at privacy@swarikaro.com or support@swarikaro.com, phone +91 9065442523, Dombivli East, Maharashtra, 421201, India. We will address requests and complaints in accordance with applicable law.",
    ],
    contact: true,
  },
  {
    title: "Consent",
    icon: KeyRound,
    paragraphs: [
      "By registering for and using the Swarikaro Partner App, you acknowledge that your information may be processed as described in this Privacy Policy. Where consent is required, Swarikaro will seek it through appropriate mechanisms.",
    ],
  },
];

export default function PartnerAppPrivacyPolicyPage() {
  return (
    <TermsUseLayout
      appName="Partner App"
      lastUpdated={lastUpdated}
      terms={sections}
      supportEmail={SUPPORT_EMAIL}
      documentTitle="Privacy Policy"
      heroDescription="How Swarikaro collects, uses, shares and protects Partner information."
      introduction={[
        'Swarikaro ("Swarikaro", "we", "our", or "us") is committed to protecting the privacy and security of its vehicle owners, rental shops, fleet operators, drivers and other mobility partners.',
        'This Privacy Policy explains how we collect, use, store, disclose and protect information when you register for or use the Swarikaro Partner App ("Partner App").',
        "The Partner App enables eligible partners to list vehicles, manage availability, receive and manage bookings, monitor earnings and use other business-related features provided by Swarikaro.",
      ]}
    />
  );
}
