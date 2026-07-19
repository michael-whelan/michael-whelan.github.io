import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/templates/SiteLayout";
import { PageHeading } from "../components/atoms/Heading";
import { ProjectRow, type Project } from "../components/molecules/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Michael Whelan" },
      { name: "description", content: "Things I've built, shipped, and continue to work on." },
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

const projects: (Project & { category: Category })[] = [
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
      <PageHeading title="Projects" subtitle="Things I've built, shipped, and continue to work on." />

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
          <ProjectRow key={p.name} project={p} />
        ))}
      </div>
    </SiteLayout>
  );
}
