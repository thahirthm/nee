import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/services/")({head: () => ({meta: [{title: "Services — NKE Floors Premium Stone Restoration"},{name: "description",content: "Professional marble, granite, terrazzo and concrete restoration services. Expert polishing, sealing, and maintenance for residential and commercial properties."},{property: "og:title",content: "Our Services — NKE Floors"},{property: "og:description",content: "Premium stone restoration and polishing services."},{property: "og:url", content: "/services"}],links: [{ rel: "canonical", href: "/services" }]}),component: Page,});

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Specialist Restoration & Polishing"
        subtitle="Our Services"
        description="A complete suite of premium services for natural stone, terrazzo and concrete — delivered by certified specialists with two decades of experience."
        backgroundImage={heroImg}
        cta={{
          text: "Schedule Consultation",
          href: "#contact",
        }}
      />

      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
}

/* ============ SERVICES LIST ============ */
function ServicesList() {
  return (
    <div className="py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Service Domains"
          title="Comprehensive Flooring Solutions"
          intro="NKE Floorcare operates across six specialist flooring disciplines, each supported by our full four-tier package structure."
        />

        <div className="mt-20 space-y-24">
          {SERVICES.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-32 pt-8 border-t border-border first:border-0 first:pt-0"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="h-16 w-16 rounded-sm border-2 border-gold flex items-center justify-center bg-gold/10">
                  <s.i className="h-8 w-8 text-gold" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-primary">
                  {s.t}
                </h2>
              </div>
              
              <p className="text-xl text-primary/80 font-medium leading-relaxed max-w-3xl mb-8">
                {s.d}
              </p>
              
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-12">
                  {s.long}
                </p>
                
                {s.packages && (
                  <div className="mt-16 bg-muted/30 -mx-6 lg:-mx-10 px-6 lg:px-10 py-16 border-y border-border">
                    <div className="max-w-3xl mb-12">
                      <h3 className="text-2xl font-serif text-primary mb-4">Package Tiers</h3>
                      {s.packagesIntro && (
                        <p className="text-muted-foreground leading-relaxed">{s.packagesIntro}</p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {s.packages.map((pkg, idx) => (
                        <div key={idx} className="relative group bg-background border border-border p-8 rounded-sm hover:border-gold hover:shadow-elevated transition-all flex flex-col h-full">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 to-gold opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                          
                          <div className="flex items-start justify-between mb-6">
                            <h4 className="font-serif text-2xl text-primary">{pkg.name}</h4>
                            <div className="text-3xl">{pkg.icon}</div>
                          </div>
                          
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border rounded-sm mb-8 w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span className="text-xs uppercase tracking-widest text-gold font-medium">{pkg.warranty}</span>
                          </div>
                          
                          <ul className="space-y-4 flex-grow">
                            {pkg.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                <ArrowRight className="h-4 w-4 text-gold shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {!s.packages && (
                  <div className="mt-12 p-8 border border-border bg-background rounded-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">Key Capabilities</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                      {s.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ SERVICE PROCESS ============ */
function ServiceProcess() {
  const steps = [
    {
      n: "01",
      t: "Consultation",
      d: "Detailed discussion of your project needs, timeline and budget.",
    },
    {
      n: "02",
      t: "Site Assessment",
      d: "On-site inspection to evaluate surface condition and requirements.",
    },
    {
      n: "03",
      t: "Custom Plan",
      d: "Customized restoration plan tailored to your specific needs.",
    },
    {
      n: "04",
      t: "Execution",
      d: "Professional execution by our trained specialists.",
    },
  ];

  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Approach"
          title="How We Work"
          intro="A straightforward, customer-centric process designed to deliver exceptional results."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="border border-border bg-background p-8 rounded-sm text-center hover:border-gold transition-colors"
            >
              <div className="text-4xl font-serif text-gold">{s.n}</div>
              <h3 className="mt-4 font-serif text-xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE CTA ============ */
function ServiceCTA() {
  return (
    <section className="">
  
    </section>
  );
}
