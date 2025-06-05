import { makeAutoObservable } from "mobx";
import { CourseRoute, ListRoute, Student, Tariff } from "../../../core/network/api-routes";
import instance from "../../../core/network/api";
import { toast } from "react-toastify";
// import { FeedbackRoute, ListRoute } from "../../../../core/network/api-routes";
// import instance from "../../../../core/network/api";

class ListModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    // Список
    _list = [];

    get list() {
        return this._list;
    }

    apiData(idCourse, setLoadable) {
        instance.get(CourseRoute.Show, { params: { id: idCourse } })
            .then((res) => {
                console.log(res.data.course)
                this._list = res.data.course
            })
            .catch((err) => {
                console.log('err', err)
            })
            .finally(() => {
                setLoadable && setLoadable(false)
            })
    }


    apiDataTariff(id, userId, setLoadable) {
        instance.get(Tariff.Show, { params: { idTariff: id, idAdmin: userId } })
            .then((res) => {
                this._list = res.data.list
            })
            .catch((err) => {
                console.log('err', err)
            })
            .finally(() => {
                setLoadable && setLoadable(false)
            })
    }

    apiPayCourse(id, userId) {
        instance.post(Student.Pay, { idCourse: id, idUser: userId })
    }
    apiPayTariff(id, userId) {
        instance.post(Tariff.Pay, { idTariff: id, idUser: userId })
            .then((data) => {
                console.log(data)
                toast.success("Оплата прошла успешно!")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Ошибка при попытке оплаты")
            })
    }

    // Удаление
    _deleteCourseId = {};
    deleteCourseId(id) {
        this._deleteCourseId = id;
    }
    setDelete() {
        // instance.get(FeedbackRoute.Delete, { params: { id: this._deleteCourseId } })
        //     .then((data) => {
        //         console.log(data)
        //         this.apiListData(data);
        //     })
    }
}

const listModel = new ListModel();
export default listModel;