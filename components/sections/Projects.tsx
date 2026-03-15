import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            period={project.period}
            description={project.description}
            highlights={project.highlights}
            tech={project.tech}
          />
        ))}
      </div>
    </Section>
  );
}
