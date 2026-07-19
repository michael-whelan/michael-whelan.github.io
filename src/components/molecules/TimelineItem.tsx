export function TimelineItem({ period, role }: { period: string; role: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
      <div>
        <div className="text-sm font-medium">{period}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </li>
  );
}
