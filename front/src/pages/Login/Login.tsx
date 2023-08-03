import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLogin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";

import { LoginRegisterFormStyled } from "../../components/Form/LoginRegisterDiv/LoginRegisterForm/LoginRegisterFormStyled";
import { Header } from "../../components/Header/Header";
import { LoginStyled } from "./LoginStyled";
import { Input } from "../../components/Form/LoginRegisterDiv/Input/Input";
import { ButtonStyled } from "../../components/Form/LoginRegisterDiv/Button/ButtonStyled";
import { Link } from "react-router-dom";
import { ILoginData } from "../../contexts/UserContext/@userTypes";
import { loginSchema } from "./validator";
import { useUserContext } from "../../contexts/UserContext/UserContext";

export const Login = () => {
    const { userLogin } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });

    const submit: SubmitHandler<ILoginData> = async (data) => {
        userLogin(data);
    };

    return (
        <LoginStyled>
            <Header />
            <LoginRegisterFormStyled onSubmit={handleSubmit(submit)}>
                <div className="head">
                    <AiOutlineLogin className="yellow__text" size={70} />
                    <div className="texts">
                        <h1 className="yellow__text">Welcome!</h1>
                        <p className="yellow__text fs__10">
                            Enter your informatiosn down bellow to signin
                        </p>
                    </div>
                </div>
                <form>
                    <Input
                        placeholder="Email"
                        type="email"
                        children={<MdEmail />}
                        register={register("email")}
                        errors={errors.email?.message}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        children={<HiLockClosed />}
                        register={register("password")}
                        errors={errors.password?.message}
                    />
                    <ButtonStyled className="btn">Get Started</ButtonStyled>

                    <div className="signup">
                        <p className="yellow__text--opacity">
                            Don't have an account?
                        </p>
                        <Link
                            to="/register"
                            className="pink__text fw__700 ff__Sulphur"
                        >
                            SINGUP
                        </Link>
                    </div>
                </form>
            </LoginRegisterFormStyled>
        </LoginStyled>
    );
};
