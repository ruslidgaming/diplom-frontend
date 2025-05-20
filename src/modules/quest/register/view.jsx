import { observer } from "mobx-react-lite";
import registerModel from "./models/register-model.jsx";
import FromRegLog from "../../layout/components/form.jsx";
import DivInput from "../../../core/UIKit/input.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "../../../core/UIKit/icons.jsx";

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
        setEmail,
        setPassword,
        setOldname,
        setPassword_r,
        setCompanyName,
        setCompanyDescription,
        setTelephon,
        setName,
        setSurname,
        register
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

        <FromRegLog className="regLog__form" formType="register" formTitle="Регистрация" submitText="Регистрация" onSubmit={register} disciption={
            <p className="regLog__description">
                У вас есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        }>

            <DivInput className="regLog__input" label="Фамилия*">
                <input type="text" placeholder="Фамилия" value={name} onChange={e => setName(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__input" label="Имя*">
                <input type="text" placeholder="Имя" value={surname} onChange={e => setSurname(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__input" label="Отчество">
                <input type="text" placeholder="Отчество" value={oldname} onChange={e => setOldname(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__input" label="Номер телефона*">
                <input type="text" placeholder="Номер телефона" value={telephon} onChange={e => setTelephon(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__input" label="Почта*">
                <input type="text" placeholder="Почта" value={email} onChange={e => setEmail(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__input" label="Название училища*">
                <input type="text" placeholder="Название училища" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </DivInput>
            <DivInput className="regLog__textarea" label="Описание училища*">
                <textarea placeholder="Описание училища" onChange={e => setCompanyDescription(e.target.value)}>{companyDescription}</textarea>
            </DivInput>
            <DivInput className="regLog__input" label="Пароль*">
                <input type={showPassword ? "text" : "password"} placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="input-password__icon" onClick={togglePasswordVisibility}>
                    <Icon name={showPassword ? "eye-slash" : "eye"} />
                </div>
            </DivInput>
            <DivInput className="regLog__input" label="Повторите пароль*">
                <input type={showPassword_r ? "text" : "password"} placeholder="Повторите пароль" value={password_r} onChange={e => setPassword_r(e.target.value)} />
                <div className="input-password__icon" onClick={togglePasswordVisibility_r}>
                    <Icon name={showPassword_r ? "eye-slash" : "eye"} />
                </div>
            </DivInput>

        </FromRegLog>

    </>

}

export default observer(Register);