import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { ArrowRight } from "lucide-react";

import projectHotel from "@/assets/m-3.jpg";
import projectVilla from "@/assets/m-4.jpg";
import projectOffice from "@/assets/M-1.jpg";
import projectIndustrial from "@/assets/m-2.jpg";
import p1Img from "@/assets/p1.jpeg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Mrs. Priya Thomas",
    category: "House",
    description: "Complete floor restoration and polishing.",
    image: p1Img,
  },
  {
    id: 2,
    title: "Meridian Corporate Tower",
    category: "Commercial",
    description: "Terrazzo flooring installation and finishing for the main reception.",
    image: projectOffice,
  },
  {
    id: 3,
    title: "Northgate Logistics Hub",
    category: "Industrial",
    description: "40,000 sq.ft. of dust-proof polished concrete flooring.",
    image: projectIndustrial,
  },
  {
    id: 4,
    title: "Hillside Private Villa",
    category: "Residential",
    description: "Decorative burnished concrete for high-end residential interior.",
    image: projectVilla,
  },
  {
    id: 5,
    title: "Royale Boutique Suites",
    category: "House",
    description: "Heritage mosaic tile restoration across all guest corridors.",
    image: projectHotel,
  },
  {
    id: 6,
    title: "Bayfront Residences",
    category: "Residential",
    description: "Natural stone honing and sealing for outdoor amenity spaces.",
    image: projectVilla,
  },
];

const CATEGORIES = ["All", "House", "Commercial", "Industrial", "Residential"];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-muted border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Our Work
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
            Projects & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of our premium restorations and flooring installations across hotels, industrial facilities, and residential spaces.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-sm text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-sm bg-card border border-border flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors">
                      View Details <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl text-primary mb-6">Ready to discuss your project?</h2>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </footer>
    </main>
  );
}
