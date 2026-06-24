"use client";

import { motion } from "framer-motion";
import { Scale, FileText, AlertCircle, Mail } from "lucide-react";

const sections = [
  {
    number: "1",
    title: "Jurisdiction Notice",
    content: "All financial transactions conducted through this platform are considered to occur at our principal place of business, irrespective of the user's geographic location.",
  },
  {
    number: "2",
    title: "Important Information",
    content: "Our microloans are designed to address immediate, short-term financial needs. Customers must fully repay their existing loan before qualifying for additional funding.",
  },
  {
    number: "3",
    title: "Definitions",
    content: "Throughout these Terms of Service (\"Terms\"), references to \"Customer,\" \"you,\" or \"your\" identify the individual applying for our services. References to \"Company,\" \"we,\" or \"our\" refer to NeedALoanToday.",
  },
  {
    number: "4",
    title: "Your Agreement to These Terms",
    content: "By authorizing automated withdrawals from your designated bank account for loan repayment, you acknowledge acceptance of these Terms. These Terms were made accessible to you through multiple channels—including our physical location, our website, and through direct communication with our representatives—before you finalized your transaction.",
  },
  {
    number: "5",
    title: "Electronic Transaction Authorization",
    content: "You consent to our use of electronic methods to collect amounts owed under your loan agreement. This includes our right to re-submit collection attempts if initial efforts are unsuccessful, whether for partial amounts or the full balance due, plus any applicable returned payment fees we are legally permitted to charge.",
  },
  {
    number: "6",
    title: "Individual Dispute Resolution",
    content: "To the maximum extent allowed under applicable law, you agree to resolve any disputes with us on an individual basis and waive participation in class action litigation or consolidated proceedings involving multiple claimants. Should you join such proceedings, you consent to injunctive measures for your removal. This provision does not limit your right to pursue individual legal remedies available to you.",
  },
  {
    number: "7",
    title: "Electronic Records",
    content: "You acknowledge that digital communications, online forms, scanned documents, and facsimile transmissions hold the same legal weight as original paper documents. Your acceptance may be demonstrated through various methods, including verbal confirmation (in-person or telephonic), electronic signature, typed name, or other indicated acceptance methods, all of which create binding obligations under these Terms.",
  },
  {
    number: "8",
    title: "Application Verification and Certification",
    content: "By submitting your application electronically or via telephone, you certify under penalty of perjury that all provided information is accurate and complete. You confirm that you are not currently subject to bankruptcy proceedings nor planning to file for bankruptcy.",
    subtext: "You authorize us to verify your application details through consumer reporting agencies and other appropriate verification methods. We retain sole discretion to decline applications based on our risk assessment following due diligence.",
    footer: "You understand that processing requires verification of your employment status, banking information, and other relevant details. You accept sole responsibility for protecting any personal identification numbers or account credentials issued to you.",
  },
];

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-15 md:pb-25 bg-[hsl(215,28%,12%)] relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="terms-hex" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
              <polygon points="25,0 50,14.4 50,28.9 25,43.3 0,28.9 0,14.4" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#terms-hex)" />
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
              <Scale className="w-4 h-4 text-[hsl(160,84%,39%)]" />
              <span
                className="text-[hsl(160,84%,39%)] text-sm font-semibold font-dm-sans"
              >
                Legal Agreement
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk"
            >
              Terms of Service
            </h1>

            <p
              className="text-white/60 text-lg font-dm-sans"
            >
              Please read these terms carefully before using our services. By authorizing loan repayment from your bank account, you agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-[hsl(210,25%,97%)] border-y border-[hsl(214,20%,90%)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-[hsl(160,84%,39%)]/20 shadow-sm">
            <AlertCircle className="w-6 h-6 text-[hsl(160,84%,39%)] shrink-0 mt-1" />
            <div>
              <h3
                className="font-bold text-[hsl(215,28%,12%)] mb-2 font-space-grotesk"
              >
                Important Notice
              </h3>
              <p
                className="text-[hsl(215,14%,46%)] text-sm leading-relaxed font-dm-sans"
              >
                {"By using NeedALoanToday's services and authorizing automated withdrawals from your bank account, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and NeedALoanToday. If you do not agree to these terms, please do not use our services."}
              </p>
            </div>
          </div>
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
              transition={{ delay: index * 0.05 }}
              className="mb-10 last:mb-0"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(160,84%,39%)]/20 to-[hsl(160,84%,39%)]/5 flex items-center justify-center shrink-0 mt-1"
                >
                  <span
                    className="text-[hsl(160,84%,39%)] font-bold text-lg font-space-grotesk"
                  >
                    {section.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h2
                    className="text-xl font-bold text-[hsl(215,28%,12%)] mb-3 font-space-grotesk"
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-[hsl(215,14%,46%)] leading-relaxed mb-3 font-dm-sans"
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

      {/* Contact */}
      <section className="py-16 bg-[hsl(210,25%,97%)]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Mail className="w-12 h-12 text-[hsl(160,84%,39%)] mx-auto mb-4" />
          <h3
            className="text-2xl font-bold text-[hsl(215,28%,12%)] mb-3 font-space-grotesk"
          >
            Questions About Our Terms?
          </h3>
          <p
            className="text-[hsl(215,14%,46%)] mb-6 font-dm-sans"
          >
            Our legal team is here to help clarify any questions you may have.
          </p>
          <a
            href="mailto:legal@needaloantoday.com"
            className="inline-flex items-center gap-2 bg-[hsl(160,84%,39%)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[hsl(160,84%,35%)] transition-colors font-dm-sans shadow-lg shadow-primary/20"
          >
            <Mail className="w-5 h-5" />
            legal@needaloantoday.com
          </a>
          <p
            className="text-[hsl(215,14%,46%)] text-sm mt-8 font-dm-sans"
          >
            Last Updated: February 2026
          </p>
        </div>
      </section>

      {/* Acceptance Reminder */}
      <section className="py-12 bg-white border-t border-[hsl(214,20%,90%)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[hsl(210,25%,97%)] rounded-xl p-6 text-center">
            <p
              className="text-[hsl(215,14%,46%)] text-sm leading-relaxed font-dm-sans"
            >
              {"By continuing to use NeedALoanToday's services, you confirm your acceptance of these Terms of Service and any future amendments. We recommend reviewing these terms periodically for any updates."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
