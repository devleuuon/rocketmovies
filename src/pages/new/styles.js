import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .tags {
        display: flex;
        gap: 2.4rem;
        flex-wrap: wrap;
    }
`

export const Form = styled.div`
    max-width: 113.7rem;
    margin: 0 auto;

    
    >div:nth-child(1) {
        margin-bottom: 2.4rem;
    }


    .newMovie {
        display: flex;
        gap: 4.0rem;
    }

    #textarea {
        width: 100%;
        height: 27.4rem;
        margin-top: 4.0rem;
        padding: 2rem;
        background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
        border: none;
        resize: none;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        outline: none;
    }

    h3 {
        font-size: 2.0rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-weight: 400;
        margin: 4.0rem 0 2.4rem;
    }

    .button {
        display: flex;
        align-items: center;
        gap: 4.0rem;
        margin-bottom: 9.0rem;
    }

    #button {
        width: 100%;
        height: 5.6rem;
        border: none;
        border-radius: 1.0rem;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.6rem;
        font-weight: 500;
    }
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 1.6rem;
    border-radius: .8rem;
    margin-bottom: 4.0rem;
`