import { observer } from "mobx-react-lite";
import loginModel from "./models/login-model.jsx";
import FromRegLog from "../../layout/components/form.jsx";
import DivInput from "../../../core/UIKit/input.jsx";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "../../../core/UIKit/icons.jsx";
import { useAuth } from "../../../core/hoc/AuthProvider.jsx";
import { useForm } from "react-hook-form";

import logo from "../../../assets/img/logo.svg"
// import logo from "../../../assets/img/media/logo.svg";


function Login() {
    const { setLogin, setAdminId } = loginModel;
    const { signin, user } = useAuth();
    const { id } = useParams();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }

    useEffect(() => {
        setAdminId(id)
    }, [])

    const {
        register,
        formState: {
            errors,
            isValid,
            isSubmitting,
        },
        handleSubmit,
        getValues,
    } = useForm({
        mode: "onSubmit",
    });

    const handleSubmitForm = (data) => {
        setLogin(signin, data)
    }

    return <>

        <div className="regLog__student">
            {/* <div className="regLog__logo">
                <img src={logo} alt="logo" />
            </div> */}

            <FromRegLog className="regLog__form" formType="login" formTitle={<p>Авторизоваться <br /> в систему</p>} submitText="Войти" onSubmit={handleSubmit(handleSubmitForm)} disciption={
                <>

                    <p className="regLog__description">
                        <div className="regLog__svg">
                        </div>
                        У вас нету аккаунта? <a href={`/student/${id}/register`}>Зарегистрироваться</a>
                    </p>
                    <br />
                    <p className="regLog__description-back">
                        <a href={`/page/${id}`}>Вернуться на сайт</a>
                    </p>
                </>
            }>

                <DivInput className="regLog__input" label={<p>Почта<span style={{ color: "red" }}>*</span></p>}>

                    <input placeholder="Почта"
                        type="email"
                        {...register('email', {
                            required: "Поле обязательно",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Не корректная почта',
                            },
                            maxLength: {
                                value: 100,
                                message: "Максимум 100 символов",
                            }
                        })} />


                </DivInput>
                {errors?.email && (<p style={{ color: "red" }}>{errors?.email?.message}</p>)}

                <DivInput className="regLog__textarea" label={<p>Пароль <span style={{ color: "red" }}>*</span></p>}>
                    <input type={showPassword ? "text" : "password"} placeholder="Пароль"
                        {...register('password', {
                            required: "Поле обязательно",
                            maxLength: {
                                value: 20,
                                message: "Максимум 20 символов",
                            },
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов",
                            }
                        })} />

                    <div className="input-password__icon" onClick={togglePasswordVisibility}>
                        <Icon name={showPassword ? "eye-slash" : "eye"} />
                    </div>
                </DivInput>
                {errors?.password && (<p style={{ color: "red" }}>{errors?.password?.message}</p>)}
            </FromRegLog >
        </div >

    </>

}

export default observer(Login);