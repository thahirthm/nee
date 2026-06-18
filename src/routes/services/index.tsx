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
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Service Portfolio"
          intro="Each service is delivered with precision, professionalism, and a commitment to exceeding your expectations."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.id}`}
              className="group border border-border bg-card rounded-sm p-8 hover:border-gold hover:shadow-elevated transition-all"
            >
              <div className="h-12 w-12 rounded-sm border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                <s.i className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors">
                Learn More{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Need a Custom Solution?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/75 max-w-2xl mx-auto">
          Contact our team to discuss a custom restoration plan for your specific project.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-gold-foreground hover:bg-gold/90 transition-colors"
          >
            Call Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
