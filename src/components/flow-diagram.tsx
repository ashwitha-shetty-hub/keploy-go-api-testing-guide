import {
  ArrowDown,
  Check,
  CircleAlert,
  Database,
  Play,
  RotateCcw,
  Search,
  Terminal,
} from "lucide-react";

type FlowStep = {
  title: string;
  description?: string;
};

type FlowDiagramProps = {
  steps: FlowStep[];
};

const icons = [
  Terminal,
  Play,
  RotateCcw,
  Search,
  CircleAlert,
  Database,
  RotateCcw,
  Check,
];

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="border-b border-border px-6 py-5 sm:px-8">
        <p className="text-sm font-semibold text-foreground">
          The workflow
        </p>
        <p className="mt-1 text-sm leading-6 text-muted">
          Follow the request from your running API to a passing replay.
        </p>
      </div>

      <div className="divide-y divide-border">
        {steps.map((step, index) => {
          const Icon = icons[index] ?? Check;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.title}
              className="group flex gap-4 px-6 py-5 transition-colors hover:bg-background sm:px-8"
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft text-accent"
                >
                  <Icon size={17} aria-hidden="true" />
                </div>

                {!isLast && (
                  <ArrowDown
                    size={14}
                    className="mt-2 text-border"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="min-w-0 pt-0.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="m-0 text-sm font-semibold text-foreground">
                    {step.title}
                  </p>
                </div>

                {step.description && (
                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}