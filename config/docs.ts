import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  sectionsNav: SidebarNavItem[];
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
          title: "Background Grid",
          href: "/docs/components/background-grid",
          items: [],
          label: "New",
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
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Dropdown",
          href: "/docs/components/dropdown",
          items: [],
        },
      ],
    },

    {
      title: "Fancy Components",
      items: [
        {
          title: "Card Hover Effect",
          href: "/docs/components/card-hover-effect",
          label: "New",
          items: [],
        },
        {
          title: "Canvas Cursor",
          href: "/docs/components/canvas-cursor",
          items: [],
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
        },
        {
          title: "Perspective Grid",
          href: "/docs/components/perspective-grid",
          items: [],
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
        },

        {
          title: "Scroll Velocity",
          href: "/docs/components/scroll-velocity",
          items: [],
        },

        {
          title: "Two Way Y Parallax",
          href: "/docs/components/two-way-parallax",
          items: [],
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
  ],

  sectionsNav: [
    {
      title: "Sections Introduction",
      items: [
        {
          title: "Introduction",
          href: "/sections",
          items: [],
        },
        {
          title: "Installation",
          href: "/sections/installation",
          items: [],
        },
      ],
    },

    {
      title: "Page Sections",
      items: [
        {
          title: "Hero",
          href: "/sections/hero",
          items: [],
          label: "new",
        },
        {
          title: "Header",
          href: "/sections/header",
          items: [],
          label: "new",
        },
      ],
    },
  ],
};
