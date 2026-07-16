import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import founderImg from "@/assets/ceo.png";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — NKE Floors" },
      { name: "description", content: "A personal message from K. J. Dilip, Founder & Managing Director of NKE Floorcare Pvt. Ltd." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-muted text-muted-foreground text-xs uppercase tracking-widest font-medium mb-6">
                CEO Message
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
                Meet the Founder
              </h1>
              <div className="mt-6 h-px w-16 bg-gold" />
              <p className="mt-8 text-xl text-primary font-medium italic leading-relaxed border-l-2 border-gold pl-6">
                "Every floor can be restored. I believe the same is true for people."
              </p>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-soft">
              <img 
                src={founderImg} 
                alt="K. J. Dilip, Founder & Managing Director" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose prose-lg prose-slate max-w-none text-muted-foreground leading-relaxed">
            <p>Welcome, and thank you for taking the time to visit our website.</p>
            <p>
              My name is K. J. Dilip, and I am the Founder and Managing Director of NKE Floorcare Pvt. Ltd.
            </p>
            <p>
              If you were expecting to read a long list of achievements, awards, or business milestones, you may be disappointed. Those things certainly have their place, but they are not what define me.
            </p>
            <p>I would rather tell you what has shaped my journey.</p>
            <p>
              I entered the workforce at the age of seventeen, when my family's circumstances changed unexpectedly. Like many people, life did not unfold exactly as I had planned. There were successes that gave me confidence, failures that humbled me, and moments that forced me to begin again from the very beginning.
            </p>
            <p>
              Today, when I look back over more than four decades in business, I realise that every challenge was also a teacher.
            </p>
            <p>That simple belief continues to guide my life.</p>
            
            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">A Student for Life</h3>
            <p>I have always believed that the day we stop learning is the day we stop growing.</p>
            <p>
              Throughout my career, whenever I came across a problem I did not understand, I travelled to learn. I visited manufacturers, attended international exhibitions, worked alongside experts, and invested in technology—not to own impressive machines, but to better understand my craft.
            </p>
            <p>
              Whether it was restoring marble in Italy, studying concrete polishing in Sweden, or learning from experienced craftsmen around the world, every journey had one purpose: to return home better equipped to serve my customers.
            </p>
            <p>Even today, I do not consider myself an expert who has finished learning.</p>
            <p>I simply consider myself a student who has been learning for a long time.</p>

            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">Why We Started NKE Floorcare</h3>
            <p>When people look at a beautiful floor, they often notice the shine.</p>
            <p>We notice something different.</p>
            <p>We see years of use, hidden problems, lost beauty, and untapped potential.</p>
            <p>Our work has never been about polishing stone alone.</p>
            <p>
              It is about understanding the material, respecting its character, and restoring it with patience, skill, and the right technology.
            </p>
            <p>
              Over the years, we have had the privilege of working in luxury homes, five-star hotels, commercial buildings, heritage properties, and industrial facilities across South India.
            </p>
            <p>Every project has reinforced one lesson:</p>
            <p className="font-medium text-primary">
              Quality is never an accident. It is the result of knowledge, discipline, experience, and genuine care.
            </p>

            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">Beyond Business</h3>
            <p>As the years passed, I began asking myself an important question.</p>
            <p>What should happen to everything I have learned?</p>
            <p>Knowledge becomes valuable only when it is passed on.</p>
            <p>That thought gave birth to a larger vision called Shilpa Seva.</p>
            <p>
              Our dream is to create opportunities for young people to build meaningful careers through skilled craftsmanship. But the goal extends far beyond vocational training.
            </p>
            <p>
              We want to help them build lives founded on discipline, integrity, financial responsibility, continuous learning, and respect for others.
            </p>
            <p>A skill can provide a livelihood.</p>
            <p>Character builds a life.</p>
            <p>
              If, over the coming years, we are able to help thousands of families become more confident, more self-reliant, and more hopeful about their future, I will consider that my life's greatest achievement.
            </p>

            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">What I Believe</h3>
            <p>Over the years, life has taught me a few simple lessons.</p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Integrity is more valuable than short-term profit.</li>
              <li>Learning should never stop.</li>
              <li>Every setback carries a lesson.</li>
              <li>Excellence is built through discipline, not shortcuts.</li>
              <li>Money is a tool, not the destination.</li>
              <li>Knowledge grows when it is shared.</li>
              <li>The greatest legacy we can leave behind is helping another person move forward.</li>
            </ul>
            <p>These are not principles I learned from books alone.</p>
            <p>
              They were learned on construction sites, in factories, inside hotels, during difficult times, and through the trust that customers placed in us.
            </p>

            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">My Promise to You</h3>
            <p>If you choose to work with us, I cannot promise that every project will be simple.</p>
            <p>
              But I can promise that we will approach it with honesty, technical knowledge, careful planning, and a genuine desire to find the right solution for your floor—not merely the most expensive one.
            </p>
            <p>Sometimes restoration is the right answer.</p>
            <p>Sometimes it is not.</p>
            <p>If we believe another solution will serve you better, we will tell you so.</p>
            <p>Trust is far more valuable than a single project.</p>

            <h3 className="font-serif text-2xl text-primary mt-12 mb-6">A Personal Invitation</h3>
            <p>If you have a marble, granite, natural stone, terrazzo, or concrete floor that concerns you, I invite you to send us a few photographs.</p>
            <p>We will gladly help you understand:</p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>What can realistically be restored.</li>
              <li>The options available.</li>
              <li>The process involved.</li>
              <li>An approximate budget.</li>
              <li>Whether restoration is the right investment.</li>
            </ul>
            <p>There is absolutely no obligation.</p>
            <p>Sometimes honest guidance is the most valuable service we can offer.</p>
            <p>And if our journey or our work resonates with you, I have one small request.</p>
            <p>Please share it with someone who may benefit from it.</p>
            <p>Every new customer helps our business grow.</p>
            <p>
              More importantly, every opportunity brings us one step closer to our larger mission of creating skilled professionals, stronger families, and a future where knowledge is continuously passed from one generation to the next.
            </p>
            <p>Thank you for visiting.</p>
            <p>I hope we have the opportunity to serve you.</p>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="font-serif text-xl text-primary mb-1">Warm regards,</p>
              <p className="font-serif text-2xl text-primary font-medium">K. J. Dilip</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mt-2">Founder & Managing Director</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">NKE Floorcare Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
