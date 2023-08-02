import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
    const token = localStorage.getItem("@ContactBook:Token");

    return !token ? <Outlet /> : <Navigate to="/dashboard"/>;
};