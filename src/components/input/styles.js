import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.COLORS.BG_INPUT};

    border-radius: 1.0rem;

    > input {
        width: 100%;
        padding: 1.9rem 2.4rem;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
        border: none;
        outline: none;

        &placeholder {
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
            font-size: 1.4rem;
        }
    }
`