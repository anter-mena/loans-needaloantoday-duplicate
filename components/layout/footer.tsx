"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/coming-soon" },
    { label: "Loans", href: "/coming-soon" },
    { label: "Blog", href: "/coming-soon" },
  ],
  Products: [
    { label: "Home Loans", href: "/coming-soon" },
    { label: "Business Loans", href: "/coming-soon" },
    { label: "Education Loans", href: "/coming-soon" },
    { label: "Personal Loans", href: "/coming-soon" },
  ],
  Support: [
    { label: "Help Center", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Feedback", href: "/#testimonials" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-use" },
  ],
};

const sectionLabels: Record<string, string> = {
  Company: "Company",
  Products: "Products",
  Support: "Support",
  Legal: "Legal",
};

const Footer = () => {
  return (
    <footer className="bg-[hsl(215,28%,12%)] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(160,84%,39%)]/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/logo2.svg"
                alt="NeedALoanToday"
                width={200}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p
              className="text-white/50 text-sm mt-4 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Making loans accessible, fast, and transparent for everyone.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-3 flex flex-col items-center lg:items-start">
              <div
                className="flex items-center gap-2 text-white/40 text-xs"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <Phone size={14} className="text-[hsl(160,84%,39%)]/60" />
                +1 (800) 555-LOAN
              </div>
              <div
                className="flex items-center gap-2 text-white/40 text-xs"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <Mail size={14} className="text-[hsl(160,84%,39%)]/60" />
                hello@needaloantoday.com
              </div>
              <div
                className="flex items-center gap-2 text-white/40 text-xs"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <MapPin size={14} className="text-[hsl(160,84%,39%)]/60" />
                Toronto, ON, Canada
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center lg:text-left">
              <h4
                className="font-semibold text-white mb-4 text-sm"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {sectionLabels[title]}
              </h4>
              <ul className="space-y-2 flex flex-col items-center lg:items-start">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-[hsl(160,84%,39%)] transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-[hsl(160,84%,39%)] transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Email Subscription Form - Only in Legal Column */}
              {title === "Legal" && (
                <form className="relative mt-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pr-12 border border-white/20 rounded-lg bg-white/5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[hsl(160,84%,39%)] focus:border-transparent outline-none transition-all"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[hsl(160,84%,39%)] text-white rounded-md hover:bg-[hsl(160,84%,35%)] transition-all flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
              <Zap className="w-3 h-3 text-[hsl(160,84%,39%)]" fill="currentColor" />
            </div>
          </div>
          <p
            className="text-sm text-white/40"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            © 2026 NeedALoanToday. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
