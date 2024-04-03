import styled from "styled-components";
import background from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    `

export const Form = styled.form`
    padding: 15.5rem 13.6rem 0;

    display: flex;
    flex-direction: column;
    
    

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 4.2rem;
        text-align: center;
    }

    > div:nth-child(5) {
        margin-bottom: 2.4rem;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`