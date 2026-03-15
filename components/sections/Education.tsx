import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((edu, i) => (
          <Card
            key={i}
            className="border-border/60 bg-card/50 transition-all duration-200 hover:bg-card hover:shadow-sm"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {edu.school}
                  </CardTitle>
                  <p className="mt-0.5 text-base text-muted-foreground">
                    {edu.degree} &mdash; {edu.major}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-0.5 sm:items-end">
                  <span className="font-mono text-base text-muted-foreground">
                    {edu.period}
                  </span>
                  <span className="font-mono text-base text-muted-foreground/70">
                    GPA {edu.gpa}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </Section>
  );
}
