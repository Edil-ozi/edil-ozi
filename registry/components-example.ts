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

  "accordion-demo": {
    name: "accordion-demo",
    type: "components:example",
    files: ["registry/components/example/accordion-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/accordion-demo")),
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
  "canvas-cursor-demo": {
    name: "canvas-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/canvas-cursor-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/canvas-cursor-demo")),
  },

  //Text animations
  "infinite-text-demo": {
    name: "infinite-text-demo",
    type: "components:example",
    files: ["registry/components/example/infinite-text-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/infinite-text-demo")),
  },

  "text-reveal-demo": {
    name: "text-reveal-demo",
    type: "components:example",
    files: ["registry/components/example/text-reveal-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/text-reveal-demo")),
  },

  "rotate-between-demo": {
    name: "rotate-between-demo",
    type: "components:example",
    files: ["registry/components/example/rotate-between-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/rotate-between-demo")),
  },

  //On scroll animations
  "swipe-grid-demo": {
    name: "swipe-grid-demo",
    type: "components:example",
    files: ["registry/components/example/swipe-grid-demo.tsx"],
    component: lazy(() => import("@/registry/components/example/swipe-grid-demo")),
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
