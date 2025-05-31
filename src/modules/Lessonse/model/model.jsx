import { makeAutoObservable } from "mobx";
import { apiLessonsCatalog, apiLessonsDelete } from "../service/lessons-service";



class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    // Каталог
    _catalogList = [];

    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        this._catalogList = data
        console.log(data);
    }

    apiCatalog(id, setLoadable = null) {
        apiLessonsCatalog(id)
            .then(res => this.setCatalogList(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoadable && setLoadable(false));
    }

    // Удаление
    _deleteId = null;

    deleteId(id) {
        this._deleteId = id;
    }

    setDelete() {
        apiLessonsDelete(this._deleteId)
            .then(res => {
                this.apiCatalog(res.data.id);
            })
            .catch(err => console.log(err));
    }

    // Редактирование
    _editData = {};

    get editData() {
        return this._editData;
    }

    setEditData(data) {
        this._editData = data;
    }
}

const model = new Model();
export default model;