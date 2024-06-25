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
        {
          title: "Installation",
          href: "/docs/installation",
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
        {
          title: "Base Inputs",
          href: "/docs/components/base-inputs",
          items: [],
        },
        {
          title: "Checkboxes",
          href: "/docs/components/checkboxes",
          items: [],
        },
        {
          title: "Toggle Inputs",
          href: "/docs/components/toggle-inputs",
          items: [],
        },
      ],
    },
    {
      title: "Clean Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Drawer",
          href: "/docs/components/drawer",
          items: [],
        },
        {
          title: "Login Form",
          href: "/docs/components/login-form",
          items: [],
        },
        {
          title: "Pricing Card",
          href: "/docs/components/pricing-card",
          items: [],
        },
        {
          title: "Logo Carousel",
          href: "/docs/components/logo-carousel",
          items: [],
          disabled: true,
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
      ],
    },

    {
      title: "Fancy Components",
      items: [
        {
          title: "Canvas Cursor",
          href: "/docs/components/canvas-cursor",
          items: [],
          label: "New",
        },
      ],
    },

    {
      title: "On Scroll Animations",
      items: [
        {
          title: "Swipe Grid",
          href: "/docs/components/swipe-grid",
          items: [],
          label: "New",
        },
        {
          title: "Perspective Grid",
          href: "/docs/components/perspective-grid",
          items: [],
          label: "New",
        },

        {
          title: "Horizontal Scroll",
          href: "/docs/components/horizontal-scroll",
          items: [],
        },

        {
          title: "Infinite Scroll",
          href: "/docs/components/infinite-scroll",
          items: [],
          label: "New",
        },

        {
          title: "Scroll Velocity Parallax",
          href: "/docs/components/scroll-velocity-parallax",
          items: [],
          label: "New",
        },

        {
          title: "Two Way Y Parallax",
          href: "/docs/components/two-way-parallax",
          items: [],
          label: "New",
        },

        {
          title: "Zoom Parallax",
          href: "/docs/components/zoom-parallax",
          items: [],
        },
      ],
    },

    {
      title: "Text Animations",
      items: [
        {
          title: "Infinite Text",
          href: "/docs/components/infinite-text",
          items: [],
        },
        {
          title: "Rotate Between Words",
          href: "/docs/components/rotate-between",
          items: [],
        },
        {
          title: "Text Reveal",
          href: "/docs/components/text-reveal",
          items: [],
        },
      ],
    },

    // {
    //   title: "React Hooks",
    //   items: [
    //     {
    //       title: "Some usefull hook",
    //       href: "/docs/components/mag2ic-card",
    //       items: [],
    //     },
    //   ],
    // },
  ],
};
