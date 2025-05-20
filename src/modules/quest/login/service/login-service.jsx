import instance from "../../../../core/network/api";
import { UserRoutes } from "../../../../core/network/api-routes";


export const loginUser = (data) => {
    return instance.post(UserRoutes.Login, data)
}

