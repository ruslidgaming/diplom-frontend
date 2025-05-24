import instance from "../../../../core/network/api";
import { CourseRoute } from "../../../../core/network/api-routes";


export const courseCreate = (data) => {
    return instance.post(CourseRoute.Create, data)
}
export const courseShow = (id) => {
    return instance.get(CourseRoute.Show, id)
}

export const courseCatalog = () => {
    return instance.get(CourseRoute.Catalog)
}