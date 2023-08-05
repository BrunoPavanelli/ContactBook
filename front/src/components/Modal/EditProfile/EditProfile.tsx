import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { IUpdateData } from "../../../contexts/UserContext/@userTypes";
import { useUserContext } from "../../../contexts/UserContext/UserContext";
import { registerSchema } from "../../../pages/Register/validator";
import { ButtonStyled } from "../../Form/LoginRegisterDiv/Button/ButtonStyled";
import { Input } from "../../Form/LoginRegisterDiv/Input/Input";
import { EditProfileStyled } from "../ModalStyled";

export const EditProfile = () => {
    const { userDelete, userUpdate } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateData>({
        resolver: zodResolver(registerSchema),
    });

    const submit: SubmitHandler<IUpdateData> = async (data) => {
        userUpdate(data);
    };

    return (
        <EditProfileStyled>
            <div className="head">
                <AiOutlineLogin className="yellow__text" size={70} />
                <div className="texts">
                    <h1 className="yellow__text">Profile</h1>
                    <p className="yellow__text fs__10">
                        Enter your informations down bellow to edit.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(submit)}>
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
                <ButtonStyled className="btn">Edit Infos</ButtonStyled>
            </form>
            <ButtonStyled type="delete">DELETE</ButtonStyled>
        </EditProfileStyled>
    );
};


