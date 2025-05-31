import instance from "../../../core/network/api";
import { Lessons } from "../../../core/network/api-routes";

export const apiLessonsCatalog = (id) => {
    return instance.get(Lessons.Catalog, { params: id })
}
export const apiLessonsShow = (id) => {
    return instance.get(Lessons.Show, { params: id })
}
export const apiLessonsCreate = (data) => {
    return instance.post(Lessons.Create, data)
}
export const apiLessonsUpdate = (id) => {
    return instance.get(Lessons.Update, { params: id })
}
export const apiLessonsEdit = (data) => {
    return instance.post(Lessons.Edit, data)
}
export const apiLessonsDelete = (id) => {
    return instance.get(Lessons.Delete, { params: id })
}
export const apiLessonsPassed = (data) => {
    return instance.post(Lessons.Passed, data)
}