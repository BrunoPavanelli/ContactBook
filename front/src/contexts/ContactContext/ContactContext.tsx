import { createContext, useContext, useState } from "react";

import { IChildren } from "../../@types/@globalTypes";
import { IContact, IContactContext, IContactRegisterData } from "./@contactTypes";
import { api } from "../../service/api";

export const ContactContext = createContext<IContactContext>({} as IContactContext);

export const ContactProvider = ({children}: IChildren) => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [currentContact, setCurrentContact] = useState<IContact | null>(null);

    const retrieveUserContact = async () => {
        const token = localStorage.getItem("@ContactBook:Token");

        try {
            const { data } = await api.get<IContact[]>("/contact/token", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setContacts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const registerNewContact = async (formData: IContactRegisterData) => {
        const token = localStorage.getItem("@ContactBook:Token");

        try {
            const { data } = await api.post<IContact>("/contact", formData ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setContacts([...contacts, data]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContactContext.Provider value={{
            contacts,
            setContacts,
            currentContact,
            setCurrentContact,
            retrieveUserContact,
            registerNewContact
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);