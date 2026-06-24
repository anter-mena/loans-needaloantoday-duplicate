"use client";

import { useState } from "react";
import CountdownBanner from "./countdown-banner";
import Navbar from "./navbar";
import Footer from "./footer";
import CookieBanner from "./cookie-banner";
import ChatBot from "./chatbot";
import LoanApprovalToasts from "./loan-approval-toasts";
import ScrollToTop from "./scroll-to-top";
import { Toaster } from "sonner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <ScrollToTop />
      <LoanApprovalToasts />
      <CountdownBanner isVisible={isBannerVisible} setIsVisible={setIsBannerVisible} />
      <Navbar isBannerVisible={isBannerVisible} />
      <main className="grow">{children}</main>
      <ChatBot />
      <CookieBanner />
      <Footer />
      <Toaster
        position="bottom-left"
        className="bg-white"
        toastOptions={{
          unstyled: true,
        }}
      />
    </div>
  );
}
