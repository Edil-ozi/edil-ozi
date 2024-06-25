import { Registry } from "@/registry/schema";
import componentsUi from "./components-ui";
import componentsExample from "./components-example";
import sectionsUi from "./sections-ui";

export const registry: Registry = {
  ...componentsUi,
  ...componentsExample,
  ...sectionsUi,
};
