import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeTrans - AI-Powered Code Language Converter | Free Online Tool",
  description:
    "Transform code between 30+ programming languages using advanced AI models like DeepSeek, GPT-4, Claude, and Gemini. Free, unlimited, no registration required. Convert JavaScript, Python, Java, C++, Go, Rust and more instantly.",
  keywords: [
    "code converter",
    "programming language converter",
    "AI code translator",
    "JavaScript to Python",
    "code transformation",
    "free code converter",
    "online code converter",
    "DeepSeek Coder",
    "GPT-4 code",
    "Claude code converter",
    "Gemini AI",
    "TypeScript converter",
    "Java converter",
    "C++ converter",
    "Go converter",
    "Rust converter",
    "PHP converter",
    "Ruby converter",
    "Swift converter",
    "Kotlin converter",
    "programming tools",
    "developer tools",
    "code migration",
    "language translation",
    "syntax converter",
  ],
  authors: [{ name: "CodeTrans Team" }],
  creator: "CodeTrans",
  publisher: "CodeTrans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://codetrans.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "CodeTrans - AI-Powered Code Language Converter",
    description:
      "Transform code between 30+ programming languages using advanced AI models. Free, unlimited, no registration required.",
    siteName: "CodeTrans",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeTrans - AI-Powered Code Language Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeTrans - AI-Powered Code Language Converter",
    description:
      "Transform code between 30+ programming languages using advanced AI models. Free, unlimited, no registration required.",
    images: ["/og-image.png"],
    creator: "@codetrans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
    generator: 'v0.dev'
}

const GA4_ID: string = process.env.NEXT_PUBLIC_GA4_ID ?? ""

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CodeTrans" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.deepseek.com" />
        <link rel="preconnect" href="https://api.openai.com" />
        <link rel="preconnect" href="https://api.anthropic.com" />
        <link rel="preconnect" href="https://generativelanguage.googleapis.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CodeTrans",
              description:
                "AI-powered code language converter that transforms code between 30+ programming languages using advanced AI models like DeepSeek, GPT-4, Claude, and Gemini.",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://codetrans.dev",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Convert between 30+ programming languages",
                "AI-powered with DeepSeek, GPT-4, Claude, and Gemini",
                "Automatic source language detection",
                "Free and unlimited usage",
                "No registration required",
                "Dark and light theme support",
              ],
              screenshot: `${process.env.NEXT_PUBLIC_SITE_URL || "https://codetrans.dev"}/screenshot.png`,
              author: {
                "@type": "Organization",
                name: "CodeTrans Team",
              },
              provider: {
                "@type": "Organization",
                name: "CodeTrans",
                url: process.env.NEXT_PUBLIC_SITE_URL || "https://codetrans.dev",
              },
            }),
          }}
        />
      </head>
      <body className={cn("h-screen max-h-screen font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
        <GoogleAnalytics gaId={GA4_ID} />
      </body>
    </html>
  )
}
