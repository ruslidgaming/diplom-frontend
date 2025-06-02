import { makeAutoObservable } from "mobx";
import { apiLessonsCatalog, apiLessonsDelete, apiLessonsUpdate } from "../service/lessons-service";



class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    
}
const model = new Model();
export default model;