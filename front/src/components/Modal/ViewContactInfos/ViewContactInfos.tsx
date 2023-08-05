import { FaUser } from "react-icons/fa";
import { ViewContactInfoStyled } from "../ModalStyled";

import { ContactsInfoCard } from "./ContactInfosCard";
import { useContactContext } from "../../../contexts/ContactContext/ContactContext";
import { ButtonStyled } from "../../Form/LoginRegisterDiv/Button/ButtonStyled";
import { ContactInfosCardForEmptyPhonesOrEmails } from "./ContactInfosCardForEmptyPhonesOrEmails";
import { useUserContext } from "../../../contexts/UserContext/UserContext";


export const ViewContactInfos = () => {
    const { currentContact, deleteAllPhonesOrEmailsForContact, deleteAllPhonesAndEmailsForContact, deleteContact } = useContactContext();
    const { setIsOpen } = useUserContext();

    const phones = currentContact!.phoneNumbers;
    const emails = currentContact!.emails;

    return (
        <ViewContactInfoStyled>
            <div className="head">
                <FaUser className="yellow__text" size={50} />
                <div className="texts">
                    <h1 className="yellow__text">{currentContact!.name}</h1>
                </div>
            </div>
            <ul className="contact__infos">
                {   phones.length === 0 
                    ? <ContactInfosCardForEmptyPhonesOrEmails type="phone" contactId={currentContact!.id}/>
                    : phones.map((phone, index) => <ContactsInfoCard key={phone.id} info={phone.phoneNumber} count={index + 1} type="phone" id={phone.id} contactId={currentContact!.id}/>)
                }
                {
                    emails.length === 0
                    ? <ContactInfosCardForEmptyPhonesOrEmails type="email" contactId={currentContact!.id}/>
                    : emails.map((email, index) => <ContactsInfoCard key={email.id} info={email.email} count={index + 1} type="email" id={email.id} contactId={currentContact!.id}/>)
                }
            </ul>
            <div className="buttons">
                <ButtonStyled onClick={() => deleteAllPhonesOrEmailsForContact(currentContact!.id, "phone")}>Clear Phones</ButtonStyled>
                <ButtonStyled onClick={() => deleteAllPhonesOrEmailsForContact(currentContact!.id, "email")}>Clear Emails</ButtonStyled>
                <ButtonStyled onClick={() => deleteAllPhonesAndEmailsForContact(currentContact!.id)}>Clear All</ButtonStyled>

            </div>
            <ButtonStyled type="delete" onClick={() => {deleteContact(currentContact!.id); setIsOpen(false);}}>DELETE</ButtonStyled>
        </ViewContactInfoStyled>
    );
};
