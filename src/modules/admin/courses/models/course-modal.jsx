import { makeAutoObservable } from "mobx";

class CourseModal {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setCourseData(formData) {
        
    }
}

const courseModal = new CourseModal();
export default courseModal;