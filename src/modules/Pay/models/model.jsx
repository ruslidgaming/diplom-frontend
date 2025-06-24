import { makeAutoObservable } from "mobx";
import { CourseRoute, ListRoute, Student, Tariff } from "../../../core/network/api-routes";
import instance from "../../../core/network/api";
import { toast } from "react-toastify";
import { useAuth } from "../../../core/hoc/AuthProvider";
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


    apiDataTariff(id) {

        switch (id) {
            case "1":
                this._list.name = "Курс"
                this._list.price = "15 000₽"

                break;
            case "2":
                this._list.name = "Школа"
                this._list.price = "40 000₽"

                break;
            case "3":
                this._list.name = "Академия"
                this._list.price = "120 000₽"
                break;

            default:
                break;
        }
    }

    apiPayCourse(id, userId, admin_id) {
        instance.post(Student.Pay, { idCourse: id, idUser: userId })
            .then((data) => {
                window.location.href = '/student/' + admin_id + '/courses/my';
            })
            .catch((err) => {
                toast.error("Ошибка при попытке оплаты")
            })
    }

    apiPayCourse(id, userId, admin_id) {
        instance.post(Student.Pay, { idCourse: id, idUser: userId })
            .then((data) => {
                window.location.href = '/student/ ' + admin_id + '/courses/my';
            })
            .catch((err) => {
                toast.error("Ошибка при попытке оплаты")
            })
    }

    apiPayTariff(id, userId) {
        instance.post(Tariff.Pay, { idTariff: id, idUser: userId })
            .then((data) => {
                toast.success("Оплата прошла успешно!")

                localStorage.setItem('user', JSON.stringify(data.data.user));

                setTimeout(() => {
                    window.location.href = '/admin/about';
                }, 2000)

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