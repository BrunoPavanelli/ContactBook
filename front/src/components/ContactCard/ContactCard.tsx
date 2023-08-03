import { CgDetailsMore } from "react-icons/cg";


import { ContactCardStyled } from "./ContactCardStyled";
import { useUserContext } from "../../contexts/UserContext/UserContext";


export const ContactCard = () => {
    const { setIsOpen } = useUserContext();

    return (
        <ContactCardStyled>
            <div className="more__infos" onClick={() => setIsOpen(true)}>
                <CgDetailsMore className="pink__text" size={30} />
                <p className="pink__text">View all infos</p>
            </div>
            <div className="contact__infos">
                <p className="yellow__text">Contact Name</p>
                <p className="yellow__text">11-8647235</p>
                <p className="yellow__text">emailcontact@mail.com</p>
            </div>
        </ContactCardStyled>
    );
};
