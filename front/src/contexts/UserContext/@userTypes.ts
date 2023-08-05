export interface IUserContext {
    user: IUser | null;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalType: string;
    setModalType: React.Dispatch<React.SetStateAction<string>>
    userLogin: (loginData: ILoginData) => Promise<void>;
    userRegister: (registerData: IRegisterData) => Promise<void>;
    userLogout: () => void;
    userUpdate: (data: IUpdateData) => Promise<void>;
    userDelete: () => Promise<void>
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
    sub: string;
    exp: bigint;
    iat: bigint; 
}

export interface IUpdateData {
    email?: string;
    password?: string;
    name?: string;
}

export interface IUser {
    email: string;
    id: string;
    name: string;
}