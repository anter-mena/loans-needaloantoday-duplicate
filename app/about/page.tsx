"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/cta-section";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const values = [
  {
    icon: Shield,
    title: "Transparency",
    desc: "No hidden fees, no surprises. Every rate, term, and condition is clearly communicated upfront.",
  },
  {
    icon: Target,
    title: "Accessibility",
    desc: "We believe everyone deserves access to fair financing, regardless of their background.",
  },
  {
    icon: Eye,
    title: "Innovation",
    desc: "We leverage cutting-edge AI and technology to make lending faster and smarter.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We invest in financial literacy programs and support local communities across the nation.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Founded",
    desc: "Started with a mission to simplify personal lending.",
  },
  {
    year: "2018",
    title: "Expansion",
    desc: "Expanded to all 50 states.",
  },
  {
    year: "2020",
    title: "AI Launch",
    desc: "Introduced AI-powered instant credit analysis.",
  },
  {
    year: "2022",
    title: "50K Users",
    desc: "Reached fifty thousand registered borrowers.",
  },
  {
    year: "2024",
    title: "$500K Funded",
    desc: "Disbursed over half a million in total loans.",
  },
  {
    year: "2026",
    title: "Growth",
    desc: "Continuing to expand our services.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="pt-12 pb-16 md:pt-15 md:pb-25 bg-[hsl(215,28%,12%)] relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="about-dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[hsl(160,84%,39%)]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(160,84%,39%)]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge with corner brackets */}
              <div className="flex mb-6">
                <div
                  className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  <span
                    className="absolute top-0 left-1 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm group-hover:left-0 transition-[left] duration-500 ease-in-out"
                    style={{ borderColor: "hsl(160, 84%, 39%)" }}
                  ></span>
                  <span
                    className="absolute bottom-0 right-1 w-3 h-3 border-r-2 border-b-2 rounded-br-sm group-hover:right-0 transition-[right] duration-500 ease-in-out"
                    style={{ borderColor: "hsl(160, 84%, 39%)" }}
                  ></span>
                  <span className="uppercase tracking-wider font-semibold">
                    About NeedALoanToday
                  </span>
                </div>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight font-space-grotesk"
              >
                Redefining How
                <br />
                <span className="text-[hsl(160,84%,39%)]">
                  Lending Works
                </span>
              </h1>
              <p
                className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg font-dm-sans"
              >
                Founded in 2016, NeedALoanToday has grown from a small fintech startup to a trusted digital lender — serving over 50,000 borrowers and disbursing more than $500,000 in loans.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "$500K+", label: "Total Funded" },
                  { value: "50K+", label: "Borrowers" },
                  { value: "50", label: "States" },
                  { value: "4.9★", label: "Rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-2xl md:text-3xl font-bold text-[hsl(160,84%,39%)] font-space-grotesk"
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-white/40 text-sm font-dm-sans"
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Professional team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-80 md:h-105 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,28%,12%)]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[hsl(215,28%,12%)]/80 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
                      <TrendingUp
                        className="text-[hsl(160,84%,39%)]"
                        size={20}
                      />
                    </div>
                    <div>
                      <p
                        className="text-white font-semibold text-sm font-space-grotesk"
                      >
                        Trusted by Thousands
                      </p>
                      <p
                        className="text-white/50 text-xs font-dm-sans"
                      >
                        Fast, secure, and transparent lending
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[hsl(160,84%,39%)]/6 blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[hsl(160,84%,39%)]/4 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_hsla(160,84%,39%,0.12)] hover:-translate-y-1 hover:border-primary/30"
              style={{ borderColor: "hsl(214, 20%, 90%)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(160,84%,39%)]/40" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center mb-6">
                <Target className="text-[hsl(160,84%,39%)]" size={28} />
              </div>
              <h3
                className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-4 font-space-grotesk"
              >
                Our Mission
              </h3>
              <p
                className="text-[hsl(215,14%,46%)] leading-relaxed font-dm-sans"
              >
                {"To democratize access to financial services by making lending faster, fairer, and more transparent. We believe that a loan application shouldn't take weeks — it should take minutes."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_hsla(160,84%,39%,0.12)] hover:-translate-y-1 hover:border-primary/30"
              style={{ borderColor: "hsl(214, 20%, 90%)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(160,84%,39%)]/40 to-[hsl(160,84%,39%)]" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center mb-6">
                <Eye className="text-[hsl(160,84%,39%)]" size={28} />
              </div>
              <h3
                className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-4 font-space-grotesk"
              >
                Our Vision
              </h3>
              <p
                className="text-[hsl(215,14%,46%)] leading-relaxed font-dm-sans"
              >
                A world where everyone has access to fair, affordable credit. We envision a future where AI-driven lending empowers individuals and businesses to achieve their financial goals without barriers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[hsl(210,25%,97%)] relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="val-grid"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#val-grid)" />
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div
                className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out font-dm-sans"
              >
                <span
                  className="absolute top-0 left-1 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm group-hover:left-0 transition-[left] duration-500 ease-in-out"
                  style={{ borderColor: "hsl(160, 84%, 39%)" }}
                ></span>
                <span
                  className="absolute bottom-0 right-1 w-3 h-3 border-r-2 border-b-2 rounded-br-sm group-hover:right-0 transition-[right] duration-500 ease-in-out"
                  style={{ borderColor: "hsl(160, 84%, 39%)" }}
                ></span>
                <span className="uppercase tracking-wider font-semibold">
                  Our Values
                </span>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3 font-space-grotesk"
            >
              What Drives Us Forward
            </h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white border border-[hsl(214,20%,90%)] rounded-xl p-6 text-center transition-all group relative overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_hsla(160,84%,39%,0.12)]"
              >
                <div
                  className="value-top-bar absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(160,84%,39%)]/60 via-[hsl(160,84%,39%)] to-[hsl(160,84%,39%)]/60 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-[hsl(160,84%,39%)]" size={24} />
                </div>
                <h3
                  className="text-lg font-semibold text-[hsl(215,28%,12%)] mb-2 font-space-grotesk"
                >
                  {v.title}
                </h3>
                <p
                  className="text-[hsl(215,14%,46%)] text-sm leading-relaxed font-dm-sans"
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[hsl(215,28%,12%)] relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-[hsl(160,84%,39%)]/10" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-[hsl(160,84%,39%)]/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div
                className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out font-dm-sans"
              >
                <span
                  className="absolute top-0 left-1 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm group-hover:left-0 transition-[left] duration-500 ease-in-out"
                  style={{ borderColor: "hsl(160, 84%, 39%)" }}
                ></span>
                <span
                  className="absolute bottom-0 right-1 w-3 h-3 border-r-2 border-b-2 rounded-br-sm group-hover:right-0 transition-[right] duration-500 ease-in-out"
                  style={{ borderColor: "hsl(160, 84%, 39%)" }}
                ></span>
                <span className="uppercase tracking-wider font-semibold">
                  Our Journey
                </span>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3 font-space-grotesk"
            >
              A Decade of Impact
            </h2>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center relative flex-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(160,84%,39%)]/30 to-[hsl(160,84%,39%)]/10 flex items-center justify-center mx-auto mb-3 border-2 border-[hsl(215,28%,12%)] shadow-md">
                      <span
                        className="text-[hsl(160,84%,39%)] font-bold text-xs font-space-grotesk"
                      >
                        {t.year}
                      </span>
                    </div>
                    <h4
                      className="font-semibold text-white text-sm mb-1 font-space-grotesk"
                    >
                      {t.title}
                    </h4>
                    <p
                      className="text-white/40 text-xs leading-relaxed font-dm-sans"
                    >
                      {t.desc}
                    </p>
                  </motion.div>

                  {i < timeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      className="hidden lg:flex items-start pt-4"
                    >
                      <ChevronRight
                        className="text-[hsl(160,84%,39%)]/40"
                        size={24}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
