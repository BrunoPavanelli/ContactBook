import { FaUser } from "react-icons/fa";
import { ViewContactInfoStyled } from "../ModalStyled";

import { ContactsInfoCard } from "./ContactInfosCard";
import { useContactContext } from "../../../contexts/ContactContext/ContactContext";


export const ViewContactInfos = () => {
    const { currentContact} = useContactContext();

    const phones = currentContact!.phoneNumbers;
    const emails = currentContact!.emails;

    return (
        <ViewContactInfoStyled>
            <div className="head">
                <FaUser className="yellow__text" size={50} />
                <div className="texts">
                    <h1 className="yellow__text">Contact Name</h1>
                </div>
            </div>
            <ul className="contact__infos">
                {phones.map((phone, index) => <ContactsInfoCard key={phone.id} info={phone.phoneNumber} count={index + 1} type="phone" id={phone.id}/>)}
                {emails.map((email, index) => <ContactsInfoCard key={email.id} info={email.email} count={index + 1} type="email" id={email.id}/>)}
            </ul>
        </ViewContactInfoStyled>
    );
};
