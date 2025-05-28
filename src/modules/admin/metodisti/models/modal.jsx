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
        let data = [];

        this._activeCourses.forEach((item, idx) => {
            if (idx !== index) {
                data.push(item);
            }
        })
        this._activeCourses = data;
    }

    setActiveCourses(data) {
        this._activeCourses = ([...this._activeCourses, data]);
    }

    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        this._catalogList = data
        console.log(data);
    }

    deleteId(id) {
        this._deleteId = id;
    }

    setDelete() {
        metodistDelete(this._deleteId)
            .then(() => {
                metodistCatalog()
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

    setAdd(){

    }


}

const modal = new Modal();
export default modal;