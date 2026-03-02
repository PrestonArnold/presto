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
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <header style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: 'var(--space-md)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-md)' }}>
            <h1 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', textAlign: 'center' }}>Presto</h1>
          </div>
        </header>

        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>

        <nav aria-label="Primary navigation" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'var(--space-md)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-md)' }}>
            {/* TODO: Add bottom nav for mobile */}
          </div>
        </nav>
      </body>
    </html>
  );
}
