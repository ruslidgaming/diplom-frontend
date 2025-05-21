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

    login() {

        if (this._role == "admin") { }

        let data = {
            email: this.email,
            password: this.password,
        }
    }
}

const loginModel = new LoginModel();
export default loginModel;