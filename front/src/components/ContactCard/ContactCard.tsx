import { CgDetailsMore } from "react-icons/cg";

import { ContactCardStyled } from "./ContactCardStyled";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { IContact } from "../../contexts/ContactContext/@contactTypes";

interface IContactCardProps {
    contact: IContact
}

export const ContactCard = ({contact}: IContactCardProps) => {
    const { setIsOpen } = useUserContext();

    const editStringRepresentation = (string: string): string => {
        if (string.length > 19) {
            let stringSplit = string.split("");
            stringSplit = stringSplit.splice(0, 16);
            string = stringSplit.join("") + "...";
        }

        return string;
    };

    editStringRepresentation(contact.emails[0].email);

    return (
        <ContactCardStyled>
            <div className="more__infos" onClick={() => setIsOpen(true)}>
                <CgDetailsMore className="pink__text" size={30} />
                <p className="pink__text">View all infos</p>
            </div>
            <div className="contact__infos">
                <p className="yellow__text">{editStringRepresentation(contact.name)}</p>
                <p className="yellow__text">{contact.phoneNumbers[0].phoneNumber}</p>
                <p className="yellow__text">{editStringRepresentation(contact.emails[0].email)}</p>
            </div>
        </ContactCardStyled>
    );
};
