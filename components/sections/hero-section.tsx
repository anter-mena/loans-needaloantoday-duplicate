"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Shield, CreditCard } from "lucide-react";
import Image from "next/image";

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const stats = [
  { value: "98%", label: "Approval Rate" },
  { value: "24h", label: "Fast Disbursement" },
  { value: "$500K", label: "Loans Funded" },
  { value: "50K+", label: "Happy Customers" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-[hsl(215,28%,12%)] overflow-hidden pt-10 pb-8 md:pt-10 md:pb-16 min-h-[80vh] flex items-center rounded-b-none md:rounded-b-none">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute top-1/4 -right-20 w-125 h-125 rounded-full bg-[hsl(160,84%,39%)]/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-100 h-100 rounded-full bg-[hsl(160,84%,39%)]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-gradient-radial from-[hsl(160,84%,39%)]/3 to-transparent rounded-full" />
        <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-[hsl(160,84%,39%)]/30 animate-pulse" />
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 rounded-full bg-[hsl(160,84%,39%)]/20 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 rounded-full bg-[hsl(160,84%,39%)]/25 animate-pulse" />
      </div>

      {/* Bottom Corner Decorations */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[hsl(160,84%,39%)]/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[hsl(160,84%,39%)]/30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[hsl(160,84%,39%)]/10 border border-[hsl(160,84%,39%)]/20 rounded-full px-4 py-1.5 mb-8"
            >
              <Star className="text-yellow-400" size={14} fill="currentColor" />
              <span
                className="text-sm text-[hsl(160,84%,39%)] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                5k+ reviews on Trustpilot
              </span>
              <div className="flex -space-x-0.75">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get Funds{" "}
              <span className="relative inline-block">
                <span className="text-[hsl(160,84%,39%)]">Faster</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[hsl(160,84%,39%)]/30 rounded-full origin-left"
                />
              </span>{" "}
              Than Ever Before
            </h1>

            <p
              className="text-white/55 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply in minutes, get approved in hours. Competitive rates with flexible terms tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4 mb-14 justify-center lg:justify-start">
              <a
                href="/application-form"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "loan_application_click", {
                      event_category: "engagement",
                      event_label: "Hero Get Started Button",
                      event_source: "hero_section",
                    });
                  }
                }}
              >
                <Button
                  size="lg"
                  className="gap-2 text-base h-13 px-8 rounded-xl bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] ring-2 ring-[hsl(160,84%,39%)] ring-offset-2 ring-offset-[hsl(215,28%,12%)] outline-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get Started Free <ArrowRight size={18} />
                </Button>
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base h-13 px-8 rounded-xl border-2 border-[hsl(160,84%,39%)] text-[hsl(160,84%,39%)] bg-transparent hover:bg-[hsl(160,84%,39%)]/10 hover:text-[hsl(160,84%,39%)]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  See How It Works
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/75.jpg",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Customer avatar ${i + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-[hsl(215,28%,12%)] object-cover"
                    priority={i < 2} // Preload the first two avatars for LCP
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p
                  className="text-xs text-white/40"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Trusted by 50,000+ customers
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs text-white/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Floating cards composition */}
          <div className="relative hidden lg:block h-137.5">
            {/* Main dashboard card */}
            <FloatingCard delay={0.3} className="absolute top-8 left-8 right-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p
                      className="text-white/40 text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      All Deposits
                    </p>
                    <p
                      className="text-white text-2xl font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      $820,340
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
                    <TrendingUp className="text-[hsl(160,84%,39%)]" size={20} />
                  </div>
                </div>
                <div className="flex gap-2">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-16">
                      <div className="bg-[hsl(160,84%,39%)]/40 rounded-sm" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Approval card */}
            <FloatingCard delay={0.5} className="absolute top-52 -left-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(160,84%,39%)] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Loan Approved!
                  </p>
                  <p
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    $25,000 • Low Rate
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Credit score card */}
            <FloatingCard delay={0.7} className="absolute top-48 right-0">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
                <p
                  className="text-white/40 text-xs mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Credit Score
                </p>
                <p
                  className="text-[hsl(160,84%,39%)] text-3xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  785
                </p>
                <p
                  className="text-[hsl(160,84%,39%)]/60 text-xs mt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Excellent ↑
                </p>
              </div>
            </FloatingCard>

            {/* Quick transfer card */}
            <FloatingCard delay={0.9} className="absolute bottom-12 left-12 right-12">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
                      <CreditCard className="text-[hsl(160,84%,39%)]" size={18} />
                    </div>
                    <div>
                      <p
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Smart Wealth Card
                      </p>
                      <p
                        className="text-white/40 text-xs"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        **** **** **** 4291
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Shield className="text-[hsl(160,84%,39%)]" size={14} />
                    <span
                      className="text-[hsl(160,84%,39%)] text-xs font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Secured
                    </span>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
