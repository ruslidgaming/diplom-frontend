import { makeAutoObservable } from "mobx";
import { courseCatalog, courseDelete, courseShow, teacherDelete } from "../service/course-service";



class CourseModal {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _courseCatalogList = [];

    _showCourseData = {};
    _showCourseTeacherData = {};

    _deleteCourseId = {};


    get showCourseData() {
        return this._showCourseData;
    }
    get showCourseTeacherData() {
        return this._showCourseTeacherData;
    }

    deleteCourseId(id) {
        this._deleteCourseId = id;
    }

    setShowCourseData(data) {
        this._showCourseTeacherData = data.data['teachers']
        this._showCourseData = data.data['course']

        this._showCourseData['course_info'] = JSON.parse(this._showCourseData.course_info)

    }

    get courseCatalogList() {
        return this._courseCatalogList;
    }
    setCourseCatalogList(data) {
        this._courseCatalogList = data
    }

    setCourseDelete() {
        courseDelete(this._deleteCourseId)
            .then((data) => {
                console.log(data)

                courseCatalog()
                    .then(res => {
                        this.setCourseCatalogList(res.data.courses);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    setTeacherDelete(idTeacher) {
        teacherDelete({ idTeacher: idTeacher, idCourse: this._showCourseData['id'] })
            .then((data) => {
                // this._showCourseTeacherData = data.data
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const courseModal = new CourseModal();
export default courseModal;