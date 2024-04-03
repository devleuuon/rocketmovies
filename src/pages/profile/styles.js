import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    > header {
        padding: 0 14.4rem;
        width: 100%;
        height: 14.4rem;
        background-color: ${({ theme }) => theme.COLORS.BG_PROFILE};
        display: flex;
        align-items: center;
    }
`

export const Form = styled.form`
    max-width: 34.0rem;
    margin: -8.4rem auto 0;

    >div:nth-child(4) {
        margin-top: 2.4rem;
    }

    >div:nth-child(5) {
        margin-bottom: 2.4rem;
    }
    `

export const Avatar = styled.div`
    position: relative;
    margin: -8.4rem auto 6.4rem;
    width: 18.6rem;
    height: 18.6rem;

    img {
        width: 18.6rem;
        border-radius: 50%;
    }

    label {
        width: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        padding: 1.4rem;
        border-radius: 50%;
        cursor: pointer;
        
        position: absolute;
        bottom: .7rem;
        right: .7rem;
    }
    
    input {
        display: none;
    }
    
    svg {
        width: 2.0rem;
        color: ${({ theme }) => theme.COLORS.DARK};
    }
`