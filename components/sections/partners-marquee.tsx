"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export const PartnersMarquee = () => {
  // Real bank logos with theme styling
  const partnerLogos = [
    { name: "BMO Bank", src: "/partners/BMO.svg" },
    { name: "CIBC Bank", src: "/partners/CIBC.svg" },
    { name: "National Bank of Canada", src: "/partners/National_Bank.svg" },
    { name: "RBC Royal Bank", src: "/partners/RBC.svg" },
    { name: "Scotiabank", src: "/partners/Scotiabank.svg" },
    { name: "TD Bank", src: "/partners/TD_BANK.svg" }
  ];

  return (
    <section 
      className="relative text-center py-12 bg-white rounded-b-3xl" 
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top border with gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-0.5 bg-linear-to-r from-transparent via-[hsl(214,20%,90%)] to-transparent" />
      
      <p 
        className="text-sm text-[hsl(160,84%,39%)] uppercase tracking-wider mb-8 font-semibold"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Trusted by Leading Financial Institutions
      </p>

      {/* Reduced width to show ~3 logos at a time */}
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
        {/* Side Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

        <div className="marquee-container">
          <Marquee
            className="[--duration:35s]"
            pauseOnHover={true}
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="mx-6 flex items-center justify-center transition-all duration-300 min-w-40 h-20 shrink-0 cursor-pointer group/logo"
              >
                <Image 
                  src={partner.src} 
                  alt={`${partner.name} - NeedALoanToday Partner`} 
                  width={160}
                  height={64}
                  className="w-40 h-16 object-contain grayscale opacity-50 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
