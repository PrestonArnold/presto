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
        <header className="app-header">
          <div className="header-container">
            <h1 className="app-title">Presto</h1>
          </div>
        </header>
        <main id="main" className="app-main">
          {children}
        </main>
        <nav aria-label="Primary navigation" className="app-nav">
          <div className="nav-container">
            {/* TODO: Add bottom nav for mobile */}
          </div>
        </nav>
      </body>
    </html>
  );
}