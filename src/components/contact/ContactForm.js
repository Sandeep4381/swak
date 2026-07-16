"use client";

import {
  ChevronDown,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Tag,
  User,
} from "lucide-react";
import { useState } from "react";
import SuccessModal from "../ui/SuccessModal";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  city: "",
  subject: "",
  inquiryType: "",
  message: "",
  consent: false,
};

const inquiryTypes = [
  "Vehicle Rental",
  "Become a Partner",
  "Business Collaboration",
  "Customer Support",
  "Other",
];

export default function ContactForm() {
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
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit the form.");
      }

      setForm(initialForm);
      setStatus("success");
      setShowSuccess(true);
      setMessage("Thanks. We've received your message and will reply soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message || "Something went wrong. Please try again in a moment.",
      );
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <h2 className="text-2xl font-bold  text-slate-600">Send Us a Message</h2>
      <p className="mt-3 text-lg leading-8 text-slate-600">
        Fill out the form below and our team will get in touch with you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <User className="h-4 w-4 text-orange-500" />
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={updateField}
              placeholder="Your Name"
              className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Phone className="h-4 w-4 text-orange-500" />
              Mobile
            </span>
            <input
              type="tel"
              name="mobile"
              required
              value={form.mobile}
              onChange={updateField}
              placeholder="Your Mobile Number"
              className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Mail className="h-4 w-4 text-orange-500" />
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={updateField}
              placeholder="Your Email Address"
              className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <MapPin className="h-4 w-4 text-orange-500" />
              City
            </span>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={updateField}
              placeholder="Your City"
              className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Tag className="h-4 w-4 text-orange-500" />
              Subject
            </span>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={updateField}
              placeholder="Subject"
              className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <FileText className="h-4 w-4 text-orange-500" />
              Inquiry Type
            </span>
            <span className="relative block">
              <select
                name="inquiryType"
                required
                value={form.inquiryType}
                onChange={updateField}
                className="h-14 w-full appearance-none rounded-xl border border-[#EADFCE] bg-white px-4 pr-11 text-slate-600 outline-none transition-all focus:border-orange-500"
              >
                <option value="">Select Inquiry Type</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500" />
            </span>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <MessageSquare className="h-4 w-4 text-orange-500" />
            Message
          </span>
          <textarea
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={updateField}
            placeholder="How can we help you?"
            className="w-full rounded-xl border border-[#EADFCE] bg-white p-4 text-slate-600 outline-none transition-all focus:border-orange-500"
          />
        </label>

        <label className="flex items-start gap-3 text-sm font-semibold text-slate-600">
          <input
            type="checkbox"
            name="consent"
            required
            checked={form.consent}
            onChange={updateField}
            className="mt-1 h-4 w-4 rounded border-[#EADFCE] accent-orange-500"
          />
          <span>
            I agree to the{" "}
            <a href="/privacy-policy" className="text-orange-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms-and-condition"
              className="text-orange-500 underline"
            >
              Terms & Conditions
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading"
            ? <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending
              </>
            : <>
                <Send size={18} />
                Send Message
              </>}
        </button>

        {message && (
          <p
            className={`rounded-xl px-4 py-3 text-sm font-semibold ${
              status === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {message}
          </p>
        )}
      </form>
      <SuccessModal
        open={showSuccess}
        message={"Thanks. We've received your message and will reply soon."}
        onClose={() => setShowSuccess(false)}
      />
    </section>
  );
}
