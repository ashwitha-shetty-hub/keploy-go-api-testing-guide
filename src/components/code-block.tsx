import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  language?: string;
  filename?: string;
};

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return (
    <div className="my-7 overflow-hidden rounded-xl border border-border bg-[#0b0b0c] shadow-sm">
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs">
          <span className="font-mono text-zinc-400">{filename ?? "code"}</span>

          {language && (
            <span className="font-mono uppercase tracking-wide text-zinc-500">
              {language}
            </span>
          )}
        </div>
      )}

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-100">
        {children}
      </pre>
    </div>
  );
}
