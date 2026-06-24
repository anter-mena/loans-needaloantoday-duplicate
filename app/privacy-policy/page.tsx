"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, CheckCircle } from "lucide-react";

const protectionFeatures = [
  { icon: Lock, text: "256-bit SSL Encryption" },
  { icon: Shield, text: "Bank-Level Security" },
  { icon: Eye, text: "Transparent Practices" },
];

const sections = [
  {
    title: "Data Protection Measures",
    content: "Our commitment to data security includes implementing advanced encryption protocols consistent with financial industry standards. We utilize SSL technology to protect the transmission of sensitive information, including financial and personal details. We regularly review and enhance our security infrastructure to maintain the highest level of data protection for our users.",
  },
  {
    title: "Restricted Internal Information Access",
    content: "Only designated personnel with proper authorization may access customer information. Every team member with data access privileges must complete comprehensive background screening before receiving clearance.",
    subtext: "This controlled access framework ensures information is handled exclusively for legitimate business purposes, including:",
    list: [
      "Application processing",
      "Service enhancement",
      "Credit assessment",
      "Customer assistance",
    ],
  },
  {
    title: "Third-Party Information Disclosure",
    content: "To process your application, maintain your account, and deliver our services effectively, we may disclose your information to selected external partners. These may include:",
    list: [
      "Lending institutions",
      "Credit reporting agencies",
      "Collection agencies",
      "Marketing service providers",
      "Other business partners relevant to our operations",
    ],
    footer: "All external parties are contractually obligated to maintain data confidentiality and may only use your information for authorized purposes related to your application or associated services.",
  },
  {
    title: "Multi-Lender Application Network",
    content: "Applications submitted through our partner network are distributed to various lending institutions and brokerage services to maximize your approval likelihood. Information processed through this network may be stored in jurisdictions outside your province.",
    subtext: "Network participants and their affiliates may reach out to you through email, telephone, or text messaging (carrier rates apply). You maintain the right to discontinue these communications by replying HELP for support or STOP to cease messages.",
  },
  {
    title: "Telephone and Text Message Authorization",
    content: "Submitting your telephone number grants us permission to contact you via voice calls and text messages. Communications may encompass:",
    list: [
      "Transaction confirmations",
      "Special offers",
      "Account notifications",
      "Feedback requests",
      "Other information pertinent to your application or account status",
    ],
    footer: "You may withdraw this consent at any time by following opt-out instructions included in text messages or by contacting us directly using the details provided below.",
  },
  {
    title: "Email Communication Authorization",
    content: "Providing your email address constitutes consent to receive electronic correspondence from us. Email communications may include:",
    list: [
      "Transaction-related messages",
      "Promotional content",
      "Account information",
      "Survey invitations",
      "Other material relevant to your relationship with our company",
    ],
    footer: "You retain the right to revoke email consent whenever you choose. Unsubscribe options are available through links in our emails, or you may contact us directly using the information below.",
  },
  {
    title: "Information Retention Period",
    content: "Personal data will be maintained for the duration necessary to achieve the purposes described in this policy and to comply with legal and regulatory requirements. Should you wish to request deletion of your information, please reach out using our contact details below.",
  },
  {
    title: "Website Analytics and Cookies",
    content: "We may deploy cookies and similar technologies to improve your website experience and analyze usage patterns. Additional details are available in our separate Cookie Policy.",
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-15 md:pb-25 bg-[hsl(215,28%,12%)] relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="privacy-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-grid)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[hsl(160,84%,39%)]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[hsl(160,84%,39%)]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[hsl(160,84%,39%)]/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[hsl(160,84%,39%)]" />
              <span
                className="text-[hsl(160,84%,39%)] text-sm font-semibold font-dm-sans"
              >
                Your Privacy Matters
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk"
            >
              Privacy Policy
            </h1>

            <p
              className="text-white/60 text-lg mb-8 font-dm-sans"
            >
              We recognize the significance of safeguarding your personal data and appreciate the confidence you place in us. This policy explains our approach to collecting, using, and protecting the information you provide when utilizing our services.
            </p>

            <p
              className="text-white/80 text-sm font-dm-sans"
            >
              Your use of our platform constitutes acceptance of the privacy practices outlined below.
            </p>
          </motion.div>

          {/* Protection Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12 max-w-2xl mx-auto"
          >
            {protectionFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-[hsl(160,84%,39%)]" />
                <span
                  className="text-white text-sm font-medium font-dm-sans"
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center shrink-0 mt-1"
                >
                  <FileText className="w-5 h-5 text-[hsl(160,84%,39%)]" />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3 font-space-grotesk"
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-[hsl(215,14%,46%)] leading-relaxed mb-4 font-dm-sans"
                  >
                    {section.content}
                  </p>

                  {section.subtext && (
                    <p
                      className="text-[hsl(215,14%,46%)] leading-relaxed mb-3 font-dm-sans"
                    >
                      {section.subtext}
                    </p>
                  )}

                  {section.list && (
                    <ul className="space-y-3 mb-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[hsl(160,84%,39%)] shrink-0 mt-0.5" />
                          <span
                            className="text-[hsl(215,14%,46%)] font-dm-sans"
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p
                      className="text-[hsl(215,14%,46%)] leading-relaxed text-sm bg-[hsl(210,25%,97%)] p-4 rounded-lg border-l-4 border-[hsl(160,84%,39%)] font-dm-sans"
                    >
                      {section.footer}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-[hsl(210,25%,97%)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[hsl(214,20%,90%)] shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-[hsl(160,84%,39%)]" />
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3 font-space-grotesk"
                >
                  Your Privacy Rights
                </h2>
                <p
                  className="text-[hsl(215,14%,46%)] leading-relaxed font-dm-sans"
                >
                  You maintain the right to review, correct, or request deletion of personal information we hold about you. To exercise these rights or if you have questions regarding your data, please contact us using the information provided below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white border-t border-[hsl(214,20%,90%)]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Mail className="w-12 h-12 text-[hsl(160,84%,39%)] mx-auto mb-4" />
          <h3
            className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3 font-space-grotesk"
          >
            Questions About Your Privacy?
          </h3>
          <p
            className="text-[hsl(215,14%,46%)] mb-6 font-dm-sans"
          >
            For questions, concerns, or requests regarding your privacy or this policy, please contact us at:
          </p>
          <a
            href="mailto:privacy@needaloantoday.com"
            className="inline-flex items-center gap-2 bg-[hsl(160,84%,39%)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[hsl(160,84%,35%)] transition-colors font-dm-sans shadow-lg shadow-primary/20"
          >
            <Mail className="w-5 h-5" />
            privacy@needaloantoday.com
          </a>
          <p
            className="text-[hsl(215,14%,46%)] text-sm mt-8 font-dm-sans"
          >
            Last Updated: February 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
