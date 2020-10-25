import React from 'react';
import styled from 'styled-components';
import { Paper, PaperProps } from '@material-ui/core';

export interface AnCardComponentProps extends PaperProps {
    number: number;
    title: string;
    description: string;
}

const AnCard = ({
    number,
    title,
    description,
    ...restProps
}: AnCardComponentProps) => {
    return (
        <StyledPaper {...restProps}>
            <Container>
                <HeaderContainer>
                    <Number>{number}</Number>
                    <Title>{title}</Title>
                </HeaderContainer>
                <Description>{description}</Description>
            </Container>
        </StyledPaper>
    );
};

const StyledPaper = styled(Paper)`
    min-width: 200px;
    width: 100%;
`;

const Container = styled.div`
    padding: 24px;
`;

const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
`;

const Number = styled.span`
    background: #f4f8fb;
    border-radius: 50%;
    color: #3e3afa;
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    margin-right: 16px;
    padding: 5px;
    text-align: center;
    height: 32px;
    width: 32px;
`;

const Title = styled.h1`
    color: #3e3afa;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
`;

const Description = styled.p`
    color: #081132;
    font-family: PT Sans;
    font-size: 18px;
    line-height: 23px;
    text-align: justify;
`;

export default AnCard;
