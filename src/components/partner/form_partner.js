"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Headphones,
  Loader2,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SuccessModal from "../ui/SuccessModal";

const initialForm = {
  name: "",
  mobile: "",
  city: "",
  state: "",
  vehicleType: "",
  vehicleCount: "",
  notes: "",
};

const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const vehicleTypes = [
  "Bike",
  "Scooter",
  "Car",
  "Mini Bus",
  "Multiple Types",
];

const benefits = [
  "Early access",
  "Priority visibility",
  "Launch support",
  "Reduced commission for early partners",
];

export function PartnerInterestForm({
  onClose,
  modal = true,
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(modal);
  const [showSuccess, setShowSuccess] = useState(false);
  // Auto-detect removed: default to unloaded but ready state
  const [locationLoaded] = useState(true);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    if (modal && status === "success") {
      onClose?.();
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/partner-interest", {
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
      setMessage("Thank you. Our team will contact you shortly.");
      setShowPopup(false);
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
      {showPopup && (
        <div className="fixed inset-0 z-[999998] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
          >
            <button
              type="button"
              aria-label="Close partner form"
             onClick={() => {
  setShowPopup(false);
  onClose?.();
}}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-orange-100 hover:text-orange-600"
            >
              <X className="h-5 w-5" />
            </button>

            <PartnerFormCard
              form={form}
              status={status}
              message={message}
              updateField={updateField}
              handleSubmit={handleSubmit}
              locationLoaded={locationLoaded}
              className="border-0 shadow-none"
            />
          </motion.div>
        </div>
      )}

      {!modal && (
        <section
          id="partner-interest"
          className="relative overflow-hidden py-16 sm:py-20 lg:py-18"
        >
          <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-base font-extrabold text-orange-500">
  <span className="h-px w-16 bg-orange-500" />
  PARTNER REGISTRATION
  <span className="h-px w-16 bg-orange-500" />
</div>
<h2 className="mt-3 text-center text-3xl font-bold leading-[1.1] text-foreground sm:text-center sm:text-4xl lg:text-left lg:text-5xl">
  JOIN SWARIKARO{" "}
  <span className="text-orange-500">PARTNER</span>
</h2>
         
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                 Share your details and our onboarding team will guide you through the registration and verification process.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-600 ">
                    Become an Early Partner
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 shadow-soft"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-600" />
                        <span className="text-sm  text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <PartnerFormCard
                form={form}
                status={status}
                message={message}
                updateField={updateField}
                handleSubmit={handleSubmit}
                locationLoaded={locationLoaded}
                motionProps={{
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 },
                }}
              />
            </div>
          </div>
        </section>
      )}
      <SuccessModal open={showSuccess} message={message || "Thank you."} onClose={closeSuccess} />
    </>
  );
}

function PartnerFormCard({
  form,
  status,
  message,
  updateField,
  handleSubmit,
  locationLoaded,
  className = "",
  motionProps = {},
}) {
  return (
    <motion.form
      {...motionProps}
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-border bg-white p-5 shadow-xl sm:p-7 lg:p-8 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-600">
          Partner Interest Form
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Share your details and Swarikaro will reach out for onboarding.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary">
            <User className="h-4 w-4 text-primary" />
            Name
          </span>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Your full name"
            className="w-full h-12 rounded-lg border border-border bg-white px-4 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Phone className="h-4 w-4 text-primary" />
            Mobile
          </span>
          <input
            required
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={updateField}
            placeholder="10-digit number"
            pattern="[0-9+\-\s]{10,15}"
            className="w-full h-12 rounded-lg border border-border bg-white px-4 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <MapPin className="h-4 w-4 text-primary" />
            City
          </span>
          <input
            required
            type="text"
            name="city"
            value={form.city}
            onChange={updateField}
            placeholder="Your city"
            className="w-full h-12 rounded-lg border border-border bg-white px-4 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <MapPin className="h-4 w-4 text-primary" />
            State
          </span>
         <Select
  onValueChange={(value) =>
  updateField({
    target: {
      name: "state",
      value,
    },
  })
}
>
  <SelectTrigger className="h-12 w-full rounded-lg border border-border bg-white px-4 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
    <SelectValue
      placeholder={
        locationLoaded ? "Select state" : "Detecting your state..."
      }
    />
  </SelectTrigger>

  <SelectContent className="max-h-48 overflow-y-auto">
    {indianStates.map((state) => (
      <SelectItem key={state} value={state}>
        {state}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Building2 className="h-4 w-4 text-primary" />
            Vehicle Type
          </span>
          <select
            required
            name="vehicleType"
            value={form.vehicleType}
            onChange={updateField}
            className="w-full h-12 rounded-lg border border-border bg-white px-4 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          >
            <option value="">Select type</option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary">
            <Headphones className="h-4 w-4 text-primary" />
            Number of Vehicles
          </span>
          <input
            required
            min="1"
            type="number"
            name="vehicleCount"
            value={form.vehicleCount}
            onChange={updateField}
            placeholder="Example: 3"
            className="w-full h-12 rounded-lg border border-border bg-white px-4 text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Headphones className="h-4 w-4 text-primary" />
            Notes <span className="font-normal text-slate-400">(optional)</span>
          </span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={updateField}
            rows={3}
            placeholder="Add any extra notes here"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-600 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading"
          ? <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending
            </>
          : <>
              Become an Early Partner
              <ArrowRight className="h-5 w-5" />
            </>}
      </button>
<p className="text-xs text-slate-600 text-center mt-2">
                By submitting, you agree to Swarikaro's partner terms & privacy policy.
              </p>
      {message && (
        <p
          className={`mt-4 rounded-lg px-4 py-3 text-sm font-semibold ${
            status === "success"
              ? "--foreground success bg-success/10 text-success"
              : "--foreground-error  bg-error/10 text-error"
          }`}
        >
          {message}
        </p>
      )}
    </motion.form>
  );
}
