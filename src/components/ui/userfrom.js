"use client";

import { Loader2, Mail, Phone, Send, User,Bell } from "lucide-react";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  message: "Notify me when the SwariKaro app is available.",
};

export default function UserForm({ onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
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
      setMessage("Thanks! We will notify you when the app is live.");
      if (typeof onSuccess === "function") {
        setTimeout(() => onSuccess(), 2000);
      }
      setShowSuccess(true);
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message || "Something went wrong. Please try again in a moment.",
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5 text-left">
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
            className="h-12 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
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
            className="h-12 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
          />
        </label>
      </div>

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
          className="h-12 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-slate-600 outline-none transition-all focus:border-orange-500"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending
          </>
        ) : (
          <>
            <Send size={18} />
    Submit To
          </>
        )}
      </button>

     
      </form>
      <SuccessModal open={showSuccess} message={message || "We'll notify you."} onClose={() => setShowSuccess(false)} />
    </>
  );
}
