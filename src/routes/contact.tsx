import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { SiteLayout } from "../components/templates/SiteLayout";
import { ContactRow } from "../components/molecules/ContactRow";
import { ContactForm } from "../components/organisms/ContactForm";

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
  {
    icon: Mail,
    label: "Email",
    value: "michael.whelan@example.com",
    href: "mailto:michael.whelan@example.com",
  },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/michaelwhelan", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/michaelwhelan", href: "#" },
  { icon: MapPin, label: "Location", value: "Barcelona, Spain" },
];

function ContactPage() {
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
              <ContactRow
                key={l.label}
                icon={l.icon}
                label={l.label}
                value={l.value}
                href={l.href}
              />
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </SiteLayout>
  );
}
