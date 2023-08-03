import { InputDivStyled, InputIconDivStyled, InputStyled } from "./InputStyled";
import { IInput } from "../../../../@types/@globalTypes";

export const Input = ({
    children,
    placeholder,
    type,
    register,
    errors,
}: IInput) => {
    return (
        <>
            <InputDivStyled>
                <InputIconDivStyled>{children}</InputIconDivStyled>
                <InputStyled
                    placeholder={placeholder}
                    type={type}
                    {...register}
                />
            </InputDivStyled>
            {errors ? <p className="errors__text fs__12">{errors}</p> : null}
        </>
    );
};
