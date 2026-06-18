import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Shield,
  BadgeCheck,
  Users,
  Cpu,
  Leaf,
  Clock,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/who.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NKE Floors — Premium Floor Restoration Since 1999" },
      {
        name: "description",
        content:
          "Learn about NKE Floors, 25+ years of premium marble, granite, terrazzo and concrete restoration for hotels, villas and corporate spaces.",
      },
      {
        property: "og:title",
        content: "About NKE Floors — Premium Floor Restoration",
      },
      {
        property: "og:description",
        content: "Over 25 years restoring natural stone to masterpieces.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="A Quarter Century of Excellence"
        subtitle="Est. 1999"
        description="NKE Floors is the trusted specialist in premium marble, granite, terrazzo and concrete restoration. Since our founding in 1999, we've partnered with property owners, architects, and facility managers to transform and preserve the surfaces that define their spaces."
        backgroundImage={heroImg}
        cta={{
          text: "Get Free Consultation",
          href: "#contact",
        }}
        secondaryCta={{
          text: "View Our Portfolio",
          href: "/services",
        }}
      />

      <CompanyIntro />
      <VisionMission />
      <Achievements />
      <WhyChoose />
      <TeamHighlights />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}

/* ============ COMPANY INTRO ============ */
function CompanyIntro() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={aboutImg}
            alt="Craftsman at work"
            className="w-full h-[640px] object-cover rounded-sm shadow-elevated"
            loading="lazy"
            width={1400}
            height={1600}
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card border border-border shadow-elevated p-8 max-w-xs hidden md:block">
            <div className="font-serif text-5xl text-gold">10,000+</div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">
              Projects Completed
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Our Story"
            title="From Vision to Industry Leadership"
            intro="Founded in 1999, NKE Floors began with a simple mission: to restore natural stone surfaces to their original brilliance. Over two decades later, we've become the trusted restoration partner for premium properties across the region."
          />
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              What started as a small team of skilled craftsmen has evolved into a comprehensive restoration services firm, serving hotels, villas, corporate offices, and industrial facilities. Our commitment to excellence, craftsmanship, and customer satisfaction remains unwavering.
            </p>
            <p>
              Every project we undertake is guided by our core values: precision, integrity, and a genuine respect for the natural beauty of stone. We invest in the latest technology, continuously train our team, and maintain the highest standards of quality control.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                i: Award,
                t: "Industry Leaders",
                d: "Recognized for excellence and innovation in stone restoration.",
              },
              {
                i: Users,
                t: "Expert Team",
                d: "Trained craftsmen with decades of combined experience.",
              },
              {
                i: Cpu,
                t: "Advanced Tech",
                d: "Cutting-edge equipment for precision results.",
              },
              {
                i: Shield,
                t: "Quality Focused",
                d: "Rigorous standards on every project.",
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

/* ============ VISION & MISSION ============ */
function VisionMission() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Direction"
          title="Vision & Mission"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="p-8 bg-background border border-border rounded-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
              <Award className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-primary">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be the globally recognized leader in natural stone restoration, setting the benchmark for excellence, innovation, and sustainability in the industry.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Premium quality on every project",
                "Continuous innovation in restoration techniques",
                "Trusted partner for discerning clients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <ArrowRight className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-background border border-border rounded-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
              <Shield className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-primary">
              Our Mission
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To deliver exceptional stone restoration services that preserve natural beauty, enhance property value, and exceed client expectations through expertise, integrity, and dedication.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Restore surfaces to perfection",
                "Provide outstanding customer service",
                "Maintain the highest safety standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <ArrowRight className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ACHIEVEMENTS & MILESTONES ============ */
function Achievements() {
  const milestones = [
    { year: 1999, title: "Founded NKE Floors", desc: "Started with a vision to restore natural stone." },
    { year: 2005, title: "Regional Recognition", desc: "Became the preferred partner for premium hospitality." },
    { year: 2010, title: "10,000 Projects", desc: "Completed restoration of over 10,000 projects." },
    { year: 2015, title: "Certifications", desc: "Achieved ISO 9001:2015 Quality Management Certification." },
    { year: 2020, title: "Expansion", desc: "Expanded team and equipment for large-scale projects." },
    { year: 2026, title: "Industry Leader", desc: "Recognized as the leading restoration specialists." },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Milestones"
          title="Our Journey of Excellence"
          intro="From a small specialist team to an industry-leading restoration firm, our growth reflects our commitment to quality and customer satisfaction."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="border border-border bg-card p-8 rounded-sm hover:shadow-elevated transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground font-serif font-semibold">
                {String(m.year).slice(-2)}
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY CHOOSE US ============ */
function WhyChoose() {
  const reasons = [
    {
      i: Award,
      t: "25+ Years Experience",
      d: "Proven expertise across thousands of premium projects.",
    },
    {
      i: Cpu,
      t: "Advanced Machinery",
      d: "Imported European-grade equipment for precision work.",
    },
    {
      i: Users,
      t: "Skilled Professionals",
      d: "Trained, certified craftsmen dedicated to excellence.",
    },
    {
      i: Leaf,
      t: "Dust-Free Process",
      d: "Clean, safe, and efficient restoration techniques.",
    },
    {
      i: BadgeCheck,
      t: "Quality Assured",
      d: "Multi-stage inspection on every project.",
    },
    {
      i: Clock,
      t: "Timely Delivery",
      d: "Predictable schedules and on-time completion.",
    },
  ];

  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Partner With Us"
          title="What Sets Us Apart"
          intro="Our reputation is built on consistency, craftsmanship, and an unwavering commitment to exceeding expectations."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.t}
              className="border border-border bg-background p-8 rounded-sm hover:border-gold transition-colors"
            >
              <div className="h-12 w-12 rounded-sm border border-border flex items-center justify-center hover:border-gold hover:bg-gold/5 transition-colors">
                <r.i className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary">{r.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TEAM HIGHLIGHTS ============ */
function TeamHighlights() {
  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Projects Completed", value: "10,000+" },
    { label: "Team Members", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="By The Numbers"
          title="Our Team & Impact"
          intro="A dedicated team of specialists committed to delivering excellence on every project — measured by the satisfaction and success of our clients."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-8 border border-border bg-card rounded-sm hover:shadow-elevated transition-shadow"
            >
              <div className="font-serif text-5xl text-gold">{s.value}</div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const testimonials = [
    {
      n: "Rajiv Menon",
      r: "General Manager, Grand Heritage Hotel",
      q: "NKE Floors restored our 40-year-old marble lobby to better-than-new condition. The professionalism and care for our operations were exceptional.",
    },
    {
      n: "Sarah Whitman",
      r: "Principal Architect, Whitman Studio",
      q: "We specify NKE for every project demanding a true mirror finish. Their craftsmanship is consistent and reliable.",
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

  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Clients Say About Us"
          intro="Trusted by property owners, architects, and facility managers who know quality when they see it."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.n}
              className="border border-border bg-background p-10 rounded-sm"
            >
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-6 font-serif text-xl text-primary leading-snug">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                  {t.n
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </div>
                <figcaption>
                  <div className="font-medium text-primary">{t.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                    {t.r}
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

/* ============ CONTACT CTA ============ */
function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Ready to Transform Your Floors?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/75 max-w-2xl mx-auto">
          Schedule a complimentary consultation with our specialists to discuss your project needs and goals.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-gold-foreground hover:bg-gold/90 transition-colors"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-8 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
