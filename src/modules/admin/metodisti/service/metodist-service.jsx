import instance from "../../../../core/network/api";
import { CourseRoute } from "../../../../core/network/api-routes";

export const metodistCatalog = () => {
    return instance.get(CourseRoute.Catalog)
}

export const metodistCreate = (data) => {
    return instance.post(CourseRoute.Create, data)
}
export const metodistUpdate = (data) => {
    return instance.post(CourseRoute.Update, data)
}

export const metodistDelete = (id) => {
    return instance.get(CourseRoute.Delete, { params: { id } })
}

