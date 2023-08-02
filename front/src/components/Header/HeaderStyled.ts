import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    height: 125px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary-orange);
`;

export const HeaderDivStyled = styled.header`
    height: 125px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar {
        width: max-content;

        display: flex;
        gap: 1rem;
    }

    .logout {
        color: var(--primary-white-blue);
        cursor: pointer;
    }
`;