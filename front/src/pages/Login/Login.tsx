import { AiOutlineLogin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";

import { LoginRegisterFormStyled } from "../../components/Form/LoginRegisterDiv/LoginRegisterForm/LoginRegisterFormStyled";
import { Header } from "../../components/Header/Header";
import { LoginStyled } from "./LoginStyled";
import { Input } from "../../components/Form/LoginRegisterDiv/Input/Input";
import { ButtonStyled } from "../../components/Form/LoginRegisterDiv/Button/ButtonStyled";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <LoginStyled>
            <Header/>
            <LoginRegisterFormStyled>
                <div className="head" >
                    <AiOutlineLogin className="yellow__text" size={70}/>
                    <div className="texts">
                        <h1 className="yellow__text">Welcome!</h1>
                        <p className="yellow__text fs__10">Enter your informatiosn down bellow to signin</p>
                    </div>
                </div>
                <form>
                    <Input placeholder="Email" type="email" children={<MdEmail/>}/>
                    <Input placeholder="Password" type="password" children={<HiLockClosed/>}/>
                    <ButtonStyled className="btn">Get Started</ButtonStyled>

                    <div className="signup">
                        <p className="yellow__text--opacity">Don't have an account?</p>
                        <Link to="/register" className="pink__text fw__700 ff__Sulphur">SINGUP</Link>
                    </div>
                </form>
            </LoginRegisterFormStyled>
        </LoginStyled>
    );
};