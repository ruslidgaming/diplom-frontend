import { makeAutoObservable } from "mobx";
import { loginUser } from "../service/login-service";



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

        const body = {
            email: data.email,
            password: data.password,
        }

        if (this._role == "admin") {
            loginUser(body)
                .then(x => {
                    signin(x.data);
                    window.location.href = '/admin/courses';
                })
                .catch(error => {
                    const errorData = error.response.data.errors;

                    for (let key in errorData) {
                        toast.error(errorData[key][0]);
                    }
                })
        }
        if (this._role == "mentor") {
            loginUser(body)
                .then(x => {
                    console.log(x)
                }).catch(() => {
                    console.log('ошибка')
                })
        }
    }
}

const loginModel = new LoginModel();
export default loginModel;