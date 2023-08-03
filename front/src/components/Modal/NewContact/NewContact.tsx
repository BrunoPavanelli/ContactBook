import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsTelephonePlusFill, BsPlusSquare } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { IRegisterData } from "../../../contexts/UserContext/@userTypes";
import { useUserContext } from "../../../contexts/UserContext/UserContext";
import { registerSchema } from "../../../pages/Register/validator";
import { ButtonStyled } from "../../Form/LoginRegisterDiv/Button/ButtonStyled";
import { Input } from "../../Form/LoginRegisterDiv/Input/Input";
import { EditProfileStyled } from "../ModalStyled";
import { useState } from "react";

export const NewContact = () => {
    const [emailInputNumber, setEmailInputNumber] = useState<number[]>([]);
    const [phoneInputNumber, setphoneInputNumber] = useState<number[]>([]);
    
    const plusOneInArray = (arr: number[], type: boolean = false) => {
        let lastValue = 0;
        if (arr.length > 0) lastValue = arr[arr.length - 1];
        const newValue = lastValue + 1;
        type
        ? setEmailInputNumber([...emailInputNumber, newValue])
        : setphoneInputNumber([...phoneInputNumber, newValue]);
    };
    
    const { userRegister } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterData>({
        resolver: zodResolver(registerSchema),
    });

    const submit: SubmitHandler<IRegisterData> = async (data) => {
        userRegister(data);
    };

    return (
        <EditProfileStyled>
            <div className="head">
                <BsTelephonePlusFill className="yellow__text" size={50} />
                <div className="texts">
                    <h1 className="yellow__text">NewContact</h1>
                    <p className="yellow__text fs__10">
                        Enter informations down bellow to create a new contact.
                    </p>
                </div>
            </div>
            <form>
                <Input
                    placeholder="Email"
                    type="email"
                    children={<MdEmail />}
                    register={register("email")}
                    errors={errors.email?.message}
                />
                <Input
                    placeholder="Phone Number"
                    type="text"
                    children={<HiLockClosed />}
                    register={register("password")}
                    errors={errors.password?.message}
                />
                {emailInputNumber.map((number) => (
                    <Input
                        key={number}
                        placeholder="Email"
                        type="email"
                        children={<MdEmail />}
                        register={register("email")}
                        errors={errors.email?.message}
                    />
                ))}
                {phoneInputNumber.map((number) => (
                    <Input
                        key={number}
                        placeholder="Phone Number"
                        type="text"
                        children={<HiLockClosed />}
                        register={register("password")}
                        errors={errors.password?.message}
                    />
                ))}

                <ButtonStyled className="btn">Edit Infos</ButtonStyled>
                <BsPlusSquare
                    className="yellow__text plus__btn--1"
                    size={20}
                    onClick={() => plusOneInArray(emailInputNumber, true)}
                />
                <BsPlusSquare
                    className="yellow__text plus__btn--2"
                    size={20}
                    onClick={() => plusOneInArray(phoneInputNumber)}
                />
            </form>
        </EditProfileStyled>
    );
};
