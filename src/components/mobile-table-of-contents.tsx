"use client";

import { ChevronDown } from "lucide-react";
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

export function MobileTableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("h2"),
    );

    const tocItems = headings
      .map((heading) => {
        const label = heading.textContent?.trim() ?? "";

        if (!label || label === "Test a Go API with Keploy") {
          return null;
        }

        const id = heading.id || createSlug(label);

        if (!heading.id) {
          heading.id = id;
        }

        return {
          id,
          label,
        };
      })
      .filter((item): item is TocItem => item !== null);

    setItems(tocItems);
  }, []);

  const handleNavigation = (id: string) => {
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

    setIsOpen(false);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mb-10 xl:hidden">
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-table-of-contents"
          className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
        >
          <span>On this page</span>

          <ChevronDown
            size={17}
            aria-hidden="true"
            className={`shrink-0 text-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <nav
            id="mobile-table-of-contents"
            aria-label="Table of contents"
            className="border-t border-border"
          >
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className="block w-full px-4 py-3 text-left text-sm leading-6 text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}