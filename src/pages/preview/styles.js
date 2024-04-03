import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    `

export const Content = styled.div`
    max-width: 120.0rem;
    height: 58.1rem;
    margin: auto;
    overflow-y: scroll;

    img {
        width: 1.6rem;
        height: 1.6rem;
    }


    .title {
        display: flex;
        align-items: center;
        gap: 1.9rem;
        margin-top: 2.4rem;
    }

    .user {
        display: flex;
        align-items: center;
        gap: .8rem;
        margin: 2.4rem 0 4.0rem;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    h5 {
        margin: 4.0rem 0 7.0rem;
        padding: 0 1rem;
        font-size: 1.6rem;
        font-weight: 400;
    }

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
`
