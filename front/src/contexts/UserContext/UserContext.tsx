import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import { IChildren } from "../../@types/@globalTypes";
import {
    IDecodedToken,
    ILoginData,
    IRegisterData,
    IUpdateData,
    IUser,
    IUserContext,
} from "./@userTypes";
import { api } from "../../service/api";
import jwtDecode from "jwt-decode";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    const retrieveUserData = async (id: string, token: string) => {
        const { data } = await api.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUser(data);
    };

    const userLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.post("/auth", loginData);

            const decodedToken: IDecodedToken = jwt_decode(data.token);
            retrieveUserData(decodedToken.sub, data.token);

            localStorage.setItem("@ContactBook:Token", data.token);
            navigate("/dashboard");

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

    const userDelete = async () => {
        const token = localStorage.getItem("@ContactBook:Token");
        const decodedToken: IDecodedToken = jwtDecode(token!);
        const userId: string = decodedToken.sub;

        try {
            await api.delete(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Account deleted with success!");
            userLogout();
        } catch (err) {
            console.log(err);
        }


    };

    const userUpdate = async (updateData: IUpdateData) => {
        const token = localStorage.getItem("@ContactBook:Token");
        const decodedToken: IDecodedToken = jwtDecode(token!);
        const userId: string = decodedToken.sub;

        try {
            const { data } = await api.patch(`/users/${userId}`, updateData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Update infos with Succes!");
            setUser(data);
            setIsOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isOpen,
                setIsOpen,
                modalType,
                setModalType,
                userLogin,
                userRegister,
                userLogout,
                userUpdate,
                userDelete,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
