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
};

const example: Registry = {
  "magic-card-demo": {
    name: "magic-card-demo",
    type: "components:example",
    files: ["registry/components/example/magic-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/magic-card-demo")
    ),
  },
  "magic-card-gradient": {
    name: "magic-card-gradient",
    type: "components:example",
    files: ["registry/components/example/magic-card-gradient.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/magic-card-gradient"),
    ),
  },
  "login-form-demo": {
    name: "login-form-demo",
    type: "components:example",
    files: ["registry/components/example/login-form-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login-form-demo"),
    ),
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
};

export const registry: Registry = {
  ...ui,
  ...example,
};
