import { Doc, Sections } from "contentlayer/generated";
import { buttonVariants } from "@/components/ui/button";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { NavItem, NavItemWithChildren } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface DocsPagerProps {
  doc: Doc | Sections;
  isSections?: boolean;
}

export function DocPager({ doc, isSections = false }: DocsPagerProps) {
  const pager = getPagerForDoc(doc, isSections);

  if (!pager) {
    return null;
  }

  return (
    <div className="z-20 flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc | Sections, isSections: boolean) {
  const flattenedLinks = [null, ...flatten(isSections ? docsConfig.sectionsNav : docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex((link) => doc.slug === link?.href);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
