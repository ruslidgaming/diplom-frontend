import { makeAutoObservable } from "mobx";
import {
    metodistCatalog,
    metodistCreate,
    getMetodistEdit,
    metodistDelete,
    getMetodistCourseDelete,
    getMetodistCourseAdd
} from "../service/metodist-service";



class Modal {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    // Активные курсы
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

    // Каталог
    _catalogList = [];

    get catalogList() {
        return this._catalogList;
    }

    setCatalogList(data) {
        console.log(data);
        this._catalogList = data
    }

    // Удаление
    _deleteId = null;

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

    // Редактирование
    _editData = {};

    get editData() {
        return this._editData;
    }

    setEditData(data) {
        this._editData = data;
    }

    // Удаление курсов у методиста
    _metodistCourseList = [];
    get metodistCourseList() {
        return this._metodistCourseList;
    }

    setMetodistCourseList(data) {
        this._metodistCourseList = data;
    }

    // Удаление курса методиста
    deleteCourseMetodist(id, metodistId) {
        getMetodistCourseDelete({ idCourse: id, metodistId: metodistId })
            .then(res => {
                this.setMetodistCourseList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // Добавление курсов методисту
    addCoursesMetodist(courseId, metodistId) {
        getMetodistCourseAdd({ idCourse: courseId, metodistId: metodistId })
            .then(res => {
                this.setMetodistCourseList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const modal = new Modal();
export default modal;