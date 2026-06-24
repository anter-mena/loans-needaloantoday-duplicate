"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  amount: string;
  fundedLabel: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Small Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "I got approved in just 2 hours and the funds were in my account the next morning. The process was incredibly smooth and the customer service was exceptional.",
    rating: 5,
    amount: "$35,000",
    fundedLabel: "funded",
  },
  {
    name: "James Rodriguez",
    role: "Freelance Developer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "As a freelancer, getting a loan was always difficult. NeedALoanToday's AI evaluation looked beyond traditional metrics and approved me quickly. Highly recommend!",
    rating: 5,
    amount: "$15,000",
    fundedLabel: "funded",
  },
  {
    name: "Emily Chen",
    role: "Real Estate Agent",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Everything was handled digitally and efficiently. Within hours I had an offer and the funds arrived faster than I expected. The best lending experience I've had.",
    rating: 5,
    amount: "$50,000",
    fundedLabel: "funded",
  },
  {
    name: "Michael Torres",
    role: "Restaurant Owner",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Needed quick capital to expand my restaurant. NeedALoanToday came through when traditional banks took weeks just to review my application. Funded in 18 hours!",
    rating: 5,
    amount: "$45,000",
    fundedLabel: "funded",
  },
  {
    name: "Aisha Patel",
    role: "Graduate Student",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Their education loan saved my semester. No hidden fees, and the repayment plan is incredibly flexible. I recommend NeedALoanToday to all my classmates.",
    rating: 5,
    amount: "$22,000",
    fundedLabel: "funded",
  },
  {
    name: "David Park",
    role: "Marketing Consultant",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The entire process was seamless and transparent. NeedALoanToday's advisors guided me every step and I got the funds I needed to grow my consulting business.",
    rating: 5,
    amount: "$30,000",
    fundedLabel: "funded",
  },
];

const TestimonialCard = ({ t, delay }: { t: Testimonial, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-2xl border p-6 transition-all flex flex-col relative overflow-hidden group shadow-[0_4px_6px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_hsla(160,84%,39%,0.08)] hover:border-[hsla(160,84%,39%,0.2)]"
    style={{
      borderColor: "hsl(214, 20%, 90%)",
    }}
  >
    <div 
      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(160,84%,39%)]/40 via-[hsl(160,84%,39%)] to-[hsl(160,84%,39%)]/40 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
    />
    <Quote className="text-[hsl(160,84%,39%)]/10 absolute top-4 right-4" size={40} />
    
    <div className="flex items-center gap-1 mb-4">
      {[...Array(t.rating)].map((_, j) => (
        <Star key={j} size={16} className="text-[hsl(160,84%,39%)]" fill="currentColor" />
      ))}
    </div>
    
    <p 
      className="text-[hsl(215,28%,12%)]/80 text-sm leading-relaxed flex-1 mb-6 font-dm-sans"
    >
      "{t.text}"
    </p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image 
          src={t.avatar} 
          alt={t.name} 
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border-2 border-[hsl(160,84%,39%)]/20" 
        />
        <div>
          <p 
            className="font-semibold text-sm text-[hsl(215,28%,12%)] font-space-grotesk"
          >
            {t.name}
          </p>
          <p 
            className="text-xs text-[hsl(215,14%,46%)] font-dm-sans"
          >
            {t.role}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p 
          className="text-[hsl(160,84%,39%)] font-bold text-sm font-space-grotesk"
        >
          {t.amount}
        </p>
        <p 
          className="text-xs text-[hsl(215,14%,46%)] font-dm-sans"
        >
          {t.fundedLabel}
        </p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="test-diag" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#test-diag)" />
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
              <span className="uppercase tracking-wider font-semibold">Testimonials</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[hsl(215,28%,12%)] mt-3 font-space-grotesk"
          >
            What Our Customers Say
          </h2>
          <p
            className="text-[hsl(215,14%,46%)] mt-4 max-w-xl mx-auto font-dm-sans"
          >
            Thousands of happy customers have used NeedALoanToday to fund their dreams.
          </p>
        </div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={i} t={testimonial} delay={i * 0.1} />
          ))}
        </div>

        {/* Second row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(3).map((testimonial, i) => (
            <TestimonialCard key={i} t={testimonial} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
