export interface IUserContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalType: string;
    setModalType: React.Dispatch<React.SetStateAction<string>>
    userLogin: (loginData: ILoginData) => Promise<void>;
    userRegister: (registerData: IRegisterData) => Promise<void>;
    userLogout: () => void;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData extends ILoginData {
    name: string;
}

export interface IDecodedToken {
    email: string;
    id: string;
}