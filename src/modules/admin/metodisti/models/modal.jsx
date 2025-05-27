import { makeAutoObservable } from "mobx";
import {
    metodistCatalog,
    metodistCreate,
    metodistUpdate,
    metodistDelete
} from "../service/metodist-service";



class Modal {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _catalogList = [];
    _deleteId = null;

    _activeCourses = [];

    get activeCourses() {
        return this._activeCourses;
    }

    removeCourse(index) {
        this._activeCourses = this._activeCourses.filter((_, i) => i !== index);
    }

    setActiveCourses(data) {
        this._activeCourses = ([...this._activeCourses, data]);
    }




    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        this._catalogList = data
    }

    deleteId(id) {
        this._deleteId = id;
    }

    setDelete() {
        metodistDelete(this._deleteId)
            .then(() => {
                courseCatalog()
                    .then(res => {
                        this.setCatalogList(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }



}

const modal = new Modal();
export default modal;