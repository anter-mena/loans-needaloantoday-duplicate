"use client";

import { useState, useEffect } from "react";
import { X, Zap, Clock } from "lucide-react";

interface CountdownBannerProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const dayMessages: Record<number, string> = {
  0: "Sunday Special! Apply now for instant approval",
  1: "Monday Momentum! Start your week with a loan approval",
  2: "Tuesday Deals! Get approved in minutes",
  3: "Midweek Offer! Apply now for instant approval",
  4: "Thursday Boost! Quick approval available today",
  5: "Friday Flash Sale! Apply now for instant approval",
  6: "Saturday Savings! Weekend approvals available",
};

const CountdownBanner = ({ isVisible, setIsVisible }: CountdownBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentDay, setCurrentDay] = useState(0);

  const calculateTimeUntilEndOfDay = () => {
    const now = new Date();
    const day = now.getDay();
    setCurrentDay(day);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const timeDiff = endOfDay.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const initialTime = calculateTimeUntilEndOfDay();
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      const newTime = calculateTimeUntilEndOfDay();
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      className="py-2 sm:py-2.5 px-3 sm:px-4 relative z-50"
      style={{
        backgroundColor: "hsl(160, 84%, 39%)",
        color: "#FFFFFF",
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-medium">{dayMessages[currentDay]}</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Time left:</span>
          <span className="sm:hidden">Ends in:</span>

          <div
            className="flex items-center gap-0.5 sm:gap-1 font-bold"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-1 rounded transition-colors hover:bg-white/20 outline-none"
        aria-label="Close banner"
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default CountdownBanner;
