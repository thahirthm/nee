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
import { Link } from "@tanstack/react-router";
import { useBlogDetailQuery, useBlogsQuery, type BlogPost } from "@/lib/api";

export const Route = createFileRoute("/blog/$postId")({
  beforeLoad: ({ params }) => {
    return { postId: params.postId };
  },
  head: ({ params }: any) => ({
    meta: [
      { title: `Blog Article — NKE Floors` },
      { name: "description", content: "Stone restoration insights and tips." },
    ],
    links: [{ rel: "canonical", href: `/blog/${params.postId}` }],
  }),
  component: Page,
});

function Page() {
  const { postId } = Route.useRouteContext();
  const { data: apiPost, isLoading } = useBlogDetailQuery(postId);
  const { data: allBlogs } = useBlogsQuery();

  if (isLoading) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Header />
        <div className="py-32 text-center text-muted-foreground">
          Loading article...
        </div>
      </main>
    );
  }

  if (!apiPost) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Header />
        <div className="py-32 text-center">
          <h2 className="text-2xl font-serif text-primary">Article Not Found</h2>
          <p className="mt-2 text-muted-foreground">The requested blog post could not be found.</p>
          <div className="mt-6">
            <Link to="/blog" className="text-sm font-medium text-gold hover:underline">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const post = {
    id: String(apiPost.id),
    title: apiPost.title,
    excerpt: apiPost.short_description || apiPost.excerpt || "",
    content: apiPost.content || apiPost.long_description || apiPost.description || apiPost.short_description || "",
    category: apiPost.category || "Restoration",
    author: apiPost.author || "NKE Floors Team",
    date: apiPost.formatted_date || apiPost.date || "2025",
    image: apiPost.image || "",
    pdf_link: apiPost.pdf_link,
  };

  const otherPosts = (allBlogs || [])
    .filter((b) => String(b.id) !== String(apiPost.id) && b.slug !== apiPost.slug)
    .slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Header />
      <BlogArticle post={post} recommendedPosts={otherPosts} />
    </main>
  );
}

/* ============ BLOG ARTICLE ============ */
function BlogArticle({
  post,
  recommendedPosts,
}: {
  post: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    image: string;
    pdf_link?: string | null;
  };
  recommendedPosts: BlogPost[];
}) {
  return (
    <article className="pt-40 pb-20">
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
            {/<[a-z][\s\S]*>/i.test(post.content) ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
                    src={relatedPost.image || ""}
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

