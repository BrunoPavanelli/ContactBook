import { InputDivStyled, InputIconDivStyled, InputStyled } from "./InputStyled";
import { IInput } from "../../../../@types/@globalTypes";

export const Input = ({ children, placeholder, type}: IInput) => {
    return (
        <InputDivStyled>
            <InputIconDivStyled>
                { children }
            </InputIconDivStyled>
            <InputStyled placeholder={placeholder} type={type}/>
        </InputDivStyled>
    );
};