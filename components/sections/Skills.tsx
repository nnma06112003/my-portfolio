import { Section } from "@/components/ui/Section";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-4">
        {skills.map((group) => (
          <SkillGroup
            key={group.label}
            label={group.label}
            items={group.items}
          />
        ))}
      </div>
    </Section>
  );
}
