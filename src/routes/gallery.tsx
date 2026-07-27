import { createFileRoute, Link } from "@tanstack/react-router";
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

/* ============ GALLERY ============ */
function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
    category: typeof p.category === "object" && p.category ? p.category.name : (p.category || "Project"),
    description: p.short_description || "",
    audio: p.audio || null,
    youtube_link: p.youtube_link || null,
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
