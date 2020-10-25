---
to: src/components/<%= componentName %>/index.ts
---
import <%= h.changeCase.pascalCase(componentName) %>, { An<%= h.changeCase.pascalCase(componentName) %>ComponentProps } from './<%= componentName %>';

export interface An<%= h.changeCase.pascalCase(componentName) %>Props extends An<%= h.changeCase.pascalCase(componentName) %>ComponentProps {}
export default <%= h.changeCase.pascalCase(componentName) %>;
