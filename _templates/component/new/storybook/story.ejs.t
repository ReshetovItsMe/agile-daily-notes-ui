---
to: src/stories/<%= componentName %>/<%= componentName %>.stories.tsx
---
import React from 'react';
import An<%= h.changeCase.pascalCase(componentName) %>, { An<%= h.changeCase.pascalCase(componentName) %>Props } from '../../components/<%= componentName %>';

// This default export determines where you story goes in the story list
export default {
    title: '<%= h.changeCase.pascalCase(componentName) %>',
    component: An<%= h.changeCase.pascalCase(componentName) %>,
    argTypes: {
        exampleProp: { control: 'text' },
        defaultValue: 'This is test component',
        table: {
            type: {
                summary:
                    'This is test component.'
            },
            defaultValue: { summary: 'This is test component' }
        }
    }
};

export const <%= h.changeCase.pascalCase(componentName) %>Story = (args: An<%= h.changeCase.pascalCase(componentName) %>Props) => (
    <An<%= h.changeCase.pascalCase(componentName) %> {...args}>{args.title}</An<%= h.changeCase.pascalCase(componentName) %>>
);
