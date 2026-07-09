"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  // Floating bubble animations
  const floatingBlob1: any = {
    x: [0, 30, -20, 0],
    y: [0, -30, 20, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingBlob2: any = {
    x: [0, -40, 30, 0],
    y: [0, 25, -35, 0],
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingBlob3: any = {
    x: [0, 25, -25, 0],
    y: [0, -20, 20, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingBlob4: any = {
    x: [0, -30, 20, 0],
    y: [0, 30, -25, 0],
    transition: {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingBlob5: any = {
    x: [0, 15, -15, 0],
    y: [0, -35, 35, 0],
    transition: {
      duration: 28,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingCircle1: any = {
    x: [0, 15, -10, 0],
    y: [0, -20, 15, 0],
    rotate: [0, 90, 180, 360],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const floatingCircle2: any = {
    x: [0, -12, 8, 0],
    y: [0, 18, -12, 0],
    rotate: [0, -90, -180, -360],
    transition: {
      duration: 22,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[hsl(215,28%,12%)] rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-hex" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
                <polygon points="25,0 50,14.4 50,28.9 25,43.3 0,28.9 0,14.4" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-hex)" />
          </svg>

          {/* Animated floating gradient blobs */}
          <motion.div
            className="absolute -top-16 -left-16 w-48 h-48 bg-[hsl(160,84%,39%)]/10 rounded-full blur-3xl pointer-events-none"
            animate={floatingBlob1}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-[hsl(160,84%,39%)]/8 rounded-full blur-3xl pointer-events-none"
            animate={floatingBlob2}
          />
          {/* Middle area blobs */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-56 h-56 bg-[hsl(160,84%,39%)]/6 rounded-full blur-3xl pointer-events-none"
            animate={floatingBlob3}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-40 h-40 bg-[hsl(160,84%,39%)]/7 rounded-full blur-3xl pointer-events-none"
            animate={floatingBlob4}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-52 h-52 bg-[hsl(160,84%,39%)]/5 rounded-full blur-3xl pointer-events-none"
            animate={floatingBlob5}
          />

          {/* Animated decorative circles */}
          <motion.div
            className="absolute top-8 right-12 w-20 h-20 rounded-full border border-[hsl(160,84%,39%)]/10"
            animate={floatingCircle1}
          />
          <motion.div
            className="absolute bottom-10 left-16 w-12 h-12 rounded-full border border-[hsl(160,84%,39%)]/5"
            animate={floatingCircle2}
          />

          <div className="relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-space-grotesk"
            >
              Ready to Get Your Loan?
            </h2>
            <p
              className="text-white/60 text-lg mb-8 max-w-lg mx-auto font-dm-sans"
            >
              Join thousands of satisfied customers. Apply today and get funded within 24 hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/application-form"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "loan_application_click", {
                      event_category: "engagement",
                      event_label: "CTA Section Apply Button",
                      event_source: "cta_section",
                    });
                  }
                }}
              >
                <Button
                  size="lg"
                  className="gap-2 bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] ring-2 ring-[hsl(160,84%,39%)] ring-offset-2 ring-offset-[hsl(215,28%,12%)] outline-none rounded-md px-8 py-3 font-dm-sans"
                >
                  Apply Now <ArrowRight size={18} />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[hsl(160,84%,39%)] text-[hsl(160,84%,39%)] bg-transparent hover:bg-[hsl(160,84%,39%)]/10 hover:text-[hsl(160,84%,39%)] rounded-md px-8 py-3 font-dm-sans"
                >
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
