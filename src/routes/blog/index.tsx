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
    id: "marble-care-guide",
    title: "The Definitive Guide to Marble Care",
    excerpt:
      "Daily, weekly and seasonal practices to keep marble floors looking new for decades.",
    content: `Marble is one of the most beautiful and luxurious natural stones, but it requires proper care to maintain its elegance. This comprehensive guide covers everything you need to know about marble maintenance.

## Daily Care
Start with daily maintenance to prevent dust and debris accumulation. Use a soft, lint-free cloth to dust your marble surfaces daily. This simple step prevents scratches from particles that can dull the surface over time.

## Weekly Maintenance
Once a week, use a pH-neutral stone cleaner specifically designed for marble. Regular household cleaners can damage marble due to their acidic nature. Mix the cleaner with water according to manufacturer instructions and wipe surfaces with a soft cloth.

## Monthly Care
Monthly, apply a marble-specific sealer to maintain protection against stains and moisture. This is particularly important in areas with high moisture, such as bathrooms and kitchens.

## Seasonal Protection
Every three to six months, have professionals inspect your marble floors and apply protective treatments. This preventive care extends the life of your marble significantly.

## What to Avoid
Never use vinegar, lemon juice, or acidic cleaners on marble. Don't use abrasive scrubbers or harsh chemicals. Always wipe spills immediately, especially acidic liquids like wine or citrus juice.

## Professional Restoration
If your marble develops etching or begins to lose its shine, professional restoration is recommended. Our craftsmen can restore marble to its original brilliance safely and effectively.`,
    category: "Maintenance",
    author: "NKE Floors Team",
    date: "March 15, 2026",
    image: projectHotel,
    featured: true,
  },
  {
    id: "restore-vs-replace",
    title: "When to Restore vs. Replace Your Floor",
    excerpt:
      "A practical decision framework for property managers and homeowners facing damaged floors.",
    content: `Deciding whether to restore or replace damaged flooring is one of the most important decisions a property manager or homeowner must make. Let's explore the key factors to consider.

## Signs Your Floor Can Be Restored
Most natural stone floors can be restored if the structural integrity is sound. Look for these indicators:
- Surface damage like scratches, etching, or dull spots
- Water stains or mineral deposits
- Missing grout between tiles
- Fading or discoloration
- Minor chips or cracks

## When Replacement is Necessary
Complete replacement is needed when:
- The substrate is compromised
- Structural damage is extensive
- Water damage has affected the foundation
- The entire floor has lost its structural integrity

## Cost Comparison
Restoration is typically 30-50% less expensive than replacement. A 1,000 sq ft marble floor might cost $5,000-7,000 to restore versus $8,000-12,000 to replace. Additionally, restoration preserves the character and history of original flooring.

## Environmental Benefits
Choosing restoration over replacement is more sustainable. It preserves natural resources and reduces construction waste. This is an important consideration for eco-conscious property owners.

## Timeline Considerations
Restoration typically takes 2-4 weeks, while replacement can take 4-8 weeks including substrate preparation. For commercial properties, this can mean significant operational benefits.

## Professional Assessment
The best first step is to have professionals evaluate your floor condition. We provide free assessments to help you make the right decision.`,
    category: "Decision Guide",
    author: "Sarah Johnson",
    date: "March 8, 2026",
    image: projectVilla,
  },
  {
    id: "hotel-restoration-case-study",
    title: "Inside a Hotel Ballroom Restoration: 12,000 Sq Ft in 3 Weeks",
    excerpt:
      "How we restored heritage marble in a working hotel without disrupting operations.",
    content: `One of our most challenging recent projects was the complete restoration of the Grand Heritage Hotel's 12,000 sq ft ballroom. Here's how we accomplished this feat while maintaining hotel operations.

## Project Scope
The ballroom featured 40-year-old marble flooring that had accumulated significant wear, stains, and etching. The main challenges were:
- Minimizing disruption to hotel operations
- Working within a tight 3-week timeline
- Handling irregular traffic patterns
- Preserving decorative inlays

## Phase 1: Planning & Preparation
We conducted detailed assessments and created a custom restoration plan. We coordinated with hotel management to schedule work during low-occupancy periods and set up dust containment systems.

## Phase 2: Grinding & Honing
Our team worked in sections, using advanced grinding equipment to remove the etched layers and restore flatness. Progressive honing stages refined the surface texture.

## Phase 3: Polishing
The final polishing phase brought back the mirror-like finish the marble originally had. Premium polishing compounds created a flawless, protective layer.

## Phase 4: Sealing & Protection
High-grade stone sealer was applied to protect against stains and moisture. This would ensure longevity and ease of future maintenance.

## Results
The ballroom was transformed into a pristine showcase space. The 40-year-old marble looked new again, and the hotel was able to resume full operations after just three weeks. The project received praise from both hotel management and guests.

## Key Learnings
This project demonstrated the importance of advanced planning, skilled team coordination, and professional-grade equipment in managing large-scale restoration projects. The hotel has since contracted us for ongoing quarterly maintenance.`,
    category: "Case Studies",
    author: "Kumar Desai",
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
