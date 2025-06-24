import { makeAutoObservable } from "mobx";
import { apiLessonsCatalog, apiLessonsCatalogStudent, apiLessonsDelete, apiLessonsUpdate } from "../service/lessons-service";
import { StudentFinish } from "../../Student/service";



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
                window.location.href = '/lessons/' + data.idCourse + "/update/" + info.data.finish;
            })
            .catch(
                err => console.log(err)
            )
    }
}

const model = new Model();
export default model;