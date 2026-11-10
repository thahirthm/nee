import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <a
      href="tel:+919600040155"
      aria-label="Call us at +91 96000 40155"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform hover:scale-110 hover:bg-gold/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <span className="absolute inset-0 rounded-full bg-gold opacity-60 animate-ping" aria-hidden="true" />
      <Phone className="relative h-6 w-6" />
    </a>
  );
}
