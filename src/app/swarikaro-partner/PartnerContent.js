"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/partner/Hero_part";

const WhyPartner = dynamic(
  () => import("@/components/partner/WhyPartner").then((m) => m.WhyPartner),
  { ssr: false, loading: () => <div className="h-64" /> }
);
const Earlyprogram = dynamic(
  () => import("@/components/partner/Earlyprogram").then((m) => m.Earlyprogram),
  { ssr: false, loading: () => <div className="h-80" /> }
);
const PartnerInterestForm = dynamic(
  () => import("@/components/partner/form_partner").then((m) => m.PartnerInterestForm),
  { ssr: false, loading: () => <div className="h-96" /> }
);
const HowItWorks = dynamic(
  () => import("@/components/partner/HowWorks").then((m) => m.HowItWorks),
  { ssr: false, loading: () => <div className="h-64" /> }
);
const Benefits = dynamic(
  () => import("@/components/partner/Benefits").then((m) => m.Benefits),
  { ssr: false, loading: () => <div className="h-64" /> }
);
const WhyBusinessChoseSwarikaro = dynamic(
  () => import("@/components/partner/why_business_chose_swarikaro").then((m) => m.WhyBusinessChoseSwarikaro),
  { ssr: false, loading: () => <div className="h-64" /> }
);
const PartnerFaq = dynamic(
  () => import("@/components/partner/faq_partner").then((m) => m.PartnerFaq),
  { ssr: false, loading: () => <div className="h-64" /> }
);

export default function PartnerContent() {
  return (
    <>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Hero />
        <WhyPartner />
        <Earlyprogram />
        <PartnerInterestForm modal={false} />
        <HowItWorks />
        <Benefits />
        <WhyBusinessChoseSwarikaro />
        <PartnerFaq />
      </div>
    </>
  );
}
