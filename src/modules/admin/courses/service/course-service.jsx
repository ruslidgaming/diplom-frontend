import instance from "../../../../core/network/api";
import { CourseRoute } from "../../../../core/network/api-routes";


export const courseCreate = (data) => {
    return instance.post(CourseRoute.Create, data)
}
export const courseShow = (id) => {
    return instance.get(CourseRoute.Show, { params: { id } })
}

export const courseDelete = (id) => {
    return instance.get(CourseRoute.Delete, { params: { id } })
}

export const teacherDelete = (data) => {
    return instance.get(CourseRoute.TeacherDelete, { params: data })
}

export const courseCatalog = () => {
    return instance.get(CourseRoute.Catalog)
}