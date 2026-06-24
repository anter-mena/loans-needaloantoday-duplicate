"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="not-found-grid"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
                <path
                  d="M0 30h60M30 0v60"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#not-found-grid)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[hsl(160,84%,39%)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(160,84%,39%)]/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-[10rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-[hsl(160,84%,39%)] via-[hsl(160,84%,39%)]/60 to-[hsl(160,84%,39%)] font-space-grotesk"
            >
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-2 space-y-4 max-w-lg mx-auto"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-[hsl(215,28%,12%)] font-space-grotesk"
            >
              Page Not Found
            </h2>
            <p
              className="text-[hsl(215,14%,46%)] text-lg font-dm-sans"
            >
              {"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[hsl(160,84%,39%)] text-white hover:bg-[hsl(160,84%,35%)] ring-2 ring-[hsl(160,84%,39%)] ring-offset-2 ring-offset-white outline-none rounded-md px-6 py-3 font-dm-sans"
            >
              <Link href="/">
                <Home className="w-4 h-4" /> Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-[hsl(214,20%,90%)] text-[hsl(215,28%,12%)] hover:border-[hsl(160,84%,39%)] hover:text-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)]/5 rounded-md px-6 py-3 font-dm-sans"
            >
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4" /> Contact Support
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
