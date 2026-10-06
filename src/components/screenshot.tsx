"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption: string;
};

export function Screenshot({
  src,
  alt,
  caption,
}: ScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <figure className="my-10">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Enlarge screenshot: ${alt}`}
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 720px"
          />

          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white opacity-0 shadow-sm backdrop-blur transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Maximize2 size={16} />
          </span>
        </button>

        <figcaption className="mt-3 text-center text-sm leading-6 text-muted">
          {caption}
        </figcaption>
      </figure>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close enlarged screenshot"
            title="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:top-6"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <div className="relative max-h-[92vh] max-w-[95vw]">
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={900}
              className="max-h-[92vh] w-auto max-w-[95vw] rounded-lg object-contain shadow-2xl"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}