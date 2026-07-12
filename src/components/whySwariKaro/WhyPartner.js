"use client";
import { motion } from "motion/react";
import { Users, Smartphone, Car, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach More Local Customers.",
    description: "Connect with users searching for rental and reservation vehicles near your business location.",
  },
  {
    icon: Smartphone,
    title: "Manage Everything from One App.",
    description: "Accept bookings, manage vehicles, update availability, view earnings and grow your business with the Swarikaro Partner App.",
  },
  {
    icon: Car,
    title: "List Multiple Vehicles.",
    description: "Whether you have one bike or an entire fleet, you can manage all your vehicles from a single account.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Business Control.",
    description: "Set your own pricing, manage availability, accept bookings and operate on your own schedule.",
  },
  {
    icon: Shield,
    title: "Earn More with Every Booking.",
    description: "Turn idle vehicles into a steady source of income while expanding your customer reach.",
  },
  {
    icon: TrendingUp,
    title: "Trusted & Verified Platform.",
    description: "Partner with a platform focused on verified users, secure onboarding and transparent business practices.",
  },
];

export function WhyPartner() {
  return (
    <section className="py-16 sm:py-20 lg:py-20 relative overflow-hidden">
      {/* Background decoration */}
       <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className=" text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Why Partner With <span className="text-orange-500">Swarikaro ?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: 'var(--primary)' }}
              >
                <benefit.icon className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
              </motion.div>

               <h4
                className="font-bold text-sm sm:text-base text-slate-600 mb-2">{benefit.title}</h4>
                
                
          

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

     

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 text-sm text-slate-600"
        >
          {["Simple onboarding", "Dedicated support", "Timely payments"].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
