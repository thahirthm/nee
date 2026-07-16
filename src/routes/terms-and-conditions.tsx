import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Check } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — NKE Floors" },
      { name: "description", content: "Terms and conditions for NKE Floors services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">
            Terms & Conditions
          </h1>
          <div className="space-y-8 mt-12 bg-card border border-border p-8 md:p-12 rounded-sm shadow-sm">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-gold/10 p-2 rounded-full mt-0.5">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg text-primary leading-relaxed">
                  Our services are available throughout Tamil Nadu and in Bangalore, Karnataka.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gold/10 p-2 rounded-full mt-0.5">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg text-primary leading-relaxed">
                  You can reach out to us anytime between 9am and 6pm.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gold/10 p-2 rounded-full mt-0.5">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg text-primary leading-relaxed">
                  We visit and inspect your floors before taking on orders.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gold/10 p-2 rounded-full mt-0.5">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg text-primary leading-relaxed">
                  Quotations are only provided upon floor inspection.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gold/10 p-2 rounded-full mt-0.5">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg text-primary leading-relaxed">
                  You can always reach out to us on <a href="mailto:krish@nkefloors.com" className="text-gold hover:underline font-medium">krish@nkefloors.com</a> or <a href="tel:+917829554422" className="text-gold hover:underline font-medium">+91 7829554422</a>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
