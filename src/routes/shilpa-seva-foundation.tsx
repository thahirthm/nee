import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ArrowRight, BookOpen, HandHeart, Users, GraduationCap, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/shilpa-seva.png"; 
import sevaBanner from "@/assets/seva-banner.png";
import projectImage from "@/assets/m-3.jpg";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/shilpa-seva-foundation")({
  head: () => ({
    meta: [
      { title: "Shilpa Seva Foundation — NKE Floorcare" },
      { name: "description", content: "Building Skills. Building Character. Building Futures. Join the journey to empower the next generation." },
    ],
  }),
  component: ShilpaSevaPage,
});

function ShilpaSevaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-0">
        
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center bg-muted">
          <div className="absolute inset-0 z-0">
            <img
              src={sevaBanner}
              alt="Shilpa Seva Foundation Banner"
              className="h-full w-full object-cover object-[center_10%] md:object-top"
            />
            <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-16">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 mb-6 rounded-sm shadow-sm border border-white/20">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-white uppercase">
                  SHILPA SEVA FOUNDATION
                </span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
                Building Skills.<br/>Building Character.<br/>Building Futures.
              </h1>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-20 lg:py-32 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
                Every floor we restore tells a story.
              </h2>
              <div className="w-12 h-1 bg-gold"></div>
              <p className="text-lg text-primary/80 leading-relaxed font-medium mt-6">
                Behind every project is a team of skilled people whose knowledge, discipline, and dedication make that restoration possible.
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Over the years, I have often asked myself a simple question: Where will the next generation of skilled craftsmen come from?
                </p>
                <p>
                  Across our country, thousands of young people are willing to work hard, yet many never receive the opportunity to learn a specialised skill, build financial stability, or create a secure future for their families. At the same time, industries across India struggle to find trained professionals who take pride in their work.
                </p>
                <p className="font-medium text-primary">
                  Shilpa Seva was born from the desire to bridge that gap.
                </p>
                <p>
                  It is not a charity. It is not a training programme alone. It is a long-term commitment to helping people build lives of dignity through skill, discipline, and character.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden shadow-elevated">
              <img src={heroImage} alt="Shilpa Seva" className="absolute inset-0 w-full h-full object-cover object-[center_10%] md:object-top" />
            </div>
          </div>
        </section>

        {/* OUR VISION */}
        <section className="py-20 lg:py-20 bg-muted/30 border-b border-border text-center">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-8">Our Vision</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our vision is simple. To create opportunities for thousands of young people to develop specialised skills in floor restoration, surface care, and related trades while also helping them become responsible professionals, dependable family members, and confident individuals.
              </p>
              <p>
                We want every trainee to leave with more than a skill. We want them to leave with confidence. With dignity. With the ability to support their family. With the desire to help someone else in return.
              </p>
              <p className="font-medium text-primary text-xl md:text-2xl mt-8 italic">
                "Knowledge should never stop with one person. It should be passed forward."
              </p>
            </div>
          </div>
        </section>

        {/* WHY THIS MATTERS */}
        <section className="py-20 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-3xl">
              <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">Why This Matters</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                During my own journey, I learnt that technical knowledge alone is never enough. A successful life requires much more. These are the values that shaped my life, and they are the values we hope to pass on.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                "Integrity", 
                "Self-discipline", 
                "Financial responsibility", 
                "Respect for people", 
                "Continuous learning", 
                "Standing up after failure"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 md:p-8 rounded-sm bg-card border border-border shadow-sm hover:border-gold transition-colors group">
                  <div className="bg-muted p-3 rounded-full text-gold shrink-0 group-hover:bg-gold/10 transition-colors">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-primary text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 p-8 md:p-10 rounded-sm border-l-4 border-gold">
              <p className="text-lg md:text-xl text-primary/90 font-medium leading-relaxed">
                When a young person develops these qualities, an entire family benefits. When families become stronger, communities become stronger. That is the future we hope to help build.
              </p>
            </div>
          </div>
        </section>

        {/* MORE THAN TECHNICAL TRAINING */}
        <section className="relative py-24 lg:py-40 flex items-center justify-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src={aboutImage} alt="Training" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 w-full">
            <div className="bg-white p-10 md:p-16 lg:p-20 rounded-sm shadow-2xl border-t-4 border-gold text-center">
              <h3 className="font-serif text-3xl md:text-5xl text-primary mb-8">More Than Technical Training</h3>
              
              <div className="w-16 h-1 bg-gold mx-auto mb-10"></div>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                <p>
                  Our training will combine practical skills with life skills. Participants will learn professional workmanship, workplace safety, customer care, financial discipline, teamwork, communication, and ethical conduct.
                </p>
                <p>
                  They will also be encouraged to build healthy habits, strengthen their families, develop good financial practices, and continue learning throughout their lives. 
                </p>
              </div>
              
              <div className="pt-10 border-t border-border">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-snug">
                  Our goal is not simply to produce skilled workers.<br />
                  <span className="text-gold italic block mt-4 font-medium">Our goal is to develop dependable human beings.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW YOU CAN BE PART */}
        <section className="py-20 lg:py-20 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">How You Can Be Part of This Journey</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every meaningful movement grows because ordinary people choose to contribute in ordinary ways. You can become part of Shilpa Seva by:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border p-8 md:p-10 rounded-sm hover:border-gold transition-colors group">
                <Users className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl text-primary mb-4">As a Customer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you choose NKE Floorcare, you are supporting a business that is committed to investing in skill development and creating future opportunities for young craftsmen.
                </p>
              </div>
              <div className="border border-border p-8 md:p-10 rounded-sm hover:border-gold transition-colors group">
                <HandHeart className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl text-primary mb-4">By Referring Someone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you know someone who needs our professional services, recommending us helps sustain the work that makes this mission possible. If you know a young person with integrity, a willingness to learn, and the determination to build a better future, introduce them to us when our training programmes begin.
                </p>
              </div>
              <div className="border border-border p-8 md:p-10 rounded-sm hover:border-gold transition-colors group">
                <GraduationCap className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl text-primary mb-4">As a Mentor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced professionals, architects, engineers, business leaders, educators, financial experts, and craftsmen all have knowledge worth sharing. Your experience may become someone else's turning point.
                </p>
              </div>
              <div className="border border-border p-8 md:p-10 rounded-sm hover:border-gold transition-colors group">
                <BookOpen className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl text-primary mb-4">As a Learning Partner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Educational institutions, industry associations, manufacturers, and organisations that believe in skill development are welcome to collaborate with us in creating better opportunities for the next generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / COMMITMENT */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <img src={projectImage} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Our Commitment & The Journey Ahead</h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed mb-12">
              <p>
                We do not promise overnight success. We promise honest effort. We promise continuous learning. We promise to treat every trainee with respect and every customer with integrity.
              </p>
              <p>
                We believe that when knowledge is shared with sincerity and work is performed with excellence, both business and society become stronger.
              </p>
              <p className="text-white font-medium text-xl mt-8">
                Every restored floor begins with one small step. Every transformed life begins the same way.
              </p>
              <p>
                If our vision resonates with you, we invite you to walk alongside us. Whether you are a customer, a mentor, a partner, or simply someone who believes that skilled work deserves dignity, you are already part of this journey.
              </p>
              <p>
                Together, we can build more than beautiful floors. We can help build confident people, stronger families, and a future where every generation leaves the next one better prepared than the last.
              </p>
            </div>
            
            <p className="font-serif text-2xl text-gold mb-8">The journey has only just begun.</p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-white hover:bg-gold/90 transition-all shadow-elevated"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
