import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface IContactsInfoCardProps {
    info: string,
    type: string,
    count: number,
    id: string,
}

export const ContactsInfoCard = ({info, type, count}: IContactsInfoCardProps) => {
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
            <MdDelete className="errors__text icon"/>
        </div>
    </li>
    );
};