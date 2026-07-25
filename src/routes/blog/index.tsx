import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import { useBlogsQuery } from "@/lib/api";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — NKE Floors Stone Restoration Insights" },
      {
        name: "description",
        content:
          "Expert insights, care guides, and restoration tips from NKE Floors. Learn about marble, granite, terrazzo and concrete maintenance.",
      },
      {
        property: "og:title",
        content: "Blog — NKE Floors",
      },
      {
        property: "og:description",
        content: "Stone restoration tips, maintenance guides, and industry insights.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      {/* <PageHero
        title="Stone Restoration Blog"
        subtitle="Insights & Guides"
        description="Expert articles, maintenance tips, and industry insights from our restoration specialists. Learn how to care for your natural stone surfaces."
        backgroundImage={heroImg}
        cta={{
          text: "Subscribe to Updates",
          href: "#",
        }}
      /> */}

      <BlogList />
    </main>
  );
}

/* ============ BLOG LIST ============ */
function BlogList() {
  const { data: apiPosts, isLoading, isError } = useBlogsQuery();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const postsToDisplay = (apiPosts || []).map((item) => ({
    id: String(item.id),
    rawId: item.id,
    title: item.title,
    excerpt: item.short_description || item.excerpt || "",
    category: item.category || "Education",
    author: item.author || "NKE Floors Team",
    date: item.formatted_date || item.date || "2025",
    image: item.image || projectHotel,
    featured: item.sequence === 1,
  }));

  const dynamicCategories = ["All", ...Array.from(new Set(postsToDisplay.map(item => item.category)))];

  const filteredPosts = postsToDisplay.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });



  return (
    <section className="pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Blog"
          title="Latest Articles"
          intro="Practical guidance, case studies, and insights on stone restoration, maintenance, and design trends."
        />

        {/* Search Bar */}
        <div className="mt-12 relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {dynamicCategories.map((cat) => (
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

        {/* Posts Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group border border-border bg-card rounded-sm overflow-hidden hover:border-gold transition-all hover:shadow-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold">
                  {post.category}
                </div>
                <h3 className="mt-3 font-serif text-lg text-primary line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-primary group-hover:text-gold transition-colors">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="mt-16 text-center py-12">
            <p className="text-muted-foreground text-lg">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
