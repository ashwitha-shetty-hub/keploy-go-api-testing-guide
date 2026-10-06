import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="mb-6 flex w-fit items-center rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
