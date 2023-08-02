import { styled } from "styled-components";

export const ButtonStyled = styled.button`
    width: 100%;
    min-height: 50px;
    
    background-color: var(--primary-pink);
    color: var(--primary-yellow);

    font-size: var(--fs-16);
    font-weight: var(--fw-700);
    letter-spacing: 0.0755rem;

    border-radius: var(--br-8);

    display: flex;
    justify-content: center;
    align-items: center;
`;