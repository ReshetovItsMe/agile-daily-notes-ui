import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Button,
    IconButton,
    Paper,
    PaperProps,
    TextField
} from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export interface AnCardComponentProps extends PaperProps {
    id: string;
    number: number;
    title: string;
    description: string;
    onDeleteClick: (id: string) => void;
    onSaveClick: (value: string) => void;
    editable?: boolean;
}

const AnCard = ({
    id,
    number,
    title,
    description,
    editable,
    onSaveClick,
    onDeleteClick,
    ...restProps
}: AnCardComponentProps) => {
    const [isEditable, setIsEditable] = useState<boolean | undefined>(editable);
    const [text, setText] = useState<string>(description);
    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setText(event.target.value);
    };
    const onDescriptionDoubleClickHandler = () => setIsEditable(!isEditable);
    const onCancelClickHandler = () => setIsEditable(false);
    const onSaveClickHandler = () => onSaveClick(text);
    const onDeleteClickHandler = () => onDeleteClick(id);

    return (
        <StyledPaper {...restProps}>
            <Container>
                <HeaderContainer>
                    <Number>{number}</Number>
                    <Title>{title}</Title>
                    <ButtonsContainer>
                        {isEditable ? (
                            <>
                                <StyledButton onClick={onCancelClickHandler}>
                                    Cancel
                                </StyledButton>
                                <StyledButton
                                    variant="contained"
                                    color="primary"
                                    onClick={onSaveClickHandler}
                                >
                                    Save
                                </StyledButton>
                            </>
                        ) : (
                            <IconButton
                                aria-label="delete"
                                onClick={onDeleteClickHandler}
                            >
                                <DeleteOutlinedIcon />
                            </IconButton>
                        )}
                    </ButtonsContainer>
                </HeaderContainer>
                {isEditable ? (
                    <TextArea
                        id="edit-description-field"
                        multiline
                        value={text}
                        onChange={handleDescriptionChange}
                        variant="outlined"
                    />
                ) : (
                    <Description
                        onDoubleClick={onDescriptionDoubleClickHandler}
                    >
                        {description}
                    </Description>
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
    position: relative;
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
    margin: 10px 0 12px 0;
    text-align: justify;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
`;

const StyledButton = styled(Button)`
    .MuiButton-label {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }
    &.MuiButton-containedPrimary {
        background-color: #3e3afa;
    }
`;

const TextArea = styled(TextField)`
    height: 100%;
    width: 100%;
    &.MuiFormControl-root {
        margin-top: 10px;
    }
    .MuiOutlinedInput-multiline {
        background: #f6f5fd;
        padding: 6px 10px 6px 10px;
    }
    .MuiInputBase-input {
        color: #081132;
        font-family: PT Sans;
        font-size: 18px;
        line-height: 23px;
    }
`;

export default AnCard;
