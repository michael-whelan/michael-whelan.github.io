import { createFileRoute } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { SiteLayout } from "../components/templates/SiteLayout";
import { Card } from "../components/atoms/Card";
import { Hero } from "../components/organisms/Hero";
import { FeaturedProjects } from "../components/organisms/FeaturedProjects";
import type { Project } from "../components/molecules/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michael Whelan — Engineering Manager & Frontend Engineer" },
      {
        name: "description",
        content:
          "Hi, I'm Michael Whelan. Engineering Manager & Senior Frontend Engineer building products and side projects.",
      },
      { property: "og:title", content: "Michael Whelan" },
      {
        property: "og:description",
        content: "Engineering Manager & Senior Frontend Engineer.",
      },
    ],
  }),
  component: HomePage,
});

const featured: Project[] = [
  {
    name: "Opinion8",
    description: "Upvote, downvote and discuss any web page.",
    tags: ["React", "TypeScript", "Supabase"],
    liveHref: "#",
    githubHref: "#",
  },
  {
    name: "London Rent Roulette",
    description: "Guess the rent of real London properties. 5 guesses to win.",
    tags: ["React", "TypeScript", "Supabase"],
    liveHref: "#",
    githubHref: "#",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturedProjects projects={featured} />
      <Card className="mt-6" padded={false}>
        <div className="p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Plane className="h-4 w-4 text-primary" /> Currently Working On
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Improving Opinion8, growing the community, and building new experiments.
          </p>
        </div>
      </Card>
    </SiteLayout>
  );
}
