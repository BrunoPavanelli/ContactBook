import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidSend } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useContactContext } from "../../../contexts/ContactContext/ContactContext";
import { IInfolUpdate } from "../../../contexts/ContactContext/@contactTypes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IContactsInfoCardProps {
    info: string,
    type: "email" | "phone",
    count: number,
    id: string,
    contactId: string
}

export const ContactsInfoCard = ({id, info, type, count, contactId}: IContactsInfoCardProps) => {
    const [openInput, setOpenInput] = useState(false);
    const { deletePhoneNumberOrEmail, updatePhoneOrEmail } = useContactContext();

    const reformatPhoneString = (info: string) => {
        const infoSplited = info.split("");
        const dddPart = infoSplited.splice(0,2).join("");
        return `${dddPart} ${infoSplited.join("")}`;
    };

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
        formState: { errors }
    } = useForm<IInfolUpdate>(
        {
            resolver: zodResolver(type === "email" ? emailSchema : phoneSchema)
        }
    );

    const clickSubmitButton = () => {
        type === "email"
        ? submitEmailRef.current!.click()
        : submitPhoneRef.current!.click();
    };

    const submit: SubmitHandler<IInfolUpdate> = (data) => {
        updatePhoneOrEmail(data, contactId, id, type);
    };

    return (
        <>
            <li className="info__div">
            {
                type === "email" 
                    ? <div className="card__info">
                        <span className="pink__text">{`Email ${count}: `}</span>
                        {
                            openInput 
                            ? <form onSubmit={handleSubmit(submit)} className="edit__phone__email">
                                <input placeholder="Put new info here" {...register("email")}/>
                                <button type="submit" ref={submitEmailRef}></button>
                                </form>
                            :   <p className="yellow__text">{info}</p>
                        }
                    </div>
                    : <div className="card__info">
                        <span className="pink__text">{`Phone ${count}: `}</span>
                        {
                            openInput 
                            ? <form onSubmit={handleSubmit(submit)} className="edit__phone__email">
                                <input placeholder="Put new info here" {...register("phoneNumber")}/>
                                <button type="submit" ref={submitPhoneRef}></button>
                                </form>
                            :   <p className="yellow__text">{reformatPhoneString(info)}</p>
                        }
                    </div>
            }
                <div className="icons">
                    {
                        openInput
                        ?   <>
                                <BiSolidSend className="pink__text icon" onClick={() => clickSubmitButton()}/>
                                <IoMdClose className="pink__text icon" onClick={() => setOpenInput(false)}/>
                            </>
                    :  <AiFillEdit className="pink__text icon" onClick={() => setOpenInput(true)}/>
                    }
                    <MdDelete className="errors__text icon" onClick={() => deletePhoneNumberOrEmail(id, type)}/>
                </div>
            </li>
            { openInput 
                ? (
                    errors.email 
                    ? <p className="errors__text">{errors.email?.message}</p>
                    : <p className="errors__text">{errors.phoneNumber?.message}</p>
                )
                : null
            }
        </>
    );
};
