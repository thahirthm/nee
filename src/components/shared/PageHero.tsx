import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[500px] md:min-h-screen flex items-center pt-24"
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <img
            src={backgroundImage}
            alt={title}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 w-full">
        <div className="max-w-3xl">
          {subtitle && (
            <div className="eyebrow">
              {subtitle}
            </div>
          )}
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-primary">
            {title}
          </h1>
          {description && (
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {cta && (
                <a
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
                >
                  {cta.text} <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-card px-7 py-4 text-sm font-medium text-primary hover:border-gold transition-colors"
                >
                  {secondaryCta.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
