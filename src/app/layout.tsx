import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uvindu | Computer Science Undergraduate",
  description:
    "Portfolio of Uvindu, a Computer Science undergraduate and software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}