import { lazy } from "react";

import { Registry } from "@/registry/schema";

const sectionsUi: Registry = {
  //header
  "header-1": {
    name: "header-1",
    type: "components:component",
    files: ["registry/sections/header/header-1.tsx"],
    component: lazy(() => import("@/registry/sections/header/header-1")),
  },

  //hero
  "hero-1": {
    name: "hero-1",
    type: "components:component",
    files: ["registry/sections/hero/hero-1.tsx"],
    component: lazy(() => import("@/registry/sections/hero/hero-1")),
  },
};

export default sectionsUi;
