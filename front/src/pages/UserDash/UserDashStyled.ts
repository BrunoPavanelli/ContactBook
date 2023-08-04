import { styled } from "styled-components";

export const UserDashStyled = styled.div`
    min-height: 100vh;
    max-height: max-content;
    width: 100%;

    .logout__btn {
        cursor: pointer;
    }

    main {
        height: 80vh;

        margin-inline: auto;
        margin-top: 1rem;

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
            min-height: 300px;
            max-height: 650px;

            overflow-y: auto;

            display: flex;
            flex-wrap: wrap;
            gap: 1rem;

            padding: 0.5rem;
        }
    }

    @media (max-width: 925px) {
        main {
            .operation__bar {
                justify-content: space-between;
            }

            ul {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                overflow-x: auto;
                gap: 1rem;
            }
        }
    }

    @media (max-width: 480px) {
        main {
            .operation__bar {
                justify-content: start;
                gap: 0.5rem;
                .operation__div {
                    p {
                        display: none;
                    }
                }
            }
        }        
    }
`;