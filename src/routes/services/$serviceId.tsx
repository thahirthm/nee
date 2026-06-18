import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Link as LinkIcon } from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SERVICES } from "@/lib/services-data";
import heroImg from "@/assets/hero.jpg";
import projectHotel from "@/assets/project-hotel.jpg";

export const Route = createFileRoute("/services/$serviceId")({
  beforeLoad: ({ params }) => {
    const service = SERVICES.find((s) => s.id === params.serviceId);
    if (!service) throw new Error("Service not found");
    return { service };
  },
  head: ({ context }) => ({
    meta: [
      { title: `${context.service.t} — NKE Floors` },
      {
        name: "description",
        content: `${context.service.long} Learn more about our professional restoration service.`,
      },
      {
        property: "og:title",
        content: `${context.service.t} — NKE Floors`,
      },
      {
        property: "og:description",
        content: context.service.d,
      },
      { property: "og:url", content: `/services/${context.service.id}` },
    ],
    links: [
      { rel: "canonical", href: `/services/${context.service.id}` },
    ],
  }),
  component: Page,
});

function Page() {
  const { service } = Route.useRouteContext();

  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title={service.t}
        subtitle="Service Details"
        description={service.long}
        backgroundImage={heroImg}
        cta={{
          text: "Get Free Quote",
          href: "#contact",
        }}
      />

      <ServiceDetails service={service} />
      <ServiceBenefits service={service} />
      <ServiceGallery />
      <RelatedServices currentService={service} />
      <ServiceInquiry service={service} />
    </main>
  );
}

/* ============ SERVICE DETAILS ============ */
function ServiceDetails({ service }: { service: typeof SERVICES[0] }) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <img
            src={projectHotel}
            alt={service.t}
            className="w-full h-[400px] object-cover rounded-sm shadow-elevated"
            loading="lazy"
            width={1400}
            height={1000}
          />

          <div className="mt-12">
            <SectionHeader
              eyebrow="Service Overview"
              title="What's Included"
            />

            <div className="mt-10 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.long}
              </p>

              <div>
                <h3 className="font-serif text-2xl text-primary mb-6">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  {[
                    "Initial consultation and site assessment",
                    "Surface evaluation and condition report",
                    "Customized restoration plan",
                    "Professional execution",
                    "Quality inspection and final touches",
                    "Maintenance guidance and aftercare",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 rounded-sm bg-gold/10 border border-gold/30 items-center justify-center text-sm font-semibold text-gold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed pt-1">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-8">
            {/* Key Features */}
            <div className="border border-border bg-card p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-primary mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="border border-gold bg-gold/5 p-8 rounded-sm">
              <h3 className="font-serif text-xl text-primary">
                Ready to Get Started?
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Schedule a free consultation with our specialists to discuss your project.
              </p>
              <a
                href="#contact"
                className="mt-6 block w-full text-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE BENEFITS ============ */
function ServiceBenefits({ service }: { service: typeof SERVICES[0] }) {
  const benefits = [
    {
      t: "Premium Quality",
      d: "Consistent, exceptional results backed by our 25+ years of expertise.",
    },
    {
      t: "Professional Team",
      d: "Trained specialists using advanced equipment and techniques.",
    },
    {
      t: "Timely Completion",
      d: "Predictable schedules and reliable project management.",
    },
    {
      t: "Lasting Protection",
      d: "Long-lasting finishes with proper maintenance guidance.",
    },
  ];

  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Choose This Service"
          title={`Benefits of ${service.t}`}
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.t}
              className="border border-border bg-background p-8 rounded-sm hover:border-gold transition-colors"
            >
              <div className="h-12 w-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-primary">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE GALLERY ============ */
function ServiceGallery() {
  const gallery = [
    { img: projectHotel, title: "Hotel Restoration", desc: "Ballroom marble" },
    { img: projectHotel, title: "Corporate Office", desc: "Lobby transformation" },
    { img: projectHotel, title: "Residential", desc: "Villa floors" },
    { img: projectHotel, title: "Commercial", desc: "High-traffic areas" },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Gallery"
          title="Before & After Results"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((g, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm bg-background border border-border h-64"
            >
              <img
                src={g.img}
                alt={g.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-primary-foreground">
                  <div className="font-serif text-lg">{g.title}</div>
                  <div className="text-sm text-primary-foreground/75">
                    {g.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ RELATED SERVICES ============ */
function RelatedServices({
  currentService,
}: {
  currentService: typeof SERVICES[0];
}) {
  const related = SERVICES.filter((s) => s.id !== currentService.id).slice(
    0,
    3
  );

  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Complementary Services"
          title="You Might Also Need"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {related.map((s) => (
            <a
              key={s.id}
              href={`/services/${s.id}`}
              className="group border border-border bg-background rounded-sm p-8 hover:border-gold hover:shadow-elevated transition-all"
            >
              <div className="h-12 w-12 rounded-sm border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                <s.i className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors">
                View Service{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE INQUIRY ============ */
function ServiceInquiry({ service }: { service: typeof SERVICES[0] }) {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Interested in {service.t}?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/75 max-w-2xl mx-auto">
          Let's discuss how we can help restore and enhance your surfaces. Contact us for a free, no-obligation quote.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-gold-foreground hover:bg-gold/90 transition-colors"
          >
            Request Quote <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-8 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
          >
            <LinkIcon className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
