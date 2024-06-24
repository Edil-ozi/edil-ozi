import { Icons } from "@/components/icons";
import PageDemos from "@/components/page-demos";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import TechStack from "@/components/tech-stack";
import { buttonVariants } from "@/components/ui/button";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import CanvasCursor from "@/registry/components/edil-ozi/canvas-cursor";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-4 text-5xl font-bold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 md:text-6xl">
          Component Library for Developers.
        </PageHeaderHeading>
        <PageHeaderDescription className="text-xl">
          Choose our seamlessly integrated components for a customizable and accessible user experience. Embrace
          efficiency in development.
        </PageHeaderDescription>
        <PageActions>
          <Link
            href="/docs"
            className={cn(buttonVariants())}
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Star on Github
          </Link>
        </PageActions>
        <div className="relative mx-auto flex w-full max-w-[16rem] items-center justify-center">
          <TechStack
            className="mx-auto flex w-full items-center justify-between"
            technologies={[
              "nextjs",
              "react",
              "typescript",
              "tailwindcss",
              "framermotion",
              // "shadcn",
            ]}
          />
        </div>
      </PageHeader>
      {/* <PageDemos /> */}
      <CanvasCursor />
    </div>
  );
}
