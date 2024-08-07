import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 12.3rem;

    border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BORDER_BOTTOM};
    margin-bottom: 4.5rem;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 6.4rem;


     > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .image {
        width: 6.4rem;
        height: 6.4rem;
        cursor: pointer;
        border-radius: 50%;
    }

    strong {
        font-size: 1.8rem;
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    .profile {
        display: flex;
        flex-direction: column;
        text-align: right;
        margin-right: -5.0rem;
        line-height: 2.4rem;
    }
`