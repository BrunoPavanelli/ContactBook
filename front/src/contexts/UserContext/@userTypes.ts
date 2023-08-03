export interface IUserContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    userLogin: (loginData: ILoginData) => Promise<void>;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData extends ILoginData {
    username: string;
}

export interface IDecodedToken {
    email: string;
    id: string;
}