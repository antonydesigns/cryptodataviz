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
      <body className="bg-gray-400">
        <div className="header flex flex-col justify-center items-center py-4 border-b border-gray-500">
          <Link href={"/"} className="logo font-bold text-3xl">
            Crypto Data Visualizations
          </Link>
          <nav className="flex gap-3 py-4 text-lg">
            <Link
              href="/"
              className="underline hover:text-sky-800 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/dollar-cost-averaging"
              className="underline hover:text-sky-800 font-semibold"
            >
              DCA
            </Link>
          </nav>
        </div>

        <div className="mx-6 my-6 lg:mx-auto max-w-[1000px]">{children}</div>
      </body>
    </html>
  );
}
