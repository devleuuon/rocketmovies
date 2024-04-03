import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`

export const Content = styled.div`
    max-width: 113.7rem;
    margin: 0 auto;

    
    >div:nth-child(1) {
        margin-bottom: 2.4rem;
    }

    .tags {
        display: flex;
        justify-content: center;
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
    }

    h3 {
        font-size: 2.0rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-weight: 400;
        margin: 4.0rem 0 2.4rem;
    }
`

// export const Markers = styled.div`
//     background-color: ${({ theme }) => theme.COLORS.BLACK};
//     max-width: 113.7rem;
//     margin: auto;
//     padding: 1.6rem;
//     border-radius: .8rem;
// `