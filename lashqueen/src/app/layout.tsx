// src/app/layout.tsx
import "./app.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="flex items-center gap-4">
  <Link href="/cart" className="relative">
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
      {totalItems}
    </span>
  </Link>
</div>
          </header>
          {children}
          <footer className="bg-gray-100 py-12">
            {/* ... existing footer code ... */}
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}