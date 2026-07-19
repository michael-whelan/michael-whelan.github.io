import type { LucideIcon } from "lucide-react";

export function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-muted text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-sm font-medium">{label}</div>
        {href ? (
          <a href={href} className="text-sm text-muted-foreground hover:text-foreground">
            {value}
          </a>
        ) : (
          <div className="text-sm text-muted-foreground">{value}</div>
        )}
      </div>
    </li>
  );
}
