import { BsTelephonePlusFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

import { Header } from "../../components/Header/Header";
import { UserDashStyled } from "./UserDashStyled";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { Modal } from "../../components/Modal/Modal";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { useContactContext } from "../../contexts/ContactContext/ContactContext";
import { useEffect } from "react";

export const UserDash = () => {
    const { isOpen, setIsOpen, setModalType, userLogout } = useUserContext();
    const { contacts, retrieveUserContact } = useContactContext();

    useEffect(() => {
        retrieveUserContact();
    }, []);

    return (
        <UserDashStyled>
            {isOpen ? <Modal/> : null}
            <Header children={<BiLogOutCircle className="yellow__text logout__btn" onClick={() => userLogout()} size={35}/>}/>
            <main className="container__page">
                <div className="operation__bar">
                    <div className="operation__div" onClick={() => {setIsOpen(true); setModalType("newcontact");}}>
                        <BsTelephonePlusFill className="yellow__text" size={15}/>
                        <p className="yellow__text">New contact</p>
                    </div>
                    <div className="operation__div" onClick={() => {setIsOpen(true); setModalType("editprofile");}}>
                        <AiFillEdit className="yellow__text" size={15}/>
                        <p className="yellow__text">Edit personal infos</p>
                    </div>
                </div>
                <ul>
                    {contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)}
                </ul>
            </main>
            
        </UserDashStyled>
    );
};