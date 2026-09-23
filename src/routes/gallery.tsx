import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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


function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Gallery />
      <GalleryCTA />
    </main>
  );
}

import { useProjectsQuery, useProjectCategoriesQuery } from "@/lib/api";

import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

/* ============ GALLERY ============ */
function Gallery() {
  const location = useLocation();
  const searchString = (typeof location.search === 'object' ? '' : location.search) || (location.href.split('?')[1] || "");
  const searchParams = new URLSearchParams(searchString);
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const sStr = (typeof location.search === 'object' ? '' : location.search) || (location.href.split('?')[1] || "");
    const cat = new URLSearchParams(sStr).get("category");
    if (cat) setSelectedCategory(cat);
  }, [location.href]);

  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // Fetch categories
  const { data: apiCategories } = useProjectCategoriesQuery();
  
  // Fetch projects (pass the category slug if not 'All')
  const { data: apiProjects, isLoading } = useProjectsQuery(selectedCategory === "All" ? undefined : selectedCategory);

  // Map API projects to gallery format
  const galleryItems = (apiProjects || []).map((p) => ({
    id: p.id,
    img: p.image || undefined,
    title: p.title,
    location: p.location || "",
    category: typeof p.category === "object" && p.category ? p.category.name : (p.category || "Project"),
    description: p.short_description || "",
    audio: p.audio || null,
    youtube_link: p.youtube_link || null,
    additional_images: p.additional_images || [],
  }));

  const filters = [{ name: "All", slug: "All" }];
  if (apiCategories) {
    apiCategories.forEach((cat) => {
      filters.push({ name: cat.name, slug: cat.slug });
    });
  }

  const filteredItems = galleryItems;

  return (
    <section className="pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Completed Projects"
          intro="A curated selection of restoration projects showcasing our expertise and craftsmanship across diverse property types."
        />

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {filters.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                selectedCategory === cat.slug
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-gold hover:text-primary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              Loading projects...
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              No projects found in this category.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-sm bg-background border border-border cursor-pointer transition-all hover:border-gold hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay on hover (removed title/category from here as it's below now) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Info card */}
                <div className="p-6 bg-background relative z-10 flex flex-col flex-grow">
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    {item.category}
                  </div>
                  <h3 className="mt-2 font-serif text-lg text-primary">
                    {item.title}
                  </h3>
                  
                  {item.audio && (
                    <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                      <audio controls controlsList="nodownload" src={item.audio} className="w-full h-8" />
                    </div>
                  )}
                  
                  {item.youtube_link && (
                    <div className="mt-3">
                      <a 
                        href={item.youtube_link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-red-600 hover:text-red-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  )}

                  {/* Description hidden by default, expands on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-xs text-muted-foreground line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
  image: any;
  onClose: () => void;
  allImages: any[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Build full image list: main image + additional_images sorted by sequence
  const additionalImgs: { id: number; image: string; sequence: number }[] =
    image.additional_images || [];
  const allSlides = [
    { id: "main", image: image.img },
    ...additionalImgs
      .slice()
      .sort((a, b) => a.sequence - b.sequence)
      .map((ai) => ({ id: ai.id, image: ai.image })),
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Reset to first slide whenever the project changes
  useEffect(() => {
    setActiveSlide(0);
  }, [image.id]);
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollStrip = (dir: "prev" | "next") => {
    const next = dir === "prev" ? activeSlide - 1 : activeSlide + 1;
    if (next < 0 || next >= allSlides.length) return;
    setActiveSlide(next);
    // scroll the thumbnail into view
    const strip = stripRef.current;
    if (strip) {
      const thumb = strip.children[next] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-6 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-background rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero / active image */}
        <div className="w-full aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={allSlides[activeSlide]?.image}
            alt={image.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* Info */}
        <div className="px-6 pt-5 pb-2 text-center">
          <div className="text-[10px] uppercase tracking-widest text-[#1F5C2E] font-semibold">
            {image.category}
          </div>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-primary">
            {image.title}
          </h2>
          {image.location && (
            <p className="mt-1 text-sm text-muted-foreground uppercase tracking-widest">
              {image.location}
            </p>
          )}
        </div>

        {/* Thumbnail strip with arrows — only if additional images exist */}
        {allSlides.length > 1 && (
          <div className="relative px-6 pb-4 mt-3">
            {/* Prev arrow */}
            <button
              onClick={() => scrollStrip("prev")}
              disabled={activeSlide === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-background border border-border shadow hover:border-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Strip */}
            <div
              ref={stripRef}
              className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-8"
            >
              {allSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`shrink-0 snap-start rounded-sm overflow-hidden border-2 transition-all ${
                    idx === activeSlide
                      ? "border-[#1F5C2E] opacity-100"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                  style={{ width: "calc(50% - 1.5rem)", aspectRatio: "4/3" }}
                >
                  <img
                    src={slide.image}
                    alt={`${image.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => scrollStrip("next")}
              disabled={activeSlide === allSlides.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-background border border-border shadow hover:border-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Project navigation */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Previous Project
          </button>
          <span className="text-xs text-muted-foreground">
            {currentIndex + 1} / {allImages.length}
          </span>
          <button
            onClick={onNext}
            disabled={currentIndex === allImages.length - 1}
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next Project <ChevronRight className="h-4 w-4" />
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/20 px-8 py-4 text-sm font-medium text-primary hover:border-gold transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
