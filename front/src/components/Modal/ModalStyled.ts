import { styled } from "styled-components";

export const ModalDivStyled = styled.div`
    min-height: 100vh;
    max-height: max-content;
    width: 100%;

    position: fixed;

    display: flex;
    justify-content: center;

    background-color: var(--purple-primary-opacity);
`;

export const ModalStyled = styled.div`
    width: 500px;
    height: 500px;

    margin-top: 10rem;

    background-color: var(--purple-primary);
    border-radius: 1.25rem;
`;