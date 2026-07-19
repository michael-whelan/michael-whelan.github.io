import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/templates/SiteLayout";
import { PageHeading } from "../components/atoms/Heading";
import { Card } from "../components/atoms/Card";
import { TimelineItem } from "../components/molecules/TimelineItem";

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
      <PageHeading title="About Me" subtitle="A bit about my background, experience, and what drives me." />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
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
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Experience</h2>
          <ul className="mt-4 space-y-4">
            {experience.map((e) => (
              <TimelineItem key={e.period} period={e.period} role={e.role} />
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold">Technologies</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-[140px_1fr]">
          {technologies.map((t) => (
            <div key={t.label} className="contents">
              <dt className="text-sm font-medium">{t.label}</dt>
              <dd className="text-sm text-muted-foreground">{t.value}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </SiteLayout>
  );
}
