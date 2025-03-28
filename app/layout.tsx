import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <QueryProvider>
          <div className="min-h-screen flex flex-col">
            <NavMenu />
            <main className="flex flex-1 items-center justify-center p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
              {children}
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
