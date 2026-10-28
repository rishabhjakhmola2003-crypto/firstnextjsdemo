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
          <nav aria-label="Main navigation" className="site-nav">
            <Link className="site-brand" href="/">
              Next Demo
            </Link>
            <div className="site-nav-links">
              <Link className="site-nav-link" href="/">
                Home
              </Link>
              <Link className="site-nav-link" href="/home">
                About
              </Link>
              <Link className="site-nav-link" href="/contact">
                Contact
              </Link>
              <Link className="site-nav-link" href="/products">
                Products
              </Link>
              <Link className="site-nav-link" href="/products/electronics">
                Electronics
              </Link>
              <Link className="site-nav-link" href="/users/admin">
                Admin
              </Link>
              <Link className="site-nav-link" href="/users/guest">
                Guest
              </Link>
              <Link className="site-nav-link" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
