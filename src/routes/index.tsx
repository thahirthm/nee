import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Camera,
  MessageSquare,
  Search,
  Check,
  ChevronRight,
  Download,
  BookOpen,
  Shield,
  Wrench,
  Sparkles
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { BeforeAfter } from "@/components/site/BeforeAfter";

import mainBanner from "@/assets/main-banner.jpg";
import wornFloorBefore from "@/assets/m8.jpg";
import projectHotel from "@/assets/m-3.jpg";
import projectVilla from "@/assets/m-4.jpg";
import projectOffice from "@/assets/M-1.jpg";
import projectIndustrial from "@/assets/m-2.jpg";
import aboutImg from "@/assets/about.jpg";
import c1Img from "@/assets/c1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NKE Floorcare — Surface Restoration & Flooring Specialists" },
      {
        name: "description",
        content:
          "NKE Floorcare restores, polishes, and maintains the floors that luxury hotels, industrial facilities, and architecturally significant buildings depend on.",
      },
    ],
  }),
  component: Page,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground bg-muted inline-block px-3 py-1 rounded-sm mb-4">{children}</div>;
}

function Page() {
  return (
    <main className="text-foreground pt-20 lg:pt-24">
      <Header />
      <Hero />
      <UnderstandingSection />
      <VisualShowcase />
      <InvestmentSection />
      <ExpertiseSection />
      <CredibilityStrip />
      <ComplementaryCallout />
      <FeaturedCaseStudy />
      <BlogSection />
      <CapabilityStatementCTA />
      <ShilpaSevaTeaser />
      <ContactFooter />
    </main>
  );
}

/* ---------------- 1. HERO ---------------- */
function Hero() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
        <div className="flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24">
          <Eyebrow>SURFACE RESTORATION & FLOORING SPECIALISTS</Eyebrow>
          <h1 className="mt-2 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary">
            NKE Floorcare Pvt. Ltd.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Protecting the Floors That Matter — Natural Stone, Concrete & Industrial Floors Across South India
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <div className="w-1 h-16 bg-primary"></div>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Polish with Purpose. Transform with Skill.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <div className="font-serif text-2xl md:text-3xl text-primary">Since 1999</div>
              <div className="mt-1 text-sm text-muted-foreground">25+ Years of Expertise</div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl text-primary">Chennai & Bengaluru</div>
              <div className="mt-1 text-sm text-muted-foreground">Serving South India</div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
            >
              Get a Free Assessment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="relative h-[50vh] lg:h-auto hidden md:block">
          <img
            src={mainBanner}
            alt="Polished marble hotel lobby"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. EVERY GREAT RESTORATION ---------------- */
function UnderstandingSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-sm">
          <img
            src={wornFloorBefore}
            alt="Room before restoration"
            className="w-full h-full object-cover shadow-elevated"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Every Great Restoration Begins With Understanding.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Whether your floor is marble, granite, terrazzo, mosaic or concrete — the first step is not restoration. It is understanding its condition.
          </p>
          
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-muted p-8 rounded-sm">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground">
                <Camera className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-serif text-primary">Upload Floor Photos</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our specialists will review them and share honest observations — no obligation.
              </p>
            </div>
            
            <div className="bg-muted p-8 rounded-sm">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-serif text-primary">Send on WhatsApp</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Get a quick, no-obligation response directly from our team on WhatsApp.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-muted p-8 rounded-sm">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-serif text-primary">View Our Projects</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              See what restoration can truly achieve before you make any decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2.5. VISUAL SHOWCASE ---------------- */
function VisualShowcase() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <Eyebrow>VISUAL SHOWCASE</Eyebrow>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-primary leading-tight">
            Experience the Difference
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Move the slider to see how we tackle tough floor damage and bring out the original beauty.
          </p>
          <ul className="mt-10 space-y-8">
            <li className="flex gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Problem</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Deep scratches, dull finish, and lost shine due to heavy foot traffic.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Wrench className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Solution</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">A disciplined grinding, honing, and mirror-grade polishing process.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Sparkles className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Result</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">A flawlessly restored surface that looks brand new and is built to last.</p>
              </div>
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

