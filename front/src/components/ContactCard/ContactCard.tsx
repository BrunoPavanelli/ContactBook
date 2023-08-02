import { ContactCardStyled } from "./ContactCardStyled";

import { CgDetailsMore } from "react-icons/cg";

export const ContactCard = () => {
    return (
        <ContactCardStyled>
            <div className="more__infos">
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
