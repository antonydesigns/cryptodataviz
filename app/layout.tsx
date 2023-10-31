import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Data Visualization | by Ant",
  description: "Data-driven crypto investment strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/dollar-cost-averaging">DCA</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
