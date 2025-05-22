import { makeAutoObservable } from "mobx";
import { registerUser } from "../service/register-service";
import { toast } from "react-toastify";
import validator from "../../../../core/UIKit/Validator";

class RegisterModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setRegister(data) {
        const body = {
            name: data.name,
            surname: data.surname,
            oldname: data.oldname,
            email: data.email,
            telephon: data.telephon,
            companyName: data.companyName,
            companyDescription: data.companyDescription,
            password: data.password,
            password_r: data.password_r,
        }


        registerUser(body)
            .then(x => {
                window.location.href = '/login';
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