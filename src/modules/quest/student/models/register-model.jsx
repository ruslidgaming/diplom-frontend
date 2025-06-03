import { makeAutoObservable } from "mobx";
import { registerUser } from "../service/login-service";
import { toast } from "react-toastify";

class RegisterModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setRegister(data) {
        const body = {
            name: data.name,
            surname: data.surname,
            oldname: data.oldname,
            telephon: data.telephon,
            email: data.email,
            password: data.password,
            password_r: data.password_r,
        }

        registerUser(body)
            .then(x => {
                window.location.href = '/sudent/login';
            }).catch(error => {
                const errorData = error.response.data.errors;

                for (let key in errorData) {
                    toast.error(errorData[key][0]);
                }
            })
    }
}

const registerModel = new RegisterModel();
export default registerModel;