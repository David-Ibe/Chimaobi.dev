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
    default: "Chimaobi David Ibe | AI Integration Developer",
    template: "%s | Chimaobi David Ibe",
  },
  description:
    "AI Integration Developer specializing in LLM-powered apps, chatbots, and workflow automation. Building AI systems that work in the real world.",
  openGraph: {
    title: "Chimaobi David Ibe | AI Integration Developer",
    description:
      "AI Integration Developer specializing in LLM-powered apps, chatbots, and workflow automation. Building AI systems that work in the real world.",
    url: "https://chimaobi.dev",
    siteName: "Chimaobi David Ibe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chimaobi David Ibe — AI Integration Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimaobi David Ibe | AI Integration Developer",
    description:
      "AI Integration Developer specializing in LLM-powered apps, chatbots, and workflow automation. Building AI systems that work in the real world.",
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
