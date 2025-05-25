import instance from "../network/api"
import { UserRoutes } from "../network/api-routes"

export const logoutAdmin = () => {
    return instance.get(UserRoutes.Logout)
}