import { Metadata } from "next";
import Script from "next/script";
import { getAlternateMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | NeedALoanToday - Our Mission & Vision",
  description: "Learn about NeedALoanToday's mission to democratize financial services. Discover our history, values, and how we've helped over 50,000 Canadians.",
  alternates: getAlternateMetadata('/about'),
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' }
]);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="breadcrumb-about" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {children}
    </>
  );
}
