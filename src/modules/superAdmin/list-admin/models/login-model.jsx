import { makeAutoObservable } from "mobx";
import { listAdmin } from "../service/service"

class ListAdminModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }


    //  Работа с поиском
    _searchedModel = []; _searchValue = ""; _isSearch = false;
    get search() { return this._searchValue; }
    get isSearch() { return this._isSearch; }
    get searchedModel() { return this._searchedModel; }

    setSearch(value) {
        this._searchValue = value;
        this._isSearch = value != "";
        this._searchedModel = this._list.filter((item) => {
            return `${item.companyName} ${item.surname} ${item.name}`.toLowerCase().includes(value.toLowerCase());
        })
    }

    // Список
    _list = [];

    get list() {
        return this._list;
    }

    apiListData(setLoadable) {
        listAdmin()
            .then((res) => {
                this._list = res.data
            })
            .catch((err) => {
                console.log('err', err)
            })
            .finally(() => {
                setLoadable(false)
            })
    }
}

const listAdminModel = new ListAdminModel();
export default listAdminModel;