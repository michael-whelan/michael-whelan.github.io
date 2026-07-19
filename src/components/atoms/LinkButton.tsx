import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as RouterLink } from "@tanstack/react-router";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "border border-border bg-background text-foreground hover:bg-accent",
};

export function LinkButton({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition ${variants[variant]} ${className}`;
  if (to) {
    return (
      <RouterLink to={to} className={cls}>
        {children}
      </RouterLink>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
