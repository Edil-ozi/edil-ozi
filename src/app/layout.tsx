import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "./_providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head />
      {/* remove dark as default */}
      <body className={cn("dark min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange >
          <div className="relative flex min-h-screen flex-col bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
