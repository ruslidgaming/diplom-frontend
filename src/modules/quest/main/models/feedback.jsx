import { makeAutoObservable } from "mobx";
import { SetFeedbak } from "../service/login-service";

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

    sendMessage(data) {

        SetFeedbak(data)
            .then((info) => {
                console.log(info)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

const deedbackModel = new FeedbackModel();
export default deedbackModel;