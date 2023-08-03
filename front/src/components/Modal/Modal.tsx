import { useRef, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { ModalDivStyled, ModalStyled } from "./ModalStyled";
import { useUserContext } from "../../contexts/UserContext/userContext";

export const Modal = () => {
    const { setIsOpen } = useUserContext();
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
                <IoIosCloseCircle size={30} ref={buttonRef} className="yellow__text close__btn" onClick={() => setIsOpen(false)}/>
                <button
                    className="hidden__btn"
                    ref={buttonRef}
                    onClick={() => setIsOpen(false)}
                />
            </ModalStyled>
        </ModalDivStyled>
    );
};
