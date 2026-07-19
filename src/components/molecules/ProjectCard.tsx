import { Card } from "../atoms/Card";
import { TagList } from "./TagList";
import { ProjectLinks } from "./ProjectLinks";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  liveHref?: string;
  githubHref?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card padded={false} className="flex flex-col p-4">
      <div className="mb-4 h-28 rounded-md border border-border bg-gradient-to-br from-primary/30 to-accent" />
      <h3 className="font-semibold">{project.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
      <div className="mt-3">
        <TagList tags={project.tags} />
      </div>
      <div className="mt-3">
        <ProjectLinks liveHref={project.liveHref} githubHref={project.githubHref} />
      </div>
    </Card>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Card padded={false} className="grid gap-4 p-4 md:grid-cols-[280px_1fr] md:items-center">
      <div className="h-36 rounded-lg border border-border bg-gradient-to-br from-primary/30 to-accent" />
      <div>
        <h2 className="text-lg font-semibold">{project.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-3">
          <TagList tags={project.tags} />
        </div>
        <div className="mt-3">
          <ProjectLinks liveHref={project.liveHref} githubHref={project.githubHref} />
        </div>
      </div>
    </Card>
  );
}
