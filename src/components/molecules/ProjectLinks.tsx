import { ExternalLink, Github } from "lucide-react";

export function ProjectLinks({
  liveHref,
  githubHref,
}: {
  liveHref?: string;
  githubHref?: string;
}) {
  if (!liveHref && !githubHref) return null;
  return (
    <div className="flex flex-wrap gap-4 text-xs text-primary">
      {liveHref && (
        <a href={liveHref} className="inline-flex items-center gap-1 hover:underline">
          Live Demo <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {githubHref && (
        <a href={githubHref} className="inline-flex items-center gap-1 hover:underline">
          GitHub <Github className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
