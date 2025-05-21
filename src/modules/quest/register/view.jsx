import { observer } from "mobx-react-lite";
import registerModel from "./models/register-model.jsx";
import FromRegLog from "../../layout/components/form.jsx";
import DivInput from "../../../core/UIKit/input.jsx";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Icon from "../../../core/UIKit/icons.jsx";
import { useForm } from 'react-hook-form';
import Input from "./Input.jsx";


function Register() {
    const {
        name,
        surname,
        oldname,
        companyName,
        companyDescription,
        telephon,
        email,
        password,
        password_r,
        errors,
        setEmail,
        setPassword,
        setOldname,
        setPassword_r,
        setCompanyName,
        setCompanyDescription,
        setTelephon,
        setName,
        setSurname,
        setRegister,
    } = registerModel;

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_r, setShowPassword_r] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }
    const togglePasswordVisibility_r = () => {
        setShowPassword_r(prevState => !prevState);
    }

    return <>

        <FromRegLog className="regLog__form" formType="register" formTitle="Регистрация" submitText="Регистрация" onSubmit={setRegister} disciption={
            <p className="regLog__description">
                У вас есть аккаунт? <a href="/login">Войти</a>
            </p>
        }>

            <Input
                label="Фамилия"
                placeholder="Фамилия"
                required
                value={surname}
                onChange={setSurname}
                errors={errors.surname !== "" ? errors.surname : ''}
            />
            <Input
                label="Имя"
                placeholder="Имя"
                required
                value={name}
                onChange={setName}
                errors={errors.name !== "" ? errors.name : ''}
            />
            <Input
                label="Отчество"
                placeholder="Отчество"
                value={oldname}
                onChange={setOldname}
                errors={errors.oldname !== "" ? errors.oldname : ''}
            />

            <Input
                label="Номер телефона"
                placeholder="Номер телефона"
                required
                value={telephon}
                onChange={setTelephon}
                errors={errors.telephon !== "" ? errors.telephon : ''}
            />

            <Input
                type="email"
                label="Почта"
                placeholder="Почта"
                value={email}
                onChange={setEmail}
                required
                errors={errors.email !== "" ? errors.email : ''}
            />

            <Input
                type="text"
                label="Название училища"
                required
                placeholder="Название училища"
                value={companyName}
                onChange={setCompanyName}
                errors={errors.companyName !== "" ? errors.companyName : ''}
            />
            <DivInput className="regLog__textarea" label="Описание училища*">
                <textarea placeholder="Описание училища" onChange={e => setCompanyDescription(e.target.value)}>{companyDescription}</textarea>
            </DivInput>

            {errors.companyDescription !== "" && (<p style={{ color: "red" }}>{errors.companyDescription}</p>)}

            <Input
                type={showPassword ? "text" : "password"}
                label="Пароль"
                placeholder="Пароль"
                required
                value={password}
                onChange={setPassword}
                errors={errors.password !== "" ? errors.password : ''}
            >
                <div className="input-password__icon" onClick={togglePasswordVisibility}>
                    <Icon name={showPassword ? "eye-slash" : "eye"} />
                </div>
            </Input>
            <Input
                type={showPassword_r ? "text" : "password"}
                label="Пароль"
                required
                placeholder="Пароль"
                value={password_r}
                onChange={setPassword_r}
                errors={errors.password_r !== "" ? errors.password_r : ''}
            >
                <div className="input-password__icon" onClick={togglePasswordVisibility_r}>
                    <Icon name={showPassword_r ? "eye-slash" : "eye"} />
                </div>
            </Input>
        </FromRegLog>

    </>

}

export default observer(Register);