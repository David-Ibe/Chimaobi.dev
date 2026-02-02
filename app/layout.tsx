import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chimaobi.dev"),
  title: {
    default: "Chimaobi David Ibe | Software Engineer • Full‑stack Developer",
    template: "%s | Chimaobi David Ibe",
  },
  description:
    "Software Engineer and Full‑stack Developer. Scalable APIs, Python (FastAPI/Flask), Node.js, Docker, Kubernetes, ML inference. Lagos, Nigeria.",
  openGraph: {
    title: "Chimaobi David Ibe | Software Engineer • Full‑stack Developer",
    description:
      "Software Engineer and Full‑stack Developer. Scalable APIs, Python (FastAPI/Flask), Node.js, Docker, Kubernetes. Lagos, Nigeria.",
    url: "https://chimaobi.dev",
    siteName: "Chimaobi David Ibe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chimaobi David Ibe — Software Engineer • Full‑stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimaobi David Ibe | Software Engineer • Full‑stack Developer",
    description:
      "Software Engineer and Full‑stack Developer. Scalable APIs, Python, Node.js, Docker, Kubernetes. Lagos, Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://chimaobi.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
