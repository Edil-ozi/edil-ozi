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
        // {
        //   title: "Aspect Ratio",
        //   href: "/docs/components/aspect-ratio",
        //   items: [],
        // },
        // {
        //   title: "Avatar",
        //   href: "/docs/components/avatar",
        //   items: [],
        // },
        // {
        //   title: "Badge",
        //   href: "/docs/components/badge",
        //   items: [],
        // },
        // {
        //   title: "Breadcrumb",
        //   href: "/docs/components/breadcrumb",
        //   items: [],
        //   label: "New",
        // },
        // {
        //   title: "Button",
        //   href: "/docs/components/button",
        //   items: [],
        // },
        // {
        //   title: "Calendar",
        //   href: "/docs/components/calendar",
        //   items: [],
        // },
        // {
        //   title: "Card",
        //   href: "/docs/components/card",
        //   items: [],
        // },
        // {
        //   title: "Carousel",
        //   href: "/docs/components/carousel",
        //   items: [],
        // },
        // {
        //   title: "Checkbox",
        //   href: "/docs/components/checkbox",
        //   items: [],
        // },
        // {
        //   title: "Collapsible",
        //   href: "/docs/components/collapsible",
        //   items: [],
        // },
        // {
        //   title: "Combobox",
        //   href: "/docs/components/combobox",
        //   items: [],
        // },
        // {
        //   title: "Command",
        //   href: "/docs/components/command",
        //   items: [],
        // },
        // {
        //   title: "Context Menu",
        //   href: "/docs/components/context-menu",
        //   items: [],
        // },
        // {
        //   title: "Data Table",
        //   href: "/docs/components/data-table",
        //   items: [],
        // },
        // {
        //   title: "Date Picker",
        //   href: "/docs/components/date-picker",
        //   items: [],
        // },
        // {
        //   title: "Dialog",
        //   href: "/docs/components/dialog",
        //   items: [],
        // },
        // {
        //   title: "Drawer",
        //   href: "/docs/components/drawer",
        //   items: [],
        // },
        // {
        //   title: "Dropdown Menu",
        //   href: "/docs/components/dropdown-menu",
        //   items: [],
        // },
        // {
        //   title: "Form",
        //   href: "/docs/components/form",
        //   items: [],
        // },
        // {
        //   title: "Hover Card",
        //   href: "/docs/components/hover-card",
        //   items: [],
        // },
        // {
        //   title: "Input",
        //   href: "/docs/components/input",
        //   items: [],
        // },
        // {
        //   title: "Input OTP",
        //   href: "/docs/components/input-otp",
        //   items: [],
        //   label: "New",
        // },
        // {
        //   title: "Label",
        //   href: "/docs/components/label",
        //   items: [],
        // },
        // {
        //   title: "Menubar",
        //   href: "/docs/components/menubar",
        //   items: [],
        // },
        // {
        //   title: "Navigation Menu",
        //   href: "/docs/components/navigation-menu",
        //   items: [],
        // },
        // {
        //   title: "Pagination",
        //   href: "/docs/components/pagination",
        //   items: [],
        // },
        // {
        //   title: "Popover",
        //   href: "/docs/components/popover",
        //   items: [],
        // },
        // {
        //   title: "Progress",
        //   href: "/docs/components/progress",
        //   items: [],
        // },
        // {
        //   title: "Radio Group",
        //   href: "/docs/components/radio-group",
        //   items: [],
        // },
        // {
        //   title: "Resizable",
        //   href: "/docs/components/resizable",
        //   items: [],
        // },
        // {
        //   title: "Scroll Area",
        //   href: "/docs/components/scroll-area",
        //   items: [],
        // },
        // {
        //   title: "Select",
        //   href: "/docs/components/select",
        //   items: [],
        // },
        // {
        //   title: "Separator",
        //   href: "/docs/components/separator",
        //   items: [],
        // },
        // {
        //   title: "Sheet",
        //   href: "/docs/components/sheet",
        //   items: [],
        // },
        // {
        //   title: "Skeleton",
        //   href: "/docs/components/skeleton",
        //   items: [],
        // },
        // {
        //   title: "Slider",
        //   href: "/docs/components/slider",
        //   items: [],
        // },
        // {
        //   title: "Sonner",
        //   href: "/docs/components/sonner",
        //   items: [],
        // },
        // {
        //   title: "Switch",
        //   href: "/docs/components/switch",
        //   items: [],
        // },
        // {
        //   title: "Table",
        //   href: "/docs/components/table",
        //   items: [],
        // },
        // {
        //   title: "Tabs",
        //   href: "/docs/components/tabs",
        //   items: [],
        // },
        // {
        //   title: "Textarea",
        //   href: "/docs/components/textarea",
        //   items: [],
        // },
        // {
        //   title: "Toast",
        //   href: "/docs/components/toast",
        //   items: [],
        // },
        // {
        //   title: "Toggle",
        //   href: "/docs/components/toggle",
        //   items: [],
        // },
        // {
        //   title: "Toggle Group",
        //   href: "/docs/components/toggle-group",
        //   items: [],
        // },
        // {
        //   title: "Tooltip",
        //   href: "/docs/components/tooltip",
        //   items: [],
        // },
      ],
    },
    // {
    //   title: "Animation Components",
    //   items: [
    //     {
    //       title: "Magic-card",
    //       href: "/docs/components/magi2c-card",
    //       items: [],
    //     },
    //   ],
    // },

    // {
    //   title: "Fancy animations",
    //   items: [
    //     {
    //       title: "Zoom parallax",
    //       href: "/docs/components/zoom-parallax",
    //       items: [],
    //     },
    //   ],
    // },

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
