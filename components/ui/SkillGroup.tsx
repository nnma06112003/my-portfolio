import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillGroupProps {
  label: string;
  items: string[];
  className?: string;
}

export function SkillGroup({ label, items, className }: SkillGroupProps) {
  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:gap-6", className)}>
      <span className="w-24 shrink-0 text-base font-semibold uppercase tracking-wider text-muted-foreground/70 pt-0.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="font-mono text-base text-foreground/80"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
