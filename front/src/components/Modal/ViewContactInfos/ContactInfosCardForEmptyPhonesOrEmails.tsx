import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidSend } from "react-icons/bi";

import { useContactContext } from "../../../contexts/ContactContext/ContactContext";
import { IInfolUpdate } from "../../../contexts/ContactContext/@contactTypes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IContactInfosCardForEmptyPhonesOrEmailsProps {
    type: "email" | "phone";
    contactId: string;
}

export const ContactInfosCardForEmptyPhonesOrEmails = ({
    type,
    contactId,
}: IContactInfosCardForEmptyPhonesOrEmailsProps) => {
    const { } = useContactContext();
    const submitPhoneRef = useRef<HTMLButtonElement>(null);
    const submitEmailRef = useRef<HTMLButtonElement>(null);

    const phoneSchema = z.object({
        phoneNumber: z.string().min(11).max(11),
    });
    const emailSchema = z.object({
        email: z.string().email(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInfolUpdate>({
        resolver: zodResolver(type === "email" ? emailSchema : phoneSchema),
    });

    const clickSubmitButton = () => {
        type === "email"
            ? submitEmailRef.current!.click()
            : submitPhoneRef.current!.click();
    };

    const submit: SubmitHandler<IInfolUpdate> = (data) => {

    };

    return (
        <>
            <li className="info__div">
                {type === "email" ? (
                    <div className="card__info">
                        <span className="pink__text">Email1: </span>
                        <form
                            onSubmit={handleSubmit(submit)}
                            className="edit__phone__email"
                        >
                            <input
                                placeholder="Put new info here"
                                {...register("email")}
                            />
                            <button type="submit" ref={submitEmailRef}></button>
                        </form>
                    </div>
                ) : (
                    <div className="card__info">
                        <span className="pink__text">Phone1: </span>
                        <form
                            onSubmit={handleSubmit(submit)}
                            className="edit__phone__email"
                        >
                            <input
                                placeholder="Put new info here"
                                {...register("phoneNumber")}
                            />
                            <button type="submit" ref={submitPhoneRef}></button>
                        </form>
                    </div>
                )}
                <div className="icons">
                    <BiSolidSend
                        className="pink__text icon"
                        onClick={() => clickSubmitButton()}
                    />
                </div>
            </li>
            {errors.email ? (
                <p className="errors__text">{errors.email?.message}</p>
            ) : (
                <p className="errors__text">{errors.phoneNumber?.message}</p>
            )}
        </>
    );
};
