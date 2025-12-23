import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sachiai.com"),
  title: {
    default: "SachiAI - Premium AI Development | 3X Faster, 50% Cheaper",
    template: "%s | SachiAI",
  },
  description:
    "SachiAI delivers premium AI solutions, Flutter apps, and custom software at unbeatable speed and pricing. AI-powered development with expert human oversight. Generative AI, RAG, Agentic AI, and more.",
  keywords: [
    "AI development company",
    "Generative AI solutions",
    "Flutter app development",
    "RAG development",
    "Agentic AI",
    "LLM integration",
    "AI chatbot development",
    "Custom AI solutions",
    "Machine learning services",
    "AI automation",
    "affordable AI development",
    "fast software development",
  ],
  authors: [{ name: "SachiAI" }],
  creator: "SachiAI",
  publisher: "SachiAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sachiai.com",
    siteName: "SachiAI",
    title: "SachiAI - Premium AI Development | 3X Faster, 50% Cheaper",
    description:
      "AI-powered development with expert human oversight. Get premium quality software at unbeatable speed and pricing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SachiAI - AI Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SachiAI - Premium AI Development",
    description:
      "3X Faster. 50% Cheaper. Zero Compromise on Quality. AI-powered development with expert human oversight.",
    images: ["/og-image.png"],
    creator: "@sachiai",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://sachiai.com" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#030712" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SachiAI",
              url: "https://sachiai.com",
              logo: "https://sachiai.com/images/logo.png",
              description:
                "Premium AI development company delivering solutions 3X faster at 50% lower cost with expert quality assurance.",
              sameAs: [
                "https://twitter.com/sachiai",
                "https://linkedin.com/company/sachiai",
                "https://github.com/sachiai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@sachiai.com",
                contactType: "customer service",
              },
              offers: {
                "@type": "AggregateOffer",
                offerCount: "8",
                itemOffered: [
                  "Generative AI Solutions",
                  "Agentic AI Development",
                  "RAG Systems",
                  "AI Chatbots",
                  "Flutter App Development",
                  "Computer Vision",
                  "NLP Services",
                  "AI Automation",
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#030712] text-white`}
      >
        <div className="relative min-h-screen">
          <div className="fixed inset-0 bg-grid pointer-events-none opacity-50" />
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
