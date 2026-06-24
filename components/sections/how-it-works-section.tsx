"use client";

import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Banknote, ChevronRight } from "lucide-react";

const steps = [
  { icon: FileText, title: "Fill Application", desc: "Complete our simple online form in under 5 minutes." },
  { icon: Search, title: "Quick Review", desc: "Our AI reviews your application and credit profile instantly." },
  { icon: CheckCircle, title: "Get Approved", desc: "Receive your loan offer with transparent terms and rates." },
  { icon: Banknote, title: "Receive Funds", desc: "Money is deposited directly into your bank account." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Diagonal lines pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
      
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[hsl(160,84%,39%)]/6 blur-3xl" />
        <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-[hsl(160,84%,45%)]/4 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[hsl(160,84%,39%)]/5 blur-3xl" />
      </div>
      
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
              <span className="uppercase tracking-wider font-semibold">Simple Process</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3 font-space-grotesk"
          >
            How It Works
          </h2>
          <p
            className="text-[hsl(215,14%,46%)] mt-4 max-w-xl mx-auto font-dm-sans"
          >
            Four simple steps from application to funding. No hidden fees, no surprises.
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="text-center relative flex-1 group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center mx-auto mb-5 relative border-4 border-white shadow-lg shadow-[hsl(160,84%,39%)]/10 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="text-[hsl(160,84%,39%)]" size={28} />
                    <span 
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(160,84%,39%)] to-[hsl(160,84%,39%)]/80 text-white text-[10px] font-bold flex items-center justify-center shadow-md font-space-grotesk"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3 
                    className="text-lg font-semibold text-[hsl(215,28%,12%)] mb-2 font-space-grotesk"
                  >
                    {s.title}
                  </h3>
                  <p 
                    className="text-[hsl(215,14%,46%)] text-sm font-dm-sans leading-relaxed"
                  >
                    {s.desc}
                  </p>
                </motion.div>
                
                {/* ChevronRight between steps - positioned at icon level with animation */}
                {i < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    className="hidden lg:flex items-start pt-4"
                  >
                    <ChevronRight 
                      className="text-[hsl(160,84%,39%)]/40" 
                      size={28} 
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
