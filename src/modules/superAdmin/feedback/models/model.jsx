import { makeAutoObservable } from "mobx";
import { FeedbackRoute, ListRoute } from "../../../../core/network/api-routes";
import instance from "../../../../core/network/api";

class ListModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }


    //  Работа с поиском
    _searchedModel = [];
    _searchValue = "";
    _isSearch = false;

    get search() {

        return this._searchValue;
    }
    get isSearch() {
        return this._isSearch;
    }
    get searchedModel() {
        return this._searchedModel;
    }

    setSearch(value) {
        console.log(value)
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
        instance.get(ListRoute.Feedback)
            .then((res) => {
                this._list = res.data
            })
            .catch((err) => {
                console.log('err', err)
            })
            .finally(() => {
                setLoadable && setLoadable(false)
            })
    }


    // Удаление
    _deleteCourseId = {};
    deleteCourseId(id) {
        this._deleteCourseId = id;
    }
    setDelete() {
        instance.get(FeedbackRoute.Delete, { params: { id: this._deleteCourseId } })
            .then((data) => {
                console.log(data)
                this.apiListData(data);
            })
    }
}

const listModel = new ListModel();
export default listModel;