import { styled } from "styled-components";

export const LoginRegisterFormStyled = styled.div`
    width: 80%;
    max-width: 350px;

    margin-inline: auto;
    margin-top: 10rem;

    padding: 2rem;

    border-radius: var(--br-8);
    background-color: var(--purple-primary);

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
        justify-content: space-between;

        .btn {
            margin-top: 1rem;
        }

        .signup {
            width: 100%;
            margin-top: 1rem;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
        }
    }

    @media (max-width: 880px) {
        padding: 0;
    }
`;