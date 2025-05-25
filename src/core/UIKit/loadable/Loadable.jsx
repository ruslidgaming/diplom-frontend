import { makeAutoObservable } from "mobx";

class LoadableModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    loadable = true

    get isLoading() {
        return this.loadable;
    }

    setLoadable = (value) => {
        this.loadable = value
    }
}

const loadableModel = new LoadableModel();
export default loadableModel;