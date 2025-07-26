import { ThemeProvider } from "next-themes";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John U. Dibashi - Full-Stack Developer",
  description: "TypeScript • Nuxt • STEM Advocate",
  keywords: "TypeScript, Full-Stack, Developer",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://cytro.com.ng",
    title: "John U. Dibashi - Full-Stack Developer",
    description: "TypeScript • Nuxt • STEM Advocate",
    images: [
      {
        url: "https://cytro.com.ng/images/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
