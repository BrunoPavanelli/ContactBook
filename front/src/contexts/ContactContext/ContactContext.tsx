import { createContext, useContext, useState } from "react";

import { IChildren } from "../../@types/@globalTypes";
import { IContact, IContactContext } from "./@contactContext";
import { api } from "../../service/api";

export const ContactContext = createContext<IContactContext>({} as IContactContext);

export const ContactProvider = ({children}: IChildren) => {
    const [contacts, setContacts] = useState<IContact[]>([]);

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

    return (
        <ContactContext.Provider value={{
            contacts,
            setContacts,
            retrieveUserContact
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);