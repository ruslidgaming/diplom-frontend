import { makeAutoObservable } from "mobx";
import { StudentAll, StudentEnd, StudentMy } from "./service";

class StudModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _catalog = []

    get catalog() {
        return this._catalog
    }

    myCatalog(id, setLoadable) {
        StudentMy({ id: id })
            .then(x => {
                this._catalog = x.data.courses
            })
            .catch(err => {
                console.log(err)
            }
            )
            .finally(() => {
                setLoadable(false)
            })
    }
    allCatalog(id, setLoadable) {
        StudentAll({ id: id })
            .then(x => {
                this._catalog = x.data.course
            })
            .catch(err => {
                console.log(err)
            }
            )
            .finally(() => {
                setLoadable(false)
            })
    }
    endCatalog(id, setLoadable) {
        StudentEnd()
            .then(x => {
                this._catalog = x.data.courses
            })
            .catch(err => {
                console.log(err)
            }
            )
            .finally(() => {
                setLoadable(false)
            })
    }
}

export const studModel = new StudModel();
