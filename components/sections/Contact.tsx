import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "nnma06112003",
    href: profile.social.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "minh-anh-nguyen003",
    href: profile.social.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Website",
    value: "nnma.id.vn",
    href: profile.website,
    icon: Globe,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-3">
        {contactLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-foreground" />
              <span className="w-16 shrink-0 text-base font-medium uppercase tracking-wider text-muted-foreground/60">
                {item.label}
              </span>
              <span>{item.value}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
