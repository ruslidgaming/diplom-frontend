import { makeAutoObservable } from "mobx";
import { registerUser } from "../service/login-service";
import { toast } from "react-toastify";

class RegisterModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    admminId = ''

    setAdmminId(id) {
        this.admminId = id
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
            id: this.admminId,
        }

        registerUser(body)
            .then(x => {
                window.location.href = `/sudent/${this.admminId}/login`;
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