import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const base =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${base} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${base} ${props.className ?? ""}`} />;
}
