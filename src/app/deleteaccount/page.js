"use client";

import {
  ArrowRight,
  Clock3,
  FileText,
  Headphones,
  Landmark,
  Loader2,
  LockKeyhole,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Timer,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";
import SuccessModal from "@/components/ui/SuccessModal";

const initialForm = { name: "", email: "", mobile: "", consent: false };

const beforeYouSubmit = [
  {
    id: "permanent",
    icon: Trash2,
    text: (
      <>
        Account deletion is <strong>permanent</strong> and cannot be undone.
      </>
    ),
  },
  {
    id: "processing-time",
    icon: Clock3,
    text: (
      <>
        Your deletion request is normally{" "}
        <strong>processed within 30 days.</strong>
      </>
    ),
  },
  {
    id: "retained-information",
    icon: FileText,
    text: (
      <>
        Some booking, payment, or transaction information may be retained where
        required by law.
      </>
    ),
  },
  {
    id: "loss-of-access",
    icon: LockKeyhole,
    text: (
      <>
        Once deleted, you will lose access to bookings, saved places,
        preferences, and associated data.
      </>
    ),
  },
];

const reassuranceItems = [
  {
    icon: ShieldCheck,
    title: "Your Privacy Matters",
    description:
      "We respect your data and are committed to protecting your privacy.",
  },
  {
    icon: Timer,
    title: "Processed Within 30 Days",
    description: "We aim to complete your request as soon as possible.",
  },
  {
    icon: Landmark,
    title: "Legal Compliance",
    description: "Some data may be retained as required by applicable laws.",
  },
];

export default function DeleteAccountPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (event) => {
    const { checked, name, type, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          city: "Not provided",
          subject: "Account deletion request",
          inquiryType: "Account Deletion",
          message:
            "The user has requested permanent deletion of their Swarikaro account and associated personal data.",
        }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result?.message || "Unable to submit your request.");
      setForm(initialForm);
      setStatus("success");
      setShowSuccess(true);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to submit your request right now.");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf5] pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 top-56 h-72 w-72 rounded-full border-[18px] border-orange-200/40" />
      <div className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-5xl text-center">
         
          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-[#073f59] sm:text-5xl lg:text-6xl">
            Delete Your <span className="text-orange-500">Swarikaro</span>{" "}
            Account
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Submit this form to request deletion of your Swarikaro account and
            personal data associated with the Swarikaro app.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#07536e,#073f59_58%,#082f49)] p-7 text-white shadow-2xl shadow-[#073f59]/20 sm:p-10">
            <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 top-8 h-36 w-36 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-950/20">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold">
                Before You Submit
              </h2>
              <p className="mt-2 text-lg leading-7 text-white/75">
                Please review the following information before requesting
                account deletion.
              </p>
              <ul className="mt-8 space-y-5">
                {beforeYouSubmit.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="pt-1 text-sm leading-6 text-white/90">
                        {item.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 border-t border-white/20 pt-6">
                <div className="flex items-start gap-4">
                  <Headphones className="mt-1 h-7 w-7 shrink-0 text-white" />
                  <p className="text-sm leading-6 text-white/85">
                    Need help? Contact us at
                    <br />
                    <a
                      href="mailto:support@swarikaro.com"
                      className="inline-flex items-center gap-2 pt-1 text-base font-bold text-orange-300 transition hover:text-orange-200"
                    >
                      support@swarikaro.com <ArrowRight className="h-4 w-4" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#073f59]">
                  Account Deletion Request
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Enter the details associated with your Swarikaro account so we
                  can verify your request.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#073f59]">
                  <User className="h-4 w-4 text-orange-500" /> Full Name
                </span>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#073f59]">
                  <Mail className="h-4 w-4 text-orange-500" /> Email Address
                </span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#073f59]">
                  <Phone className="h-4 w-4 text-orange-500" /> Mobile Number
                </span>
                <div className="flex h-14 overflow-hidden rounded-xl border border-slate-300 bg-white transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10">
                  <span className="flex items-center border-r border-slate-200 px-4 text-sm font-semibold text-[#073f59]">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={form.mobile}
                    onChange={updateField}
                    autoComplete="tel"
                    inputMode="numeric"
                    placeholder="Enter your mobile number"
                    className="min-w-0 flex-1 px-4 text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>
              <label className="flex items-start gap-4 rounded-2xl bg-orange-50/80 p-4 text-sm leading-6 text-[#17384b]">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={form.consent}
                  onChange={updateField}
                  className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 accent-orange-500"
                />
                <span>
                  I understand that account deletion is permanent and I request
                  deletion of my Swarikaro account and associated personal data.
                </span>
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(135deg,#fb7a12,#ff5b00)] font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending request
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Request Account Deletion
                  </>
                )}
              </button>
              {message && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {message}
                </p>
              )}
              <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                <LockKeyhole className="h-4 w-4 shrink-0" /> Your information is
                secure and will only be used to process this request.
              </p>
            </form>
          </section>
        </div>

        <section className="mt-8 grid overflow-hidden rounded-3xl border border-white bg-white/90 shadow-xl shadow-slate-900/5 md:grid-cols-3">
          {reassuranceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`flex gap-4 p-6 ${index < reassuranceItems.length - 1 ? "md:border-r md:border-slate-200" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf5f7] text-[#073f59]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-bold text-[#073f59]">{item.title}</h2>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
      <SuccessModal
        open={showSuccess}
        message="Your account deletion request has been received. We will contact you if more information is needed."
        onClose={() => setShowSuccess(false)}
      />
    </main>
  );
}
