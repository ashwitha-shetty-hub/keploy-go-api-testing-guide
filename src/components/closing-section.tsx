import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ClosingSection() {
  return (
    <section className="my-20 overflow-hidden rounded-3xl border border-accent/20 bg-accent-soft">
      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative">
          <div className="mb-6 flex items-center gap-2 text-accent">
            <CheckCircle2 size={18} aria-hidden="true" />

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              Quickstart complete
            </span>
          </div>

          <h2 className="m-0 max-w-2xl border-0 pb-0 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            You turned a real API interaction into a repeatable test.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            The request was recorded, the database behavior was captured, the
            generated test was inspected, and the test set was replayed
            successfully.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Real request", "API test", "Database mock", "4 / 4 passing"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background px-3.5 py-2 text-xs font-medium text-foreground shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://keploy.io/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Continue with Keploy
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <span className="text-sm text-muted">
              Or try the workflow on your own API.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}