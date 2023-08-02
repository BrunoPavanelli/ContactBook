import styled from "styled-components";

export const ContactCardStyled = styled.li`
    width: 225px;
    height: max-content;

    padding: 2rem;

    border-radius: 1.25rem;

    background-color: var(--purple-primary);

    .more__infos {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        cursor: pointer;
    }

    .contact__infos {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 0.25rem;
    }
`;
