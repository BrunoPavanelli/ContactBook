import { styled } from "styled-components";

export const InputDivStyled = styled.div`
    width: 100%;
    min-height: 50px;
     
    border-bottom: 2px solid var(--primary-pink);
    
    display: flex;
`;

export const InputIconDivStyled = styled.div`

    color: var(--primary-yellow);
    
    border-radius: var(--br-8) 0 0 var(--br-8);

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 880px) {
        display: none;
    }
`;

export const InputStyled = styled.input`
    width: 100%;

    padding-inline: 1rem;

    background-color: transparent;
    color: var(--primary-yellow);
    
    border-radius: var(--br-8);
`;