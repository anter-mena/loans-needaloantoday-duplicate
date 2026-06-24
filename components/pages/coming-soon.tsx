import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Clock className="w-10 h-10 text-primary animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4 font-space-grotesk">
        Coming Soon
      </h1>
      <p className="text-slate-500 max-w-md mb-8 font-dm-sans">
        {"We're working hard to bring you this feature. Stay tuned for updates!"}
      </p>
      <Link href="/">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full h-12">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
