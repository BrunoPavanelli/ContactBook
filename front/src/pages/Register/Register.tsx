import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { IRegisterData } from "../../contexts/UserContext/@userTypes";
import { registerSchema } from "./validator";
import { useUserContext } from "../../contexts/UserContext/UserContext";

export const Register = () => {
    const { userRegister } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterData>({
        resolver: zodResolver(registerSchema)
    });

    const submit: SubmitHandler<IRegisterData> = async (data) => {
        userRegister(data);
    };

    return (
        <RegisterStyled onSubmit={handleSubmit(submit)}>
            <Header />
            <LoginRegisterFormStyled>
                <div className="head">
                    <AiOutlineLogin className="yellow__text" size={70} />
                    <div className="texts">
                        <h1 className="yellow__text">Hello!</h1>
                        <p className="yellow__text fs__10">
                            Enter your informatiosn down bellow to signiup
                        </p>
                    </div>
                </div>
                <form>
                    <Input
                        placeholder="Username"
                        type="text"
                        children={<FaUser />}
                        register={register("name")}
                        errors={errors.name?.message}
                    />
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
                    <ButtonStyled className="btn">Register</ButtonStyled>

                    <div className="signup">
                        <p className="yellow__text--opacity">
                            Already have an account?
                        </p>
                        <Link to="/" className="pink__text fw__700 ff__Sulphur">
                            SINGIN
                        </Link>
                    </div>
                </form>
            </LoginRegisterFormStyled>
        </RegisterStyled>
    );
};
