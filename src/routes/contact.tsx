import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Michael Whelan" },
      {
        name: "description",
        content:
          "Get in touch. I'm always open to new opportunities, interesting projects, or just a good chat.",
      },
      { property: "og:title", content: "Contact — Michael Whelan" },
      {
        property: "og:description",
        content: "Get in touch — open to new opportunities and interesting projects.",
      },
    ],
  }),
  component: ContactPage,
});

const links = [
  { icon: Mail, label: "Email", value: "michael.whelan@example.com", href: "mailto:michael.whelan@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/michaelwhelan", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/michaelwhelan", href: "#" },
  { icon: MapPin, label: "Location", value: "Barcelona, Spain" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Let's Connect</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            I'm always open to new opportunities, interesting projects, or just a good chat.
          </p>
          <ul className="mt-8 space-y-5">
            {links.map((l) => (
              <li key={l.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-muted text-primary">
                  <l.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">{l.label}</div>
                  {l.href ? (
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {l.value}
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{l.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <h2 className="text-lg font-semibold">Send a Message</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                required
                rows={5}
                placeholder="What's on your mind?"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {sent ? "Sent!" : "Send Message"} <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
}
