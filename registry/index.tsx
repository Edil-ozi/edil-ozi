import { Registry } from "@/registry/schema";
import * as React from "react";

const ui: Registry = {
  "magic-card": {
    name: "magic-card",
    type: "components:ui",
    files: ["registry/components/edil-ozi/magic-card.tsx"],
  },
  "login-form": {
    name: "login-form",
    type: "components:ui",
    files: ["registry/components/edil-ozi/login-form.tsx"],
  },
<<<<<<< HEAD
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
=======
  "pricing-card": {
    name: "pricing-card",
    type: "components:ui",
    files: ["registry/components/edil-ozi/pricing-card.tsx"],
  },
  // "linear-gradient": {
  //   name: "linear-gradient",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/linear-gradient.tsx"],
  // },
  // "radial-gradient": {
  //   name: "radial-gradient",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/radial-gradient.tsx"],
  // },
  // meteors: {
  //   name: "meteors",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/meteors.tsx"],
  // },
  // "grid-pattern": {
  //   name: "grid-pattern",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/grid-pattern.tsx"],
  // },
  // "dot-pattern": {
  //   name: "dot-pattern",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/dot-pattern.tsx"],
  // },
  // marquee: {
  //   name: "marquee",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/marquee.tsx"],
  // },
  // globe: {
  //   name: "globe",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/globe.tsx"],
  // },
  // "shimmer-button": {
  //   name: "shimmer-button",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/shimmer-button.tsx"],
  // },
  // "hero-video": {
  //   name: "hero-video",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/hero-video.tsx"],
  // },
  // "tweet-card": {
  //   name: "tweet-card",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/tweet-card.tsx"],
  // },
  // "client-tweet-card": {
  //   name: "client-tweet-card",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/client-tweet-card.tsx"],
  // },
  // "bento-grid": {
  //   name: "bento-grid",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/bento-grid.tsx"],
  // },
  // particles: {
  //   name: "particles",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/particles.tsx"],
  // },
  // "number-ticker": {
  //   name: "number-ticker",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/number-ticker.tsx"],
  // },
  // ripple: {
  //   name: "ripple",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/ripple.tsx"],
  // },
  // "retro-grid": {
  //   name: "retro-grid",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/retro-grid.tsx"],
  // },
  // "animated-list": {
  //   name: "animated-list",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-list.tsx"],
  // },
  // "animated-lines": {
  //   name: "animated-lines",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-lines.tsx"],
  // },
  // "animated-shiny-text": {
  //   name: "animated-shiny-text",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-shiny-text.tsx"],
  // },
  // "animated-grid-pattern": {
  //   name: "animated-grid-pattern",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-grid-pattern.tsx"],
  // },
  // "border-beam": {
  //   name: "border-beam",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/border-beam.tsx"],
  // },
  // "animated-beam": {
  //   name: "animated-beam",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-beam.tsx"],
  // },
  // "text-reveal": {
  //   name: "text-reveal",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/text-reveal.tsx"],
  // },
  // "animated-gradient-text": {
  //   name: "animated-gradient-text",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/animated-gradient-text.tsx"],
  // },
  // "orbiting-circles": {
  //   name: "orbiting-circles",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/orbiting-circles.tsx"],
  // },
  // dock: {
  //   name: "dock",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/dock.tsx"],
  // },
  // "word-rotate": {
  //   name: "word-rotate",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/word-rotate.tsx"],
  // },
  // "typing-animation": {
  //   name: "typing-animation",
  //   type: "components:ui",
  //   files: ["registry/components/magicui/typing-animation.tsx"],
  // },
>>>>>>> 5489ef6 (pricing-card)
};

const example: Registry = {
  "magic-card-demo": {
    name: "magic-card-demo",
    type: "components:example",
    files: ["registry/components/example/magic-card-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/magic-card-demo")),
  },
  "magic-card-gradient": {
    name: "magic-card-gradient",
    type: "components:example",
    files: ["registry/components/example/magic-card-gradient.tsx"],
    component: React.lazy(() => import("@/registry/components/example/magic-card-gradient")),
  },
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
  "infinite-text-demo": {
    name: "infinite-text-demo",
    type: "components:example",
    files: ["registry/components/example/infinite-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/infinite-text-demo"),
    ),
  },
  "text-reveal-demo": {
    name: "text-reveal-demo",
    type: "components:example",
    files: ["registry/components/example/text-reveal-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/text-reveal-demo"),
    ),
  },
  "zoom-parallax-demo": {
    name: "zoom-parallax-demo",
    type: "components:example",
    files: ["registry/components/example/zoom-parallax-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/zoom-parallax-demo"),
    ),
  },
  "horizontal-scroll-demo": {
    name: "horizontal-scroll-demo",
    type: "components:example",
    files: ["registry/components/example/horizontal-scroll-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/horizontal-scroll-demo"),
    ),
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
};
