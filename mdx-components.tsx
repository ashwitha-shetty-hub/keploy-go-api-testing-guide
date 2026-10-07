import type { MDXComponents } from "mdx/types";
import { Hero } from "@/components/hero";
import { Badge } from "@/components/badge";
import { Callout } from "@/components/callout";
import { CopyCode } from "@/components/copy-code";
import { FlowDiagram } from "@/components/flow-diagram";
import { RecordReplayDiagram } from "@/components/record-replay-diagram";
import { Screenshot } from "@/components/screenshot";
import { Step, Steps } from "@/components/steps";
import { Tabs } from "@/components/tabs";
import { ClosingSection } from "@/components/closing-section";
import { MobileTableOfContents } from "@/components/mobile-table-of-contents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Hero,
    Badge,
    Callout,
    CopyCode,
    FlowDiagram,
    RecordReplayDiagram,
    Screenshot,
    Step,
    Steps,
    Tabs,
    ClosingSection,
    MobileTableOfContents,

    h1: ({ children, ...props }) => (
      <h1
        {...props}
        className="mt-6 scroll-mt-24 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]"
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => {
      const id =
        typeof children === "string"
          ? children
              .toLowerCase()
              .trim()
              .replace(/[?]/g, "")
              .replace(/[^a-z0-9\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-")
          : undefined;

      return (
        <h2
          {...props}
          id={id}
          className="mt-16 scroll-mt-24 border-b border-border pb-3 text-2xl font-semibold tracking-tight text-foreground"
        >
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
      >
        {children}
      </h3>
    ),

    p: ({ children, ...props }) => (
      <p {...props} className="mt-5 max-w-3xl text-lg leading-8 text-muted">
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => (
      <ul
        {...props}
        className="my-6 ml-6 list-disc space-y-2 text-[16px] leading-7 text-muted"
      >
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol
        {...props}
        className="my-6 ml-6 list-decimal space-y-2 text-[16px] leading-7 text-muted"
      >
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li {...props} className="pl-1">
        {children}
      </li>
    ),

    a: ({ children, ...props }) => (
      <a
        {...props}
        className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
      >
        {children}
      </a>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        {...props}
        className="my-8 border-l-2 border-accent pl-5 text-muted"
      >
        {children}
      </blockquote>
    ),

    hr: (props) => <hr {...props} className="my-12 border-border" />,
  };
}
