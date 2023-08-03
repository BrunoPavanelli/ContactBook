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

    padding: 1rem;

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

        padding-inline: 1rem;

        display: flex;
        flex-direction: column;

        .btn {
            margin-top: 1rem;
        }
    }
`;