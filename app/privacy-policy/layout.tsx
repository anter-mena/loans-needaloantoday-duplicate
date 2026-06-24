import { Metadata } from "next";
import { getAlternateMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | NeedALoanToday - Your Data is Secure",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information. Bank-level security and transparent practices.",
  alternates: getAlternateMetadata('/privacy-policy'),
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
