import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  User,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BLOG_POSTS } from "./index";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postId")({
  beforeLoad: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.id === params.postId);
    if (!post) throw new Error("Post not found");
    return { post };
  },
  head: ({ context }) => ({
    meta: [
      { title: `${context.post.title} — NKE Floors Blog` },
      {
        name: "description",
        content: context.post.excerpt,
      },
      {
        property: "og:title",
        content: `${context.post.title} — NKE Floors`,
      },
      {
        property: "og:description",
        content: context.post.excerpt,
      },
      {
        property: "og:image",
        content: context.post.image,
      },
      { property: "og:url", content: `/blog/${context.post.id}` },
      {
        property: "og:type",
        content: "article",
      },
    ],
    links: [
      { rel: "canonical", href: `/blog/${context.post.id}` },
    ],
  }),
  component: Page,
});

function Page() {
  const { post } = Route.useRouteContext();

  return (
    <main className="bg-background text-foreground">
      <Header />
      <BlogArticle post={post} />
    </main>
  );
}

/* ============ BLOG ARTICLE ============ */
function BlogArticle({ post }: { post: typeof BLOG_POSTS[0] }) {
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const recommendedPosts = relatedPosts.length > 0 ? relatedPosts : otherPosts;

  return (
    <article className="py-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-widest text-gold mb-4">
          {post.category}
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-8 h-px w-16 bg-gold" />

        {/* Meta Info */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mt-12 w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-lg max-w-none">
            {post.content === "CUSTOM_RENDER" && post.id === "what-is-stone-restoration" ? (
              <WhatIsStoneRestoration />
            ) : post.content === "CUSTOM_RENDER_2" && post.id === "why-concrete-floors-crack" ? (
              <WhyConcreteFloorsCrack />
            ) : post.content === "CUSTOM_RENDER_3" && post.id === "how-we-polish-concrete" ? (
              <HowWePolishConcrete />
            ) : (
              post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={idx}
                      className="mt-8 mb-4 font-serif text-3xl text-primary"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                );
              })
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 sticky top-24 h-fit">
            {/* Share Section */}
            <div className="border border-border bg-card rounded-sm p-8">
              <h3 className="font-serif text-xl text-primary mb-6">
                Share This Article
              </h3>
              <div className="flex gap-4">
                {[
                  { i: Facebook, label: "Facebook", url: "#" },
                  { i: Twitter, label: "Twitter", url: "#" },
                  { i: Linkedin, label: "LinkedIn", url: "#" },
                  { i: Mail, label: "Email", url: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={`Share on ${s.label}`}
                    className="h-10 w-10 rounded-sm border border-border flex items-center justify-center hover:border-gold hover:bg-gold/5 transition-colors"
                  >
                    <s.i className="h-4 w-4 text-gold" />
                  </a>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-8 border border-border bg-card rounded-sm p-8">
              <h3 className="font-serif text-lg text-primary mb-4">
                About the Author
              </h3>
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg mb-4">
                {post.author
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.author} is part of the NKE Floors expertise team, sharing
                insights on stone restoration, maintenance, and design.
              </p>
            </div>

            {/* Related Articles Button */}
            <div className="mt-8">
              <a
                href="/blog"
                className="block w-full text-center rounded-sm border border-border px-6 py-3 text-sm font-medium text-primary hover:border-gold hover:bg-gold/5 transition-colors"
              >
                ← Back to Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="mt-28 py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="More Articles"
            title="Related Reading"
            intro="Explore similar articles and continue learning about stone restoration."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group border border-border bg-background rounded-sm overflow-hidden hover:border-gold transition-all hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    {relatedPost.category}
                  </div>
                  <h3 className="mt-3 font-serif text-lg text-primary line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-primary group-hover:text-gold transition-colors">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Stay Updated
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/75">
            Subscribe to our blog for insights on stone restoration, maintenance tips, and industry trends.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="mt-10 flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-sm px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
            />
            <button
              type="submit"
              className="rounded-sm bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}

function WhatIsStoneRestoration() {
  return (
    <div className="flex flex-col gap-12 mt-2">
      <p className="text-xl italic text-muted-foreground font-serif">
        You walk on it every day — but have you ever seen marble breathe again?
      </p>
      
      <div className="h-px w-full bg-border" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#2a2b32] text-white p-8 rounded-sm shadow-elevated">
          <h3 className="text-2xl font-serif mb-4 text-white">The Common Misconception</h3>
          <p className="leading-relaxed text-white/90">
            Most people think a stone floor is "done" the day it's installed. In reality, that's just day one of a decades-long relationship. Natural stone is porous, living rock — it absorbs traffic, spills, sunlight, and time. Over months and years, that shows up as dullness, scratches, and lost reflection.
          </p>
        </div>
        
        <div className="p-2 lg:p-4">
          <h3 className="text-2xl font-serif text-primary mb-4">The Restoration Process</h3>
          <p className="text-muted-foreground mb-4">Stone restoration isn't cleaning. It's a structured process:</p>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
            <li><strong>Diamond grinding</strong> — to correct the surface</li>
            <li><strong>Honing</strong> — to remove scratches and etching</li>
            <li><strong>Crystallization or polishing</strong> — to rebuild the shine</li>
            <li><strong>Sealing</strong> — to protect what you've restored</li>
          </ol>
          <p className="text-muted-foreground">
            Done right, a floor that looks tired can look — and perform — better than the day it was laid.
          </p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 rounded-sm flex items-start gap-4 border border-border">
        <div className="mt-1 h-4 w-4 rounded-[2px] border border-primary shrink-0 opacity-75" />
        <p className="text-primary font-medium">
          We've spent 30+ years bringing marble, granite, and terrazzo back to life across hotels, homes, and industrial floors. It's not magic. It's method.
        </p>
      </div>
      
      <div className="mt-4">
        <p className="font-bold text-primary mb-6">Luxury begins from the ground up.</p>
        <p className="text-sm text-muted-foreground">
          #StoneRestoration #MarblePolishing #NKEFloorcare #Chennai #LuxuryFlooring
        </p>
      </div>
    </div>
  );
}

function WhyConcreteFloorsCrack() {
  return (
    <div className="flex flex-col gap-12 mt-2">
      <p className="text-xl italic text-muted-foreground font-serif">
        Most industrial floors don't crack because of poor concrete. They crack because of poor planning.
      </p>
      
      <div className="h-px w-full bg-border" />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-serif text-primary mb-6">Root Causes of Cracking</h3>
          <div className="space-y-4">
            <div className="border border-border p-6 rounded-sm border-l-4 border-l-[#2a2b32]">
              <h4 className="text-lg font-serif text-primary mb-2">Wrong Curing Time</h4>
              <p className="text-muted-foreground leading-relaxed">
                Premature loading before the slab reaches design strength initiates micro-fractures that compound under traffic.
              </p>
            </div>
            
            <div className="border border-border p-6 rounded-sm border-l-4 border-l-[#2a2b32]">
              <h4 className="text-lg font-serif text-primary mb-2">Missing Control Joints</h4>
              <p className="text-muted-foreground leading-relaxed">
                Without planned relief points, shrinkage stress finds its own path — usually the worst possible one.
              </p>
            </div>
            
            <div className="border border-border p-6 rounded-sm border-l-4 border-l-[#2a2b32]">
              <h4 className="text-lg font-serif text-primary mb-2">Incorrect Load Calculations</h4>
              <p className="text-muted-foreground leading-relaxed">
                Equipment loads that exceed design parameters accelerate structural failure from day one.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif text-primary mb-6">The Right Fix</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            By the time a crack appears, the damage is already structural — and it only gets worse under forklift traffic, thermal cycling, and daily wear.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The fix isn't a quick patch. It starts with understanding <strong>why</strong> the crack happened — slab thickness, subgrade condition, joint spacing — before any grinding, filling, or polishing begins. Skip that diagnosis, and the same crack returns in six months.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-sm flex items-start gap-4 border border-border">
            <div className="mt-1 h-4 w-4 rounded-[2px] border border-primary shrink-0 opacity-75" />
            <p className="text-primary font-medium">
              At NKE, every industrial flooring project starts with reading the floor, not just repairing it.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="font-bold text-primary mb-6">Luxury begins from the ground up.</p>
        <p className="text-sm text-muted-foreground">
          #ConcreteFlooring #IndustrialFloors #FloorRestoration #NKEFloorcare
        </p>
      </div>
    </div>
  );
}

function HowWePolishConcrete() {
  return (
    <div className="flex flex-col gap-12 mt-2">
      <p className="text-xl italic text-muted-foreground font-serif">
        From dusty to glossy — here's how raw concrete becomes a mirror.
      </p>
      
      <div className="h-px w-full bg-border" />
      
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
        <div>
          <div className="text-sm text-muted-foreground mb-4">01</div>
          <div className="h-px w-full bg-foreground mb-4" />
          <h3 className="text-xl font-serif text-primary mb-4">Coarse Diamond Grinding</h3>
          <p className="text-muted-foreground leading-relaxed">
            Level the surface, remove high spots, open the slab's pores for densification.
          </p>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-4">02</div>
          <div className="h-px w-full bg-foreground mb-4" />
          <h3 className="text-xl font-serif text-primary mb-4">Progressive Fine Grinding</h3>
          <p className="text-muted-foreground leading-relaxed">
            Remove scratch patterns left by coarse grits — each pass refines what the last one left behind.
          </p>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-4">03</div>
          <div className="h-px w-full bg-foreground mb-4" />
          <h3 className="text-xl font-serif text-primary mb-4">Chemical Densification</h3>
          <p className="text-muted-foreground leading-relaxed">
            Harden the slab from within — silicate chemistry reacts with free lime to create a denser, harder surface.
          </p>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-4">04</div>
          <div className="h-px w-full bg-foreground mb-4" />
          <h3 className="text-xl font-serif text-primary mb-4">Fine Polishing</h3>
          <p className="text-muted-foreground leading-relaxed">
            Work through increasingly fine grits until the surface begins to reflect light with depth and clarity.
          </p>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-4">05</div>
          <div className="h-px w-full bg-foreground mb-4" />
          <h3 className="text-xl font-serif text-primary mb-4">Protective Sealer</h3>
          <p className="text-muted-foreground leading-relaxed">
            Final stain and dust resistance — locking in the finish and extending service life.
          </p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 rounded-sm flex items-start gap-4 border border-border mt-4">
        <div className="mt-1.5 h-4 w-4 rounded-[2px] border border-primary shrink-0 opacity-75" />
        <p className="text-primary font-medium leading-relaxed">
          Each grit transition matters. Skip a step, and the "shine" you see today won't survive six months of foot or vehicle traffic. The mirror finish isn't a coating sitting on top of the concrete — it's the concrete itself, densified and refined until it reflects light like polished stone. It's why our polished concrete floors are still holding their shine in hotel lobbies and factory floors years later.
        </p>
      </div>
      
      <div className="mt-8">
        <p className="font-bold text-primary mb-6">Luxury begins from the ground up.</p>
        <p className="text-sm text-muted-foreground">
          #ConcretePolishing #IndustrialFlooring #FloorRestoration #NKEFloorcare #Chennai #LuxuryFlooring
        </p>
      </div>
    </div>
  );
}
