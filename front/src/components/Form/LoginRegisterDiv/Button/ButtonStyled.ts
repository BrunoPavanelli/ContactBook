import { styled } from "styled-components";

interface IButtonProps {
    type?: string
}

export const ButtonStyled = styled.button<IButtonProps>`
    width: 100%;
    min-height: 50px;

    background-color: ${props => props.type === "delete" ? "rgba(	252, 3, 93, 0.4)" : "#B08BAC"};
    color: var(--primary-yellow);

    font-size: var(--fs-16);
    font-weight: var(--fw-700);
    letter-spacing: 0.0755rem;

    border-radius: var(--br-8);

    display: flex;
    justify-content: center;
    align-items: center;
`;