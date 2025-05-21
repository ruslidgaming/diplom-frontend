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

        const data = {
            email: this.email,
            password: this.password,
        }
<<<<<<< HEAD

        loginUser(data)
                    .then(x => {
                        console.log(x)
                    }).catch(() => {
                        console.log('ошибка')
                    })

        
=======
>>>>>>> ba47323e7eb3792a32974aaed19cee43f3784db4
    }
}

const loginModel = new LoginModel();
export default loginModel;