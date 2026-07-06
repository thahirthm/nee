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
  UploadCloud,
  Heart,
  TrendingUp,
  BookOpen
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

import beautifulRestoredFloor from "@/assets/beautiful_restored_floor.png";
import wornFloorBefore from "@/assets/worn_floor_before.png";
import founderPortrait from "@/assets/founder_portrait.png";
import livedInSpace from "@/assets/lived_in_space.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NKE Floors — Premium Marble, Granite & Floor Restoration" },
      {
        name: "description",
        content:
          "Helping You Make the Right Decision Before You Restore or Replace.",
      },
      {
        property: "og:title",
        content: "NKE Floors — Premium Floor Restoration",
      },
      {
        property: "og:description",
        content:
          "Helping You Make the Right Decision Before You Restore or Replace.",
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
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
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
      <DecisionSection />
      {/* <UploadSection /> */}
      <FancyMirrors />
      <About />
      <Services />
      <WhyUs />
      <Recognition />
      <Associations />
      <Portfolio />
      <Process />
      <Testimonials />
      <FloorStory />
      <Blog />
      <FounderMessage />
      <OurStory />
      <FinalCTA />
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
          src={beautifulRestoredFloor}
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
          <Eyebrow>Protecting the Floors That Matter</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-primary">
            Every Great Restoration Begins With{" "}
            <em className="text-gold not-italic">Understanding.</em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Helping You Make the Right Decision Before You Restore or Replace.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#upload"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
            >
              Ask the Floor Expert <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-card px-7 py-4 text-sm font-medium text-primary hover:border-gold transition-colors"
            >
              View Our Projects
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

/* ---------------- DECISION SECTION ---------------- */
function DecisionSection() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={wornFloorBefore}
            alt="Worn floor before restoration"
            className="w-full h-[500px] object-cover rounded-sm shadow-elevated"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Before You Spend Money..."
            title="Can This Floor Be Restored?"
            intro="Many floors can be preserved with restoration. Replacing a floor is a massive undertaking—costly, messy, and time-consuming. We provide honest guidance on what can be restored and what actually needs replacing."
          />
          <div className="mt-10">
            <a
              href="#upload"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-gold pb-1 hover:gap-3 transition-all"
            >
              Find out what your floor needs <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UPLOAD SECTION ---------------- */
function UploadSection() {
  return (
    <section id="upload" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Ask the Floor Expert"
              title="Unsure What Your Floor Needs?"
              intro="Send us a photo of your floor, and we'll give you a clear, honest assessment. No pressure, no obligations."
            />
            <ul className="mt-10 space-y-4">
              {[
                "Professional Assessment",
                "Honest Recommendation",
                "Expected Improvement",
                "Estimated Budget Range",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="border border-dashed border-border rounded-sm p-12 flex flex-col items-center justify-center text-center bg-card hover:bg-card/80 transition-colors cursor-pointer group shadow-elevated">
              <div className="h-16 w-16 rounded-sm bg-primary/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <UploadCloud className="h-8 w-8 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary">Upload Photos</h3>
              <p className="mt-2 text-sm text-muted-foreground">Drag and drop or click to browse</p>
              <button className="mt-8 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Select Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FANCY MIRRORS (BEFORE/AFTER) ---------------- */
function FancyMirrors() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Visual Showcase"
            title="Experience the Difference"
            intro="Move the slider to see how we tackle tough floor damage and bring out the original beauty."
          />
          <ul className="mt-10 space-y-6">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-serif text-lg text-primary">
                <Shield className="h-4 w-4 text-gold" /> The Problem
              </div>
              <span className="text-muted-foreground text-sm pl-6">Deep scratches, dull finish, and lost shine due to heavy foot traffic.</span>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-serif text-lg text-primary">
                <Wrench className="h-4 w-4 text-gold" /> The Solution
              </div>
              <span className="text-muted-foreground text-sm pl-6">A disciplined grinding, honing, and mirror-grade polishing process.</span>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-serif text-lg text-primary">
                <Sparkles className="h-4 w-4 text-gold" /> The Result
              </div>
              <span className="text-muted-foreground text-sm pl-6">A flawlessly restored surface that looks brand new and is built to last.</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT (INVESTMENT & PRIDE) ---------------- */
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
            eyebrow="Section 4"
            title="More Than a Floor. An Investment Worth Protecting."
            intro="A premium floor is more than a construction material. It is an investment made to create a lasting experience."
          />
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Whether it is a family home, a luxury hotel, a commercial building or an industrial facility, every floor reflects the care, celebration, standards and pride of the people who own and manage it.
            </p>
            <p>
              Our role is to help you protect that investment through the right advice, the right restoration and the right maintenance—so every person who walks into your space experiences it at its best.
            </p>
            <p className="font-medium text-primary">
              Because when a floor reflects quality, it becomes a source of pride for everyone connected with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES (EXPERTISE) ---------------- */
const SERVICES = [
  {
    i: Gem,
    t: "Natural Stone",
    d: "Marble Polishing & Honing, Granite Restoration, Terrazzo Refinishing.",
  },
  {
    i: Layers,
    t: "Concrete",
    d: "Industrial Polishing, Densification, Surface Levelling.",
  },
  {
    i: Wrench,
    t: "Maintenance",
    d: "Stain Protection Sealing, Routine Care Programs, Periodic Deep Cleaning.",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Our Areas of Expertise"
            title="Specialist Restoration & Polishing"
            intro="A complete suite of premium services for natural stone, terrazzo and concrete — delivered by certified specialists with decades of experience."
          />
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
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

/* ---------------- WHY US (WHY RESTORATION) ---------------- */
const WHY = [
  {
    i: Heart,
    t: "Preserve",
    d: "Maintain the original character and material value of your property.",
  },
  {
    i: TrendingUp,
    t: "Save",
    d: "Cost-effective alternative to complete extraction and replacement.",
  },
  {
    i: Shield,
    t: "Protect",
    d: "Enhance longevity and resistance against future wear and tear.",
  },
  {
    i: Award,
    t: "Perform",
    d: "Ensure your surfaces meet aesthetic and functional standards.",
  },
];

function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="The Benefits"
          title="Why Property Owners Choose Restoration"
          intro="Restoring your floor is not just about aesthetics; it's a strategic decision that protects your investment."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

/* ---------------- FLOOR STORY ---------------- */
function FloorStory() {
  return (
    <section className="py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={livedInSpace}
            alt="Beautiful lived-in space"
            className="w-full h-[640px] object-cover rounded-sm shadow-elevated"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionHeader
            title="Every Floor Has a Story"
            intro="Floors are the silent witnesses to our lives. They carry the footsteps of growing families, the bustling energy of thriving businesses, and the quiet moments of pride when you look around a space you love. A well-maintained floor is not just about aesthetics; it's about preserving memories, extending longevity, and taking pride in the environments we build and inhabit."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG (KNOWLEDGE CENTRE TEASER) ---------------- */
const POSTS = [
  {
    t: "Marble Care & Maintenance",
    c: "Knowledge Centre",
    d: "Daily, weekly and seasonal practices to keep marble floors looking new for decades.",
  },
  {
    t: "Concrete Polishing Tech",
    c: "Knowledge Centre",
    d: "Understanding industrial polishing, densification, and surface levelling techniques.",
  },
  {
    t: "Restoration vs Replacement",
    c: "Knowledge Centre",
    d: "A practical decision framework for property managers and homeowners.",
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
          eyebrow="Learn Before You Decide"
          title="Knowledge Centre"
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

/* ---------------- FOUNDER'S MESSAGE ---------------- */
function FounderMessage() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden border border-border shadow-elevated">
            <img
              src={founderPortrait}
              alt="K. J. Dilip, Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>A Message From Our Founder</Eyebrow>
          <blockquote className="mt-6 font-serif text-3xl md:text-4xl text-primary leading-relaxed">
            "For over four decades, I have learnt one simple lesson—every floor deserves to be understood before it is restored or replaced.
            <br /><br />
            Our responsibility is not simply to restore surfaces. It is to help people make the right decision, protect their investment and preserve what already has value.
            <br /><br />
            That principle has guided every project we have undertaken since 1999."
          </blockquote>
          <div className="mt-8">
            <div className="font-serif text-xl text-primary">— K. J. Dilip</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Founder, NKE Floorcare</div>
          </div>
          <div className="mt-10">
            <a href="#our-story" className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-gold pb-1 hover:gap-3 transition-all">
              Read Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- OUR STORY ---------------- */
function OurStory() {
  return (
    <section id="our-story" className="py-28 border-b border-border">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionHeader title="Our Story" />
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Every meaningful journey begins with a purpose.</p>
          <p>Ours began long before NKE Floorcare was established. It began with a young man who entered the world of work at the age of seventeen, when family circumstances demanded responsibility before ambition. Those early years became a lifelong education—not only in materials and workmanship, but in people, perseverance and the value of honest work.</p>
          <p>In 1999, that journey found its direction with the formation of NKE Floorcare.</p>
          <p>Our purpose was simple: to help people protect the value of the floors they had invested in and to restore them with honesty, skill and respect.</p>
          <p>Over the years, we have had the privilege of working in family homes, luxury hotels, commercial buildings and industrial facilities. Every project has strengthened one belief:</p>
          <p className="font-serif text-3xl text-primary text-center my-12">A floor is never just a surface. It is an investment.</p>
          <p>It is part of the identity of a home, the reputation of a hotel, the image of a business and the efficiency of an industry. When properly maintained, it continues to create experiences, inspire confidence and serve people for decades.</p>
          <p>That is why our responsibility goes beyond restoration. We help our clients understand their options and make the right decision—whether that means restoration, maintenance or replacement. Our recommendations are guided not by what benefits us, but by what genuinely serves the long-term interests of the floor and the people who own it.</p>
          <p>We believe true craftsmanship is not measured by how much work we undertake, but by how responsibly we guide those who place their trust in us.</p>
          <p>Every project we complete is another opportunity to improve. We believe in becoming just one percent better every day—learning from every floor, every challenge and every client. It is this commitment to continuous improvement that has shaped our journey and will continue to shape our future.</p>
          <p>But our journey does not end with us. We believe that knowledge has value only when it is shared.</p>
          <p>This belief has inspired Shilpa Seva—our long-term commitment to developing skilled professionals, preserving traditional craftsmanship and creating opportunities for young people willing to learn, work with integrity and build meaningful careers.</p>
          <p>Every client who places their trust in NKE becomes an important part of that larger vision. Your project enables us not only to restore valuable floors, but also to preserve specialised knowledge, develop future craftsmen and ensure that the skills accumulated over decades continue to benefit generations to come.</p>
          
          <div className="bg-card border border-border p-8 rounded-sm my-12 shadow-soft">
            <h3 className="font-serif text-2xl text-primary mb-4">A Small Request</h3>
            <p>If you know a young person of good character who is sincere, willing to learn and looking for an opportunity to build a dignified career through skilled craftsmanship, we would be grateful if you introduced them to us.</p>
            <p className="mt-4">A recommendation from a teacher, employer, community leader or someone who genuinely knows the individual helps us identify those who may benefit most from the opportunities created through Shilpa Seva. One recommendation can open the door to a lifetime of opportunity.</p>
          </div>
          
          <p>As we continue this journey, our promise remains unchanged.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-primary">
            <li>To serve every client with honesty.</li>
            <li>To recommend only what is truly needed.</li>
            <li>To continually improve our knowledge and workmanship.</li>
            <li>To protect the value of every floor entrusted to us.</li>
            <li>And to pass on what we have learnt, so that the journey continues long after us.</li>
          </ul>
          
          <p className="mt-8 font-serif text-xl text-primary">Thank you for being part of our story. It would be our privilege to become a part of yours.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-28 text-center bg-card border-b border-border">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-4xl md:text-5xl text-primary">Let’s Start With Your Floor</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Upload photos for a preliminary assessment, or schedule a visit for a detailed consultation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#upload"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Upload Your Floor <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-8 py-4 text-sm font-medium hover:border-gold hover:text-primary transition-colors"
          >
            Schedule a Site Visit
          </a>
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
            <div className="eyebrow text-gold/80">Get In Touch</div>
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
