import { BsTelephonePlusFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

import { Header } from "../../components/Header/Header";
import { UserDashStyled } from "./UserDashStyled";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { Modal } from "../../components/Modal/Modal";
import { useUserContext } from "../../contexts/UserContext/userContext";

export const UserDash = () => {
    const { isOpen, setIsOpen } = useUserContext();

    return (
        <UserDashStyled>
            {isOpen ? <Modal/> : null}
            <Header children={<BiLogOutCircle className="yellow__text" size={35}/>}/>
            <main className="container__page">
                <div className="operation__bar">
                    <div className="operation__div" onClick={() => setIsOpen(true)}>
                        <BsTelephonePlusFill className="yellow__text" size={15}/>
                        <p className="yellow__text">New contact</p>
                    </div>
                    <div className="operation__div" onClick={() => setIsOpen(true)}>
                        <AiFillEdit className="yellow__text" size={15}/>
                        <p className="yellow__text">Edit personal infos</p>
                    </div>
                </div>
                <ul>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    
                </ul>
            </main>
            
        </UserDashStyled>
    );
};