/* ---------------- 3. MORE THAN A FLOOR ---------------- */
function InvestmentSection() {
  const points = [
    {
      t: "Enduring Value",
      d: "A well-maintained floor adds lasting value to any property — residential, commercial, or industrial."
    },
    {
      t: "Preserve Character",
      d: "Restoration preserves the original material, its character, and its architectural intent — nothing is lost."
    },
    {
      t: "Decades of Life Added",
      d: "Proper maintenance extends floor life by decades, reducing long-term cost significantly."
    },
    {
      t: "Understand First",
      d: "NKE's approach: understand the floor first, then recommend only what it truly needs — nothing more."
    }
  ];

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            More Than a Floor. An<br/>Investment Worth Protecting.
          </h2>
          <div className="mt-12 space-y-8">
            {points.map((p, idx) => (
              <div key={idx} className="flex gap-4">
                <ArrowRight className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-primary font-medium">{p.t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[700px] overflow-hidden rounded-sm">
          <img
            src={projectVilla}
            alt="Beautifully restored floor"
            className="w-full h-full object-cover shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. AREAS OF EXPERTISE ---------------- */
function ExpertiseSection() {
  const areas = [
    {
      img: projectOffice,
      t: "Natural Stone\nRestoration",
      d: "Italian Marble, Indian Marble, Granite, Kota, Jaisalmer, Mosaic, Terrazzo & Engineered Stone. Floors, walls, façades, and table tops."
    },
    {
      img: projectIndustrial,
      t: "Industrial Concrete\nFlooring & Restoration",
      d: "New installations and large-scale restoration of durable, dust-proof, high-performance floors — executed with minimal disruption to operations."
    },
    {
      img: projectHotel,
      t: "Hotel Floorcare\nPrograms (AMC)",
      d: "Keeping public areas guest-ready every day. Periodic restoration combined with scheduled Annual Maintenance Contracts for 5-star hotels."
    },
    {
      img: projectVilla,
      t: "Decorative Concrete\nSystems",
      d: "Polished, burnished, and coloured concrete — the architectural flooring choice for homes, offices, and feature spaces."
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-serif text-4xl md:text-5xl text-primary">
          Our Areas of Expertise
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          With over 25 years of experience, NKE Floorcare serves natural stone, concrete, and industrial floors across four specialisms — working across residential, commercial, hospitality, and industrial properties.
        </p>
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((a, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <img src={a.img} alt={a.t} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-2xl text-primary whitespace-pre-line mb-4">{a.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. CREDIBILITY STRIP ---------------- */
function CredibilityStrip() {
  return (
    <section className="py-12 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide text-center">
          <span>25+ Years of Experience</span>
          <span className="hidden sm:inline text-gold">•</span>
          <span>Trusted by Leading Hospitality Brands</span>
          <span className="hidden sm:inline text-gold">•</span>
          <span>International Certifications: HTC Sweden, Klindex Italy, Korodur Germany, Hypergrinder USA, Guard France, Coval Technologies</span>
          <span className="hidden sm:inline text-gold">•</span>
          <span>25-Year AMC Partnership with Park Sheraton</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. COMPLEMENTARY CALLOUT ---------------- */
function ComplementaryCallout() {
  return (
    <section className="py-24 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>BEYOND THE CORE</Eyebrow>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-primary leading-tight">
            Complementary Flooring Services
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            While we specialize in natural stone and concrete, our expertise extends further. We offer a suite of specialized services designed to complete your property's flooring needs.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Ceramic & Vitrified Floor Restoration",
              "Deep Cleaning & Grout Cleaning",
              "Exterior Concrete Tile Enhancement",
              "Guard France Slip-Resistant Coatings",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-muted-foreground">
                <Check className="h-5 w-5 text-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-12 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft">
            Explore All Services <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-sm">
          <img
            src={c1Img}
            alt="Complementary flooring services"
            className="w-full h-full object-cover shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. FEATURED CASE STUDY ---------------- */
function FeaturedCaseStudy() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>Featured Case Study</Eyebrow>
          <h2 className="mt-2 font-serif text-4xl text-primary leading-tight">
            The 2,00,000 sq.ft. Residential Carpark Restoration
          </h2>
          <p className="mt-6 text-lg text-muted-foreground italic border-l-2 border-gold pl-4">
            "From too dusty for children to play, to a surface they play on."
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A comprehensive restoration of a massive residential carpark, transforming a deteriorated, dusting concrete surface into a durable, safe, and clean environment without displacing residents.
          </p>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors">
            Read full case study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="aspect-video rounded-sm overflow-hidden bg-muted">
          <img src={projectIndustrial} alt="Carpark restoration" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. BLOG SECTION ---------------- */
function BlogSection() {
  const posts = [
    {
      id: "what-is-stone-restoration",
      title: "What Is Stone Restoration?",
      excerpt: "You walk on it every day — but have you ever seen marble breathe again? Discover the method behind the magic.",
      date: "March 15, 2026"
    },
    {
      id: "why-concrete-floors-crack",
      title: "Why Concrete Floors Crack (And How to Fix It)",
      excerpt: "Most industrial floors don't crack because of poor concrete. They crack because of poor planning.",
      date: "March 8, 2026"
    },
    {
      id: "how-we-polish-concrete",
      title: "How We Polish Concrete Floors to Mirror Finish",
      excerpt: "From dusty to glossy — here's how raw concrete becomes a mirror.",
      date: "February 28, 2026"
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <Eyebrow>Insights & Guides</Eyebrow>
            <h2 className="mt-2 font-serif text-4xl text-primary">Latest From Our Blog</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shrink-0">
             View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-background border border-border p-8 rounded-sm hover:border-primary transition-all hover:shadow-elevated group flex flex-col">
              <h3 className="font-serif text-2xl text-primary group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="mt-4 text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-border mt-auto">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. CAPABILITY STATEMENT ---------------- */
function CapabilityStatementCTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-serif text-3xl">Download our Capability Statement</h2>
          <p className="mt-2 text-primary-foreground/80">Get the full PDF covering our credentials, processes, and marquee projects.</p>
        </div>
        <form className="flex w-full md:w-auto gap-2" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your work email" className="px-4 py-3 rounded-sm bg-background/10 border border-border/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold flex-1 md:w-64" required />
          <button type="submit" className="px-6 py-3 bg-gold text-gold-foreground rounded-sm font-medium hover:bg-gold/90 transition-colors shrink-0">
            Get PDF
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- 10. SHILPA SEVA TEASER ---------------- */
function ShilpaSevaTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 aspect-[4/3] rounded-sm overflow-hidden bg-muted order-last lg:order-first">
           <img src={aboutImg} alt="Craftsman at work" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>Our Social Mission</Eyebrow>
          <h2 className="mt-2 font-serif text-4xl text-primary">Craftsmen, Not Contractors.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every NKE project is built on a foundation of trained craftsmanship — through Shilpa Seva Foundation, our vocational training initiative for underprivileged individuals in surface restoration.
          </p>
          <Link to="/shilpa-seva-foundation" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors border-b border-primary/20 pb-1">
            Learn more about Shilpa Seva <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function ContactFooter() {
  return (
    <footer id="contact" className="bg-muted text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-primary mb-6">NKE Floorcare</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Headquartered in Chennai, serving India. Restoring, polishing, and maintaining floors for luxury hotels, industrial facilities, and architecturally significant buildings for over 25 years.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-primary font-medium">Chennai & Bengaluru Offices</strong>
                  Serving clients across South India
                </div>
              </div>
              <a href="tel:+10000000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-gold shrink-0" /> +1 (000) 000-0000
              </a>
              <a href="mailto:hello@nkefloors.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-gold shrink-0" /> hello@nkefloors.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Knowledge Hub', 'Projects & Case Studies', 'Capability Statement', 'Shilpa Seva Foundation', 'About / Company', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Natural Stone Restoration',
                'Industrial Concrete Flooring',
                'Hotel Floorcare Programs',
                'Decorative Concrete Systems',
                'Ceramic & Vitrified Floor',
                'Deep & Grout Cleaning',
                'Exterior Concrete Tile',
                'Slip-Resistant Coatings'
              ].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 border border-border bg-background rounded-sm">
              <div className="text-xs text-muted-foreground">Sister Brand</div>
              <div className="font-serif text-lg text-primary mt-1">Kaipaneē</div>
              <a href="#" className="text-xs font-medium text-gold hover:underline mt-2 inline-block">Visit website &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} NKE Floorcare Pvt. Ltd. All Rights Reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
