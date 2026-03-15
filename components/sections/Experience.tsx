import { Section } from "@/components/ui/Section";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experience.map((job, i) => (
          <ExperienceCard
            key={i}
            company={job.company}
            role={job.role}
            period={job.period}
            location={job.location}
            highlights={job.highlights}
          />
        ))}
      </div>
    </Section>
  );
}
