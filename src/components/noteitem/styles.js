import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_INPUT};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY};

    border: ${({ theme, isNew}) => isNew ? `.2rem dashed ${theme.COLORS.PLACEHOLDER}` : "none"};

    margin-bottom: .8rem;
    border-radius: 1.0rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;
    }

    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        outline: none;

        &::placeholder {
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY};
        }
    }

    .button-delete, .button-add {
        color: ${({ theme }) => theme.COLORS.PINK}
    }
`