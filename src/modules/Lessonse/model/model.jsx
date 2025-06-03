import { makeAutoObservable } from "mobx";
import { apiLessonsCatalog, apiLessonsDelete, apiLessonsUpdate } from "../service/lessons-service";



class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    // Каталог
    _catalogList = [];
    _title = "";

    get title() {
        return this._title;
    }
    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        this._catalogList = data
        console.log(data);
    }

    apiCatalog(id, setLoadable = null) {
        apiLessonsCatalog({ id: id })
            .then(res => {
                console.log(res.data)
                this._title = res.data.title
                this.setCatalogList(res.data.lessons)
            })
            .catch(err => console.log(err))
            .finally(() => setLoadable && setLoadable(false));
    }

    // Удаление
    _deleteId = null;

    deleteId(id) {
        this._deleteId = id;
    }

    setDelete(idCourse) {
        apiLessonsDelete({ id: this._deleteId })
            .then(res => {
                this.apiCatalog(idCourse);
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

    apiEditData(id, setLoadable) {
        apiLessonsUpdate({ id: id })
            .then(res => {
                console.log(res.data)
                this.setEditData(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadable(false)
            });
    }
}

const model = new Model();
export default model;