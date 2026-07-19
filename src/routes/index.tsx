import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github, Plane } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";

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

const featured = [
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
      {/* Hero */}
      <section className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center pb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm <span className="text-primary">Michael Whelan.</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground">
            Engineering Manager &amp; Senior Frontend Engineer.
          </p>
          <p className="mt-4 max-w-md text-muted-foreground">
            I build products, lead engineering teams, and create side projects
            focused on solving interesting problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              View My Projects
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="h-56 w-56 rounded-full bg-gradient-to-br from-primary/40 to-accent border border-border sm:h-64 sm:w-64" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.name}
              className="rounded-lg border border-border bg-background p-4 flex flex-col"
            >
              <div className="mb-4 h-28 rounded-md bg-gradient-to-br from-primary/30 to-accent border border-border" />
              <h3 className="font-semibold">{p.name}</h3>
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
              <div className="mt-3 flex gap-3 text-xs text-primary">
                <a href={p.liveHref} className="inline-flex items-center gap-1 hover:underline">
                  Live Demo <ExternalLink className="h-3 w-3" />
                </a>
                <a href={p.githubHref} className="inline-flex items-center gap-1 hover:underline">
                  GitHub <Github className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
          <article className="rounded-lg border border-border bg-background p-4 flex flex-col">
            <div className="mb-4 h-28 rounded-md bg-gradient-to-br from-primary/30 to-accent border border-border" />
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
          </article>
        </div>
      </section>

      {/* Currently working on */}
      <section className="mt-6 rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <Plane className="h-4 w-4 text-primary" /> Currently Working On
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Improving Opinion8, growing the community, and building new experiments.
        </p>
      </section>
    </SiteLayout>
  );
}
