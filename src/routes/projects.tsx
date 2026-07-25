import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { ArrowRight } from "lucide-react";

import projectHotel from "@/assets/m-3.jpg";
import projectVilla from "@/assets/m-4.jpg";
import projectOffice from "@/assets/M-1.jpg";
import projectIndustrial from "@/assets/m-2.jpg";
import p1Img from "@/assets/p1.jpeg";
import iitImg from "@/assets/iit.jpeg";

import { useProjectsQuery } from "@/lib/api";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});



function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: apiProjects, isLoading } = useProjectsQuery(activeCategory);

  const projectsToDisplay = (apiProjects || []).map((p) => ({
    id: p.id,
    title: p.title,
    category: typeof p.category === "object" && p.category ? p.category.name : (p.category || "Project"),
    description: p.short_description || "",
    image: p.image || projectHotel,
    audio: p.audio || null,
    youtube_link: p.youtube_link || null,
  }));

  // Extract unique categories dynamically from the API data
  const dynamicCategories = ["All", ...Array.from(new Set(projectsToDisplay.map(item => item.category)))];

  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      <Header />
      

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {dynamicCategories.map((cat) => (
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
            {projectsToDisplay.map((project) => (
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
                <div className="p-6 bg-card relative z-10 flex flex-col flex-grow">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  {project.audio && (
                    <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                      <audio controls controlsList="nodownload" src={project.audio} className="w-full h-8" />
                    </div>
                  )}
                  
                  {project.youtube_link && (
                    <div className="mt-3">
                      <a 
                        href={project.youtube_link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  )}

                  {/* Description hidden by default, expands on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-6 mb-2">
                        <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors">
                          View Details <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {projectsToDisplay.length === 0 && (
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
