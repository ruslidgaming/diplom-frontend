import { makeAutoObservable } from "mobx";

export class FeedbackModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _name = "";
    _telephone = "";

    get name() {
        return this._name;
    }

    get telephone() {
        return this._telephone;
    }

    setName(value) {
        this._name = value;
    }

    setTelephone(value) {
        this._telephone = value
    }

    sendMessage() {
        console.log(`Отправить ${this.name} ${this.telephone}`);
    }
}

const deedbackModel = new FeedbackModel();
export default deedbackModel;