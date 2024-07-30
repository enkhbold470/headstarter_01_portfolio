import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Enkhbold Portfolio V2.0 ",
  description: "Enkhbold Ganbold's Portfolio Page V2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source_sans_3.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
