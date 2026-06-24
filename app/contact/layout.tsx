import { Metadata } from "next";
import Script from "next/script";
import { getAlternateMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | NeedALoanToday - We're Here to Help",
  description: "Have questions about our loans? Get in touch with our team via phone, email, or visit our Toronto office. Fast support and expert guidance.",
  alternates: getAlternateMetadata('/contact'),
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' }
]);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="breadcrumb-contact" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {children}
    </>
  );
}
