import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tycoon Kingdom - From ashes of ruin, a new kingdom rises",
  description: "Experience the ultimate kingdom building adventure. Build, manage, and grow your realm from ruins to glory in Tycoon Kingdom.",
  keywords: "kingdom, tycoon, game, NFT, blockchain, strategy, building, management",
  openGraph: {
    title: "Tycoon Kingdom",
    description: "From ashes of ruin, a new kingdom rises",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tycoon Kingdom",
    description: "From ashes of ruin, a new kingdom rises",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
