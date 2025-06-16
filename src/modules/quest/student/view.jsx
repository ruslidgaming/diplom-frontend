import { observer } from "mobx-react-lite";
import registerModel from "./models/register-model.jsx";
import FromRegLog from "../../layout/components/form.jsx";
import DivInput from "../../../core/UIKit/input.jsx";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Icon from "../../../core/UIKit/icons.jsx";
import { useForm } from 'react-hook-form';


function Register() {
    const { setRegister, setAdmminId } = registerModel;

    const { id } = useParams();

    useEffect(() => {
        setAdmminId(id)
    }, [])

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_r, setShowPassword_r] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }
    const togglePasswordVisibility_r = () => {
        setShowPassword_r(prevState => !prevState);
    }

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

    return <>

        <FromRegLog className="regLog__form" formType="register" formTitle={<p>Регистрация <br /> в систему</p>} submitText={isSubmitting ? "Регистрация..." : "Регистрация"} onSubmit={handleSubmit(setRegister)} disciption={
            <>
                <p className="regLog__description">
                    У вас есть аккаунт? <a href={`/student/${id}/login`}>Войти</a>
                </p>
                <br />
                <p className="regLog__description-back">
                    <a href={`/page/${id}`}>Вернуться на сайт</a>
                </p>
            </>

        }>


            <DivInput className="regLog__textarea" label={<p>Фамилия <span style={{ color: "red" }}>*</span></p>}>
                <input type="text" placeholder="Фамилия"
                    {...register('surname', {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[А-яA-z]+$/,
                            message: "Разрешены только буквы"
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимум 20 символов",
                        }
                    })} />
            </DivInput>
            {errors?.surname && (<p style={{ color: "red" }}>{errors?.surname?.message}</p>)}

            <DivInput className="regLog__textarea" label={<p>Имя <span style={{ color: "red" }}>*</span></p>}>
                <input type="text" placeholder="Имя"
                    {...register('name', {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[А-яA-z]+$/,
                            message: "Разрешены только буквы"
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимум 20 символов",
                        }
                    })} />
            </DivInput>
            {errors?.name && (<p style={{ color: "red" }}>{errors?.name?.message}</p>)}

            <DivInput className="regLog__textarea" label={<p>Отчество</p>}>
                <input type="text" placeholder="Отчество"
                    {...register('oldname', {
                        pattern: {
                            value: /^[А-яA-z]+$/,
                            message: "Разрешены только буквы"
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимум 20 символов",
                        }
                    })} />
            </DivInput>
            {errors?.oldname && (<p style={{ color: "red" }}>{errors?.oldname?.message}</p>)}

            <DivInput className="regLog__textarea" label={<p>Номер телефона <span style={{ color: "red" }}>*</span></p>}>
                <input
                    type="tel"
                    placeholder="Номер телефона"
                    {...register('telephon', {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
                            message: "Введите корректный номер телефона"
                        },
                        minLength: {
                            value: 5,
                            message: "Номер слишком короткий"
                        },
                        maxLength: {
                            value: 20,
                            message: "Номер слишком длинный"
                        }
                    })}
                />
            </DivInput>
            {errors?.telephon && (<p style={{ color: "red" }}>{errors?.telephon?.message}</p>)}

            <DivInput className="regLog__textarea" label={<p>Почта <span style={{ color: "red" }}>*</span></p>}>
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

            <DivInput className="regLog__textarea" label={<p>Повторите пароль <span style={{ color: "red" }}>*</span></p>}>
                <input type={showPassword_r ? "text" : "password"} placeholder="Повторите пароль"
                    {...register('password_r', {
                        required: "Поле обязательно",
                        validate: (value) => value === getValues('password') || "Пароли не совпадают",
                    })} />

                <div className="input-password__icon" onClick={togglePasswordVisibility_r}>
                    <Icon name={showPassword_r ? "eye-slash" : "eye"} />
                </div>
            </DivInput>
            {errors?.showPassword_r && (<p style={{ color: "red" }}>{errors?.showPassword_r?.message}</p>)}
        </FromRegLog>
    </>

}

export default observer(Register);