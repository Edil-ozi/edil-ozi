import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    // {
    //   title: "Themes",
    //   href: "/themes",
    // },
    // {
    //   title: "Examples",
    //   href: "/examples",
    // },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Buttons",
          href: "/docs/components/buttons",
          items: [],
        },
      ],
    },
    {
      title: "Clean Components",
      items: [
        {
          title: "Login Form",
          href: "/docs/components/login-form",
          items: [],
          label: "New",
        },
        {
          title: "Magic-card",
          href: "/docs/components/magic-card",
          items: [],
        },
        {
          title: "Pricing Card",
          href: "/docs/components/pricing-card",
          items: [],
          label: "New",
        },
      ],
    },

    {
      title: "On scroll animations",
      items: [
        {
          title: "Zoom parallax",
          href: "/docs/components/zoom-parallax",
          items: [],
        },
        {
          title: "Horizontal scroll",
          href: "/docs/components/horizontal-scroll",
          items: [],
        },
      ],
    },
    {
      title: "Text animations",
      items: [
        {
          title: "Infinite text",
          href: "/docs/components/infinite-text",
          items: [],
        },
        {
          title: "Text reveal",
          href: "/docs/components/text-reveal",
          items: [],
        },
      ],
    },

    // {
    //   title: "React Hooks",
    //   items: [
    //     {
    //       title: "Magic-card",
    //       href: "/docs/components/mag2ic-card",
    //       items: [],
    //     },
    //   ],
    // },
  ],
};
