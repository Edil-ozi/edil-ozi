import { Registry } from "@/registry/schema";
import * as React from "react";

const ui: Registry = {
  //Components (base)
  buttons: {
    name: "buttons",
    type: "components:ui",
    files: ["registry/components/edil-ozi/buttons.tsx"],
  },
  "base-inputs": {
    name: "base-inputs",
    type: "components:ui",
    files: ["registry/components/edil-ozi/base-inputs.tsx"],
  },
  checkboxes: {
    name: "checkboxes",
    type: "components:ui",
    files: ["registry/components/edil-ozi/checkboxes.tsx"],
  },
  "toggle-inputs": {
    name: "toggle-inputs",
    type: "components:ui",
    files: ["registry/components/edil-ozi/toggle-inputs.tsx"],
  },

  //Clean Components
  accordion: {
    name: "accordion",
    type: "components:ui",
    files: ["registry/components/edil-ozi/accordion.tsx"],
  },
  "login-form": {
    name: "login-form",
    type: "components:ui",
    files: ["registry/components/edil-ozi/login-form.tsx"],
  },
  "pricing-card": {
    name: "pricing-card",
    type: "components:ui",
    files: ["registry/components/edil-ozi/pricing-card.tsx"],
  },
  drawer: {
    name: "drawer",
    type: "components:ui",
    files: ["registry/components/edil-ozi/drawer.tsx"],
  },
  "logo-carousel": {
    name: "logo-carousel",
    type: "components:ui",
    files: ["registry/components/edil-ozi/logo-carousel.tsx"],
  },
  //Fancy
  "canvas-cursor": {
    name: "canvas-cursor",
    type: "components:ui",
    files: ["registry/components/edil-ozi/canvas-cursor.tsx"],
  },

  //Text animations
  "infinite-text": {
    name: "infinite-text",
    type: "components:ui",
    files: ["registry/components/edil-ozi/infinite-text.tsx"],
  },
  "text-reveal": {
    name: "text-reveal",
    type: "components:ui",
    files: ["registry/components/edil-ozi/text-reveal.tsx"],
  },

  //On scroll animations
  "swipe-grid": {
    name: "swipe-grid",
    type: "components:ui",
    files: ["registry/components/edil-ozi/swipe-grid.tsx"],
  },
  "perspective-grid": {
    name: "perspective-grid",
    type: "components:ui",
    files: ["registry/components/edil-ozi/perspective-grid.tsx"],
  },
  "zoom-parallax": {
    name: "zoom-parallax",
    type: "components:ui",
    files: ["registry/components/edil-ozi/zoom-parallax.tsx"],
  },
  "horizontal-scroll": {
    name: "horizontal-scroll",
    type: "components:ui",
    files: ["registry/components/edil-ozi/horizontal-scroll.tsx"],
  },
  "two-way-parallax": {
    name: "two-way-parallax",
    type: "components:ui",
    files: ["registry/components/edil-ozi/two-way-parallax.tsx"],
  },
};

const example: Registry = {
  //Components (base)
  "buttons-demo": {
    name: "buttons-demo",
    type: "components:example",
    files: ["registry/components/example/buttons-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/buttons-demo")),
  },
  "base-inputs-demo": {
    name: "base-inputs-demo",
    type: "components:example",
    files: ["registry/components/example/base-inputs-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/base-inputs-demo")),
  },
  "checkboxes-demo": {
    name: "checkboxes-demo",
    type: "components:example",
    files: ["registry/components/example/checkboxes-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/checkboxes-demo")),
  },
  "toggle-inputs-demo": {
    name: "toggle-inputs-demo",
    type: "components:example",
    files: ["registry/components/example/toggle-inputs-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/toggle-inputs-demo")),
  },
  
  //Clean Components
  "login-form-demo": {
    name: "login-form-demo",
    type: "components:example",
    files: ["registry/components/example/login-form-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/login-form-demo")),
  },
  "pricing-card-demo": {
    name: "pricing-card-demo",
    type: "components:example",
    files: ["registry/components/example/pricing-card-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/pricing-card-demo")),
  },
  "drawer-demo": {
    name: "drawer-demo",
    type: "components:example",
    files: ["registry/components/example/drawer-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/drawer-demo")),
  },
  "drawer-demo-anchors": {
    name: "drawer-demo-anchors",
    type: "components:example",
    files: ["registry/components/example/drawer-demo-anchors.tsx"],
    component: React.lazy(() => import("@/registry/components/example/drawer-demo-anchors")),
  },
  "logo-carousel-demo": {
    name: "logo-carousel-demo",
    type: "components:example",
    files: ["registry/components/example/logo-carousel-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/logo-carousel-demo")),
  },
  "accordion-demo": {
    name: "accordion-demo",
    type: "components:example",
    files: ["registry/components/example/accordion-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/accordion-demo")),
  },
  "accordion-demo-single": {
    name: "accordion-demo-single",
    type: "components:example",
    files: ["registry/components/example/accordion-demo-single.tsx"],
    component: React.lazy(() => import("@/registry/components/example/accordion-demo-single")),
  },
  "accordion-demo-withDisabled": {
    name: "accordion-demo-withDisabled",
    type: "components:example",
    files: ["registry/components/example/accordion-demo-withDisabled.tsx"],
    component: React.lazy(() => import("@/registry/components/example/accordion-demo-withDisabled")),
  },

  //Fance 
  "canvas-cursor-demo": {
    name: "canvas-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/canvas-cursor-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/canvas-cursor-demo")),
  },

  //Text animations
  "infinite-text-demo": {
    name: "infinite-text-demo",
    type: "components:example",
    files: ["registry/components/example/infinite-text-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/infinite-text-demo")),
  },
  "text-reveal-demo": {
    name: "text-reveal-demo",
    type: "components:example",
    files: ["registry/components/example/text-reveal-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/text-reveal-demo")),
  },

  //On scroll animations
  "swipe-grid-demo": {
    name: "swipe-grid-demo",
    type: "components:example",
    files: ["registry/components/example/swipe-grid-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/swipe-grid-demo")),
  },
  "perspective-grid-demo": {
    name: "perspective-grid-demo",
    type: "components:example",
    files: ["registry/components/example/perspective-grid-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/perspective-grid-demo")),
  },
  "zoom-parallax-demo": {
    name: "zoom-parallax-demo",
    type: "components:example",
    files: ["registry/components/example/zoom-parallax-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/zoom-parallax-demo")),
  },
  "horizontal-scroll-demo": {
    name: "horizontal-scroll-demo",
    type: "components:example",
    files: ["registry/components/example/horizontal-scroll-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/horizontal-scroll-demo")),
  },
  "two-way-parallax-demo": {
    name: "two-way-parallax-demo",
    type: "components:example",
    files: ["registry/components/example/two-way-parallax-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/two-way-parallax-demo")),
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
};
