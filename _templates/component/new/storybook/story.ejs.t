---
to: src/stories/<%= componentName %>/<%= componentName %>.stories.tsx
---
import React from 'react';
import <%= h.changeCase.pascalCase(componentName) %>, { <%= h.changeCase.pascalCase(componentName) %>Type } from '../../components/<%= componentName %>';

// This default export determines where you story goes in the story list
export default {
    title: '<%= h.changeCase.pascalCase(componentName) %>',
    component: <%= h.changeCase.pascalCase(componentName) %>,
    argTypes: {
        exampleProp: { control: 'text' }
    }
};

export const <%= h.changeCase.pascalCase(componentName) %>Story = (args: <%= h.changeCase.pascalCase(componentName) %>Type) => (
    <<%= h.changeCase.pascalCase(componentName) %> {...args}>{args.title}</<%= h.changeCase.pascalCase(componentName) %>>
);

<%= h.changeCase.pascalCase(componentName) %>Story.args = {
    /* the args you need here will depend on your component */
    exampleProp: 'This is test component'
};
