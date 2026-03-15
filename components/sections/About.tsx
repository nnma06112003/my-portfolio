import { Section } from "@/components/ui/Section";
import { summary } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4">
        {summary.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
