export interface IContactContext {
    contacts: IContact[],
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>,
    currentContact: IContact | null,
    setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>,
    retrieveUserContact: () => Promise<void>,
    registerNewContact: (formData: IContactRegisterData) => Promise<void>,
    deletePhoneNumberOrEmail: (id: string, type: "email" | "phone") => Promise<void>,
    deleteContact: (id: string) => Promise<void>,
}

export interface IPhoneNumber {
    id: string,
    phoneNumber: string
}

export interface IEmail {
    id: string,
    email: string   
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