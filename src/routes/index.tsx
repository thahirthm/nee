import { createFileRoute } from "@tanstack/react-router";
import {
  Gem,
  Mountain,
  Layers,
  Sparkles,
  Grid3x3,
  Shield,
  Wrench,
  Hammer,
  Building2,
  Award,
  CheckCircle2,
  Clock,
  Users,
  Cpu,
  Leaf,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Sliders,
  Disc3,
  Droplets,
  Sun,
  BadgeCheck,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/who.webp";
import projectHotel from "@/assets/project-hotel.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NKE Floors — Premium Marble, Granite & Floor Restoration" },
      {
        name: "description",
        content:
          "Over 25 years of excellence restoring marble, granite, terrazzo and concrete floors for hotels, villas and corporate spaces. Trusted by architects, builders and facility managers.",
      },
      {
        property: "og:title",
        content: "NKE Floors — Premium Floor Restoration",
      },
      {
        property: "og:description",
        content:
          "Transforming natural stone into masterpieces — 25+ years, 10,000+ projects.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "NKE Floors",
          description:
            "Premium marble, granite, terrazzo and concrete floor restoration with 25+ years of experience.",
          telephone: "+1-000-000-0000",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office Address",
            addressLocality: "City",
            addressCountry: "Country",
          },
        }),
      },
    ],
  }),
  component: Page,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-[1.1]">
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-gold" />
      {intro && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}

