import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsTelephonePlusFill, BsPlusSquare } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { ButtonStyled } from "../../Form/LoginRegisterDiv/Button/ButtonStyled";
import { Input } from "../../Form/LoginRegisterDiv/Input/Input";
import { EditProfileStyled } from "../ModalStyled";
import { useState } from "react";
import { IContactRegister, IContactRegisterData } from "../../../contexts/ContactContext/@contactTypes";
import { ZodObject, ZodString, z } from "zod";
import { useContactContext } from "../../../contexts/ContactContext/ContactContext";

export const NewContact = () => {
    const [emailInputNumber, setEmailInputNumber] = useState<number[]>([]);
    const [phoneInputNumber, setphoneInputNumber] = useState<number[]>([]);

    const contactRegisterSchema = z.object({
        name: z.string().min(7),
        email: z.string().email(),
        phoneNumber: z.string().min(11).max(14),
    });

    const [schema, setSchema] = useState<
        ZodObject<{ [key: string]: ZodString }>
    >(contactRegisterSchema);

    const plusOneInArray = (arr: number[], type: boolean, key: string) => {
        let lastValue = 0;
        if (arr.length > 0) lastValue = arr[arr.length - 1];
        const newValue = lastValue + 1;

        if (type) {
            setSchema(schema.setKey(`${key}${newValue}`, z.string().email()));
            setEmailInputNumber([...emailInputNumber, newValue]);
        } else {
            setSchema(
                schema.setKey(`${key}${newValue}`, z.string().min(11).max(14))
            );
            setphoneInputNumber([...phoneInputNumber, newValue]);
        }
    };

    const { registerNewContact } = useContactContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactRegister>({
        resolver: zodResolver(schema),
    });

    const submit: SubmitHandler<IContactRegister> = async (data) => {
        const emails: string[] = [];
        const phoneNumbers: string[] = [];
        const name = data.name;

        phoneNumbers.push(data.phoneNumber);
        phoneInputNumber.map((number) => {
            const phone = data[`phoneNumber${number}`];
            phoneNumbers.push(phone);
        });

        emails.push(data.email);
        emailInputNumber.map((number) => {
            const email = data[`email${number}`];
            emails.push(email);
        });

        const formData: IContactRegisterData = {
            name, 
            phoneNumbers,
            emails
        };

        registerNewContact(formData);
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
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    placeholder="Contact Name"
                    type="text"
                    children={<MdEmail />}
                    register={register("name")}
                    errors={errors.name?.message}
                />
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
                    register={register("phoneNumber")}
                    errors={errors.phoneNumber?.message}
                />
                {emailInputNumber.map((number) => (
                    <Input
                        key={number}
                        placeholder="Email"
                        type="email"
                        children={<MdEmail />}
                        register={register(`email${number}`)}
                        errors={errors[`email${number}`]?.message}
                    />
                ))}
                {phoneInputNumber.map((number) => (
                    <Input
                        key={number}
                        placeholder="Phone Number"
                        type="text"
                        children={<HiLockClosed />}
                        register={register(`phoneNumber${number}`)}
                        errors={errors[`phoneNumber${number}`]?.message}
                    />
                ))}

                <ButtonStyled className="btn">Edit Infos</ButtonStyled>
                <BsPlusSquare
                    className="yellow__text plus__btn--1"
                    size={20}
                    onClick={() =>
                        plusOneInArray(emailInputNumber, true, "email")
                    }
                />
                <BsPlusSquare
                    className="yellow__text plus__btn--2"
                    size={20}
                    onClick={() =>
                        plusOneInArray(phoneInputNumber, false, "phoneNumber")
                    }
                />
            </form>
        </EditProfileStyled>
    );
};
