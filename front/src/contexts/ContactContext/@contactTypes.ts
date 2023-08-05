export interface IContactContext {
    contacts: IContact[],
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>,
    currentContact: IContact | null,
    setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>,
    retrieveUserContact: () => Promise<void>,
    registerNewContact: (formData: IContactRegisterData) => Promise<void>,
    registerPhoneOrEmailForContact: (info: IInfolUpdate, contactId: string, type: "email" | "phone") => Promise<void>
    updatePhoneOrEmail: (newInfo: IInfolUpdate, contactId: string, id: string, type: "email" | "phone") => Promise<void>,
    deletePhoneNumberOrEmail: (id: string, type: "email" | "phone", contactId: string) => Promise<void>,
    deleteAllPhonesOrEmailsForContact: (id: string, type: "email" | "phone") => Promise<void>,
    deleteAllPhonesAndEmailsForContact: (id: string) => Promise<void>
    deleteContact: (id: string) => Promise<void>,
}

export interface IPhoneNumber {
    id: string,
    phoneNumber: string
}

export interface IPhoneNumberUpdate {
    phoneNumber: string
}

export interface IEmail {
    id: string,
    email: string   
}

export interface IInfolUpdate {
    email?: string 
    phoneNumber?: string 
}

export interface IContact {
    id: string,
    name: string,
    userId: string,
    phoneNumbers: IPhoneNumber[],
    emails: IEmail[],
}

export interface IContactRegister {
    name: string,
    [key: string]: string
}

export interface IContactRegisterData {
    name: string,
    phoneNumbers: string[],
    emails: string[]  
}