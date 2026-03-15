import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  period?: string;
  description: string;
  highlights: string[];
  tech: string[];
  className?: string;
}

export function ProjectCard({
  name,
  period,
  description,
  highlights,
  tech,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 border-border/60 bg-card/50 transition-all duration-200 hover:bg-card hover:shadow-sm",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <CardTitle className="text-base font-semibold text-foreground">
            {name}
          </CardTitle>
          {period && (
            <span className="font-mono text-base text-muted-foreground">
              {period}
            </span>
          )}
        </div>
        <p className="mt-1 text-base text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-1.5">
          {highlights.map((item, i) => (
            <li key={i} className="flex gap-2 text-base text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-base">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
