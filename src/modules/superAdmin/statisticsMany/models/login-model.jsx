import { makeAutoObservable } from "mobx";

class ListAdminModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _search = '';

    get search() {
        return this._search;
    }

    setSearch(search) {
        this._search = search;
    }

    searchInfo() {
        console.log('search', this._search)
    }
}

const listAdminModel = new ListAdminModel();
export default listAdminModel;