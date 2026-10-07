"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

function createSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[?]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>("h2"));

    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const label = heading.textContent?.trim() ?? "";

      if (!label || label === "Test a Go API with Keploy") {
        return;
      }

      const id = createSlug(label);

      heading.id = id;

      tocItems.push({
        id,
        label,
      });
    });

    const frame = window.requestAnimationFrame(() => {
      setItems(tocItems);

      if (tocItems.length > 0) {
        setActiveId(tocItems[0].id);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -70% 0px",
        threshold: 0,
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const navbarOffset = 96;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);

    setActiveId(id);

    // Close TOC on mobile after selecting a section
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================
          MOBILE TOC
          ========================= */}
      <div className="mb-6 block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc"
          className="flex w-full items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
        >
          <span className="flex items-center gap-2">
            <span className="text-base">☰</span>
            <span>On this page</span>
          </span>

          <span
            className={`text-lg transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
           ⌄
          </span>
        </button>

        {isOpen && (
          <nav
            id="mobile-toc"
            aria-label="Table of contents"
            className="mt-2 rounded-lg border border-border bg-background p-3 shadow-sm"
          >
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) =>
                        handleNavigation(event, item.id)
                      }
                      className={`block rounded-md px-3 py-2 text-sm leading-5 transition-colors ${
                        isActive
                          ? "bg-accent/10 font-medium text-accent"
                          : "text-muted hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* =========================
          DESKTOP TOC
          ========================= */}
      <aside className="sticky top-24 hidden h-fit w-56 shrink-0 lg:block">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          On this page
        </p>

        <nav aria-label="Table of contents">
          <ul className="space-y-1 border-l border-border">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) =>
                      handleNavigation(event, item.id)
                    }
                    className={`-ml-px block border-l-2 px-4 py-1.5 text-sm leading-6 transition-colors ${
                      isActive
                        ? "border-accent font-medium text-accent"
                        : "border-transparent text-muted hover:border-border hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}