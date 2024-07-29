import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Enkhbold Ganbold's Portfolio Page",
  description: "Enkhbold Ganbold's Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source_sans_3.className}>{children}</body>
    </html>
  );
}
