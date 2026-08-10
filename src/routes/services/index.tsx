import { useState, useEffect } from "react";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Floor Restoration Services Chennai & Bangalore | NKE Floorcare" },
      {
        name: "description",
        content:
          "NKE Floorcare offers marble restoration, industrial concrete flooring, hotel AMC programmes, and decorative concrete systems in Chennai and Bangalore. 30+ years of specialist experience.",
      },
      { property: "og:title", content: "Floor Restoration Services Chennai & Bangalore | NKE Floorcare" },
      {
        property: "og:description",
        content:
          "NKE Floorcare offers marble restoration, industrial concrete flooring, hotel AMC programmes, and decorative concrete systems in Chennai and Bangalore. 30+ years of specialist experience.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesAccordion />
      <CovalBand />
      <ComplementaryServices />
      <ShilpaSevaStrip />
    </main>
  );
}

/* ============ 1. PAGE HERO ============ */
function ServicesHero() {
  return (
    <section className="relative flex flex-col justify-center pt-32 pb-0">
      <div className="absolute inset-0 -z-10 bg-muted/30">
         {/* Using a solid muted background if heroImg isn't ideal, but keeping heroImg structure just in case */}
         <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full pt-10">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-primary">
            Our services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Surface restoration and flooring specialists — natural stone, concrete, and industrial floors. Four specialisms, one standard of craft.
          </p>
        </div>
      </div>

      <div className="w-full border-t border-border mt-16 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium tracking-wide text-muted-foreground">
            <span>30+ years of experience</span>
            <span className="hidden sm:inline text-gold">•</span>
            <span>International certifications</span>
            <span className="hidden sm:inline text-gold">•</span>
            <span>Hospitality and industrial specialists</span>
            <span className="hidden sm:inline text-gold">•</span>
            <span>Chennai and Bengaluru</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 2. SERVICES ACCORDION ============ */
const ACCORDION_DATA = [
  {
    id: "natural-stone",
    num: "01",
    audience: "Hotels, residences, and commercial properties",
    title: "Natural stone restoration",
    tagline: "Marble, granite, terrazzo and mosaic — restored, not replaced",
    body1: "Natural stone floors are a long-term architectural investment. Daily wear, foot traffic, spills, and improper cleaning dull their finish over time — but in most cases, restoration fully recovers the original beauty and performance without the cost or disruption of replacement.",
    body2: "NKE uses modern machinery, abrasives, and consumables to achieve mechanical gloss, a polishing powder to fix that gloss, and a protective sealer to preserve the finish. We have restored natural stone surfaces in luxury hotels and commercial properties for over 25 years.",
    body3: "No-payment-if-unsatisfied guarantee. Warranty ranges from 6 to 36 months depending on service tier.",
    tags: [
      "Diamond grinding & honing",
      "Mechanical polishing",
      "Crystallisation",
      "Colour enhancing",
      "Sealant application",
      "Lippage correction",
      "Stain removal",
      "Abrasion Resistant Coatings"
    ],
    primaryCta: { text: "Free estimate", href: "/contact" },
    secondaryCta: { text: "Learn more", href: "/services/natural-stone-restoration" },
    proofQuote: "\"Marble more than 150 years old — restored to look as though it was laid yesterday.\" — K.J. Dilip Jinarajan, MD",
    appHeading: "Applications",
    appTags: ["Hotel lobbies", "Banquet halls", "Residences", "Heritage buildings", "Corporate offices"]
  },
  {
    id: "industrial-concrete",
    num: "02",
    audience: "Plant and facility managers (restoration) · Architects and consultants (new builds)",
    title: "Industrial concrete flooring and restoration",
    tagline: "New installations and large-scale restoration — operations continue throughout",
    body1: "Polished and densified concrete is the flooring system of choice for warehouses, manufacturing plants, IT parks, and large commercial facilities. NKE specifies, installs, Repairs and restores concrete floor systems engineered for durability, low maintenance, and high light reflectance.",
    body2: "For restoration projects, all work is executed in phases — zone by zone — so operations are never fully shut down. Night-shift and off-hours scheduling is available. Defect mapping is completed before any work begins.",
    body3: "For new-build projects, NKE works alongside the architect and structural engineer from the specification stage — not after the slab is cast.",
    tags: [
      "Concrete densification",
      "Polishing — Classes A to D",
      "Dust-proofing",
      "Joint and crack repair",
      "Diamond grinding",
      "Abrasion and Chemical resistant coatings",
      "Specification consultation for new builds"
    ],
    primaryCta: { text: "Get a restoration plan", href: "/contact" },
    secondaryCta: { text: "Request a specification consultation", href: "/services/industrial-concrete-flooring" },
    proofQuote: "2,00,000 sq.ft. residential carpark — restored zone by zone with residents in occupation. The dust that once stopped children from playing was eliminated permanently.",
    appHeading: "Credentials",
    appTags: ["HTC Sweden", "Korodur Germany", "Hypergrinder Italy", "World Concrete Cooperation"]
  },
  {
    id: "hotel-floorcare",
    num: "03",
    audience: "General Managers, Executive Housekeepers, and Corporate Housekeepers",
    title: "Hotel floorcare programs",
    tagline: "AMC and restoration keeping public areas guest-ready, year-round",
    body1: "First impressions are made on the floor. NKE's Hotel Floorcare Programs combine periodic restoration with scheduled Annual Maintenance Contracts to keep lobbies, banquet halls, corridors, and pool decks consistently guest-ready.",
    body2: "Each programme is structured around the specific footfall and wear patterns of your property — with zone-specific care plans, defined gloss-level guarantees, written condition reports after every visit, and emergency call-out provision for VIP events and unexpected situations.",
    body3: "NKE has maintained floors in five-star hotels for over 20 years. We carry sufficient bench strength and machinery to respond reliably — including in unexpected situations where your previous contractor may have been unavailable.",
    tagsLabel: "What a hotel floorcare programme includes",
    tags: [
      "Zone-specific care plans",
      "Gloss-level guarantees",
      "Written condition reports",
      "Scheduled restoration visits",
      "Emergency call-outs",
      "Housekeeping team briefings"
    ],
    primaryCta: { text: "Discuss a programme", href: "/contact" },
    secondaryCta: { text: "Download our Hotel AMC Checklist", href: "#" },
    proofQuote: "20+ years maintaining floors in five-star hotels, including a 25-year AMC relationship with one of Chennai's leading hospitality brands. More than 5,000 polishing cycles. The floor was still intact when the property changed hands.",
    appHeading: "Zones covered",
    appTags: ["Lobby and reception", "Banquet halls", "Guest corridors", "Pool deck and spa", "Back-of-house"]
  },
  {
    id: "decorative-concrete",
    num: "04",
    audience: "Architects, interior designers, and high-end residences",
    title: "Decorative concrete Flooring and Walls.",
    tagline: "Terrazzo and cementitious floors — plain minimalistic or coloured.",
    body1: "Once associated only with industrial spaces, polished and decorative concrete has become one of the most sought-after architectural finishes — in high-end homes, offices, retail spaces, and feature areas.",
    body2: "NKE specialises in terrazzo and fast-setting cementitious floors that are custom designed. Available in plain minimalist finishes or a range of integral colours. We work alongside architects and homeowners from specification stage — including aggregate selection, sample review, and prototype approval before the floor is cast.",
    body3: "For architect-led projects requiring Terrazzo, decorative micro-concrete. our sister brand Kaipaneē by Krishnan K. Dilip extends the same craft heritage to new-build interiors.",
    tagsLabel: "Finish options",
    tags: [
      "Terrazzo — new laying and restoration",
      "Cementitious floors — plain minimalist",
      "Cementitious floors — coloured",
      "Burnished concrete",
      "Polished concrete — Class A to D",
      "Aggregate specification consultation"
    ],
    primaryCta: { text: "Discuss a project", href: "/contact" },
    secondaryCta: { text: "Visit Kaipaneē", href: "https://kaipanee.com" },
    appHeading: "Applications",
    appTags: ["High-end residences", "Corporate offices", "Retail and showrooms", "Feature areas", "Car parks", "Educational buildings"],
    extraHeading: "Credentials",
    extraTags: ["Klindex Italy", "Guard France", "Coval Technologies — Certified Application Specialist"]
  }
];

function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      const index = ACCORDION_DATA.findIndex((item) => item.id === hashId);
      
      if (index !== -1) {
        setOpenIndex(index);
        
        setTimeout(() => {
          const element = document.getElementById(hashId);
          if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    }
  }, [location.hash]);

  const toggle = (idx: number) => {
    setOpenIndex(idx);
  };

  return (
    <section className="py-20 bg-slate-50/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border-t border-border">
          {ACCORDION_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} id={item.id} className="border-b border-border scroll-mt-32">
                {/* Header Row */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-8 flex items-start justify-between focus:outline-none group"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10 w-full pr-8">
                    <span className={`text-5xl font-serif font-medium transition-colors ${isOpen ? 'text-[#1F5C2E]' : 'text-muted-foreground group-hover:text-primary/70'} leading-none pt-1`}>
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                        {item.audience}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-serif text-primary mb-2">
                        {item.title}
                      </h2>
                    <span className="text-lg text-muted-foreground">
                      {item.tagline}
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-full border transition-colors shrink-0 mt-2 ${isOpen ? 'border-[#1F5C2E] bg-[#1F5C2E]/5' : 'border-border group-hover:border-primary/30'}`}>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-[#1F5C2E]" /> : <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary" />}
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[3000px] pb-12 pt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-10 pl-0 sm:pl-[88px] max-w-5xl">
                  {/* Main Text Content */}
                  <div className="space-y-8">
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                      <p>{item.body1}</p>
                      <p>{item.body2}</p>
                      <p>{item.body3}</p>
                    </div>
                    
                    <div>
                      {item.tagsLabel && <p className="text-sm font-semibold mb-3">{item.tagsLabel}</p>}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1.5 bg-muted rounded-sm text-sm border border-border text-primary/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a href={item.primaryCta.href} className="inline-flex items-center gap-2 bg-[#1F5C2E] text-white px-7 py-3.5 rounded-sm text-sm font-medium hover:bg-[#1F5C2E]/90 transition-colors shadow-sm">
                        {item.primaryCta.text}
                      </a>
                    </div>
                  </div>

                  {/* Proof Quote */}
                  {item.proofQuote && (
                    <div className="bg-background p-8 sm:p-10 border border-border rounded-sm shadow-sm relative overflow-hidden mt-2">
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#1F5C2E]"></div>
                      <p className="text-lg sm:text-xl italic leading-relaxed text-primary/90 font-medium">
                        {item.proofQuote}
                      </p>
                    </div>
                  )}
                  
                  {/* Applications & Credentials Grid */}
                  <div className="grid sm:grid-cols-2 gap-10 border-t border-border pt-10 mt-2">
                    <div>
                      <h4 className="font-serif text-base font-semibold uppercase tracking-widest mb-6 text-primary">
                        {item.appHeading}
                      </h4>
                      <div className="flex flex-col gap-4">
                        {item.appTags.map((tag, aIdx) => (
                          <span key={aIdx} className="text-base text-muted-foreground flex items-start gap-3">
                            <span className="text-[#1F5C2E] mt-0.5 font-bold">•</span> {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {item.extraHeading && item.extraTags && (
                      <div>
                        <h4 className="font-serif text-base font-semibold uppercase tracking-widest mb-6 text-primary">
                          {item.extraHeading}
                        </h4>
                        <div className="flex flex-col gap-4">
                          {item.extraTags.map((tag, eIdx) => (
                            <span key={eIdx} className="text-base text-muted-foreground flex items-start gap-3">
                              <span className="text-[#1F5C2E] mt-0.5 font-bold">•</span> {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 3. COVAL BAND ============ */
function CovalBand() {
  return (
    <section className="bg-[#1F5C2E]/5 py-16 border-y border-[#1F5C2E]/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="">
          <div className=" border-l-[3px] border-[#1F5C2E] pl-6 py-1">
            <ShieldCheck className="h-8 w-8 text-[#1F5C2E] mb-5" />
            <h2 className="font-serif text-3xl lg:text-[2.2rem] text-primary leading-[1.15] ">
              Coval nano-coating <br />
              Certified
              Application
              Specialist
            </h2>
          </div>
          <div className="md:ml-auto  pt-2">
            <p className="text-[17px] text-muted-foreground leading-[1.65] pt-10">
              A professional-grade nano-coating applied across concrete, stone, metal, epoxy, vinyl, and specialist surfaces. Scratch-resistant, easy to clean, and buffable to restore gloss. Available as a standalone treatment or as an add-on to any NKE service. Covering Coval Metal, Coval Concrete, and Coval UTC product lines.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 4. COMPLEMENTARY SERVICES ============ */
const COMPLEMENTARY = [
  {
    title: "Ceramic, vitrified and mosaic floor restoration",
    badge: "Coval",
    desc: "Polish, colour change, and Coval protective coating — producing an easy-to-clean floor that can be buffed to restore gloss. Note: this is not retiling.",
    link: "/services/ceramic-floor-restoration"
  },
  {
    title: "Epoxy and vinyl floor restoration",
    badge: "Coval",
    desc: "Restores shine on dull or scratched epoxy/vinyl floors, then applies Coval coating for scratch resistance.",
    link: "/services/epoxy-floor-restoration"
  },
  {
    title: "Deep cleaning and grout cleaning",
    badge: null,
    desc: "Professional deep cleaning of tiled floors and grout lines — removing ingrained dirt, staining, and biological growth.",
    link: "/services/grout-cleaning-chennai"
  },
  {
    title: "Slip-resistant coatings",
    badge: "Guard France",
    desc: "Professional-grade, Guard France certified slip-resistant coatings for washrooms, wet areas, pool decks, and ramps.",
    link: "/services/slip-resistant-coatings"
  },
  {
    title: "Exterior concrete tile enhancement",
    badge: null,
    desc: "Deep cleaning and colour enhancement of exterior concrete pavers, campus walkways, and hotel driveway areas.",
    link: "/services/exterior-concrete-enhancement"
  }
];

function ComplementaryServices() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-12">
          Complementary services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {COMPLEMENTARY.map((svc, idx) => (
            <div key={idx} className="block border border-border bg-background p-8 rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-xl text-primary max-w-[80%] pr-4">
                  {svc.title}
                </h3>
                {svc.badge && (
                  <span className="text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-sm whitespace-nowrap">
                    {svc.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 5. SHILPA SEVA STRIP ============ */
function ShilpaSevaStrip() {
  return (
    <section className="py-16 bg-muted/50 border-t border-border mt-auto">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-primary italic mb-6 leading-tight">
          "Every floor you give us the opportunity to polish, helps us polish a life."
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mt-8">
          <span className="font-medium text-muted-foreground uppercase tracking-wider">
            — Shilpa Seva Foundation
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <a href="/shilpa-seva-foundation" className="text-[#1F5C2E] font-medium hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
