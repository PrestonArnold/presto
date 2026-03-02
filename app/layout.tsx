import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Presto",
  description: "Ad-free music streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <header>
          <h1>Presto</h1>
        </header>

        <main id="main">
          {children}
        </main>

        <nav aria-label="Primary navigation">
          {/* TODO: Add bottom nav for mobile */}
        </nav>
      </body>
    </html>
  );
}
