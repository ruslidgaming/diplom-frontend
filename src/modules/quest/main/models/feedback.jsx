import { makeAutoObservable } from "mobx";
import { SetFeedbak } from "../service/login-service";

export class FeedbackModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _name = "";
    _telephone = "";
    _isSent = true;

    get name() {
        return this._name;
    }
    get isSent() {
        return this._isSent;
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
        data['id'] = 1;
        SetFeedbak(data)
            .then((info) => {
                this._isSent = false
                console.log(info)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

const deedbackModel = new FeedbackModel();
export default deedbackModel;