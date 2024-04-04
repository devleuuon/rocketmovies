import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Card = styled.div`
    width: 132.1rem;
    height: 22.2rem;
    margin: 0 auto 2.4rem;
    padding: 3.2rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BG_PROFILE};
    cursor: pointer;

    overflow-y: auto;

    &::-webkit-scrollbar-track {
        background: transparent; 
}

    &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
}

    &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
}

    h3 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    P {
        color: ${({ theme }) => theme.COLORS.TEXT_CARD};
    }
`