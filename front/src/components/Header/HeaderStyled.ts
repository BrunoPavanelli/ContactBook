import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    height: 125px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--purple-primary);
`;

export const HeaderDivStyled = styled.header`
    height: 125px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar {
        width: max-content;

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logout__btn {
        cursor: pointer;
    }

    @media (max-width: 360px) {
        position: relative;
        .logout__btn {
            position: absolute;

            bottom: 0.5rem;
            align-self: center;
        }
    }
`;