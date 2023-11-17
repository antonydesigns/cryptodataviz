import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Crypto Data Visualizations | by Ant",
  description: "Data-driven crypto investment strategies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f8ec] min-h-[100vh]">
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
              DCA Simulator
            </Link>
            <Link
              href="/animate"
              className="underline hover:text-sky-800 font-semibold"
            >
              Animate
            </Link>
          </nav>
        </div>

        <div className="mx-6 my-6 lg:mx-auto max-w-[1000px] ">{children}</div>
      </body>
    </html>
  );
}
