import type { ReactNode } from "react";

type StepProps = {
  number: number;
  title: string;
  children: ReactNode;
};

type StepsProps = {
  children: ReactNode;
};

export function Steps({ children }: StepsProps) {
  return <div className="my-10 space-y-10">{children}</div>;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <section className="relative pl-12">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-sm font-semibold text-accent">
        {number}
      </div>

      <div>
        <h3 className="mt-0 text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
