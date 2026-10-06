import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          Keploy Guide
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-5 text-sm text-muted"
        >
          <a
            href="https://keploy.io/docs"
            target="_blank"
            rel="noreferrer"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            Docs
          </a>

          <a
            href="https://github.com/keploy"
            target="_blank"
            rel="noreferrer"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
