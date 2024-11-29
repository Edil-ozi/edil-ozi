import { Icons } from "@/components/icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import CanvasCursor from "@/registry/components/edil-ozi/canvas-cursor";
import { Star } from "lucide-react";
import Link from "next/link";

async function getRepoStarCount() {
  const res = await fetch("https://api.github.com/repos/Edil-ozi/edil-ozi");
  const data = await res.json();
  const starCount = data.stargazers_count;

  if (starCount > 999) {
    return (starCount / 1000).toFixed(1) + "K";
  }

  return starCount;
}

export default async function Home() {
  const starCount = await getRepoStarCount();

  return (
    <div className="container relative">
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading className="text-balance py-4 text-5xl font-bold leading-none tracking-tighter text-transparent text-zinc-700 dark:text-zinc-200 md:text-6xl">
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
            Star on Github <Star className="w-4 fill-primary text-primary stroke-current h-4 mr-0.5 ml-2" /> {starCount} 
          </Link>
        </PageActions>
      </PageHeader>
      <CanvasCursor />
    </div>
  );
}
