import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Michael Whelan" },
      {
        name: "description",
        content: "A bit about my background, experience, and what drives me.",
      },
      { property: "og:title", content: "About — Michael Whelan" },
      {
        property: "og:description",
        content: "A bit about my background, experience, and what drives me.",
      },
    ],
  }),
  component: AboutPage,
});

const experience = [
  { period: "2023 – Present", role: "Engineering Manager, Vector AI (contract via Remote)" },
  { period: "2019 – 2023", role: "Tech Lead, Lyst" },
  { period: "2016 – 2019", role: "Senior Frontend Engineer, Lyst" },
  { period: "2013 – 2016", role: "Marketing, Various Companies" },
];

const technologies = [
  { label: "Frontend", value: "React, TypeScript, Next.js, Vite, Tailwind CSS" },
  { label: "Backend", value: "Python, FastAPI, Node.js, Supabase" },
  { label: "Data", value: "PostgreSQL, SQLAlchemy, Kafka" },
  { label: "DevOps & Tools", value: "Docker, Vercel, Supabase, GitHub Actions" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="mt-2 text-muted-foreground">
          A bit about my background, experience, and what drives me.
        </p>
      </div>

      {/* Top row: two side-by-side panels */}
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">My Story</h2>
          <div className="mt-3 space-y-3 text-sm text-muted-foreground">
            <p>
              I started my career in marketing in Dublin, before moving to London where I spent 7
              years in the fashion and gambling industries.
            </p>
            <p>
              A decade ago I discovered coding and haven't looked back since. I've spent the last
              several years building products with incredible teams and leading engineering
              organisations.
            </p>
            <p>
              Now based in Barcelona, I'm focused on building products that solve real problems and
              helping teams do their best work.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Experience</h2>
          <ul className="mt-4 space-y-4">
            {experience.map((e) => (
              <li key={e.period} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <div className="text-sm font-medium">{e.period}</div>
                  <div className="text-sm text-muted-foreground">{e.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom: single large full-width panel */}
      <section className="mt-6 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Technologies</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-[140px_1fr]">
          {technologies.map((t) => (
            <div key={t.label} className="contents">
              <dt className="text-sm font-medium">{t.label}</dt>
              <dd className="text-sm text-muted-foreground">{t.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SiteLayout>
  );
}
