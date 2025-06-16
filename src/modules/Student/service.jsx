import instance from "../../core/network/api";
import { Student } from "../../core/network/api-routes";

export const StudentAll = (data) => {
    return instance.get(Student.All, { params: data })
}
export const StudentMy = (data) => {
    return instance.get(Student.My, { params: data })
}
export const StudentEnd = (data) => {
    return instance.get(Student.End, { params: data })
}

export const StudentFinish = (data) => {
    return instance.post(Student.Finish, data)
}
