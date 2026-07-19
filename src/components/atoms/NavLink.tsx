import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function NavLink({ to, children }: { to: string; children: ReactNode }) {
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
