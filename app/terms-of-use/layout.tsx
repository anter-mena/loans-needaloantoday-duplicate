import { Metadata } from "next";
import { getAlternateMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service | NeedALoanToday - Legal Agreement",
  description: "Review the terms and conditions for using NeedALoanToday's services. Transparent lending terms and clear legal agreements.",
  alternates: getAlternateMetadata('/terms-of-use'),
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
