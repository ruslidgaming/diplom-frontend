import { makeAutoObservable } from "mobx";
import { registerUser } from "../service/register-service";
import { toast } from "react-toastify";
import validator from "../../../../core/UIKit/Validator";

class RegisterModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _name = '';
    _surname = '';
    _oldname = '';
    _companyName = '';
    _companyDescription = '';
    _telephon = '';
    _email = '';
    _password = '';
    _password_r = '';
    _errors = [];

    get errors() {
        return this._errors;
    }

    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get oldname() {
        return this._oldname;
    }
    get companyName() {
        return this._companyName;
    }
    get companyDescription() {
        return this._companyDescription;
    }
    get telephon() {
        return this._telephon;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get password_r() {
        return this._password_r;
    }


    setEmail(email) {
        console.log(email)
        this._email = email;
    }

    setPassword(password) {
        this._password = password;
    }

    setOldname(oldname) {
        this._oldname = oldname;
    }

    setPassword_r(password_r) {
        this._password_r = password_r;
    }

    setCompanyName(companyName) {
        this._companyName = companyName;
    }

    setCompanyDescription(companyDescription) {
        this._companyDescription = companyDescription;
    }

    setTelephon(telephon) {

        this._telephon = telephon;

        if (telephon.length === 0) {
            this._errors['telephon'] = 'Поле обязательно для заполнения';
        }
    }

    setName(name) {
        if (name.length <= 30) {
            this._name = name;
            this._errors['name'] = '';
        }
        if (name.length < 2) {
            this._errors['name'] = 'Минимум 2 символа';
        }
        if (name.length === 0) {
            this._errors['name'] = 'Поле обязательно для заполнения';
        }
    }

    setSurname(surname) {
        if (surname.length <= 30) {
            this._surname = surname;
            this._errors['surname'] = '';
        }
        if (surname.length < 2) {
            this._errors['surname'] = 'Минимум 2 символа';
        }
        if (surname.length === 0) {
            this._errors['surname'] = 'Поле обязательно для заполнения';
        }
    }


    setRegister() {
        const data = {
            name: this.name,
            surname: this.surname,
            oldname: this.oldname,

            email: this.email,
            telephon: this.telephon,

            companyName: this.companyName,
            companyDescription: this.companyDescription,

            password: this.password,
            password_r: this.password_r,
        }


        registerUser(data)
            .then(x => {
                console.log(x)
            }).catch(error => {
                const errorData = error.response.data.errors;

                for (let key in errorData) {
                    toast.error(errorData[key][0]);

                    // console.log(errorData[key][0])
                    // toast(errorData[key][0], { progressStyle: { background: "red" } })
                }
            })
    }
}

const registerModel = new RegisterModel();
export default registerModel;