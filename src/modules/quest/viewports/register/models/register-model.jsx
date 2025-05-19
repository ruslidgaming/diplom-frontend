import { makeAutoObservable } from "mobx";

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
    }

    setName(name) {
        this._name = name;
    }

    setSurname(surname) {
        this._surname = surname;
    }
}

const registerModel = new RegisterModel();
export default registerModel;