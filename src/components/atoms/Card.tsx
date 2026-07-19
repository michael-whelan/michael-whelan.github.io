import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card ${padded ? "p-6" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
