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

export const BLOG_POSTS = [
  {
    id: "what-is-stone-restoration",
    title: "What Is Stone Restoration?",
    excerpt:
      "You walk on it every day — but have you ever seen marble breathe again? Discover the method behind the magic.",
    content: `CUSTOM_RENDER`,
    category: "Education",
    author: "NKE Floors Team",
    date: "March 15, 2026",
    image: projectHotel,
    featured: true,
  },
  {
    id: "why-concrete-floors-crack",
    title: "Why Concrete Floors Crack (And How to Fix It)",
    excerpt:
      "Most industrial floors don't crack because of poor concrete. They crack because of poor planning.",
    content: `CUSTOM_RENDER_2`,
    category: "Industrial",
    author: "NKE Floors Team",
    date: "March 8, 2026",
    image: projectIndustrial,
  },
  {
    id: "how-we-polish-concrete",
    title: "How We Polish Concrete Floors to Mirror Finish",
    excerpt:
      "From dusty to glossy — here's how raw concrete becomes a mirror.",
    content: `CUSTOM_RENDER_3`,
    category: "Process",
    author: "NKE Floors Team",
    date: "February 28, 2026",
    image: projectOffice,
  },
  {
    id: "polished-concrete-trends",
    title: "Polished Concrete: Premium Aesthetics Meets Industrial Function",
    excerpt:
      "Why polished concrete is becoming the surface of choice for modern commercial and residential design.",
    content: `Polished concrete has evolved from purely functional industrial flooring to a premium design choice for contemporary spaces. Let's explore why this trend is gaining momentum.

## Design Appeal
Polished concrete offers a sleek, modern aesthetic that works in diverse settings—from lofts to corporate offices. The smooth, reflective surface creates an elegant minimalist look that architects and designers love.

## Sustainability
Concrete is one of the most sustainable flooring options. Polishing existing concrete eliminates waste compared to traditional flooring installation. For new projects, the durability of polished concrete means fewer replacements over time.

## Cost Efficiency
Polished concrete is significantly more affordable than many premium alternatives. The long-term cost of ownership is exceptionally low due to minimal maintenance requirements and durability.

## Performance Benefits
- Improved lighting due to reflective surface
- Better for cleanroom environments
- Reduced slipping hazards with proper finishing
- Long-lasting finish that improves with age
- Minimal maintenance requirements

## Commercial Applications
Corporate offices, retail spaces, warehouses, and light manufacturing facilities benefit from polished concrete's durability and low maintenance. The aesthetic appeal makes it suitable for customer-facing spaces.

## Residential Use
Luxury homes are increasingly using polished concrete in basements, kitchens, and living areas. It pairs well with industrial-modern and contemporary design styles.

## Customization Options
Polished concrete can be customized with color dyes, decorative scoring, or grinding patterns. This allows for unique designs while maintaining the material's practical benefits.

## Future Outlook
As sustainability and cost-consciousness drive design decisions, polished concrete will continue to gain popularity. It represents the perfect intersection of form and function in modern design.`,
    category: "Industry Trends",
    author: "NKE Floors Team",
    date: "February 15, 2026",
    image: projectHotel,
  },
  {
    id: "terrazzo-history",
    title: "Terrazzo Through the Ages: From Venice to Modern Design",
    excerpt:
      "The rich history of terrazzo and why this classic material is making a comeback.",
    content: `Terrazzo has a fascinating history spanning centuries. Originally developed in Venice during the 15th century, this composite material is experiencing a major renaissance in contemporary design.

## Origins in Venice
Venetian workers discovered that marble chips left over from sculpting and building could be mixed with lime mortar to create beautiful, durable floors. This practical innovation became one of the most distinctive design elements of Venetian architecture.

## Evolution Through Centuries
Terrazzo evolved significantly over the centuries. In the 19th and 20th centuries, it became popular in America and Europe, particularly for public buildings, hotels, and upscale residences.

## Traditional vs. Modern Terrazzo
Traditional terrazzo uses natural materials like marble, granite, and limestone chips. Modern terrazzo incorporates recycled glass, mirrors, and metal for contemporary aesthetics.

## Environmental Benefits
Terrazzo is increasingly valued for sustainability. It uses recycled materials, creates minimal waste, and lasts for decades with proper maintenance. Many modern terrazzo designs incorporate post-consumer recycled content.

## Contemporary Design Trends
Today's designers are embracing terrazzo for its distinctiveness. It appears in luxury hotels, high-end residences, and trendy restaurants and cafes. The material's versatility allows it to work in both minimalist and bold design schemes.

## Restoration Challenges
Restoring historic terrazzo requires specialized knowledge. Sourcing matching materials and understanding historical installation techniques are critical. Our team has extensive experience with terrazzo restoration.

## Looking Forward
As design trends cycle and sustainability becomes paramount, terrazzo will likely continue to gain popularity. It represents the perfect blend of history, sustainability, and contemporary beauty.`,
    category: "Material History",
    author: "Elena Rossi",
    date: "February 1, 2026",
    image: projectVilla,
  },
];

const CATEGORIES = ["All", "Maintenance", "Decision Guide", "Case Studies", "Industry Trends", "Material History"];

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Stone Restoration Blog"
        subtitle="Insights & Guides"
        description="Expert articles, maintenance tips, and industry insights from our restoration specialists. Learn how to care for your natural stone surfaces."
        backgroundImage={heroImg}
        cta={{
          text: "Subscribe to Updates",
          href: "#",
        }}
      />

      <BlogList />
    </main>
  );
}

/* ============ BLOG LIST ============ */
function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const otherPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="py-28">
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

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <Link
            to={`/blog/${featuredPost.id}`}
            className="mt-12 block group border border-border bg-card rounded-sm overflow-hidden hover:border-gold transition-all hover:shadow-elevated"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="text-[10px] uppercase tracking-widest text-gold">
                  {featuredPost.category} · Featured
                </div>
                <h3 className="mt-3 font-serif text-3xl text-primary">
                  {featuredPost.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors w-fit">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Posts Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
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
