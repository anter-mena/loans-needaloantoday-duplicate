"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Bell, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const card1Features = ["Payment history", "Progress tracking", "Interest breakdown"];
const card2Features = ["Payment reminders", "Rate alerts", "Milestone celebrations", "Security updates"];

const FeaturesShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="showcase-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#showcase-grid)" />
      </svg>

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[hsl(160,84%,39%)]/6 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[hsl(160,84%,39%)]/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div
              className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                Smart Features
              </span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Financial Journey, Simplified
          </h2>
          <p
            className="text-[hsl(215,14%,46%)] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Manage your loans and finances with intelligent tools designed for your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 - Quick Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              borderColor: "hsl(214, 20%, 90%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 20px 40px hsla(160, 84%, 39%, 0.12)";
              e.currentTarget.style.borderColor = "hsla(160, 84%, 39%, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.07)";
              e.currentTarget.style.borderColor = "hsl(214, 20%, 90%)";
            }}
          >
            <div className="grid md:grid-cols-2 md:h-full">
              {/* Left: Image */}
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=700&fit=crop"
                  alt="Dashboard view"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/80 md:to-white" />

                {/* Floating notification card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[hsl(160,84%,39%)]/10 flex items-center justify-center shrink-0">
                      <Shield className="text-[hsl(160,84%,39%)]" size={14} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold text-[hsl(215,28%,12%)] mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Payment Received
                      </p>
                      <p
                        className="text-xs text-[hsl(215,14%,46%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Your payment of $450 was processed successfully
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(160,84%,39%)]/10 flex items-center justify-center">
                    <TrendingUp className="text-[hsl(160,84%,39%)]" size={16} />
                  </div>
                  <span
                    className="text-xs text-[hsl(160,84%,39%)] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Real-time Tracking
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Monitor Your Loans in Real-Time
                </h3>

                <p
                  className="text-[hsl(215,14%,46%)] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Track every payment, view your progress, and stay on top of your financial goals with our intuitive dashboard.
                </p>

                <div className="space-y-2 mb-6">
                  {card1Features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2
                        className="text-[hsl(160,84%,39%)]"
                        size={16}
                      />
                      <span
                        className="text-sm text-[hsl(215,14%,46%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <a
                    href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=needaloantoday"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        (window as any).gtag("event", "loan_application_click", {
                          event_category: "engagement",
                          event_label: "Features Card 1 View Dashboard",
                          event_source: "features_showcase",
                        });
                      }
                    }}
                  >
                    <Button
                      className="bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] w-full md:w-auto"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      View Dashboard
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2 - Smart Notifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              borderColor: "hsl(214, 20%, 90%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 20px 40px hsla(160, 84%, 39%, 0.12)";
              e.currentTarget.style.borderColor = "hsla(160, 84%, 39%, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.07)";
              e.currentTarget.style.borderColor = "hsl(214, 20%, 90%)";
            }}
          >
            <div className="grid md:grid-cols-2 md:h-full">
              {/* Left: Content */}
              <div className="p-6 md:p-8 flex flex-col order-2 md:order-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(160,84%,39%)]/10 flex items-center justify-center">
                    <Bell className="text-[hsl(160,84%,39%)]" size={16} />
                  </div>
                  <span
                    className="text-xs text-[hsl(160,84%,39%)] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Stay Informed
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Never Miss a Payment
                </h3>

                <p
                  className="text-[hsl(215,14%,46%)] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get instant notifications for upcoming payments, rate changes, and special offers tailored to your account.
                </p>

                <div className="space-y-2 mb-6">
                  {card2Features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2
                        className="text-[hsl(160,84%,39%)]"
                        size={16}
                      />
                      <span
                        className="text-sm text-[hsl(215,14%,46%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=needaloantoday"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).gtag) {
                          (window as any).gtag("event", "loan_application_click", {
                            event_category: "engagement",
                            event_label: "Features Card 2 Enable Alerts",
                            event_source: "features_showcase",
                          });
                        }
                      }}
                    >
                      <Button
                        className="bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Enable Alerts
                      </Button>
                    </a>
                    <div>
                      <p
                        className="text-xs text-[hsl(215,14%,46%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Save up to
                      </p>
                      <p
                        className="text-xl font-bold text-[hsl(160,84%,39%)]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        $590
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-64 md:h-full order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=700&fit=crop"
                  alt="Notifications"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-white/80 md:to-white" />

                {/* Floating stat card */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p
                    className="text-xs text-[hsl(215,14%,46%)] mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Loan Progress
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="hsl(214, 20%, 90%)"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="hsl(160, 84%, 39%)"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.68)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span
                        className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[hsl(215,28%,12%)]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        68%
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-xs text-[hsl(215,14%,46%)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        12 months left
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
