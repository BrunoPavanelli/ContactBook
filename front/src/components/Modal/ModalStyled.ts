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

    padding-block: 1rem;
    padding-inline: 2rem;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--purple-primary);
    border-radius: 1.25rem;

    .hidden__btn {
        display: none;
    }

    .close__btn {
        position: absolute;
        right: 1rem;
        top: 1rem;
        
        cursor: pointer;
    }
`;

export const EditProfileStyled = styled.div`
    width: 100%;
    height: 100%;

    padding-block: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .head {
        width: 100%;
        height: 40%;

        display: flex;
        flex-direction: column;
        align-items: center;

        .texts {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

    form {
        width: 100%;
        height: 60%;

        overflow-y: auto;

        display: flex;
        flex-direction: column;

        position: relative;

        .btn {
            margin-top: 1rem;
        }

        .plus__btn--1 {
            position: absolute;
            right: 1rem;
            bottom: 11.25rem;

            cursor: pointer;
        }

        .plus__btn--2 {
            position: absolute;
            right: 1rem;
            bottom: 8.125rem;
            
            cursor: pointer;
        }
    }
`;

export const ViewContactInfoStyled = styled.div` 
    width: 100%;
    height: 100%;

    padding-block: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .head {
        width: 100%;
        height: 40%;

        display: flex;
        flex-direction: column;
        align-items: center;

        .texts {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

    .contact__infos {
        width: 100%;
        height: 60%;

        overflow-y: auto;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        position: relative;

        .info__div {
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            
            border-bottom: 2px solid var(--primary-pink);

            .card__info {
                width: 100%;

                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            .edit__phone__email {
                width: 80%;
                height: 100%;

                display: flex;
                justify-content: space-between;
                align-items: center;

                background-color: transparent;
                input {
                    width: 100%;
                    background-color: transparent;

                    color: var(--primary-yellow)
                }

                button {
                    display: none;
                }
            }

            .icons {
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            .icon {
                    cursor: pointer;
                }
        }
    }

    .buttons {
        width: 100%;
        display: flex;
        gap: 1rem;

        margin-block: 1rem;
    }
`;