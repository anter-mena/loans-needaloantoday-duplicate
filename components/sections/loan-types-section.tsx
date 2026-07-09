"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, GraduationCap, Car, Heart, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid-loan" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-loan)" />
  </svg>
);

const loanTypes = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Finance your dream home with competitive rates and flexible terms.",
    range: "$10K - $50K",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    desc: "Grow your business faster with flexible capital solutions.",
    range: "$5K - $50K",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    desc: "Invest in your future with affordable education financing.",
    range: "$2K - $50K",
  },
  {
    icon: Car,
    title: "Auto Loan",
    desc: "Get behind the wheel faster with competitive auto financing.",
    range: "$5K - $50K",
  },
  {
    icon: Heart,
    title: "Personal Loan",
    desc: "For life's important moments — weddings, travel, emergencies.",
    range: "$1K - $50K",
  },
  {
    icon: Wrench,
    title: "Renovation Loan",
    desc: "Transform your space beautifully with home improvement funding.",
    range: "$5K - $50K",
  },
];

const LoanTypesSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[hsl(215,28%,12%)] relative overflow-hidden">
      <GridPattern />
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-[hsl(160,84%,39%)]/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full border border-[hsl(160,84%,39%)]/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge with corner brackets */}
          <div className="flex justify-center mb-6">
            <div
              className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span
                className="absolute top-0 left-1 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm group-hover:left-0 transition-[left] duration-500 ease-in-out"
                style={{ borderColor: 'hsl(160, 84%, 39%)' }}
              ></span>
              <span
                className="absolute bottom-0 right-1 w-3 h-3 border-r-2 border-b-2 rounded-br-sm group-hover:right-0 transition-[right] duration-500 ease-in-out"
                style={{ borderColor: 'hsl(160, 84%, 39%)' }}
              ></span>
              <span className="uppercase tracking-wider font-semibold">Loan Products</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Find the Right Loan for You
          </h2>
          <p
            className="text-white/50 mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {"Whether it's a home, car, or business — we've got the right loan product to match your goals."}
          </p>
        </div>

        {/* Top 3 */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {loanTypes.slice(0, 3).map((loan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border rounded-xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsla(160, 84%, 39%, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div className="p-5 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-15">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center">
                    <loan.icon className="text-[hsl(160,84%,39%)]" size={18} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {loan.title}
                  </h3>
                </div>

                <div className="mt-auto">
                  {/* Description */}
                  <p
                    className="text-white/50 text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {loan.desc}
                  </p>

                  {/* Price + Apply */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[hsl(160,84%,39%)] font-bold text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {loan.range}
                    </span>
                    <a
                      href="/application-form"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).gtag) {
                          (window as any).gtag("event", "loan_application_click", {
                            event_category: "engagement",
                            event_label: "Loan Types Apply Button",
                            event_source: "loan_types_section",
                          });
                        }
                      }}
                    >
                      <Button
                        variant="link"
                        className="text-[hsl(160,84%,39%)] p-0 h-auto text-sm hover:text-[hsl(160,84%,35%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Apply →
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 */}
        <div className="grid sm:grid-cols-3 gap-5">
          {loanTypes.slice(3).map((loan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border rounded-xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsla(160, 84%, 39%, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div className="p-5 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-15">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center">
                    <loan.icon className="text-[hsl(160,84%,39%)]" size={18} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {loan.title}
                  </h3>
                </div>

                <div className="mt-auto">
                  {/* Description */}
                  <p
                    className="text-white/50 text-sm mb-3 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {loan.desc}
                  </p>

                  {/* Price + Apply */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[hsl(160,84%,39%)] font-bold text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {loan.range}
                    </span>
                    <a
                      href="/application-form"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).gtag) {
                          (window as any).gtag("event", "loan_application_click", {
                            event_category: "engagement",
                            event_label: "Loan Types Apply Button",
                            event_source: "loan_types_section",
                          });
                        }
                      }}
                    >
                      <Button
                        variant="link"
                        className="text-[hsl(160,84%,39%)] p-0 h-auto text-sm hover:text-[hsl(160,84%,35%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Apply →
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypesSection;
