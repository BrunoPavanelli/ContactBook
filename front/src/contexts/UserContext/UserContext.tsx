import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import { IChildren } from "../../@types/@globalTypes";
import {
    IDecodedToken,
    ILoginData,
    IRegisterData,
    IUserContext,
} from "./@userTypes";
import { api } from "../../service/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const userLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.post("/auth", loginData);

            const decodedToken: IDecodedToken = jwt_decode(data.token);
            console.log(decodedToken);

            // localStorage.setItem("@ContactBook:Token", data.token);
            // navigate("/dashboard");

            toast.success("Succes!");
        } catch (err) {
            toast.error("Invalid Credentials!");
            console.log(err);
        }
    };

    const userRegister = async (registerData: IRegisterData) => {
        try {
            await api.post("/users", registerData);
            navigate("/");

            toast.success("Registered with Succes!");
        } catch (err) {
            console.log(err);
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@ContactBook:Token");
        navigate("/");

        toast.success("Godbye!");
    };

    const retrieveUserData = async () => {
        const token = localStorage.getItem("@ContactBook:Token");
        try {
            const { data } = await api.get("/users/token", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(data);
        } catch (error) {
            toast.warning("Please, login again :)");
            console.log(error);
            userLogout();
        }
    };

    return (
        <UserContext.Provider value={{ isOpen, setIsOpen, userLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
