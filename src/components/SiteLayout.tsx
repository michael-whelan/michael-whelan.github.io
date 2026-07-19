import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="relative px-1 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      activeProps={{
        className:
          "relative px-1 py-1 text-sm font-medium text-foreground after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-primary",
      }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold text-primary tracking-tight">
            MW
          </Link>
          <nav className="flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div>© {new Date().getFullYear()} Michael Whelan</div>
          <div>
            Built with React & TypeScript <span className="text-primary">♥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
