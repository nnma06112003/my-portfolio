import { Github, Linkedin, Globe, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      {/* Name + headline */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-lg text-muted-foreground">{profile.headline}</p>
      </div>

      {/* Location + email */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5 shrink-0" />
          {profile.location}
        </span>
        <span className="hidden text-border sm:block">·</span>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Mail className="size-3.5 shrink-0" />
          {profile.email}
        </a>
      </div>

      {/* Social links */}
      <div className="mt-6 flex items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="size-3.5" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-3.5" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <Globe className="size-3.5" />
            Website
          </a>
        </Button>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button asChild>
          <a href="#about">
            View CV
            <ArrowDown className="size-3.5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
