import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div>© {new Date().getFullYear()} Michael Whelan</div>
        <div>
          Built with React &amp; TypeScript <span className="text-primary">♥</span>
        </div>
      </div>
    </footer>
  );
}
