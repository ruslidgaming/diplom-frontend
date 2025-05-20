import instance from "../../../../core/network/api";
import { UserRoutes } from "../../../../core/network/api-routes";


export const registerUser = (data) => {
    return instance.post(UserRoutes.Register, data)
}

