import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Card } from "../atoms/Card";
import { SectionHeading } from "../atoms/Heading";
import { ProjectCard, type Project } from "../molecules/ProjectCard";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <Card>
      <SectionHeading
        title="Featured Projects"
        action={
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
        <Card padded={false} className="flex flex-col p-4">
          <div className="mb-4 h-28 rounded-md border border-border bg-gradient-to-br from-primary/30 to-accent" />
          <h3 className="font-semibold">More to come</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            I'm always building and experimenting with new ideas.
          </p>
          <Link
            to="/projects"
            className="mt-auto inline-flex items-center gap-1 pt-3 text-xs text-primary hover:underline"
          >
            See what I'm working on <ArrowRight className="h-3 w-3" />
          </Link>
        </Card>
      </div>
    </Card>
  );
}
