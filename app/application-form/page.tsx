import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplyForm } from "@/components/application-form/application-form";

export const metadata: Metadata = {
  title: "Apply for a Personal Loan Online | NeedALoanToday Canada",
  description:
    "Start your loan application with NeedALoanToday. Compare offers from vetted Canadian lenders and get matched with your best rate in minutes.",
  keywords:
    "apply for a loan online canada, needaloantoday application, instant loan application canada, same-day loan application",
  alternates: {
    canonical: "/application-form",
  },
};

export default function ApplicationFormPage() {
  return (
    <div className="bg-[hsl(210,40%,98%)]">
      {/* Header */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-14 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at center top, hsl(160 84% 39% / 0.08) 0%, hsl(160 84% 39% / 0.04) 40%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[640px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-6 border border-[hsl(160,84%,39%)]/20 bg-[hsl(160,84%,39%)]/10">
            <span
              className="font-semibold text-[hsl(160,84%,39%)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply Now
            </span>
          </div>
          <h1
            className="text-3xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4 text-[hsl(215,28%,17%)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s Find Your Best Loan Rate.
          </h1>
          <p
            className="text-base max-w-[440px] leading-relaxed text-[hsl(215,14%,46%)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fill out the quick form below and we&apos;ll match you with vetted
            Canadian lenders in as little as 2 minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pt-8 pb-24 lg:pt-10 lg:pb-32">
        <div className="max-w-[560px] mx-auto px-4 lg:px-8 -mt-4">
          <Suspense fallback={<div className="min-h-[450px]" />}>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
