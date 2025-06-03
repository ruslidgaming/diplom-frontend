import instance from "../../../../core/network/api";
import { MentorRoutes, UserRoutes } from "../../../../core/network/api-routes";


export const loginUser = (data) => {
    return instance.post(UserRoutes.AdminLogin, data)
}

export const loginMetodist = (data) => {
    return instance.post(MentorRoutes.MentorLogin, data)
}

