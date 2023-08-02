import { styled } from "styled-components";

export const UserDashStyled = styled.div`
    min-height: 100vh;
    max-height: max-content;
    width: 100%;

    main {
        height: 80vh;

        margin-inline: auto;
        margin-top: 1rem;

        /* border: 2px solid var(--purple-primary); */

        .operation__bar {
            width: 100%;
            height: 100px;

            padding: 1rem;

            display: flex;
            align-items: center;
            gap: 2rem;

            border-bottom: 2px solid var(--purple-primary);

            .operation__div {
                display: flex;
                align-items: center;
                gap: 1rem;

                padding: 0.5rem;

                cursor: pointer;

                background-color: var(--purple-primary);
                border-radius: var(--br-8);
            }
        }

        ul {
            width: 100%;
            height: max-content;
            min-height: 300px;

            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;

            padding: 0.5rem;
        }
    }
`;