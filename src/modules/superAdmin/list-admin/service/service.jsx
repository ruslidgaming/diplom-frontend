import instance from "../../../../core/network/api";
import { ListRoute } from "../../../../core/network/api-routes";

export const listAdmin = () => {
    return instance.get(ListRoute.Admin)
}
