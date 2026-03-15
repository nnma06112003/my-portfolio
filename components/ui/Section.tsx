import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 scroll-mt-20", className)}>
      <div className="mb-8">
        <h2 className="text-base font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        <div className="mt-3 h-px w-full bg-border" />
      </div>
      {children}
    </section>
  );
}
