import instance from "../../../../core/network/api";
import { FeedbackRoute } from "../../../../core/network/api-routes";


export const SetFeedbak = (data) => {
    return instance.post(FeedbackRoute.SetFeedbak, data)
}
