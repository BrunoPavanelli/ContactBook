import { BsTelephonePlusFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

import { Header } from "../../components/Header/Header";
import { UserDashStyled } from "./UserDashStyled";

export const UserDash = () => {
    return (
        <UserDashStyled>
            <Header/>
            <main className="container__page">
                <div className="operation__bar">
                    <div className="operation__div">
                        <BsTelephonePlusFill className="yellow__text" size={15}/>
                        <p className="yellow__text">New contact</p>
                    </div>
                    <div className="operation__div">
                        <AiFillEdit className="yellow__text" size={15}/>
                        <p className="yellow__text">Edit personal infos</p>
                    </div>
                </div>
            </main>
            
        </UserDashStyled>
    );
};