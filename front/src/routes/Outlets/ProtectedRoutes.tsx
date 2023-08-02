import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    // const token = localStorage.getItem("@ContactBook:Token");

    // return token ? <Outlet /> : <Navigate to="/"/>;
    return <Outlet/>;
};


