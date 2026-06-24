"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { faqCategories } from "@/lib/faq-data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[hsl(210,25%,97%)] relative overflow-hidden">
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faq-hex" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
            <polygon points="25,0 50,14.4 50,28.9 25,43.3 0,28.9 0,14.4" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-hex)" />
      </svg>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(160,84%,39%)]/3 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge with corner brackets */}
          <div className="flex justify-center mb-6">
            <div
              className="group inline-block text-sm font-medium text-[hsl(160,84%,35%)] px-4 py-1 rounded-full relative hover:px-6 transition-[padding] duration-500 ease-in-out font-dm-sans"
            >
              <span 
                className="absolute top-0 left-1 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm group-hover:left-0 transition-[left] duration-500 ease-in-out" 
                style={{ borderColor: 'hsl(160, 84%, 39%)' }}
              ></span>
              <span 
                className="absolute bottom-0 right-1 w-3 h-3 border-r-2 border-b-2 rounded-br-sm group-hover:right-0 transition-[right] duration-500 ease-in-out" 
                style={{ borderColor: 'hsl(160, 84%, 39%)' }}
              ></span>
              <span className="uppercase tracking-wider font-semibold">FAQ</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3 font-space-grotesk"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-[hsl(215,14%,46%)] mt-4 max-w-xl mx-auto font-dm-sans"
          >
            Everything you need to know about our loan products and process.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-3xl mx-auto space-y-8">
          {faqCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h3 
                className="font-semibold text-[hsl(215,28%,12%)] text-lg mb-3 flex items-center gap-2 font-space-grotesk"
              >
                <HelpCircle size={18} className="text-[hsl(160,84%,39%)]" />
                {cat.category}
              </h3>
              
              <div className="space-y-3">
                {cat.faqs.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  return (
                    <div 
                      key={key} 
                      className="bg-white rounded-xl border border-[hsl(214,20%,90%)] overflow-hidden hover:border-[hsl(160,84%,39%)]/20 transition-colors shadow-sm"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === key ? null : key)}
                        className="w-full flex items-center justify-between p-5 text-left outline-none"
                      >
                        <span 
                          className="font-semibold text-[hsl(215,28%,12%)] pr-4 text-sm font-space-grotesk"
                        >
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-[hsl(215,14%,46%)] shrink-0 transition-transform duration-300 ${
                            openIndex === key ? "rotate-180 text-[hsl(160,84%,39%)]" : ""
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {openIndex === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p 
                              className="px-5 pb-5 text-[hsl(215,14%,46%)] text-sm leading-relaxed font-dm-sans"
                            >
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p
            className="text-[hsl(215,14%,46%)] text-sm mb-4 font-dm-sans"
          >
            {"Can't find what you're looking for?"}
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-[hsl(214,20%,90%)] text-[hsl(215,28%,12%)] hover:border-[hsl(160,84%,39%)] hover:text-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)]/5 font-dm-sans px-8 rounded-md"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
