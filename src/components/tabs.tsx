"use client";

import { useState, type ReactNode } from "react";

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
      <div
        role="tablist"
        aria-label="Platform options"
        className="flex gap-1 overflow-x-auto border-b border-border bg-slate-100/70 px-2 pt-2 dark:bg-zinc-900/70"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`platform-panel-${index}`}
              onClick={() => setActiveTab(index)}
              className={`relative shrink-0 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${
                isActive
                  ? "bg-slate-200 text-foreground dark:bg-zinc-800"
                  : "text-muted hover:bg-slate-200/70 hover:text-foreground dark:hover:bg-zinc-800/70"
              }`}
            >
              {tab.label}

              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`platform-panel-${activeTab}`}
        role="tabpanel"
        className="min-h-32 bg-background p-6 sm:p-7"
      >
        <div className="max-w-2xl text-[15px] leading-7 text-muted">
          {tabs[activeTab]?.content}
        </div>
      </div>
    </div>
  );
}
