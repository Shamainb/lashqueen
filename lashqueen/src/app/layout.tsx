// src/app/layout.tsx
import "./app.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              LashQueen
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="hover:text-pink-600 transition">
                Home
              </Link>
              <Link href="/products" className="hover:text-pink-600 transition">
                Shop
              </Link>
              <Link href="/about" className="hover:text-pink-600 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-pink-600 transition">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} LashQueen. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}