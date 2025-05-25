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


    get showData() {
        // return this._showCourseData;
    }

    deleteId(id) {
        // this._deleteCourseId = id;
    }

    setShowData(data) {
        // this._showCourseTeacherData = data.data['teachers']
        // this._showCourseData = data.data['course']

        // this._showCourseData['course_info'] = JSON.parse(this._showCourseData.course_info)

    }

    // get courseCatalogList() {
    //     return this._courseCatalogList;
    // }
    // setCatalogList(data) {
    //     this._courseCatalogList = data
    // }


}

const modal = new Modal();
export default modal;