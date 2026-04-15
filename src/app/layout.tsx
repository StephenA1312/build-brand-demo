import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bbManualMono = IBM_Plex_Mono({
  variable: "--font-bb-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Build & Brand Media — Revenue-Driving Content Systems for High-Level Entrepreneurs",
  description: "We handle the strategy, high-end filming, premium editing, and targeted lead generation ads so you can focus on running your business and closing high-ticket clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased light ${bbManualMono.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a0a0a'/><text y='.9em' font-size='80' x='10'>b</text></svg>" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com/" />
        <link rel="preconnect" href="https://www.google.com/" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}