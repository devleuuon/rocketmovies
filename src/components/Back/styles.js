import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: .8rem;
    padding-top: 3rem;
    
    button {
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
    }
    
    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`