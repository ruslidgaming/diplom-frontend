import { makeAutoObservable } from "mobx";
import { courseCatalog, courseShow } from "../service/course-service";



class CourseModal {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _courseCatalogList = [];

    get courseCatalogList() {
        return this._courseCatalogList;
    }

    setCourseCatalogList(data) {
        this._courseCatalogList = data
    }

    getCourseData(id, idUser) {
        courseShow(id)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const courseModal = new CourseModal();
export default courseModal;