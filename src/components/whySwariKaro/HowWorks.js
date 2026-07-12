"use client";
import { motion } from "motion/react";
import { UserPlus, Bell, Calendar, DollarSign } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    description: "Download the Swarikaro Partner App and create your partner account.",
  },
  {
    icon: Bell,
    step: "02",
    title: "Complete Verification",
    description: "Submit your business details, shop information, vehicle documents and verification details.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "List Your Vehicles",
    description: "Add your vehicles, set pricing, update availability and publish your listings.",
  },
  {
    icon: DollarSign,
    step: "04",
    title: "Start Receiving Bookings",
    description: "Accept booking requests, hand over vehicles to customers and start earning through Swarikaro.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className=" text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            How it <span className="text-orange-500">Works.</span>
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Start earning with Swarikaro in four simple steps
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border h-full min-h-[260px] relative">
                  {/* Step number badge */}
                 

                 <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
  className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl"
  style={{
    background:
      "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
  }}
>
  <step.icon className="h-4 w-4 text-white" />
</motion.div>

                 <h4 className="mb-2 text-left text-sm font-bold text-slate-600 sm:text-base">
  {step.title}
</h4>

<p className="text-left text-sm sm:text-base leading-relaxed text-slate-600">
  {step.description}
</p>
                </div>

                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    className="lg:hidden flex justify-center my-4"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}
