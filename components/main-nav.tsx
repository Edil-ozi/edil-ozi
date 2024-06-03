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
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
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
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Components
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
