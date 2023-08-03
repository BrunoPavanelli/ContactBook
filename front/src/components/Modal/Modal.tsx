import { useRef, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { ModalDivStyled, ModalStyled } from "./ModalStyled";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { EditProfile } from "./EditProfile/EditProfile";
import { NewContact } from "./NewContact/NewContact";

export const Modal = () => {
    const { setIsOpen, modalType } = useUserContext();

    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleOutclick = (event: MouseEvent) => {
            if (!modalRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                buttonRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeydown);
        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("mousedown", handleOutclick);
        };
    }, []);

    return (
        <ModalDivStyled role="dialog">
            <ModalStyled ref={modalRef}>
                <IoIosCloseCircle size={30} ref={buttonRef} className="pink__text close__btn" onClick={() => setIsOpen(false)}/>
                <button
                    className="hidden__btn"
                    ref={buttonRef}
                    onClick={() => setIsOpen(false)}
                />
                {modalType === "editprofile"? <EditProfile/> : null}
                {modalType === "newcontact" ? <NewContact/> : null}
            </ModalStyled>
        </ModalDivStyled>
    );
};
