import { CgDetailsMore } from "react-icons/cg";

import { ContactCardStyled } from "./ContactCardStyled";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { IContact } from "../../contexts/ContactContext/@contactTypes";
import { useContactContext } from "../../contexts/ContactContext/ContactContext";

interface IContactCardProps {
    contact: IContact
}

export const ContactCard = ({contact}: IContactCardProps) => {
    const { setIsOpen, setModalType } = useUserContext();
    const { setCurrentContact } = useContactContext();

    const editStringRepresentation = (string: string): string => {
        if (string.length > 19) {
            let stringSplit = string.split("");
            stringSplit = stringSplit.splice(0, 16);
            string = stringSplit.join("") + "...";
        }

        return string;
    };

    return (
        <ContactCardStyled>
            <div className="more__infos" onClick={() => {setIsOpen(true); setModalType("contactview"); setCurrentContact(contact);}}>
                <CgDetailsMore className="pink__text" size={30} />
                <p className="pink__text">View all infos</p>
            </div>
            <div className="contact__infos">
                <p className="yellow__text">{editStringRepresentation(contact.name)}</p>
                <p className="yellow__text">{contact.phoneNumbers.length > 0 && contact.phoneNumbers[0].phoneNumber}</p>
                <p className="yellow__text">{contact.emails.length > 0 && editStringRepresentation(contact.emails[0].email)}</p>
            </div>
        </ContactCardStyled>
    );
};
