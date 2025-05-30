import instance from "../../../../core/network/api";
import { CourseRoute, MentorRoutes } from "../../../../core/network/api-routes";

export const metodistCatalog = () => {
    return instance.get(MentorRoutes.MentorCatalog)
}

export const metodistCreate = (data) => {
    return instance.post(MentorRoutes.MentorCreate, data)
}

export const metodistDelete = (id) => {
    return instance.get(MentorRoutes.Delete, { params: { id } })
}

export const getMetodistEdit = (id) => {
    return instance.get(MentorRoutes.Edit, { params: { id } })
}

export const getMetodistCourseDelete = (data) => {
    return instance.post(MentorRoutes.CourseDelete, data)
}
export const getMetodistCourseAdd = (data) => {
    return instance.post(MentorRoutes.CourseAdd, data)
}

export const getAllCourseAdmin = () => {
    return instance.get(CourseRoute.Catalog)
}

