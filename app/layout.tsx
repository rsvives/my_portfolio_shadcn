import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { NavMenu } from "@/components/NavMenu";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSerrán: Fullstack Dev",
  description: "React | NodeJS | Laravel | Nuxt | MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <QueryProvider>
            <div className="min-h-[100dvh] flex flex-col">
              <NavMenu />
              <main className="flex flex-1 items-center justify-center p-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
                {children}
              </main>
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
