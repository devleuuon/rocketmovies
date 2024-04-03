import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
`

export const Form = styled.div`
    padding: 12.5rem 13.6rem 0;

    display: flex;
    flex-direction: column;

    >h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    >div:nth-child(6) {
        margin-bottom: 2.4rem;
    }

    div:nth-child(8) {
        margin-top: 4.2rem;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`