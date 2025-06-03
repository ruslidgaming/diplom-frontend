import { makeAutoObservable } from "mobx";
import { loginMetodist, loginUser } from "../service/login-service";



class LoginModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _role = 'admin'

    get role() {
        return this._role;
    }

    setRole(role) {
        this._email = "";
        this._login = "";
        this._role = role;
    }

    setLogin(signin, data) {
        if (this._role == "admin") {
            loginUser({
                email: data.email,
                password: data.password,
            })
                .then(x => {
                    signin(x.data);
                    if (x.data.user.role == "admin") {
                        window.location.href = '/admin/courses';
                    } else {
                        window.location.href = '/profile/listadmin';
                    }
                })
                .catch(error => {
                    const errorData = error.response.data.errors;

                    for (let key in errorData) {
                        toast.error(errorData[key][0]);
                    }
                })
        }


        if (this._role == "mentor") {
            console.log({
                login: data.login,
                password: data.password,
            })

            loginMetodist({
                login: data.login,
                password: data.password,
            })
                .then(x => {
                    console.log(x)
                    // signin(x.data);
                    // window.location.href = '/admin/courses';
                }).catch(() => {
                    console.log('ошибка')
                })
        }
    }
}

const loginModel = new LoginModel();
export default loginModel;