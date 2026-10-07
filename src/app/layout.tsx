import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CopyCode } from "@/components/copy-code";
import { ReadingProgress } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { BackToTop } from "@/components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Your Go API with Keploy",
  description:
    "A beginner-friendly guide to recording real Go API interactions, capturing database behavior, and replaying them as automated tests with Keploy.",
  keywords: [
    "Keploy",
    "Go",
    "API testing",
    "API test automation",
    "Go API testing",
    "MySQL",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Test Your Go API with Keploy",
    description:
      "Record real API interactions, capture database behavior, and replay them as automated tests with Keploy.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Your Go API with Keploy",
    description:
      "A beginner-friendly guide to recording and replaying API tests with Keploy and Go.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <ReadingProgress />
          <CopyCode />
          <Navbar />
          <BackToTop />

          <main className="flex-1">
            <div className="mx-auto flex w-full max-w-6xl gap-12 px-5 pt-16 sm:px-6">
              
              {/* Main documentation content */}
              <div className="w-full min-w-0 xl:flex-1">
                {children}
              </div>

              {/* Desktop-only table of contents */}
              <div className="hidden xl:block">
                <TableOfContents />
              </div>

            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}