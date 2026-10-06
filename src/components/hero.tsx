import { ArrowRight, Database, Play, Radio } from "lucide-react";

const workflow = [
  {
    icon: Radio,
    label: "Record",
    description: "Capture real API traffic",
  },
  {
    icon: Database,
    label: "Mock",
    description: "Capture database behavior",
  },
  {
    icon: Play,
    label: "Replay",
    description: "Run the test again",
  },
];

export function Hero() {
  return (
    <section className="relative isolate mb-20 overflow-hidden rounded-3xl border border-orange-200/70 bg-gradient-to-br from-orange-50 via-background to-amber-50 px-6 py-10 shadow-sm sm:px-10 sm:py-14 dark:border-orange-900/40 dark:from-orange-950/40 dark:via-background dark:to-amber-950/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl"
      />

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/70 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/50 dark:text-orange-300">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-orange-500"
          />
          GO + MYSQL · KEPLOY
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Test a Go API with Keploy.
          <span className="mt-2 block text-accent">
            Turn real traffic into tests.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Record real API traffic, capture the database interaction, and
          replay the generated tests against a Go URL shortener.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#what-youll-build"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start the tutorial
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="https://github.com/keploy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View on GitHub ↗
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {workflow.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group rounded-xl border border-border/80 bg-background/70 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-sm dark:hover:border-orange-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={17} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}