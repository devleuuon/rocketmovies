import styled from "styled-components";

export const Container = styled.button`
    padding: .5rem 1.6rem;
    border-radius: .8rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    margin: 1.5rem .8rem 0 0;
`