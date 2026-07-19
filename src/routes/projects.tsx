import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Michael Whelan" },
      {
        name: "description",
        content: "Things I've built, shipped, and continue to work on.",
      },
      { property: "og:title", content: "Projects — Michael Whelan" },
      {
        property: "og:description",
        content: "Things I've built, shipped, and continue to work on.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Category = "All" | "Product" | "Experiment" | "Open Source";

const projects: {
  name: string;
  description: string;
  tags: string[];
  category: Category;
  liveHref?: string;
  githubHref?: string;
}[] = [
  {
    name: "Opinion8",
    description:
      "A Chrome extension and companion site that lets you vote and comment on any web page. Building a layer of community on top of the open web.",
    tags: ["React", "TypeScript", "Supabase", "Edge Functions", "PostgreSQL"],
    category: "Product",
    liveHref: "#",
    githubHref: "#",
  },
  {
    name: "London Rent Roulette",
    description:
      "We show you a real London rental listing. You guess the monthly rent. 5 guesses, get within £50 to win.",
    tags: ["React", "TypeScript", "Supabase"],
    category: "Experiment",
    liveHref: "#",
    githubHref: "#",
  },
  {
    name: "Ideas in Progress",
    description: "A collection of experiments and ideas I'm currently building.",
    tags: ["React", "TypeScript", "Python", "FastAPI"],
    category: "Experiment",
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const categories: Category[] = ["All", "Product", "Experiment", "Open Source"];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Things I've built, shipped, and continue to work on.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={
              "rounded-full px-4 py-1.5 text-sm font-medium transition " +
              (filter === c
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((p) => (
          <article
            key={p.name}
            className="grid gap-4 rounded-xl border border-border bg-card p-4 md:grid-cols-[280px_1fr] md:items-center"
          >
            <div className="h-36 rounded-lg bg-gradient-to-br from-primary/30 to-accent border border-border" />
            <div>
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-primary">
                {p.liveHref && (
                  <a href={p.liveHref} className="inline-flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {p.githubHref && (
                  <a href={p.githubHref} className="inline-flex items-center gap-1 hover:underline">
                    GitHub <Github className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
