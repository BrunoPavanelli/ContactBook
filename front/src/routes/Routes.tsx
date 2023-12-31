import { Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./Outlets/ProtectedRoutes";
import { PublicRoutes } from "./Outlets/PublicRoutes";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { UserDash } from "../pages/UserDash/UserDash";
import { ContactProvider } from "../contexts/ContactContext/ContactContext";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoutes />}>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/dashboard" element={<ContactProvider><ProtectedRoutes /></ContactProvider>}>
                <Route index element={<UserDash />} />
            </Route>
        </Routes>
    );
};
