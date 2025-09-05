import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify"
});

export const metadata: Metadata = {
  title: "Tycoon Kingdom - From ashes of ruin, a new kingdom rises",
  description: "Experience the ultimate kingdom building adventure. Build, manage, and grow your realm from ruins to glory in Tycoon Kingdom.",
  keywords: "kingdom, tycoon, game, NFT, blockchain, strategy, building, management",
  icons: {
    icon: [
      { url: '/logo/logo_kingdom.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/logo_kingdom.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo/logo_kingdom.png',
    apple: '/logo/logo_kingdom.png',
  },
  openGraph: {
    title: "Tycoon Kingdom",
    description: "From ashes of ruin, a new kingdom rises",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/logo/logo_kingdom.png',
        width: 1200,
        height: 630,
        alt: 'Tycoon Kingdom Logo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tycoon Kingdom",
    description: "From ashes of ruin, a new kingdom rises",
    images: ['/logo/logo_kingdom.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixelifySans.className}>{children}</body>
    </html>
  );
}
