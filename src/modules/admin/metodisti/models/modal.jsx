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

    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        this._catalogList = data
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

    // setDelete() {
    //     courseDelete(this._deleteCourseId)
    //         .then((data) => {
    //             console.log(data)

    //             courseCatalog()
    //                 .then(res => {
    //                     this.setCourseCatalogList(res.data.courses);
    //                 })
    //                 .catch(err => {
    //                     console.log(err)
    //                 })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
}

const modal = new Modal();
export default modal;