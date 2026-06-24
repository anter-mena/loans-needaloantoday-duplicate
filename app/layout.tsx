import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import MainLayout from "@/components/layout/main-layout";
import Script from "next/script";
import Analytics from "@/components/analytics";
import { faqCategories } from "@/lib/faq-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeedALoanToday - Fast Personal Loans Canada | Instant Approval & Competitive Rates",
  description: "NeedALoanToday: Get instant personal loans in Canada with competitive rates and same-day approval. Simple online application, AI-powered approval, and trusted lending solutions for all your financial needs.",
  keywords: "needaloantoday, need a loan today, personal loans Canada, quick loans, fast approval, instant loans, same-day funding, competitive rates, online loan application, Canadian lending, emergency loans, bad credit loans, AI loan approval",
  authors: [{ name: "NeedALoanToday" }],
  creator: "NeedALoanToday",
  publisher: "NeedALoanToday",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://needaloantoday.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    url: "https://needaloantoday.ca/",
    title: "NeedALoanToday - Fast Personal Loans Canada",
    description: "Get instant personal loans with competitive rates and same-day approval. AI-powered application, secure process, and trusted lending solutions for Canadians.",
    siteName: "NeedALoanToday",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeedALoanToday - Fast Personal Loans Canada",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeedALoanToday - Fast Personal Loans Canada",
    description: "Get instant personal loans with competitive rates and same-day approval. AI-powered application, secure process, and trusted lending solutions for Canadians.",
    images: ["/og-image.jpg"],
    creator: "@needaloantoday",
  },
  manifest: "/site.webmanifest",
  other: {
    "contact": "hello@needaloantoday.com",
    "phone": "+1-800-555-LOAN",
    "geo.region": "CA",
    "geo.placename": "Canada",
    "ICBM": "43.6532, -79.3832",
    "geo.position": "43.6532;-79.3832",
    "business:contact_data:country_name": "Canada",
    "business:contact_data:locality": "Toronto",
    "business:contact_data:region": "ON",
    "revisit-after": "7 days",
    "language": "English",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to improve GA loading times if/when triggered */}
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Structured Data - FinancialService */}
        <Script id="schema-financial-service" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "NeedALoanToday",
            "alternateName": "Need A Loan Today",
            "url": "https://needaloantoday.ca",
            "logo": "https://needaloantoday.ca/logo.png",
            "image": "https://needaloantoday.ca/og-image.jpg",
            "description": "Fast and easy personal loans in Canada with competitive rates, instant AI-powered approval, and same-day funding.",
            "email": "hello@needaloantoday.com",
            "telephone": "+1-800-555-LOAN",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "areaServed": { "@type": "Country", "name": "Canada" },
            "serviceType": [
              "Personal Loans", "Quick Loans", "Instant Loans", "Same-Day Loans",
              "Online Loans", "Emergency Loans", "Bad Credit Loans",
              "Home Loans", "Business Loans", "Education Loans", "Auto Loans"
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50000",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </Script>

        {/* Structured Data - Organization */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NeedALoanToday",
            "url": "https://needaloantoday.ca",
            "logo": "https://needaloantoday.ca/logo.png",
            "foundingDate": "2016",
            "slogan": "Get Funds Faster Than Ever Before",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-LOAN",
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": ["English"]
              }
            ]
          })}
        </Script>

        {/* Structured Data - FAQ */}
        <Script id="schema-faq" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap((cat) =>
              cat.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            )
          })}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-space-grotesk" suppressHydrationWarning>
        <Analytics />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
