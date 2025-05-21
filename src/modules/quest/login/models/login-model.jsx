import { makeAutoObservable } from "mobx";
import { loginUser } from "../service/login-service";



class LoginModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }


    _email = '';
    _password = '';
    _login = '';
    _role = 'admin';

    get role() {
        return this._role;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get login() {
        return this._login;
    }

    setLogin(login) {
        this._login = login;
    }

    setEmail(email) {
        this._email = email;
    }

    setPassword(password) {
        this._password = password;
    }


    setRole(role) {
        this._email = "";
        this._login = "";
        this._role = role;
    }

    login(signin) {

        if (this._role == "admin") {
            const data = {
                email: this.email,
                password: this.password,
            }

            loginUser(data)
                .then(x => {
                    signin(x.data);
                    window.location.href = '/admin/courses';
                }).catch(error => {
                    const errorData = error.response.data.errors;

                    for (let key in errorData) {
                        toast.error(errorData[key][0]);
                    }
                })
        }
        loginUser(data)
            .then(x => {
                console.log(x)
            }).catch(() => {
                console.log('ошибка')
            })
    }
}

const loginModel = new LoginModel();
export default loginModel;