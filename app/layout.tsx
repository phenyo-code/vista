// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser in Browser",
  description: "A web browser built within a web browser",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col p-4">{children}</div>
      </body>
    </html>
  );
}