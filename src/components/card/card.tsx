import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Paper, PaperProps, TextField } from '@material-ui/core';

export interface AnCardComponentProps extends PaperProps {
    number: number;
    title: string;
    description: string;
    editable?: boolean;
}

const AnCard = ({
    number,
    title,
    description,
    editable,
    ...restProps
}: AnCardComponentProps) => {
    const [isEditable, setIsEditable] = useState<boolean | undefined>(editable);
    const onDescriptionDoubleClickHandler = () => setIsEditable(!isEditable);
    const onCancelClickHandler = () => setIsEditable(false);

    return (
        <StyledPaper {...restProps}>
            <Container>
                <HeaderContainer>
                    <Number>{number}</Number>
                    <Title>{title}</Title>
                </HeaderContainer>
                {isEditable ? (
                    <Description
                        onDoubleClick={onDescriptionDoubleClickHandler}
                    >
                        {description}
                    </Description>
                ) : (
                    <TextAreaContainer>
                        <TextArea
                            id="edit-description-field"
                            multiline
                            defaultValue={description}
                            variant="outlined"
                        />
                        <ButtonsContainer>
                            <Button onClick={onCancelClickHandler}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary">
                                Save
                            </Button>
                        </ButtonsContainer>
                    </TextAreaContainer>
                )}
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

const TextAreaContainer = styled.div`
    position: relative;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    margin: 0 8px 8px 0;
    right: 0;
    bottom: 0;
`;

const TextArea = styled(TextField)`
    height: 100%;
    width: 100%;
    .MuiOutlinedInput-multiline {
        padding: 18.5px 14px 50px 14px;
    }
`;

export default AnCard;
