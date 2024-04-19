import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DO_S's Portfolio",
  description: "DO_S's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-IBM3270">{children}</body>
    </html>
  );
}
