import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mc Mirella | Conteudo Exclusivo",
  description: "Acesse conteudos exclusivos da Mc Mirella. Fotos e videos premium.",
  openGraph: {
    title: "Mc Mirella | Conteudo Exclusivo",
    description: "Acesse conteudos exclusivos da Mc Mirella. Fotos e videos premium.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
