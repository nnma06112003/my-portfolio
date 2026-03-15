import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  className?: string;
}

export function ExperienceCard({
  company,
  role,
  period,
  location,
  highlights,
  className,
}: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 border-border/60 bg-card/50 transition-all duration-200 hover:bg-card hover:shadow-sm",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">
              {role}
            </CardTitle>
            <p className="mt-0.5 text-base font-medium text-muted-foreground">
              {company}
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5 sm:items-end">
            <span className="font-mono text-base text-muted-foreground">
              {period}
            </span>
            <span className="text-base text-muted-foreground/70">
              {location}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5">
          {highlights.map((item, i) => (
            <li key={i} className="flex gap-2 text-base text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
