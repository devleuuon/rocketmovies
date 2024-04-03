import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew}) => isNew ? `.1rem dashed ${theme.PLACEHOLDER}` : "none"};

    margin-bottom: .8rem;
    border-radius: 1.0rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
    
    .button-delete, .button-add {
        width: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
`