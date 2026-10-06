import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  title?: string;
};

export function Callout({ children, title }: CalloutProps) {
  return (
    <aside className="my-8 rounded-xl border border-accent/30 bg-accent-soft p-5">
      {title && (
        <p className="mb-2 text-sm font-semibold text-accent">{title}</p>
      )}

      <div className="text-sm leading-7 text-foreground [&>p]:m-0">
        {children}
      </div>
    </aside>
  );
}
