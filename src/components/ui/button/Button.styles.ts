import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface StyledButtonProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: {
        backgroundColor: 'blue',
        color: 'white',
    },
    secondary: {
        backgroundColor: 'gray',
        color: 'black',
    },
    danger: {
        backgroundColor: 'red',
        color: 'white',
    },
    success: {
        backgroundColor: 'green',
        color: 'white',
    },
}

export const StyledButton = styled.button<StyledButtonProps>`
    width: 100%;
    height: 40px;
    ${({ variant }) => {
        return css`${buttonVariants[variant]};`
    }}
}`