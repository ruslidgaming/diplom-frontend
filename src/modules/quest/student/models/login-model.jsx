import { makeAutoObservable } from "mobx";
import { loginUser } from "../service/login-service";



class LoginModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    adminId = null

    setAdminId(data) {
        this.adminId = data;
    }

    setLogin(signin, data) {
        console.log(data)

        loginUser(data)
            .then(x => {
                console.log(x.data)
                signin(x.data);
                window.location.href = `/student/${this.adminId}/courses/my`;
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