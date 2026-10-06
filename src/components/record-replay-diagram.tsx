import { ArrowDown, Database, Play, Radio, RotateCcw } from "lucide-react";

export function RecordReplayDiagram() {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent">
          <Radio size={16} aria-hidden="true" />
          Record
        </div>

        <ArrowDown size={18} className="text-muted" aria-hidden="true" />

        <div className="flex w-full max-w-md items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-4 text-center">
          <Play size={18} className="text-accent" aria-hidden="true" />

          <div>
            <p className="text-sm font-semibold text-foreground">
              Keploy captures interactions
            </p>
            <p className="mt-1 text-xs leading-5 text-muted">
              Real API traffic and the database interaction behind it
            </p>
          </div>
        </div>

        <ArrowDown size={18} className="text-muted" aria-hidden="true" />

        <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-sm font-semibold text-foreground">API test</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              Recorded HTTP request and response
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-2">
              <Database size={15} className="text-accent" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">DB mock</p>
            </div>

            <p className="mt-1 text-xs leading-5 text-muted">
              Recorded MySQL interaction
            </p>
          </div>
        </div>

        <ArrowDown size={18} className="text-muted" aria-hidden="true" />

        <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground">
          <RotateCcw size={16} aria-hidden="true" />
          Replay
        </div>

        <ArrowDown size={18} className="text-muted" aria-hidden="true" />

        <div className="rounded-lg border border-accent/30 bg-accent-soft px-5 py-2.5 text-sm font-semibold text-accent">
          Pass / Fail
        </div>
      </div>
    </div>
  );
}
