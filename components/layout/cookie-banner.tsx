"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    // Set cookies for tracking/analytics
    setCookie("analytics_consent", "true", 365);
    setCookie("marketing_consent", "true", 365);
    setCookie("functional_consent", "true", 365);

    // Store user preference
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieTimestamp", new Date().toISOString());

    // Hide banner
    setIsVisible(false);

    // Initialize analytics/tracking here
    console.log("Analytics and marketing cookies enabled");
    // initializeAnalytics();
  };

  const handleDecline = () => {
    // Only set essential cookies
    setCookie("analytics_consent", "false", 365);
    setCookie("marketing_consent", "false", 365);
    setCookie("functional_consent", "true", 365); // Essential cookies only

    // Store user preference
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieTimestamp", new Date().toISOString());

    // Hide banner
    setIsVisible(false);

    console.log("Only essential cookies enabled");
  };

  // Helper function to set cookies
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 z-50 shadow-lg"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid hsl(214, 20%, 90%)",
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4">
          {/* Text content */}
          <div className="flex-1 pr-4">
            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: "hsl(215, 14%, 46%)" }}
            >
              We use cookies to enhance your experience, analyze site traffic, and personalize content.{" "}
              <a
                href="/privacy-policy"
                className="hover:underline font-medium transition-colors"
                style={{ color: "hsl(160, 84%, 39%)" }}
              >
                Learn more
              </a>
            </p>
          </div>

          {/* Buttons - positioned at the very right */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-end">
            <button
              onClick={handleDecline}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors hover:bg-gray-50 whitespace-nowrap"
              style={{
                backgroundColor: "transparent",
                border: "1px solid hsl(214, 20%, 90%)",
                color: "hsl(215, 28%, 12%)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap"
              style={{
                backgroundColor: "hsl(160, 84%, 39%)",
                color: "#FFFFFF",
                border: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
