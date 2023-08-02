import { AiOutlineLogin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { RegisterStyled } from "./RegisterStyled";
import { Header } from "../../components/Header/Header";
import { LoginRegisterFormStyled } from "../../components/Form/LoginRegisterDiv/LoginRegisterForm/LoginRegisterFormStyled";
import { ButtonStyled } from "../../components/Form/LoginRegisterDiv/Button/ButtonStyled";
import { Input } from "../../components/Form/LoginRegisterDiv/Input/Input";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <RegisterStyled>
            <Header/>
            <LoginRegisterFormStyled>
                <div className="head" >
                    <AiOutlineLogin className="yellow__text" size={70}/>
                    <div className="texts">
                        <h1 className="yellow__text">Hello!</h1>
                        <p className="yellow__text fs__10">Enter your informatiosn down bellow to signiup</p>
                    </div>
                </div>
                <form>
                    <Input placeholder="Username" type="text" children={<MdEmail/>}/>
                    <Input placeholder="Email" type="email" children={<FaUser/>}/>
                    <Input placeholder="Password" type="password" children={<HiLockClosed/>}/>
                    <ButtonStyled className="btn">Register</ButtonStyled>

                    <div className="signup">
                        <p className="yellow__text--opacity">Already have an account?</p>
                        <Link to="/" className="pink__text fw__700 ff__Sulphur">SINGIN</Link>
                    </div>
                </form>
            </LoginRegisterFormStyled>
        </RegisterStyled>
    );
};
