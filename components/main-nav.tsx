"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Badge } from "./ui/badge";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
        <Badge variant="secondary">Beta</Badge>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Components
        </Link>
        <Link
          href="/sections"
          className={cn(
            "relative transition-colors hover:text-foreground/80",
            pathname?.startsWith("/sections") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <p className="absolute right-[-25px] top-[-8px] rotate-[25deg] rounded-lg bg-zinc-700 px-1.5 py-0.5 text-[10px] font-medium leading-[1] text-primary-foreground dark:bg-zinc-300">
            Demo
          </p>
          Sections
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn("hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block")}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
