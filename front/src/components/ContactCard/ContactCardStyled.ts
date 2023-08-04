import styled from "styled-components";

export const ContactCardStyled = styled.li`
    min-width: 225px;
    max-height: 180px;

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
