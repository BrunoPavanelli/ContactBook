import { createContext, useContext, useState } from "react";

import { IChildren } from "../../@types/@globalTypes";
import { IContact, IContactContext, IContactRegisterData } from "./@contactTypes";
import { api } from "../../service/api";
import { toast } from "react-toastify";

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

            toast.success("Success!");
            setContacts([...contacts, data]);
        } catch (error) {
            console.log(error);
        }
    };
    
    const deletePhoneNumberOrEmail = async (id: string, type: "email" | "phone") => {
        const token = localStorage.getItem("@ContactBook:Token");
        console.log(type, id);
        try {
            await api.delete(`/contact/${type}/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            let newCurrentContact = null;

            if (type === "email") {
                newCurrentContact = {
                    ...currentContact!,
                    emails: currentContact!.emails.filter(email => email.id !== id)
                };
            } else {
                newCurrentContact = {
                    ...currentContact!,
                    phoneNumbers: currentContact!.phoneNumbers.filter(phone => phone.id !== id)
                };
            }

            toast.success("Success!");
            setCurrentContact(newCurrentContact);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContact = async (id: string) => {
        const token = localStorage.getItem("@ContactBook:Token");

        try {
            await api.delete(`/contact/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Success!");
            setContacts(contacts.filter(contact => contact.id !== id));
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
            registerNewContact,
            deleteContact,
            deletePhoneNumberOrEmail
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);