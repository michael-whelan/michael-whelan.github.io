import { LinkButton } from "../atoms/LinkButton";

export function Hero() {
  return (
    <section className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm <span className="text-primary">Michael Whelan.</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-foreground">
          Engineering Manager &amp; Senior Frontend Engineer.
        </p>
        <p className="mt-4 max-w-md text-muted-foreground">
          I build products, lead engineering teams, and create side projects focused on solving
          interesting problems.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton to="/projects" variant="primary">
            View My Projects
          </LinkButton>
          <LinkButton to="/about" variant="secondary">
            About Me
          </LinkButton>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="h-56 w-56 rounded-full border border-border bg-gradient-to-br from-primary/40 to-accent sm:h-64 sm:w-64" />
      </div>
    </section>
  );
}
