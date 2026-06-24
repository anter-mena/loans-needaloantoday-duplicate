"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Menu, X, ChevronDown, ChevronRight, DollarSign, Target,
  CreditCard, FileText, MapPin, List, Calculator, Scale,
  BookOpen, HelpCircle, Grid3x3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavbarProps {
  isBannerVisible: boolean;
}

const loansDropdownItems = [
  {
    icon: DollarSign,
    title: "By Amount",
    description: "$300 - $5,000 loans",
    to: "/loans/by-amount",
  },
  {
    icon: Target,
    title: "By Purpose",
    description: "Debt consolidation, emergencies & more",
    to: "/loans/by-purpose",
  },
  {
    icon: CreditCard,
    title: "By Credit Score",
    description: "Find loans for your credit range",
    to: "/loans/by-credit-score",
  },
  {
    icon: FileText,
    title: "By Type",
    description: "Personal, emergency, same-day loans",
    to: "/loans/by-type",
  },
  {
    icon: MapPin,
    title: "By Location",
    description: "Loans in Canada",
    to: "/loans/by-location",
  },
  {
    icon: List,
    title: "All Loan Options",
    description: "Browse all available loans",
    to: "/loans",
  },
];

const resourcesDropdownItems = [
  {
    icon: Calculator,
    title: "Tools",
    description: "Calculators & helpful tools",
    to: "/resources/tools",
  },
  {
    icon: Scale,
    title: "Comparisons",
    description: "Compare borrowing options",
    to: "/resources/comparisons",
  },
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step loan guides",
    to: "/resources/guides",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions answered",
    to: "/resources/faq",
  },
  {
    icon: Grid3x3,
    title: "All Resources",
    description: "Browse all tools & guides",
    to: "/resources",
  },
];

const Navbar = ({ isBannerVisible }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions((prev) => {
      const newState: Record<string, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = key === section ? !prev[key] : false;
      });
      newState[section] = !prev[section];
      return newState;
    });
  };

  return (
    <nav className="sticky top-0 z-40 bg-[hsl(215,28%,12%)] backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="NeedALoanToday"
              width={180}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {/* Loans Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("loans")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  aria-expanded={activeDropdown === "loans"}
                  aria-haspopup="true"
                  aria-label="Toggle Loans menu"
                  className="flex items-center gap-1 text-sm font-medium transition-colors py-2 outline-none hover:text-[hsl(160,84%,39%)]"
                  style={{
                    color: activeDropdown === "loans" ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Loans <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-xl border transition-all duration-300 ease-out ${activeDropdown === "loans"
                    ? "opacity-100 transform translate-y-0 pointer-events-auto"
                    : "opacity-0 transform -translate-y-4 pointer-events-none"
                    }`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "hsl(214,20%,90%)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="p-4">
                    {loansDropdownItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          href={item.to}
                          className="dropdown-link flex items-start gap-3 p-3 rounded-md transition-all duration-200 hover:bg-[hsl(210,25%,97%)]"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div
                            className="dropdown-icon-bg w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: "hsl(160,84%,39%,0.1)" }}
                          >
                            <IconComponent
                              className="w-4 h-4"
                              style={{ color: "hsl(160,84%,39%)" }}
                            />
                          </div>
                          <div>
                            <div
                              className="font-medium text-sm"
                              style={{
                                color: "hsl(215,28%,12%)",
                                fontFamily: "var(--font-dm-sans), sans-serif",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="text-xs mt-0.5"
                              style={{
                                color: "hsl(215,14%,46%)",
                                fontFamily: "var(--font-dm-sans), sans-serif",
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("resources")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  aria-expanded={activeDropdown === "resources"}
                  aria-haspopup="true"
                  aria-label="Toggle Resources menu"
                  className="flex items-center gap-1 text-sm font-medium transition-colors py-2 outline-none hover:text-[hsl(160,84%,39%)]"
                  style={{
                    color: activeDropdown === "resources" ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Resources <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-xl border transition-all duration-300 ease-out ${activeDropdown === "resources"
                    ? "opacity-100 transform translate-y-0 pointer-events-auto"
                    : "opacity-0 transform -translate-y-4 pointer-events-none"
                    }`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "hsl(214,20%,90%)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="p-4">
                    {resourcesDropdownItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          href={item.to}
                          className="dropdown-link flex items-start gap-3 p-3 rounded-md transition-all duration-200 hover:bg-[hsl(210,25%,97%)]"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div
                            className="dropdown-icon-bg w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: "hsl(160,84%,39%,0.1)" }}
                          >
                            <IconComponent
                              className="w-4 h-4"
                              style={{ color: "hsl(160,84%,39%)" }}
                            />
                          </div>
                          <div>
                            <div
                              className="font-medium text-sm"
                              style={{
                                color: "hsl(215,28%,12%)",
                                fontFamily: "var(--font-dm-sans), sans-serif",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="text-xs mt-0.5"
                              style={{
                                color: "hsl(215,14%,46%)",
                                fontFamily: "var(--font-dm-sans), sans-serif",
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* About Us Link */}
              <Link
                href="/about"
                className="text-sm font-medium transition-colors py-2 text-white/70 hover:text-[hsl(160,84%,39%)]"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                About Us
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors py-2 text-white/70 hover:text-[hsl(160,84%,39%)]"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Apply Button */}
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=needaloantoday"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Button
                variant="default"
                size="sm"
                className="bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] ring-2 ring-[hsl(160,84%,39%)] ring-offset-2 ring-offset-[hsl(215,28%,12%)] outline-none rounded-md px-4 py-1.5 h-auto text-xs"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Apply Now
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[hsl(215,28%,12%)] border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <div className="space-y-1">
                {/* Mobile Loans Accordion */}
                <div className="py-2">
                  <button
                    onClick={() => toggleMobileAccordion("loans")}
                    aria-expanded={mobileAccordions.loans}
                    className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors text-white font-dm-sans"
                  >
                    <span>Loans</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.loans ? "rotate-90" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordions.loans ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pl-4 mt-2 space-y-1">
                      {loansDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.to}
                          className="flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 text-white/70 hover:text-primary font-dm-sans"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Resources Accordion */}
                <div className="py-2 border-t border-white/5">
                  <button
                    onClick={() => toggleMobileAccordion("resources")}
                    aria-expanded={mobileAccordions.resources}
                    className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors text-white font-dm-sans"
                  >
                    <span>Resources</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.resources ? "rotate-90" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordions.resources ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pl-4 mt-2 space-y-1">
                      {resourcesDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.to}
                          className="flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 text-white/70 hover:text-primary font-dm-sans"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Static Links */}
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <div key={link.href} className="py-2 border-t border-white/5">
                    <Link
                      href={link.href}
                      className="block px-2 py-2 text-sm font-semibold rounded-md transition-colors text-white font-dm-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}



                {/* Mobile Apply Button */}
                 <div className="pt-4">
                    <a
                     href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=needaloantoday"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <Button
                       className="w-full bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] ring-2 ring-[hsl(160,84%,39%)] ring-offset-2 ring-offset-[hsl(215,28%,12%)] outline-none rounded-md py-4 font-bold font-dm-sans text-sm"
                     >
                       Apply Now
                     </Button>
                   </a>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .dropdown-link:hover {
          background-color: hsl(210, 25%, 97%);
        }
        .dropdown-link:hover .dropdown-icon-bg {
          background-color: hsla(160, 84%, 39%, 0.2) !important;
        }
        .mobile-dropdown-link:active .mobile-icon-bg {
          background-color: hsla(160, 84%, 39%, 0.2) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
