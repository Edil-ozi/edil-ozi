import { Icons } from "@/components/icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
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
        <PageHeaderHeading className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40">
          Embrace efficiency in development.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Choose our seamlessly integrated components for a customizable and accessible user experience. Trust in our
          code for a seamless design that matches your brand aesthetic.
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
      </PageHeader>
      <CanvasCursor />
    </div>
  );
}
