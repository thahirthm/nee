import { useState } from "react";
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
  Sparkles,
  Instagram
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { SERVICES } from "@/lib/services-data";

import mainBanner from "@/assets/new-ban.png";
import wornFloorBefore from "@/assets/second.jpeg";
import projectHotel from "@/assets/m-3.jpg";
import projectVilla from "@/assets/mm.jpg";
import projectOffice from "@/assets/M-1.jpg";
import projectIndustrial from "@/assets/m-2.jpg";
import industrialImg from "@/assets/industrial.png";
import hoteImg from "@/assets/hote.png";
import aboutImg from "@/assets/about.jpg";
import kaipaneeImg from "@/assets/image.png";
import c1Img from "@/assets/c2.jpeg";
import certiImg from "@/assets/certi.png";

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
    <main className="text-foreground pt-0">
      <Header />
      <Hero />
      <UnderstandingSection />
      <VisualShowcase />
      <InvestmentSection />
      <ExpertiseSection />
      <CredibilityStrip />
      <CertificatesSection />
      <ComplementaryCallout />
      <FeaturedCaseStudy />
      <BlogSection />
      <CapabilityStatementCTA />
      <ShilpaSevaTeaser />
      <VideoSection />
      <SisterBrandSection />
      <ContactFooter />
    </main>
  );
}

/* ---------------- 1. HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[calc(100vh)] flex items-center bg-muted">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainBanner}
          alt="Polished marble hotel lobby"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 lg:pt-50 pb-16 md:pb-20 mt-10 md:mt-0">
        {/* Content directly on the overlay */}
        <div className="max-w-3xl">
          <div className="inline-block bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 mb-6 rounded-sm shadow-sm border border-white/20">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-white uppercase">
              SURFACE RESTORATION & FLOORING SPECIALISTS
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
            NKE Floorcare<br/>Pvt. Ltd.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            Protecting the Floors That Matter — Natural Stone, Concrete & Industrial Floors Across South India
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <div className="w-1 h-16 bg-gold shrink-0"></div>
            <p className="text-xl md:text-2xl text-white font-medium">
              Polish with Purpose. Transform with Skill.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-lg">
            <div>
              <div className="font-serif text-2xl md:text-2xl text-white">Since 1999</div>
              <div className="mt-1 text-sm text-white/80 font-medium">25+ Years of Expertise</div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-2xl text-white">Chennai, India</div>
              <div className="mt-1 text-sm text-white/80 font-medium">Serving South India</div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-white hover:bg-gold/90 transition-colors shadow-soft"
            >
              Get a Free Assessment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. EVERY GREAT RESTORATION ---------------- */