function Page() {
  return (
    <main className=" text-foreground">
      <Header />
      <Hero />
      <FancyMirrors />
      <About />
      <Services />
      <WhyUs />
      <Recognition />
      <Associations />
      <Portfolio />
      <Process />
      <Testimonials />
      <Blog />
      <ContactFooter />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Polished marble hotel lobby"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 w-full">
        <div className="max-w-3xl">
          <Eyebrow>Est. 1999 · Premium Floor Restoration</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-primary">
            Transforming Natural Stone Into{" "}
            <em className="text-gold not-italic">Masterpieces</em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Over 25 years of excellence in marble, granite, terrazzo and
            concrete floor restoration — for hotels, villas, corporate offices
            and heritage interiors.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-card px-7 py-4 text-sm font-medium text-primary hover:border-gold transition-colors"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: "25+", v: "Years of Experience" },
              { k: "10,000+", v: "Projects Completed" },
              { k: "100%", v: "Residential & Commercial" },
              { k: "Trusted", v: "Industry Partner" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-gold pl-4">
                <div className="font-serif text-3xl md:text-4xl text-primary">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FANCY MIRRORS ---------------- */
function FancyMirrors() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Visual Showcase"
            title="Fancy Walking on Mirrors?"
            intro="Drag the slider to see how worn, dull surfaces are transformed into mirror-finish masterpieces — a signature of NKE Floors restoration craftsmanship."
          />
          <ul className="mt-10 space-y-4">
            {[
              "Mirror-grade reflective finish",
              "Dust-controlled restoration process",
              "Long-lasting protective sealing",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a
            href="#projects"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-gold pb-1 hover:gap-3 transition-all"
          >
            View More Transformations <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-7">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={aboutImg}
            alt="NKE Floors craftsman at work"
            className="w-full h-[640px] object-cover rounded-sm shadow-elevated"
            loading="lazy"
            width={1400}
            height={1600}
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card border border-border shadow-elevated p-8 max-w-xs hidden md:block">
            <div className="font-serif text-5xl text-gold">25+</div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">
              Years of Mastery
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Who We Are"
            title="A Quarter Century of Floor Restoration Mastery"
            intro="NKE Floors is a trusted specialist in marble, granite, terrazzo and concrete restoration. Since 1999, we've helped property owners, hoteliers, architects and facility managers preserve and elevate the surfaces that define their spaces."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                i: Users,
                t: "Skilled Workforce",
                d: "Trained craftsmen with decades of combined site experience.",
              },
              {
                i: Cpu,
                t: "Advanced Equipment",
                d: "Imported machinery for precision grinding and polishing.",
              },
              {
                i: Shield,
                t: "Commitment to Quality",
                d: "Every project audited against rigorous quality benchmarks.",
              },
              {
                i: BadgeCheck,
                t: "Customer-Centric",
                d: "Clear communication, on-time delivery, lasting results.",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="border border-border bg-card p-6 rounded-sm hover:border-gold transition-colors"
              >
                <f.i className="h-6 w-6 text-gold" />
                <div className="mt-4 font-serif text-lg text-primary">
                  {f.t}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  {
    i: Gem,
    t: "Marble Polishing",
    d: "Mirror-grade polishing that restores natural luster and depth to marble surfaces.",
  },
  {
    i: Mountain,
    t: "Granite Polishing",
    d: "Precision grinding and polishing for high-traffic granite floors and counters.",
  },
  {
    i: Grid3x3,
    t: "Terrazzo Restoration",
    d: "Specialist restoration techniques that revive vintage and modern terrazzo.",
  },
  {
    i: Layers,
    t: "Concrete Polishing",
    d: "Diamond-polished concrete for sleek, durable industrial-grade surfaces.",
  },
  {
    i: Sparkles,
    t: "Mosaic Floor Restoration",
    d: "Delicate craftsmanship to preserve intricate mosaic detailing and grout.",
  },
  {
    i: Droplets,
    t: "Stone Sealing",
    d: "Premium impregnators and sealers that protect against stains and moisture.",
  },
  {
    i: Wrench,
    t: "Floor Restoration",
    d: "Full-cycle restoration: repair, level, polish and protect — handled end to end.",
  },
  {
    i: Sun,
    t: "Surface Enhancement",
    d: "Crystallisation and densification for enhanced gloss and longevity.",
  },
  {
    i: Building2,
    t: "Commercial Floor Maintenance",
    d: "Scheduled maintenance programs for hotels, malls and corporate campuses.",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Specialist Restoration & Polishing"
            intro="A complete suite of premium services for natural stone, terrazzo and concrete — delivered by certified specialists with decades of experience."
          />
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {SERVICES.map((s) => (
            <div
              key={s.t}
              className="group bg-card p-10 hover:bg-background transition-colors"
            >
              <div className="h-12 w-12 rounded-sm border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                <s.i className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors"
              >
                Learn More{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
const WHY = [
  {
    i: Award,
    t: "25+ Years Experience",
    d: "Decades of refined expertise across thousands of premium projects.",
  },
  {
    i: Cpu,
    t: "Advanced Machinery",
    d: "European-grade equipment for unmatched precision and finish.",
  },
  {
    i: Users,
    t: "Skilled Professionals",
    d: "Trained, supervised craftsmen committed to excellence.",
  },
  {
    i: Leaf,
    t: "Dust-Free Process",
    d: "Cleaner, safer, faster — minimal disruption to your space.",
  },
  {
    i: Gem,
    t: "Premium Materials",
    d: "Only certified abrasives, sealers and chemistries.",
  },
  {
    i: Building2,
    t: "Commercial Expertise",
    d: "Proven on large-scale hospitality and corporate projects.",
  },
  {
    i: Clock,
    t: "Timely Delivery",
    d: "Predictable schedules backed by disciplined project management.",
  },
  {
    i: Shield,
    t: "Quality Assurance",
    d: "Multi-stage inspection on every square foot we deliver.",
  },
  {
    i: BadgeCheck,
    t: "Customer Satisfaction",
    d: "A relationship-first approach earning repeat clients.",
  },
];

function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Clients Choose NKE Floors"
          intro="Property owners, architects and facility managers across the region trust us to deliver consistent, premium-grade results — project after project."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((w) => (
            <div
              key={w.t}
              className="border border-border bg-card p-8 rounded-sm hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-sm bg-primary/5 flex items-center justify-center">
                  <w.i className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-primary">{w.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RECOGNITION ---------------- */
function Recognition() {
  const items = [
    { t: "ISO 9001:2015", d: "Quality Management Certification" },
    { t: "OSHA Compliant", d: "International Safety Standards" },
    { t: "Stone Federation", d: "Certified Restoration Member" },
    { t: "Excellence Award", d: "Craftsmanship in Restoration" },
  ];
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Recognition"
          title="Certificates & Qualifications"
          intro="Independently certified, regularly audited, and recognised by leading industry bodies for our craftsmanship and safety standards."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <div
              key={c.t}
              className="aspect-[3/4] border border-border bg-background p-8 flex flex-col items-center justify-center text-center hover:border-gold transition-colors group"
            >
              <Award className="h-10 w-10 text-gold" />
              <div className="mt-6 h-px w-12 bg-gold" />
              <h3 className="mt-6 font-serif text-xl text-primary">{c.t}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ASSOCIATIONS ---------------- */
function Associations() {
  const partners = [
    "Stone Federation",
    "Marble Institute",
    "Builders' Council",
    "Hospitality Alliance",
    "Architects' Guild",
    "Facility Partners",
    "Construction Board",
    "Heritage Society",
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Industry Relations"
          title="Our Associations"
          intro="We're proud to collaborate with leading industry bodies, construction associations and supplier partners across the region."
        />
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-card aspect-[3/2] flex items-center justify-center p-6 hover:bg-background transition-colors group"
            >
              <div className="text-center">
                <div className="font-serif text-lg text-primary group-hover:text-gold transition-colors">
                  {p}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Partner
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const PROJECTS = [
  {
    img: projectHotel,
    t: "Grand Heritage Hotel",
    c: "Hotels",
    d: "Ballroom marble restoration",
  },
  {
    img: projectVilla,
    t: "Hillside Private Villa",
    c: "Villas",
    d: "Granite floor mirror polishing",
  },
  {
    img: projectOffice,
    t: "Meridian Corporate Tower",
    c: "Corporate Offices",
    d: "Lobby & reception terrazzo",
  },
  {
    img: projectIndustrial,
    t: "Northgate Logistics Hub",
    c: "Industrial Projects",
    d: "Polished concrete, 40,000 sq ft",
  },
  {
    img: projectHotel,
    t: "Royale Boutique Suites",
    c: "Hotels",
    d: "Heritage mosaic restoration",
  },
  {
    img: projectVilla,
    t: "Bayfront Residences",
    c: "Apartments",
    d: "Common area marble program",
  },
];
const CATS = [
  "All",
  "Hotels",
  "Villas",
  "Apartments",
  "Corporate Offices",
  "Commercial Buildings",
  "Industrial Projects",
];

function Portfolio() {
  const [cat, setCat] = useState("All");
  const filtered =
    cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.c === cat);

  return (
    <section id="projects" className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Work"
          title="A Portfolio of Premium Restorations"
          intro="From historic hotel ballrooms to corporate headquarters and private villas — a selection of projects entrusted to NKE Floors."
        />
        <div className="mt-12 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-sm border transition-colors ${cat === c
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-gold hover:text-primary"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={`${p.t}-${i}`}
              className="group relative overflow-hidden rounded-sm bg-background border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold">
                  {p.c}
                </div>
                <h3 className="mt-2 font-serif text-xl text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  {
    i: Search,
    t: "Inspection",
    d: "Detailed site assessment of surface condition, substrate and finish goals.",
  },
  {
    i: Sliders,
    t: "Surface Preparation",
    d: "Furniture protection, dust control setup and surface levelling.",
  },
  {
    i: Disc3,
    t: "Grinding",
    d: "Coarse diamond grinding to remove damage and even out the surface.",
  },
  {
    i: Layers,
    t: "Honing",
    d: "Progressive finer grits to refine the surface and prepare for polish.",
  },
  {
    i: Sparkles,
    t: "Polishing",
    d: "Fine polishing powders for a brilliant, mirror-grade reflection.",
  },
  {
    i: Droplets,
    t: "Sealing",
    d: "Premium impregnating sealer for stain resistance and longevity.",
  },
  {
    i: BadgeCheck,
    t: "Final Finish",
    d: "Quality inspection, handover and aftercare guidance.",
  },
];

function Process() {
  return (
    <section id="process" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title="Our Polishing Process"
          intro="A disciplined seven-stage methodology, refined over 25+ years — engineered to deliver consistent, premium results on every project."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="aspect-video rounded-sm overflow-hidden border border-border shadow-elevated bg-primary">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/wqtCg7PrJpg?si=thrRRtFQ02GD1NAj"
                title="NKE Floors — Polishing Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="aspect-video rounded-sm overflow-hidden border border-border bg-primary"
                >
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/GkjJ4mgWaSw?si=CZ8e8dDgPNldeS4K"
                    title={`Process Video ${n}`}
                    allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <ol className="lg:col-span-5 relative border-l border-border pl-8 space-y-8">
            {STEPS.map((s, i) => (
              <li key={s.t} className="relative">
                <div className="absolute -left-[42px] top-0 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3">
                  <s.i className="h-5 w-5 text-gold" />
                  <h3 className="font-serif text-xl text-primary">{s.t}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const REVIEWS = [
  {
    n: "Rajiv Menon",
    r: "General Manager, Grand Heritage Hotel",
    q: "NKE Floors restored our 40-year-old marble lobby to better-than-new condition. The team's professionalism and care for our operations were exceptional.",
  },
  {
    n: "Sarah Whitman",
    r: "Principal Architect, Whitman Studio",
    q: "We specify NKE for every project that demands a true mirror finish. Their craftsmanship is consistent, their timelines reliable.",
  },
  {
    n: "Anil Kapoor",
    r: "Facility Director, Meridian Tower",
    q: "Over six years and dozens of projects, NKE has never missed a deadline. They're the only restoration partner we trust.",
  },
  {
    n: "Elena Costa",
    r: "Owner, Bayfront Residences",
    q: "Dust-free, on-time, and the floors look extraordinary. They treated our home with genuine respect.",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          intro="Trusted by leading hospitality groups, architects, facility managers and discerning private owners."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r) => (
            <figure
              key={r.n}
              className="border border-border bg-background p-10 rounded-sm"
            >
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl text-primary leading-snug">
                &ldquo;{r.q}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                  {r.n
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </div>
                <figcaption>
                  <div className="font-medium text-primary">{r.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                    {r.r}
                  </div>
                </figcaption>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
const POSTS = [
  {
    t: "The Definitive Guide to Marble Care",
    c: "Marble Care",
    d: "Daily, weekly and seasonal practices to keep marble floors looking new for decades.",
  },
  {
    t: "When to Restore vs. Replace Your Floor",
    c: "Restoration",
    d: "A practical decision framework for property managers and homeowners.",
  },
  {
    t: "Inside a Hotel Ballroom Restoration",
    c: "Case Studies",
    d: "How we restored 12,000 sq ft of heritage marble in under three weeks.",
  },
  {
    t: "Polished Concrete: Industrial Meets Premium",
    c: "Industry Trends",
    d: "Why polished concrete is the surface of choice for modern commercial spaces.",
  },
];

function Blog() {
  return (
    <section id="blog" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Insights"
          title="Latest from the Journal"
          intro="Practical guidance, restoration case studies and material insights from our craftsmen and project leads."
        />
        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <article className="lg:col-span-7 group border border-border bg-card rounded-sm overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={projectHotel}
                alt={POSTS[0].t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-10">
              <div className="text-[10px] uppercase tracking-widest text-gold">
                {POSTS[0].c} · Featured
              </div>
              <h3 className="mt-3 font-serif text-3xl text-primary">
                {POSTS[0].t}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {POSTS[0].d}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
          <div className="lg:col-span-5 grid gap-6">
            {POSTS.slice(1).map((p, i) => (
              <article
                key={p.t}
                className="group border border-border bg-card rounded-sm p-6 flex gap-5 hover:border-gold transition-colors"
              >
                <img
                  src={[projectVilla, projectOffice, projectIndustrial][i]}
                  alt={p.t}
                  loading="lazy"
                  className="h-28 w-28 object-cover rounded-sm shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    {p.c}
                  </div>
                  <h3 className="mt-2 font-serif text-lg text-primary leading-snug">
                    {p.t}
                  </h3>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary group-hover:text-gold"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT + FOOTER ---------------- */
function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Let&rsquo;s restore your floors to{" "}
              <em className="text-gold not-italic">flawless</em>.
            </h2>
            <p className="mt-6 text-base text-primary-foreground/70 leading-relaxed max-w-md">
              Share your project details and our specialists will schedule a
              complimentary on-site consultation within 48 hours.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+10000000000"
                className="flex items-center gap-4 group"
              >
                <span className="h-11 w-11 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-gold" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                    Call
                  </span>
                  <span className="block font-medium group-hover:text-gold transition-colors">
                    +1 (000) 000-0000
                  </span>
                </span>
              </a>
              <a
                href="mailto:hello@nkefloors.com"
                className="flex items-center gap-4 group"
              >
                <span className="h-11 w-11 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gold" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                    Email
                  </span>
                  <span className="block font-medium group-hover:text-gold transition-colors">
                    hello@nkefloors.com
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gold" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                    Office
                  </span>
                  <span className="block font-medium">
                    Premium Business Park, Suite 100
                  </span>
                </span>
              </div>
              <a
                href="https://wa.me/10000000000"
                className="inline-flex items-center gap-2 mt-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:bg-gold/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 rounded-sm overflow-hidden border border-primary-foreground/10 aspect-[16/9]">
              <iframe
                title="NKE Floors office map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C-0.08%2C51.51&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — our team will be in touch within 24 hours.");
              }}
              className="bg-background text-foreground rounded-sm p-8 lg:p-12 shadow-elevated"
            >
              <h3 className="font-serif text-2xl text-primary">
                Request a Consultation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No obligation. Typical response in under 24 hours.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    required
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.t}>{s.t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:border-gold resize-none"
                    placeholder="Tell us about your project, location and timeline."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-16 grid sm:grid-cols-3 gap-10 text-sm">
              <FooterCol
                title="Quick Links"
                items={[
                  "Home",
                  "About",
                  "Services",
                  "Projects",
                  "Process",
                  "Blog",
                  "Contact",
                ]}
              />
              <FooterCol
                title="Our Services"
                items={[
                  "Marble Polishing",
                  "Granite Restoration",
                  "Terrazzo Flooring",
                  "Concrete Polishing",
                  "Stone Sealing",
                  "Maintenance Programs",
                ]}
              />
              <div>
                <div className="font-serif text-lg text-gold">NKE Floors</div>
                <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                  Trusted specialists in marble, granite, terrazzo and concrete
                  restoration. Serving discerning property owners since 1999.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© 2026 NKE Floors. All Rights Reserved.</div>
          <div>
            Crafted by <span className="text-gold font-medium">Zuarak</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-border bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:border-gold"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-gold">{title}</div>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-primary-foreground/75 hover:text-gold transition-colors"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
