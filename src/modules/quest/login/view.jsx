import { observer } from "mobx-react-lite";
import loginModel from "./models/login-model.jsx";
import FromRegLog from "../../layout/components/form.jsx";
import DivInput from "../../../core/UIKit/input.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "../../../core/UIKit/icons.jsx";
import { useAuth } from "../../../core/hoc/AuthProvider.jsx";

function Login() {
    const { email,
        password,
        role,
        login,
        setLogin,
        setEmail,
        setPassword,
        setRole,
    } = loginModel;

    const { signin } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }

    return <>

        <FromRegLog className="regLog__form" formType="login" formTitle="Авторизация" submitText="Войти" onSubmit={() => login(signin)} disciption={
            <p className="regLog__description">
                У вас нету аккаунта? <a href="/register">Зарегистрироваться</a>
                <br />
                или <a href="/profile">Войти</a>
            </p>
        }>

            <div className="regLog__form-btns">
                <div className={`regLog__form-btn ${role == 'admin' && '_active'}`} onClick={() => setRole("admin")}>Админ</div>
                <div className={`regLog__form-btn ${role == 'mentor' && '_active'}`} onClick={() => setRole("mentor")}>Ментор</div>
            </div>

            <DivInput className="regLog__input" label={role == 'admin' ? "Почта*" : "Логин*"}>

                {role == 'admin' ?
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    :
                    <input type="text" placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} />
                }

            </DivInput>
            <DivInput className="regLog__input" label="Пароль*" >
                <input type={showPassword ? "text" : "password"} placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="input-password__icon" onClick={togglePasswordVisibility}>
                    <Icon name={showPassword ? "eye-slash" : "eye"} />
                </div>
            </DivInput>

        </FromRegLog>

    </>

}

export default observer(Login);