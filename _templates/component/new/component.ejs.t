---
to: src/components/<%= componentName %>/<%= componentName %>.tsx
---
import React from 'react';
import styled from 'styled-components';

export interface <%= h.changeCase.pascalCase(componentName) %>Props {
    title: string;
    exampleProp: string;
}

const <%= h.changeCase.pascalCase(componentName) %> = ({ exampleProp }: <%= h.changeCase.pascalCase(componentName) %>Props) => {
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

export default <%= h.changeCase.pascalCase(componentName) %>;
