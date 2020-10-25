---
to: src/components/<%= componentName %>/index.ts
---
import <%= h.changeCase.pascalCase(componentName) %>, { <%= h.changeCase.pascalCase(componentName) %>Props } from './<%= componentName %>';

export type <%= h.changeCase.pascalCase(componentName) %>Type = <%= h.changeCase.pascalCase(componentName) %>Props;
export default <%= h.changeCase.pascalCase(componentName) %>;
