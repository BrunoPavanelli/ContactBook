export interface IContactContext {
    contacts: IContact[],
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>,
    retrieveUserContact: () => Promise<void>
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