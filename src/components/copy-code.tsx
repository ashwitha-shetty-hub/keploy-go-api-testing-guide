"use client";

import { useEffect } from "react";

const copyIcon = `
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <rect width="13" height="13" x="9" y="9" rx="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
`;

const checkIcon = `
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
`;

export function CopyCode() {
  useEffect(() => {
    const figures = document.querySelectorAll(
      "[data-rehype-pretty-code-figure]",
    );

    figures.forEach((figure) => {
      const pre = figure.querySelector("pre");
      const code = pre?.querySelector("code");

      if (!pre || !code || figure.querySelector("[data-code-header]")) {
        return;
      }

      const language =
        pre.getAttribute("data-language") || code.getAttribute("data-language");

      /*
       * Header
       */
      const header = document.createElement("div");

      header.setAttribute("data-code-header", "true");
      header.className =
        "flex h-10 w-full items-center justify-between border-b border-white/10 bg-black/20 px-4";

      const languageLabel = document.createElement("span");

      languageLabel.textContent = language ?? "code";
      languageLabel.className = "font-mono text-xs text-white/60";

      header.appendChild(languageLabel);

      /*
       * Copy button
       */
      const button = document.createElement("button");

      button.type = "button";
      button.setAttribute("data-copy-button", "true");
      button.setAttribute("aria-label", "Copy code");
      button.setAttribute("title", "Copy code");

      button.innerHTML = `${copyIcon}<span>Copy</span>`;

      button.className =
        "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2.5 text-xs font-medium text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

      header.appendChild(button);

      /*
       * Insert header before the scrollable <pre>
       */
      figure.insertBefore(header, pre);

      /*
       * Copy only the actual code.
       */
      button.addEventListener("click", async () => {
        const text = code.textContent ?? "";

        await navigator.clipboard.writeText(text);

        button.innerHTML = `${checkIcon}<span>Copy</span>`;
        button.setAttribute("aria-label", "Code copied");
        button.setAttribute("title", "Code copied");

        window.setTimeout(() => {
          button.innerHTML = `${copyIcon}<span>Copy</span>`;
          button.setAttribute("aria-label", "Copy code");
          button.setAttribute("title", "Copy code");
        }, 1500);
      });
    });

    return () => {
      document
        .querySelectorAll("[data-code-header]")
        .forEach((header) => header.remove());
    };
  }, []);

  return null;
}
