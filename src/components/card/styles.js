import styled from "styled-components";

export const Container = styled.div`
    width: 132.1rem;
    height: 22.2rem;
    margin: 0 auto;
    padding: 3.2rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BG_PROFILE};

    overflow-y: scroll;

    h3 {
        font-size: 2.4rem;
        margin-bottom: .8rem;
    }

    P {
        color: ${({ theme }) => theme.COLORS.TEXT_CARD};
    }
`