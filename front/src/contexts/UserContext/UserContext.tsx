import { createContext, useContext, useState } from "react";
import { IChildren } from "../../@types/@globalTypes";
import { IUserContext } from "./@userTypes";

export const UserContext= createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <UserContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);