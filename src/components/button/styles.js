import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    height: 5.6rem;
    border: none;
    border-radius: 1.0rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.DARK};
    display: flex;

    > button {
        width: 100%;
        padding: 1.6rem auto;
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    &:disabled {
        opacity: 0.5;
    }
`