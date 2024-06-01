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
        // {
        //   title: "Community?",
        //   href: "https://github.com",
        //   external: true,
        //   items: [],
        // },
        // {
        //   title: "Installation",
        //   href: "/docs/installation",
        //   items: [],
        // },
        // {
        //   title: "components.json",
        //   href: "/docs/components-json",
        //   items: [],
        // },
        // {
        //   title: "Theming",
        //   href: "/docs/theming",
        //   items: [],
        // },
        // {
        //   title: "Dark mode",
        //   href: "/docs/dark-mode",
        //   items: [],
        // },
        // {
        //   title: "CLI",
        //   href: "/docs/cli",
        //   items: [],
        // },
        // {
        //   title: "Typography",
        //   href: "/docs/components/typography",
        //   items: [],
        // },
        // {
        //   title: "Figma",
        //   href: "/docs/figma",
        //   items: [],
        // },
        // {
        //   title: "Changelog",
        //   href: "/docs/changelog",
        //   items: [],
        // },
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
        // {
        //   title: "Magic-card",
        //   href: "/docs/components/magic-card",
        //   items: [],
        //   label: "New",
        // },
        {
          title: "Magic-card",
          href: "/docs/components/magic-card",
          items: [],
        },
      ],
    },
    {
      title: "Animation Components",
      items: [
        {
          title: "Magic-card",
          href: "/docs/components/magi2c-card",
          items: [],
        },
      ],
    },

    // {
    //   title: "Fancy animations",
    //   items: [
    //     {
    //       title: "Magic-card",
    //       href: "/docs/components/magi2c-card",
    //       items: [],
    //     },
    //   ],
    // },

    {
      title: "Text animations",
      items: [
        {
          title: "Infinite text",
          href: "/docs/components/infinite-text",
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
