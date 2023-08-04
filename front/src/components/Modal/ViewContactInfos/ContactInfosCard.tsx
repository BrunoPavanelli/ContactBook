import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useContactContext } from "../../../contexts/ContactContext/ContactContext";

interface IContactsInfoCardProps {
    info: string,
    type: "email" | "phone",
    count: number,
    id: string,
}

export const ContactsInfoCard = ({id, info, type, count}: IContactsInfoCardProps) => {
    const { deletePhoneNumberOrEmail } = useContactContext();

    const reformatPhoneString = (info: string) => {
        const infoSplited = info.split("");
        const dddPart = infoSplited.splice(0,2).join("");
        return `${dddPart} ${infoSplited.join("")}`;
    };

    return (
        <li className="info__div">
        {type === "email" 
            ? <p className="yellow__text"><span className="pink__text">{`Email ${count}: `}</span>{info}</p>
            : <p className="yellow__text"><span className="pink__text">{`Phone ${count}: `}</span>{reformatPhoneString(info)}</p>
        }
        <div className="icons">
            <AiFillEdit className="pink__text icon"/>
            <MdDelete className="errors__text icon" onClick={() => deletePhoneNumberOrEmail(id, type)}/>
        </div>
    </li>
    );
};