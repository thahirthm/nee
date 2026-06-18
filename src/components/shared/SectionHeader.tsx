export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-[1.1]">
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-gold" />
      {intro && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