function UnderstandingSection() {
  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden rounded-sm">
          <img
            src={wornFloorBefore}
            alt="Room before restoration"
            className="absolute inset-0 w-full h-full object-cover shadow-elevated"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl text-primary leading-tight">
            Every Great Restoration Begins With Understanding.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Whether your floor is marble, granite, terrazzo, mosaic or concrete — the first step is not restoration. It is understanding its condition.
          </p>
          
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-muted p-6 sm:p-8 rounded-sm">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground">
                <Camera className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-serif text-primary">Upload Floor Photos</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our specialists will review them and share honest observations — no obligation.
              </p>
            </div>
            
            <div className="bg-muted p-6 sm:p-8 rounded-sm">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-serif text-primary">Send on WhatsApp</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Get a quick, no-obligation response directly from our team on WhatsApp.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-muted p-6 sm:p-8 rounded-sm">
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
const SHOWCASE_CONTENT = [
  {
    title: "Italian Marble Restoration",
    description: "See the transformation of a rugged industrial floor into a seamless, high-performance surface.",
    problem: "Uneven, dusty concrete floor in an industrial facility.",
    solution: "Heavy-duty concrete grinding and application of dust-proof densifiers.",
    result: "A seamless, high-gloss industrial floor that is easy to maintain."
  },
  {
    title: "Granite Restoration",
    description: "Move the slider to see how we tackle tough floor damage and bring out the original beauty.",
    problem: "Deep scratches, dull finish, and lost shine due to heavy foot traffic.",
    solution: "A disciplined grinding, honing, and mirror-grade polishing process.",
    result: "A flawlessly restored surface that looks brand new and is built to last."
  },
  {
    title: "Indian Marble Restoration",
    description: "Watch how we transform weathered and stained exterior surfaces into vibrant, protected areas.",
    problem: "Stained and discolored outdoor tiles exposed to harsh weather conditions.",
    solution: "Deep chemical cleaning followed by advanced sealing techniques.",
    result: "Vibrant, protected tiles that resist future weathering and staining."
  }
];

function VisualShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const content = SHOWCASE_CONTENT[activeSlide];

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        <div className="lg:col-span-5">
          <Eyebrow>VISUAL SHOWCASE</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight transition-all duration-300">
            {content.title}
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed transition-all duration-300">
            {content.description}
          </p>
          <ul className="mt-10 space-y-8 min-h-[300px]">
            <li className="flex gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Problem</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{content.problem}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Wrench className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Solution</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{content.solution}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Sparkles className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-primary font-medium">The Result</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{content.result}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <BeforeAfter onIndexChange={setActiveSlide} />
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
    <section className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
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
        <div className="relative h-[300px] sm:h-[400px] lg:h-[700px] overflow-hidden rounded-sm">
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
      img: projectHotel,
      t: "Natural Stone\nRestoration",
      d: "Italian Marble, Indian Marble, Granite, Kota, Jaisalmer, Mosaic, Terrazzo & Engineered Stone. Floors, walls, façades, and table tops."
    },
    {
      img: industrialImg,
      t: "Industrial Concrete\nFlooring & Restoration",
      d: "New installations and large-scale restoration of durable, dust-proof, high-performance floors — executed with minimal disruption to operations."
    },
    {
      img: hoteImg,
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
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary">
          Our Areas of Expertise
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          With over 25 years of experience, NKE Floorcare serves natural stone, concrete, and industrial floors across four specialisms — working across residential, commercial, hospitality, and industrial properties.
        </p>
        
        <div className="mt-10 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

/* ---------------- 5.5. CERTIFICATES & QUALIFICATIONS ---------------- */
function CertificatesSection() {
  return (
    <section className="py-16 lg:py-24 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Eyebrow>Global Credentials</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-primary leading-tight">
            Certificates & Qualifications
          </h2>
          <div className="mt-6 h-px w-16 bg-gold mx-auto" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We are trained and certified by the world's leading manufacturers of restoration equipment and chemicals. Our global certifications ensure that every project is executed using internationally approved processes and standards.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex justify-center">
          <img src={certiImg} alt="Certificates and Qualifications" className="w-full h-auto object-contain drop-shadow-sm" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. COMPLEMENTARY CALLOUT ---------------- */
function ComplementaryCallout() {
  return (
    <section className="py-16 lg:py-24 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <div>
          <Eyebrow>BEYOND THE CORE</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
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
          <Link to="/services" className="mt-12 inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-white hover:bg-gold/90 transition-colors shadow-soft">
            Explore All Services <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden rounded-sm">
          <img
            src={c1Img}
            alt="Complementary flooring services"
            className="absolute inset-0 w-full h-full object-cover shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. FEATURED CASE STUDY ---------------- */
function FeaturedCaseStudy() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <div>
          <Eyebrow>Featured Case Study</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-primary leading-tight">
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
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full rounded-sm overflow-hidden bg-black shadow-soft">
          <iframe 
            src="https://www.youtube.com/embed/TqsbA26Qwo8?si=QMuZNfkjnmDxerh6" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
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
    <section className="py-16 lg:py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-10 lg:mb-12">
          <div>
            <Eyebrow>Insights & Guides</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-primary">Latest From Our Blog</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90 transition-colors shrink-0">
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 aspect-[4/3] rounded-sm overflow-hidden bg-muted order-last lg:order-first">
           <img src={aboutImg} alt="Craftsman at work" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>Our Social Mission</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-primary">Craftsmen, Not Contractors.</h2>
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

/* ---------------- VIDEOS ---------------- */
function VideoSection() {
  const videos = [
    {
      id: "1",
      embed: "https://www.youtube.com/embed/eJx4iW3uQTM?si=VPZ--RIMWys_0IBt",
      title: "NKE Floorcare Video 1"
    },
    {
      id: "2",
      embed: "https://www.youtube.com/embed/GkjJ4mgWaSw?si=la1JHS8dJNjQlN-8",
      title: "NKE Floorcare Video 2"
    },
    {
      id: "3",
      embed: "https://www.youtube.com/embed/NkFFK5uJ4ow?si=ILQL_kqHZxkUNWxm",
      title: "NKE Floorcare Video 3"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-12 lg:mb-16">
          <Eyebrow>OUR PROCESS</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-primary">
            See Us In Action
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative block aspect-video rounded-sm overflow-hidden bg-black shadow-soft border border-border"
            >
              <iframe 
                src={video.embed} 
                title={video.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SISTER BRAND ---------------- */
function SisterBrandSection() {
  return (
    <section className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm border border-border shadow-soft">
            <img 
              src={kaipaneeImg} 
              alt="Kaipaneē Sister Brand" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>SISTER BRAND</Eyebrow>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight tracking-tight">
              Kaipaneē
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Discover Kaipaneē, our exclusive sister brand dedicated to creating bespoke aesthetics and curated design experiences that perfectly complement our premium flooring solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.kaipanee.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-medium text-white hover:bg-gold/90 transition-colors"
              >
                Visit website <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/kaipanee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-border bg-transparent px-8 py-3.5 text-sm font-medium text-foreground hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function ContactFooter() {
  return (
    <footer id="contact" className="bg-muted text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-primary mb-6">NKE Floorcare</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Headquartered in Chennai, serving India. Restoring, polishing, and maintaining floors for luxury hotels, industrial facilities, and architecturally significant buildings for over 25 years.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block text-primary font-medium">Reg: off:</strong>
                  M5, Sudarsan Gardens,<br/>
                  106, Velechery high road,<br/>
                  Guindy, Chennai 600032, India
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block text-primary font-medium">Studio</strong>
                  57, North Boag Road,<br/>
                  Tnager, Chennai 600017. India
                </div>
              </div>
              <a href="tel:+919600040155" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-gold shrink-0" /> 9600040155 / 9600047255
              </a>
              <div className="flex flex-col gap-2">
                <a href="mailto:mails@nkefloors.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-gold shrink-0" /> mails@nkefloors.com
                </a>
                <a href="mailto:dilip@nkefloors.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-gold shrink-0" /> dilip@nkefloors.com
                </a>
                <a href="mailto:Krish@nkefloors.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-gold shrink-0" /> Krish@nkefloors.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Knowledge Hub', 'Projects & Case Studies', 'Capability Statement', 'Shilpa Seva Foundation', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to="/services" hash={service.id} className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                    {service.t}
                  </Link>
                </li>
              ))}
            </ul>
          
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} NKE Floorcare Pvt. Ltd. All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
