import { createContext, useContext, useState } from "react";

import { IChildren } from "../../@types/@globalTypes";
import { IContact, IContactContext, IContactRegisterData, IInfolUpdate } from "./@contactTypes";
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

    const registerPhoneOrEmailForContact = async (info: IInfolUpdate, contactId: string, type: "email" | "phone") => {
        const token = localStorage.getItem("@ContactBook:Token");
        try {
            const {data} = await api.post(`/contact/${type}/${contactId}`, info, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            let newCurrentContact = null;

            if (type === "email") {
                newCurrentContact = {
                    ...currentContact!,
                    emails: [data]
                };
            } else {
                newCurrentContact = {
                    ...currentContact!,
                    phoneNumbers: [data]
                };
            }

            const filterContacts = contacts.filter(contact => contact.id !== contactId);

            toast.success("Success!");
            setCurrentContact(newCurrentContact);
            setContacts([...filterContacts, newCurrentContact]);
        } catch (error) {
            console.log(error);
        }        
    };

    const updatePhoneOrEmail = async (newInfo: IInfolUpdate, contactId: string, id: string, type: "email" | "phone") => {
        const token = localStorage.getItem("@ContactBook:Token");
        try {
            const {data} = await api.patch(`/contact/${type}/${contactId}/${id}`, newInfo, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data);

            toast.success("Success!");
            setCurrentContact(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteAllPhonesOrEmailsForContact = async (id: string, type: "email" | "phone") => {
        const token = localStorage.getItem("@ContactBook:Token");

        try {
            await api.delete(`/contact/${type}/drainout/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            let newCurrentContact = null;

            if (type === "email") {
                newCurrentContact = {
                    ...currentContact!,
                    emails: []
                };
            } else {
                newCurrentContact = {
                    ...currentContact!,
                    phoneNumbers: []
                };
            }


            toast.success("Success!");
            setCurrentContact(newCurrentContact);
        } catch (error) {
            console.log(error);
        }         
    };
    
    const deletePhoneNumberOrEmail = async (id: string, type: "email" | "phone") => {
        const token = localStorage.getItem("@ContactBook:Token");
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

    const deleteAllPhonesAndEmailsForContact = async (id: string) => {
        const token = localStorage.getItem("@ContactBook:Token");
        try {
            await api.delete(`/contact/drainout/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const newCurrentContact = {
                ...currentContact!,
                emails: [],
                phoneNumbers: []
            };

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
            registerPhoneOrEmailForContact,
            updatePhoneOrEmail,
            deletePhoneNumberOrEmail,
            deleteAllPhonesOrEmailsForContact,
            deleteAllPhonesAndEmailsForContact,
            deleteContact,
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);