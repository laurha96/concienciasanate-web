import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/app/providers";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.concienciasanate.org"
);

const inter = Inter({
  variable: "--font-brand-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-brand-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: "Conciencia Sánate",
  description: "Bienestar emocional con calma, claridad y contención.",
  icons: {
    icon: [{ url: "/icons/icon.png" }],
    apple: [{ url: "/icons/apple-icon.png" }],
  },
  openGraph: {
    title: "Conciencia Sánate",
    description: "Bienestar emocional con calma, claridad y contención.",
    images: [{ url: "/social/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciencia Sánate",
    description: "Bienestar emocional con calma, claridad y contención.",
    images: ["/social/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} min-h-screen antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
