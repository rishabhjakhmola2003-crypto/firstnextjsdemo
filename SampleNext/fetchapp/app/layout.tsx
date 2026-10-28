import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Learning Next.js routing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
       <header className="site-header">
  <nav className="site-nav">
    <Link href="/" className="site-brand">
      Next Demo
    </Link>

    <div className="site-nav-links">
      <a href="/posts" className="site-nav-link">
        Posts
      </a>
      <a href="/users" className="site-nav-link">
        Users
      </a>
    </div>
  </nav>
</header>
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
