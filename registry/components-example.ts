import { lazy } from "react";
import { Registry } from "@/registry/schema";

const componentsExample: Registry = {
  //Components (base)
  "buttons-demo": {
    name: "buttons-demo",
    type: "components:example",
    files: ["registry/components/example/buttons-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/buttons-demo")),
  },

  "base-inputs-demo": {
    name: "base-inputs-demo",
    type: "components:example",
    files: ["registry/components/example/base-inputs-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/base-inputs-demo")),
  },

  "checkboxes-demo": {
    name: "checkboxes-demo",
    type: "components:example",
    files: ["registry/components/example/checkboxes-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/checkboxes-demo")),
  },

  "toggle-inputs-demo": {
    name: "toggle-inputs-demo",
    type: "components:example",
    files: ["registry/components/example/toggle-inputs-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/toggle-inputs-demo")),
  },

  //Clean Components
  "accordion-demo": {
    name: "accordion-demo",
    type: "components:example",
    files: ["registry/components/example/accordion-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/accordion-demo")),
  },

  "background-grid-demo": {
    name: "background-grid-demo",
    type: "components:example",
    files: ["registry/components/example/background-grid-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/background-grid-demo")),
  },

  "login-form-demo": {
    name: "login-form-demo",
    type: "components:example",
    files: ["registry/components/example/login-form-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/login-form-demo")),
  },

  "pricing-card-demo": {
    name: "pricing-card-demo",
    type: "components:example",
    files: ["registry/components/example/pricing-card-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/pricing-card-demo")),
  },

  "drawer-demo": {
    name: "drawer-demo",
    type: "components:example",
    files: ["registry/components/example/drawer-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/drawer-demo")),
  },
  "dropdown-demo": {
    name: "dropdown-demo",
    type: "components:example",
    files: ["registry/components/example/dropdown-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/dropdown-demo")),
  },

  "drawer-demo-anchors": {
    name: "drawer-demo-anchors",
    type: "components:example",
    files: ["registry/components/example/drawer-demo-anchors.tsx"],
    component: lazy(() => import("@/registry/components/example/drawer-demo-anchors")),
  },

  "logo-carousel-demo": {
    name: "logo-carousel-demo",
    type: "components:example",
    files: ["registry/components/example/logo-carousel-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/logo-carousel-demo")),
  },

  "tabs-demo": {
    name: "tabs-demo",
    type: "components:example",
    files: ["registry/components/example/tabs-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/tabs-demo")),
  },

  "tabs-demo-controlled": {
    name: "tabs-demo-controlled",
    type: "components:example",
    files: ["registry/components/example/tabs-demo-controlled.tsx"],
    component: lazy(() => import("@/registry/components/example/tabs-demo-controlled")),
  },

  "accordion-demo-single": {
    name: "accordion-demo-single",
    type: "components:example",
    files: ["registry/components/example/accordion-demo-single.tsx"],
    component: lazy(() => import("@/registry/components/example/accordion-demo-single")),
  },

  "accordion-demo-withDisabled": {
    name: "accordion-demo-withDisabled",
    type: "components:example",
    files: ["registry/components/example/accordion-demo-withDisabled.tsx"],
    component: lazy(() => import("@/registry/components/example/accordion-demo-withDisabled")),
  },

  //Fancy
  "card-hover-effect-demo": {
    name: "card-hover-effect-demo",
    type: "components:example",
    files: ["registry/components/example/card-hover-effect-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/card-hover-effect-demo")),
  },
  "canvas-cursor-demo": {
    name: "canvas-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/canvas-cursor-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/canvas-cursor-demo")),
  },
  "fluid-cursor-demo": {
    name: "fluid-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/fluid-cursor-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/fluid-cursor-demo")),
  },
  "ink-cursor-demo": {
    name: "ink-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/ink-cursor-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/ink-cursor-demo")),
  },
  "fancy-click-effect-demo": {
    name: "fancy-click-effect-demo",
    type: "components:example",
    files: ["registry/components/example/fancy-click-effect-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/fancy-click-effect-demo")),
  },

  //Text animations
  "infinite-text-demo": {
    name: "infinite-text-demo",
    type: "components:example",
    files: ["registry/components/example/infinite-text-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/infinite-text-demo")),
  },

  "rotate-between-demo": {
    name: "rotate-between-demo",
    type: "components:example",
    files: ["registry/components/example/rotate-between-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/rotate-between-demo")),
  },

  "text-reveal-demo": {
    name: "text-reveal-demo",
    type: "components:example",
    files: ["registry/components/example/text-reveal-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/text-reveal-demo")),
  },

  "text-glitch-demo": {
    name: "text-glitch-demo",
    type: "components:example",
    files: ["registry/components/example/text-glitch-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/text-glitch-demo")),
  },

  "text-scramble-demo": {
    name: "text-scramble-demo",
    type: "components:example",
    files: ["registry/components/example/text-scramble-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/text-scramble-demo")),
  },

  //On scroll animations
  "swipe-grid-demo": {
    name: "swipe-grid-demo",
    type: "components:example",
    files: ["registry/components/example/swipe-grid-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/swipe-grid-demo")),
  },

  "in-view-demo-1": {
    name: "in-view-demo-1",
    type: "components:example",
    files: ["registry/components/example/in-view-demo-1.tsx"],
    component: lazy(() => import("@/registry/components/example/in-view-demo-1")),
  },

  "in-view-demo-2": {
    name: "in-view-demo-2",
    type: "components:example",
    files: ["registry/components/example/in-view-demo-2.tsx"],
    component: lazy(() => import("@/registry/components/example/in-view-demo-2")),
  },

  "perspective-grid-demo": {
    name: "perspective-grid-demo",
    type: "components:example",
    files: ["registry/components/example/perspective-grid-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/perspective-grid-demo")),
  },

  "zoom-parallax-demo": {
    name: "zoom-parallax-demo",
    type: "components:example",
    files: ["registry/components/example/zoom-parallax-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/zoom-parallax-demo")),
  },

  "horizontal-scroll-demo": {
    name: "horizontal-scroll-demo",
    type: "components:example",
    files: ["registry/components/example/horizontal-scroll-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/horizontal-scroll-demo")),
  },

  "infinite-scroll-demo": {
    name: "infinite-scroll-demo",
    type: "components:example",
    files: ["registry/components/example/infinite-scroll-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/infinite-scroll-demo")),
  },

  "scroll-velocity-demo": {
    name: "scroll-velocity-demo",
    type: "components:example",
    files: ["registry/components/example/scroll-velocity-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/scroll-velocity-demo")),
  },

  "scroll-velocity-noscroll-demo": {
    name: "scroll-velocity-noscroll-demo",
    type: "components:example",
    files: ["registry/components/example/scroll-velocity-noscroll-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/scroll-velocity-noscroll-demo")),
  },

  "two-way-parallax-demo": {
    name: "two-way-parallax-demo",
    type: "components:example",
    files: ["registry/components/example/two-way-parallax-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/two-way-parallax-demo")),
  },
};

export default componentsExample;
