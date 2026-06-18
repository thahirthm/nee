import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import heroImg from "@/assets/hero.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — NKE Floors Project Portfolio" },
      {
        name: "description",
        content:
          "Browse our stunning gallery of completed marble, granite, terrazzo and concrete restoration projects. See the quality of our work.",
      },
      {
        property: "og:title",
        content: "Project Gallery — NKE Floors",
      },
      {
        property: "og:description",
        content: "Inspiring before and after gallery of restoration projects.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

const GALLERY_ITEMS = [
  {
    id: 1,
    img: projectHotel,
    title: "Grand Hotel Ballroom",
    category: "Hotels",
    description: "40-year-old marble restoration to mirror finish",
  },
  {
    id: 2,
    img: projectVilla,
    title: "Hillside Villa Foyer",
    category: "Villas",
    description: "Granite floor restoration with premium sealing",
  },
  {
    id: 3,
    img: projectOffice,
    title: "Corporate Lobby",
    category: "Corporate Offices",
    description: "Terrazzo floor restoration and enhancement",
  },
  {
    id: 4,
    img: projectIndustrial,
    title: "Factory Floor",
    category: "Industrial",
    description: "Large-scale polished concrete project",
  },
  {
    id: 5,
    img: projectHotel,
    title: "Resort Dining Area",
    category: "Hotels",
    description: "Marble with mosaic accent restoration",
  },
  {
    id: 6,
    img: projectVilla,
    title: "Private Residence",
    category: "Residential",
    description: "Living room granite and marble combination",
  },
  {
    id: 7,
    img: projectOffice,
    title: "Tech Company HQ",
    category: "Corporate Offices",
    description: "Modern polished concrete aesthetic",
  },
  {
    id: 8,
    img: projectIndustrial,
    title: "Logistics Facility",
    category: "Industrial",
    description: "Industrial terrazzo floor restoration",
  },
  {
    id: 9,
    img: projectHotel,
    title: "Heritage Hotel",
    category: "Hotels",
    description: "Historic marble preservation project",
  },
  {
    id: 10,
    img: projectVilla,
    title: "Luxury Penthouse",
    category: "Residential",
    description: "Premium marble installation and finish",
  },
  {
    id: 11,
    img: projectOffice,
    title: "Shopping Mall",
    category: "Commercial",
    description: "High-traffic area concrete polishing",
  },
  {
    id: 12,
    img: projectIndustrial,
    title: "Warehouse Complex",
    category: "Industrial",
    description: "Multi-space industrial restoration",
  },
];

const CATEGORIES = [
  "All",
  "Hotels",
  "Villas",
  "Residential",
  "Corporate Offices",
  "Commercial",
  "Industrial",
];

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Project Gallery"
        subtitle="Our Work"
        description="Explore our portfolio of premium restoration projects. From hotel ballrooms to residential villas, see the quality and consistency of our work."
        backgroundImage={heroImg}
        cta={{
          text: "Start Your Project",
          href: "#contact",
        }}
      />

      <Gallery />
      <GalleryCTA />
    </main>
  );
}

/* ============ GALLERY ============ */
function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Completed Projects"
          intro="A curated selection of restoration projects showcasing our expertise and craftsmanship across diverse property types."
        />

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-gold hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-sm bg-background border border-border cursor-pointer transition-all hover:border-gold hover:shadow-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-primary-foreground">
                  <div className="font-serif text-lg">{item.title}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/75 mt-1">
                    {item.category}
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold">
                  {item.category}
                </div>
                <h3 className="mt-2 font-serif text-lg text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          allImages={filteredItems}
          currentIndex={filteredItems.findIndex((i) => i.id === selectedImage.id)}
          onPrev={() => {
            const newIndex = filteredItems.findIndex((i) => i.id === selectedImage.id) - 1;
            if (newIndex >= 0) setSelectedImage(filteredItems[newIndex]);
          }}
          onNext={() => {
            const newIndex = filteredItems.findIndex((i) => i.id === selectedImage.id) + 1;
            if (newIndex < filteredItems.length) setSelectedImage(filteredItems[newIndex]);
          }}
        />
      )}
    </section>
  );
}

/* ============ LIGHTBOX ============ */
function Lightbox({
  image,
  onClose,
  allImages,
  currentIndex,
  onPrev,
  onNext,
}: {
  image: typeof GALLERY_ITEMS[0];
  onClose: () => void;
  allImages: (typeof GALLERY_ITEMS)[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-foreground hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-sm bg-muted">
          <img
            src={image.img}
            alt={image.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3">
          <div className="text-[10px] uppercase tracking-widest text-gold">
            {image.category}
          </div>
          <h3 className="font-serif text-3xl text-primary">{image.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {image.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="px-6 py-2 border border-border rounded-sm hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {allImages.length}
          </span>
          <button
            onClick={onNext}
            disabled={currentIndex === allImages.length - 1}
            className="px-6 py-2 border border-border rounded-sm hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ GALLERY CTA ============ */
function GalleryCTA() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
          See Your Project Come to Life
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your floors? Let's discuss your project and create a custom restoration plan.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/20 px-8 py-4 text-sm font-medium text-primary hover:border-gold transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
