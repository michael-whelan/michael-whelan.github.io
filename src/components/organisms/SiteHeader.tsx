import { Link } from "@tanstack/react-router";
import { NavLink } from "../atoms/NavLink";
import { ThemeToggle } from "../atoms/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
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
  );
}
