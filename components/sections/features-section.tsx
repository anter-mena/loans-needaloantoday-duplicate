"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Percent, CreditCard, Headphones } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DotPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots-features" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots-features)" />
  </svg>
);

const features = [
  { icon: Zap, title: "Instant Approval", desc: "Get pre-approved in minutes with our AI-powered credit analysis." },
  { icon: Percent, title: "Competitive Rates", desc: "Enjoy favorable rates tailored to your profile with transparent pricing." },
  { icon: Clock, title: "Fast Disbursement", desc: "Funds deposited into your account within 24 hours of approval." },
  { icon: Shield, title: "Secure Process", desc: "Bank-grade encryption protects your personal and financial data." },
  { icon: CreditCard, title: "Flexible Terms", desc: "Choose repayment plans that fit your budget and financial goals." },
  { icon: Headphones, title: "24/7 Support", desc: "Our loan specialists are available around the clock to assist you." },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[hsl(210,25%,97%)] relative overflow-hidden">
      <DotPattern />
      
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(160,84%,39%)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(160,84%,39%)]/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
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
              <span className="uppercase tracking-wider font-semibold">Why Choose Us</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything You Need for a Fast Loan
          </h2>
          <p
            className="text-[hsl(215,14%,46%)] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {"We've streamlined the entire lending process so you can focus on what matters most."}
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-xl p-6 border transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_hsla(160,84%,39%,0.08)]"
              style={{
                borderColor: "hsl(214, 20%, 90%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px hsla(160, 84%, 39%, 0.08)";
                e.currentTarget.style.borderColor = "hsla(160, 84%, 39%, 0.2)";
                
                // Animate the top bar
                const topBar = e.currentTarget.querySelector('.top-gradient-bar') as HTMLElement;
                if (topBar) {
                  topBar.style.transform = 'scaleX(1)';
                }
                
                // Animate icon background
                const iconBg = e.currentTarget.querySelector('.icon-background') as HTMLElement;
                if (iconBg) {
                  iconBg.style.background = 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.3), hsla(160, 84%, 39%, 0.1))';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "hsl(214, 20%, 90%)";
                
                // Reset the top bar
                const topBar = e.currentTarget.querySelector('.top-gradient-bar') as HTMLElement;
                if (topBar) {
                  topBar.style.transform = 'scaleX(0)';
                }
                
                // Reset icon background
                const iconBg = e.currentTarget.querySelector('.icon-background') as HTMLElement;
                if (iconBg) {
                  iconBg.style.background = 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.2), hsla(160, 84%, 39%, 0.05))';
                }
              }}
            >
              {/* Card gradient accent */}
              <div 
                className="top-gradient-bar absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[hsl(160,84%,39%)]/60 via-[hsl(160,84%,39%)] to-[hsl(160,84%,39%)]/60 transition-all duration-300 origin-left"
                style={{
                  transform: 'scaleX(0)',
                }}
              />
              
              {/* Icon container */}
              <div 
                className="icon-background w-12 h-12 rounded-lg flex items-center justify-center mb-15 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.2), hsla(160, 84%, 39%, 0.05))',
                }}
              >
                <f.icon className="text-[hsl(160,84%,39%)]" size={24} />
              </div>
              
              <h3 
                className="text-lg font-semibold text-[hsl(215,28%,12%)]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {f.title}
              </h3>
              <p 
                className="text-[hsl(215,14%,46%)] text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
