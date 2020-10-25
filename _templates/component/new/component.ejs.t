---
to: src/components/<%= componentName %>/<%= componentName %>.tsx
---
import React from 'react';
import styled from 'styled-components';

export interface An<%= h.changeCase.pascalCase(componentName) %>ComponentProps {
    title: string;
    exampleProp: string;
}

const An<%= h.changeCase.pascalCase(componentName) %> = ({ exampleProp }: An<%= h.changeCase.pascalCase(componentName) %>ComponentProps) => {
    return (
        <BeautifulDiv>
            <p>1) Hello {exampleProp}! Edit me</p>
            <p>2) Then write some tests for me</p>
        </BeautifulDiv>
    );
};

const BeautifulDiv = styled.div`
    padding: 20px;
    text-align: center;
`;

export default An<%= h.changeCase.pascalCase(componentName) %>;
