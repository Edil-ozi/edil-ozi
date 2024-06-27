import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "./_providers";
import { cn, constructMetadata } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

import { Toaster } from "@/components/ui/sonner";
import TailwindIndicator from "@/components/ui/tailwind-indicator";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = constructMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  image: siteConfig.ogImage,
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <TailwindIndicator />
          <Toaster
            duration={1500}
            richColors
            visibleToasts={2}
            position="top-center"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
