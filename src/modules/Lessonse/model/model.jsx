import { makeAutoObservable } from "mobx";
import { apiLessonsCatalog, apiLessonsCatalogStudent, apiLessonsDelete, apiLessonsUpdate, apiSerteficate } from "../service/lessons-service";
import { StudentFinish } from "../../Student/service";
import { useAuth } from "../../../core/hoc/AuthProvider";



class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    // Каталог  
    _catalogList = [];
    _title = "";
    _serteficate = true;
    _serteficateImg = true;
    _endcourse = 0;

    get serteficate() {
        return this._serteficate;
    }

    get serteficateImg() {
        return this._serteficateImg;
    }

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
                this._title = res.data.title
                this.setCatalogList(res.data.lessons)
            })
            .catch(err => console.log(err))
            .finally(() => setLoadable && setLoadable(false));
    }

    apiLessons(id, setLoadable = null) {
        apiLessonsCatalogStudent(id)
            .then(res => {
                this._title = res.data.title

                let countCompl = 0

                for (let i = 0; i < res.data.lessonsList.length; i++) {
                    if (res.data.lessonsList[i].complete == 0) {
                        if (countCompl == 0) {
                            countCompl = 1
                        } else {
                            res.data.lessonsList[i].complete = 2
                            this._serteficate = false
                        }
                    }
                }


                this.setCatalogList(res.data.lessonsList)
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
                this.setEditData(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadable(false)
            });
    }

    setFinishLearn(data) {
        StudentFinish(data)
            .then(info => {

                if (info.data.finish == 'finish') {
                    window.location.href = '/lessons/' + data.idCourse;
                } else {
                    window.location.href = '/lessons/' + data.idCourse + "/update/" + info.data.finish;
                }
            })
            .catch(
                err => console.log(err)
            )
    }

    setSerteficate(id, setLoadable, user) {

        apiSerteficate({ id: id, user: user })
            .then((data) => {
                console.log(data)
            })
            .finally(() => {
                setLoadable(false)
            })
    }
}

const model = new Model();
export default model;