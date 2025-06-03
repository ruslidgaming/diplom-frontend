import { makeAutoObservable } from "mobx";
import { loginUser } from "../service/login-service";



class LoginModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setLogin(signin, data) {
        loginUser(data)
            .then(x => {
                console.log(x.data)
                signin(x.data);
                window.location.href = '/student/courses';
            })
            .catch(error => {
                const errorData = error.response.data.errors;

                for (let key in errorData) {
                    toast.error(errorData[key][0]);
                }
            })
    }
}

const loginModel = new LoginModel();
export default loginModel;