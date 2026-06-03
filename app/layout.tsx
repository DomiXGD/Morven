/* eslint-disable @next/next/google-font-display, @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "MORVEN | High-Performance Enterprise Solutions",
  description:
    "MORVEN desarrolla soluciones tecnologicas modernas y escalables para empresas: SaaS, automatizacion, sistemas empresariales y arquitectura digital.",
  keywords: [
    "MORVEN",
    "soluciones TI",
    "SaaS",
    "desarrollo web",
    "automatizacion",
    "sistemas empresariales",
    "arquitectura tecnologica"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700" />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
